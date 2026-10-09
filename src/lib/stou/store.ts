import { create } from "zustand";
import { downloadExcel } from "./excel";
import {
  applyExamDraft,
  applyRead,
  cloneSample,
  cycle,
  exportPayload,
  freshBook,
  mergeImport,
  normalizeData,
  sampleBook,
  setCourseStatus,
  subStatus,
  topicStatus,
  unitStatus,
  type ExamDraft,
} from "./logic";
import type { CourseStatus, DrawerState, ReadStatus, StouData, TabId, ThemeId, ToastNote, Unit } from "./types";

const KEY = "stou-ledger-v1";
const THEME_KEY = "stou-ledger-theme";
const LEGACY = ["stou_aero_glass_v6", "stou_liquid_glass_v5"];

function readSaved(): StouData | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY) || LEGACY.map((k) => localStorage.getItem(k)).find(Boolean) || null;
  if (!raw) return null;
  try {
    return normalizeData(JSON.parse(raw));
  } catch {
    return null;
  }
}

function persist(data: StouData) {
  localStorage.setItem(KEY, JSON.stringify(data));
  localStorage.setItem("stou_aero_glass_v6_custom", "1");
}

export interface StouStore {
  data: StouData;
  tab: TabId;
  theme: ThemeId;
  drawer: DrawerState;
  toast: ToastNote | null;
  booted: boolean;
  filter: string;
  query: string;
  openBooks: string[];
  collapsedUnits: string[];
  focusBook: string | null;
  boot: () => void;
  setTab: (tab: TabId) => void;
  setTheme: (theme: ThemeId) => void;
  setDrawer: (drawer: DrawerState) => void;
  notify: (msg: string, tone?: ToastNote["tone"]) => void;
  dismissToast: () => void;
  setFilter: (filter: string) => void;
  setQuery: (query: string) => void;
  patch: (fn: (data: StouData) => void, msg?: string, tone?: ToastNote["tone"]) => void;
  changeStatus: (code: string, status: CourseStatus) => void;
  saveExam: (code: string, draft: ExamDraft) => void;
  saveProfile: (student: StouData["student"], center: StouData["examCenter"]) => void;
  openReading: (code: string) => void;
  toggleBook: (code: string) => void;
  toggleUnitCollapse: (code: string, unit: number) => void;
  toggleAllCollapse: (code: string) => void;
  cycleUnit: (code: string, unit: number) => void;
  cycleSub: (code: string, unit: number, subId: string) => void;
  cycleTopic: (code: string, unit: number, subId: string, topicId: string) => void;
  markBook: (code: string, done: boolean) => void;
  deleteBook: (code: string) => void;
  addBook: (code: string, name: string, total: number) => boolean;
  addUnit: (code: string, title: string) => void;
  addSub: (code: string, unit: number, id: string, title: string) => boolean;
  deleteSub: (code: string, unit: number, subId: string) => void;
  addTopic: (code: string, unit: number, subId: string, id: string, title: string) => boolean;
  deleteTopic: (code: string, unit: number, subId: string, topicId: string) => void;
  toggleSample: () => void;
  resetReading: () => void;
  resetCurriculum: () => void;
  loadSample: () => void;
  exportJson: () => void;
  exportXls: () => void;
  importJson: (file: File, replace: boolean) => void;
}

let toastSeq = 1;

function paintReadTree(unit: Unit, status: ReadStatus) {
  applyRead(unit, status);
  for (const s of unit.subUnits || []) {
    applyRead(s, status);
    for (const t of s.topics || []) applyRead(t, status);
  }
}

export const useStou = create<StouStore>((set, get) => ({
  data: cloneSample(),
  tab: "exams",
  theme: "day",
  drawer: null,
  toast: null,
  booted: false,
  filter: "all",
  query: "",
  openBooks: ["10151"],
  collapsedUnits: [],
  focusBook: null,

  boot: () => {
    const saved = readSaved();
    let theme: ThemeId = "day";
    try {
      const t = localStorage.getItem(THEME_KEY);
      if (t === "night" || t === "day") theme = t;
    } catch {
      /* ignore */
    }
    if (saved) set({ data: saved, theme, booted: true });
    else set({ theme, booted: true });
  },

  setTab: (tab) => set({ tab }),
  setTheme: (theme) => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "night" ? "#12100e" : "#f3ecdf");
    set({ theme });
  },
  setDrawer: (drawer) => set({ drawer }),
  notify: (msg, tone = "ok") => set({ toast: { id: ++toastSeq, msg, tone } }),
  dismissToast: () => set({ toast: null }),
  setFilter: (filter) => set({ filter }),
  setQuery: (query) => set({ query }),

  patch: (fn, msg, tone = "ok") => {
    const next = structuredClone(get().data);
    fn(next);
    persist(next);
    set({ data: next, toast: msg ? { id: ++toastSeq, msg, tone } : get().toast });
  },

  changeStatus: (code, status) => {
    let openExam = false;
    get().patch((d) => {
      openExam = setCourseStatus(d, code, status);
    });
    const name = EXAM_TOAST[status](code);
    get().notify(name.msg, name.tone);
    if (openExam) set({ drawer: { kind: "exam", code } });
    else set({ drawer: null });
  },

  saveExam: (code, draft) => {
    get().patch((d) => applyExamDraft(d, code, draft), `บันทึกตารางสอบ ${code} แล้ว`);
    set({ drawer: null });
  },

  saveProfile: (student, center) => {
    get().patch((d) => {
      d.student = { ...d.student, ...student };
      d.examCenter = { ...d.examCenter, ...center };
    }, "บันทึกข้อมูลนักศึกษาและสนามสอบแล้ว");
  },

  openReading: (code) => {
    get().patch((d) => {
      if (!d.studyPlan.some((b) => b.courseCode === code)) {
        const cur = d.curriculum.find((c) => c.courseCode === code) || d.courses.find((c) => c.courseCode === code);
        d.studyPlan.push(freshBook(code, cur?.courseNameTh || `ชุดวิชา ${code}`, 15));
      }
    });
    set((s) => ({
      tab: "reading",
      focusBook: code,
      openBooks: s.openBooks.includes(code) ? s.openBooks : [...s.openBooks, code],
    }));
  },

  toggleBook: (code) =>
    set((s) => ({
      openBooks: s.openBooks.includes(code) ? s.openBooks.filter((c) => c !== code) : [...s.openBooks, code],
    })),

  toggleUnitCollapse: (code, unit) => {
    const key = `${code}:${unit}`;
    set((s) => ({
      collapsedUnits: s.collapsedUnits.includes(key) ? s.collapsedUnits.filter((k) => k !== key) : [...s.collapsedUnits, key],
    }));
  },

  toggleAllCollapse: (code) => {
    const book = get().data.studyPlan.find((b) => b.courseCode === code);
    if (!book) return;
    const keys = (book.units || []).map((u) => `${code}:${u.unit}`);
    const allIn = keys.every((k) => get().collapsedUnits.includes(k));
    set((s) => ({
      collapsedUnits: allIn ? s.collapsedUnits.filter((k) => !k.startsWith(`${code}:`)) : [...new Set([...s.collapsedUnits, ...keys])],
    }));
  },

  cycleUnit: (code, unitNo) => {
    const current = get().data.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
    if (!current) return;
    const next = cycle(unitStatus(current));
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      if (unit) paintReadTree(unit, next);
    }, next === "completed" ? `อ่านจบหน่วยที่ ${unitNo}` : next === "reading" ? `กำลังอ่านหน่วยที่ ${unitNo}` : `หน่วยที่ ${unitNo} กลับเป็นยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
  },

  cycleSub: (code, unitNo, subId) => {
    const current = get().data.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo)?.subUnits?.find((s) => String(s.id) === String(subId));
    if (!current) return;
    const next = cycle(subStatus(current));
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
      if (!unit || !sub) return;
      applyRead(sub, next);
      for (const t of sub.topics || []) applyRead(t, next);
      applyRead(unit, unitStatus(unit));
    }, next === "completed" ? `อ่านจบตอน ${subId}` : next === "reading" ? `กำลังอ่านตอน ${subId}` : `ตอน ${subId} ยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
  },

  cycleTopic: (code, unitNo, subId, topicId) => {
    const current = get()
      .data.studyPlan.find((b) => b.courseCode === code)
      ?.units.find((u) => u.unit === unitNo)
      ?.subUnits?.find((s) => String(s.id) === String(subId))
      ?.topics?.find((t) => String(t.id) === String(topicId));
    if (!current) return;
    const next = cycle(topicStatus(current));
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
      const topic = sub?.topics?.find((t) => String(t.id) === String(topicId));
      if (!unit || !sub || !topic) return;
      applyRead(topic, next);
      applyRead(sub, subStatus(sub));
      applyRead(unit, unitStatus(unit));
    }, next === "completed" ? `อ่านจบเรื่อง ${topicId}` : next === "reading" ? `กำลังอ่านเรื่อง ${topicId}` : `เรื่อง ${topicId} ยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
  },

  markBook: (code, done) => {
    get().patch((d) => {
      const book = d.studyPlan.find((b) => b.courseCode === code);
      if (!book) return;
      for (const u of book.units || []) paintReadTree(u, done ? "completed" : "unread");
    }, done ? `ติ๊กอ่านครบวิชา ${code}` : `รีเซ็ตการอ่านวิชา ${code}`);
  },

  deleteBook: (code) => {
    get().patch(
      (d) => {
        d.studyPlan = d.studyPlan.filter((b) => b.courseCode !== code);
      },
      `ลบแผนอ่าน ${code} แล้ว`,
      "warn",
    );
    set((s) => ({ openBooks: s.openBooks.filter((c) => c !== code) }));
  },

  addBook: (code, name, total) => {
    if (get().data.studyPlan.some((b) => b.courseCode === code)) {
      get().notify(`วิชา ${code} มีในรายการอ่านแล้ว`, "warn");
      return false;
    }
    get().patch((d) => {
      d.studyPlan.push(freshBook(code, name, total));
    }, `เพิ่มหนังสือ ${code} แล้ว`);
    set((s) => ({ openBooks: [...s.openBooks, code], drawer: null, tab: "reading", focusBook: code }));
    return true;
  },

  addUnit: (code, title) => {
    get().patch((d) => {
      const book = d.studyPlan.find((b) => b.courseCode === code);
      if (!book) return;
      const n = (book.units?.length || 0) + 1;
      book.units = book.units || [];
      book.units.push({
        unit: n,
        title: title.trim() || `หน่วยที่ ${n}`,
        completed: false,
        status: "unread",
        subUnits: [
          { id: `${n}.1`, title: `ตอนที่ ${n}.1`, completed: false, status: "unread" },
          { id: `${n}.2`, title: `ตอนที่ ${n}.2`, completed: false, status: "unread" },
        ],
      });
      book.totalUnits = book.units.length;
    }, "เพิ่มหน่วยใหม่แล้ว");
    set({ drawer: null });
  },

  addSub: (code, unitNo, id, title) => {
    let ok = true;
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      if (!unit) return;
      unit.subUnits = unit.subUnits || [];
      if (unit.subUnits.some((s) => String(s.id) === id)) {
        ok = false;
        return;
      }
      unit.subUnits.push({ id, title, completed: false, status: "unread" });
      applyRead(unit, unitStatus(unit));
    });
    if (!ok) {
      get().notify(`ตอน ${id} มีอยู่แล้ว`, "bad");
      return false;
    }
    get().notify(`เพิ่มตอน ${id} แล้ว`);
    set({ drawer: null });
    return true;
  },

  deleteSub: (code, unitNo, subId) => {
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      if (!unit?.subUnits) return;
      unit.subUnits = unit.subUnits.filter((s) => String(s.id) !== String(subId));
      applyRead(unit, unitStatus(unit));
    }, `ลบตอน ${subId} แล้ว`, "warn");
  },

  addTopic: (code, unitNo, subId, id, title) => {
    let ok = true;
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
      if (!unit || !sub) return;
      sub.topics = sub.topics || [];
      if (sub.topics.some((t) => String(t.id) === id)) {
        ok = false;
        return;
      }
      sub.topics.push({ id, title, completed: false, status: "unread" });
      applyRead(sub, subStatus(sub));
      applyRead(unit, unitStatus(unit));
    });
    if (!ok) {
      get().notify(`เรื่อง ${id} มีอยู่แล้ว`, "bad");
      return false;
    }
    get().notify(`เพิ่มเรื่อง ${id} แล้ว`);
    set({ drawer: null });
    return true;
  },

  deleteTopic: (code, unitNo, subId, topicId) => {
    get().patch((d) => {
      const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
      const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
      if (!unit || !sub?.topics) return;
      sub.topics = sub.topics.filter((t) => String(t.id) !== String(topicId));
      applyRead(sub, subStatus(sub));
      applyRead(unit, unitStatus(unit));
    }, `ลบเรื่อง ${topicId} แล้ว`, "warn");
  },

  toggleSample: () => {
    const has = get().data.studyPlan.some((b) => b.courseCode === "10151");
    if (has) {
      get().patch(
        (d) => {
          d.studyPlan = d.studyPlan.filter((b) => b.courseCode !== "10151");
        },
        "ปิดตัวอย่างหนังสือ 10151 แล้ว",
        "warn",
      );
      return;
    }
    get().patch((d) => {
      d.studyPlan.unshift(sampleBook());
    }, "เปิดตัวอย่าง ไทยศึกษา 15 หน่วยแล้ว");
    set((s) => ({ openBooks: [...s.openBooks, "10151"], tab: "reading" }));
  },

  resetReading: () => {
    if (!get().data.studyPlan.length) {
      get().notify("ไม่มีรายการหนังสือ", "warn");
      return;
    }
    if (!confirm("รีเซ็ตสถานะการอ่านทุกวิชาให้เป็นยังไม่อ่าน?")) return;
    get().patch((d) => {
      for (const b of d.studyPlan) for (const u of b.units || []) paintReadTree(u, "unread");
    }, "รีเซ็ตความคืบหน้าการอ่านแล้ว", "warn");
    set({ drawer: null });
  },

  resetCurriculum: () => {
    const n = get().data.curriculum.length;
    if (!n) {
      get().notify("ไม่มีรายวิชาให้ล้าง", "warn");
      return;
    }
    if (!confirm(`ล้างรายวิชาในหลักสูตรทั้งหมด ${n} วิชา?\nตารางสอบจะถูกล้างตามไปด้วย เพื่อเตรียมนำเข้าสาขาใหม่`)) return;
    get().patch((d) => {
      d.curriculum = [];
      d.courses = [];
    }, "ล้างหลักสูตรแล้ว พร้อมนำเข้าสาขาใหม่", "warn");
    set({ drawer: null });
  },

  loadSample: () => {
    if (!confirm("โหลดข้อมูลตัวอย่าง มสธ. ทับข้อมูลปัจจุบัน?")) return;
    const next = cloneSample();
    persist(next);
    set({ data: next, drawer: null, tab: "exams", openBooks: ["10151"], toast: { id: ++toastSeq, msg: "โหลดข้อมูลตัวอย่างแล้ว", tone: "ok" } });
  },

  exportJson: () => {
    const data = get().data;
    const blob = new Blob([JSON.stringify(exportPayload(data), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `STOU_Ledger_${data.student.studentId || "backup"}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    get().notify("ดาวน์โหลดไฟล์สำรอง JSON แล้ว");
  },

  exportXls: () => {
    downloadExcel(get().data);
    get().notify("ส่งออก Excel 5 แผ่นงานแล้ว");
  },

  importJson: (file, replace) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(String(reader.result));
        const result = mergeImport(get().data, json, replace);
        persist(result.data);
        set({
          data: result.data,
          drawer: null,
          toast: {
            id: ++toastSeq,
            msg: result.replaced
              ? `แทนที่หลักสูตรแล้ว (${result.data.curriculum.length} วิชา)`
              : `นำเข้าแล้ว เพิ่ม ${result.added} แก้ไข ${result.updated}`,
            tone: "ok",
          },
        });
      } catch (err) {
        get().notify(err instanceof Error ? err.message : "ไฟล์ JSON ไม่ถูกต้อง", "bad");
      }
    };
    reader.onerror = () => get().notify("อ่านไฟล์ไม่สำเร็จ", "bad");
    reader.readAsText(file);
  },
}));

const EXAM_TOAST: Record<CourseStatus, (code: string) => { msg: string; tone: ToastNote["tone"] }> = {
  will_take: (code) => ({ msg: `เพิ่ม ${code} ในตารางสอบไล่`, tone: "ok" }),
  will_take_samrit: (code) => ({ msg: `เพิ่ม ${code} โครงการสัมฤทธิบัตร`, tone: "ok" }),
  will_take_summer: (code) => ({ msg: `เพิ่ม ${code} ภาคฤดูร้อน`, tone: "ok" }),
  will_take_retake: (code) => ({ msg: `เพิ่ม ${code} สอบซ่อม`, tone: "ok" }),
  passed: (code) => ({ msg: `วิชา ${code} ผ่านแล้ว สะสม 6 หน่วยกิต`, tone: "ok" }),
  transferred: (code) => ({ msg: `เทียบโอน ${code} สำเร็จ`, tone: "ok" }),
  failed: (code) => ({ msg: `${code} ไม่ผ่าน — เลือกสอบซ่อมได้`, tone: "bad" }),
  not_taken: (code) => ({ msg: `${code} ตั้งเป็นยังไม่ลงทะเบียน`, tone: "warn" }),
};

