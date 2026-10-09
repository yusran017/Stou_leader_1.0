import { sampleData } from "./sample";
import type {
  Book,
  CourseStatus,
  CurriculumCourse,
  ExamCourse,
  ExamFormat,
  ExamType,
  ReadStatus,
  StouData,
  SubUnit,
  Topic,
  Unit,
} from "./types";

export const SCHEDULED: CourseStatus[] = [
  "will_take",
  "will_take_samrit",
  "will_take_summer",
  "will_take_retake",
];

export const STATUS_OPTIONS: { key: CourseStatus; label: string; short: string }[] = [
  { key: "will_take", label: "ลงทะเบียนสอบไล่ (ภาคปกติ)", short: "ภาคปกติ" },
  { key: "will_take_samrit", label: "ลงทะเบียนโครงการสัมฤทธิบัตร", short: "สัมฤทธิบัตร" },
  { key: "will_take_summer", label: "ลงทะเบียนภาคพิเศษ / ฤดูร้อน", short: "ฤดูร้อน" },
  { key: "will_take_retake", label: "ลงทะเบียนสอบซ่อม (Make-up)", short: "สอบซ่อม" },
  { key: "failed", label: "สอบไม่ผ่าน (รอซ่อม / ลงใหม่)", short: "ไม่ผ่าน" },
  { key: "passed", label: "สอบผ่านแล้ว (ได้ S / H)", short: "ผ่านแล้ว" },
  { key: "transferred", label: "เทียบโอนชุดวิชา", short: "เทียบโอน" },
  { key: "not_taken", label: "ยังไม่ลงทะเบียน", short: "ยังไม่ลง" },
];

export const EXAM_TYPES: { key: ExamType; label: string }[] = [
  { key: "regular", label: "สอบไล่ประจำภาคปกติ" },
  { key: "samrit", label: "โครงการสัมฤทธิบัตร" },
  { key: "summer", label: "ภาคพิเศษ / ภาคฤดูร้อน" },
  { key: "retake", label: "การสอบซ่อม (Make-up)" },
];

const TYPE_NAME: Record<ExamType, string> = {
  regular: "สอบไล่ประจำภาคปกติ",
  samrit: "โครงการสัมฤทธิบัตร",
  summer: "ภาคพิเศษ / ภาคฤดูร้อน",
  retake: "การสอบซ่อม (Make-up)",
};

const STATUS_TO_TYPE: Record<string, ExamType> = {
  will_take: "regular",
  will_take_samrit: "samrit",
  will_take_summer: "summer",
  will_take_retake: "retake",
};

const TYPE_TO_STATUS: Record<ExamType, CourseStatus> = {
  regular: "will_take",
  samrit: "will_take_samrit",
  summer: "will_take_summer",
  retake: "will_take_retake",
};

const DAY = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
const MONTH = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];
const MONTH_SHORT = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

export function statusLabel(status?: string) {
  return STATUS_OPTIONS.find((s) => s.key === status)?.label ?? "ยังไม่ลงทะเบียน";
}

export function statusShort(status?: string) {
  return STATUS_OPTIONS.find((s) => s.key === status)?.short ?? "ยังไม่ลง";
}

export function isScheduled(status?: string) {
  return SCHEDULED.includes((status || "not_taken") as CourseStatus);
}

export function examTypeOf(course: ExamCourse, curriculum?: CurriculumCourse[]): ExamType {
  if (course.examType && course.examType in TYPE_NAME) return course.examType as ExamType;
  const cur = curriculum?.find((c) => c.courseCode === course.courseCode);
  return STATUS_TO_TYPE[cur?.status || ""] || "regular";
}

export function examTypeLabel(type: ExamType) {
  return TYPE_NAME[type];
}

export function cloneSample(): StouData {
  return structuredClone(sampleData);
}

export function freshBook(code: string, name: string, total = 15): Book {
  const units: Unit[] = [];
  for (let i = 1; i <= total; i++) {
    units.push({
      unit: i,
      title: `หน่วยที่ ${i}: สาระการเรียนรู้ที่ ${i}`,
      completed: false,
      status: "unread",
      subUnits: [1, 2, 3].map((n) => ({
        id: `${i}.${n}`,
        title: `ตอนที่ ${i}.${n} สาระสำคัญที่ ${n}`,
        completed: false,
        status: "unread" as const,
      })),
    });
  }
  return {
    courseCode: code,
    courseNameTh: name,
    bookTitle: `เอกสารการสอนชุดวิชา${name} (${total} หน่วย)`,
    totalUnits: total,
    units,
  };
}

export function normalizeExam(c: ExamCourse, centerName?: string, curName?: string): ExamCourse {
  const m: ExamCourse = { ...c };
  const type = (m.examType && m.examType in TYPE_NAME ? m.examType : "regular") as ExamType;
  m.courseNameTh = m.courseNameTh || curName || `ชุดวิชา ${m.courseCode}`;
  m.credits = m.credits || 6;
  m.examType = type;
  m.examTypeName = TYPE_NAME[type];
  m.examFormat = m.examFormat === "online" ? "online" : "onsite";
  m.examFormatName = m.examFormat === "online" ? "สอบออนไลน์" : "สนามสอบ";
  m.startTime = m.startTime || (m.examSession === "afternoon" ? "13:30" : "09:00");
  m.endTime = m.endTime || (m.examSession === "afternoon" ? "16:30" : "12:00");
  const morning = Number(String(m.startTime).split(":")[0]) < 13;
  m.examSession = morning ? "morning" : "afternoon";
  m.examTimeTh = `${morning ? "สอบช่วงเช้า" : "สอบช่วงบ่าย"} ${m.startTime} - ${m.endTime} น.`;
  if (m.examDate) m.examDateTh = thaiDate(m.examDate);
  else {
    m.examDate = "";
    m.examDateTh = "";
  }
  if (m.examFormat === "online") {
    m.examVenue = "สอบออนไลน์ มสธ.";
    m.examRoom = "";
    m.seatNumber = "";
    m.examRow = "";
  } else {
    m.examVenue = m.examVenue || centerName || "";
    m.examRoom = m.examRoom || "";
    m.seatNumber = m.seatNumber || "";
    m.examRow = m.examRow || "";
  }
  return m;
}

export function normalizeData(raw: unknown): StouData {
  const src = raw && typeof raw === "object" ? (raw as Partial<StouData>) : {};
  const student = { ...cloneSample().student, ...(src.student || {}) };
  const examCenter = { ...(src.examCenter || {}) };
  const curriculum = Array.isArray(src.curriculum) ? src.curriculum.map((c) => ({ ...c, courseCode: String(c.courseCode) })) : [];
  const courses = Array.isArray(src.courses)
    ? src.courses
        .filter((c) => c && c.courseCode)
        .map((c) =>
          normalizeExam(
            { ...c, courseCode: String(c.courseCode) },
            examCenter.centerName,
            curriculum.find((x) => x.courseCode === String(c.courseCode))?.courseNameTh,
          ),
        )
    : [];
  const studyPlan = Array.isArray(src.studyPlan)
    ? src.studyPlan.filter((b) => b && b.courseCode).map((b) => ({ ...b, courseCode: String(b.courseCode), units: b.units || [] }))
    : [];
  return { student, examCenter, courses, curriculum, studyPlan };
}

export function thaiDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return `${DAY[d.getDay()]}ที่ ${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear() + 543}`;
}

export function dateParts(iso?: string) {
  if (!iso) return { day: "–", month: "รอวัน", year: "", weekday: "" };
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return { day: "–", month: iso, year: "", weekday: "" };
  return {
    day: String(d.getDate()),
    month: MONTH_SHORT[d.getMonth()],
    year: String(d.getFullYear() + 543),
    weekday: DAY[d.getDay()].replace("วัน", ""),
  };
}

export function timesOf(c: ExamCourse) {
  const start = c.startTime || (c.examSession === "afternoon" ? "13:30" : "09:00");
  const end = c.endTime || (c.examSession === "afternoon" ? "16:30" : "12:00");
  const morning = Number(start.split(":")[0]) < 13;
  return { start, end, morning, label: morning ? "ช่วงเช้า" : "ช่วงบ่าย" };
}

export function shiftTime(hhmm: string, delta: number) {
  const [h, m] = hhmm.split(":").map(Number);
  let total = (Number.isFinite(h) ? h : 9) * 60 + (Number.isFinite(m) ? m : 0) + delta;
  total = ((total % 1440) + 1440) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

export function durationLabel(start: string, end: string) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  let mins = eh * 60 + em - (sh * 60 + sm);
  if (mins < 0) mins += 1440;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h && m) return `${h} ชม. ${m} นาที`;
  if (h) return `${h} ชั่วโมง`;
  return `${m} นาที`;
}

export function presetOf(start: string, end: string) {
  if (start === "09:00" && end === "12:00") return "morning";
  if (start === "13:30" && end === "16:30") return "afternoon";
  return "custom";
}

export function dayOffset(iso?: string) {
  if (!iso) return null;
  const exam = new Date(`${iso}T00:00:00`);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((exam.getTime() - today.getTime()) / 86400000);
}

export function dayChip(iso?: string) {
  const d = dayOffset(iso);
  if (d === null) return { text: "รอประกาศวัน", tone: "wait" as const };
  if (d > 1) return { text: `อีก ${d} วัน`, tone: "future" as const };
  if (d === 1) return { text: "พรุ่งนี้", tone: "soon" as const };
  if (d === 0) return { text: "วันนี้", tone: "today" as const };
  return { text: "ผ่านไปแล้ว", tone: "past" as const };
}

export function sortedExams(courses: ExamCourse[]) {
  return [...courses].sort((a, b) => {
    const ka = `${a.examDate || "9999-99-99"}${a.startTime || "09:00"}`;
    const kb = `${b.examDate || "9999-99-99"}${b.startTime || "09:00"}`;
    return ka.localeCompare(kb);
  });
}

export function findNextExam(courses: ExamCourse[]) {
  const dated = sortedExams(courses.filter((c) => c.examDate));
  if (!dated.length) return courses[0] ?? null;
  const now = Date.now();
  for (const c of dated) {
    const { start } = timesOf(c);
    const dt = new Date(`${c.examDate}T${start}:00`).getTime();
    if (dt - now > -4 * 3600 * 1000) return c;
  }
  return dated[0];
}

export function countdownOf(course: ExamCourse | null, now = Date.now()) {
  if (!course?.examDate) return null;
  const { start } = timesOf(course);
  const target = new Date(`${course.examDate}T${start}:00`).getTime();
  const diff = target - now;
  if (diff <= 0 && diff > -4 * 3600 * 1000) {
    return { days: 0, hours: 0, mins: 0, secs: 0, phase: "live" as const };
  }
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, phase: "past" as const };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
    phase: "wait" as const,
  };
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export interface CreditBuckets {
  earned: number;
  percent: number;
  gen: number;
  core: number;
  elec: number;
  free: number;
  passed: number;
  transferred: number;
  scheduled: number;
  failed: number;
  notTaken: number;
  samrit: number;
  summer: number;
  retake: number;
  regular: number;
}

export function creditBuckets(curriculum: CurriculumCourse[]): CreditBuckets {
  const count = (pred: (c: CurriculumCourse) => boolean) => curriculum.filter(pred).length;
  const earnedCourses = curriculum.filter((c) => c.status === "passed" || c.status === "transferred");
  const sum = (pred: (c: CurriculumCourse) => boolean) => earnedCourses.filter(pred).length * 6;
  const earned = earnedCourses.reduce((s, c) => s + (c.credits || 6), 0);
  return {
    earned,
    percent: Math.min(100, Math.round((earned / 126) * 100)),
    gen: sum((c) => !!c.category?.includes("หมวดวิชาศึกษาทั่วไป")),
    core: sum((c) => !!c.category?.includes("กลุ่มวิชาบังคับ") && !!c.category?.includes("หมวดวิชาเฉพาะ")),
    elec: sum((c) => !!c.category?.includes("กลุ่มวิชาเลือก")),
    free: sum((c) => !!c.category?.includes("หมวดวิชาเลือกเสรี")),
    passed: count((c) => c.status === "passed"),
    transferred: count((c) => c.status === "transferred"),
    scheduled: count((c) => isScheduled(c.status)),
    failed: count((c) => c.status === "failed"),
    notTaken: count((c) => !c.status || c.status === "not_taken"),
    regular: count((c) => c.status === "will_take"),
    samrit: count((c) => c.status === "will_take_samrit"),
    summer: count((c) => c.status === "will_take_summer"),
    retake: count((c) => c.status === "will_take_retake"),
  };
}

const CATEGORY_ORDER = [
  "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
  "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
  "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (2 ชุดวิชา)",
  "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
  "หมวดวิชาเลือกเสรี (1 ชุดวิชา)",
];

export function categoryTitle(category: string) {
  if (category.includes("หมวดวิชาศึกษาทั่วไป")) return { title: "หมวดศึกษาทั่วไป", sub: "บังคับ 5 ชุดวิชา · 30 หน่วยกิต", tone: "gen" as const };
  if (category.includes("หมวดวิชาเฉพาะ") && category.includes("กลุ่มวิชาบังคับ")) {
    const sub = category.includes("11") ? "บังคับ 11 ชุดวิชา" : category.includes("2 ชุด") ? "บังคับ 2 ชุดวิชา" : "วิชาบังคับ";
    return { title: "วิชาเฉพาะ บังคับ", sub, tone: "core" as const };
  }
  if (category.includes("กลุ่มวิชาเลือก")) return { title: "วิชาเฉพาะ เลือก", sub: "เลือก 2 ชุดวิชา · 12 หน่วยกิต", tone: "elec" as const };
  if (category.includes("เลือกเสรี")) return { title: "วิชาเลือกเสรี", sub: "1 ชุดวิชา · 6 หน่วยกิต", tone: "free" as const };
  return { title: category, sub: "", tone: "gen" as const };
}

export function groupCurriculum(list: CurriculumCourse[]) {
  const groups = new Map<string, CurriculumCourse[]>();
  for (const c of list) {
    const cat = c.category || "หมวดวิชาทั่วไป";
    const arr = groups.get(cat) || [];
    arr.push(c);
    groups.set(cat, arr);
  }
  return [...groups.entries()].sort((a, b) => {
    const ia = CATEGORY_ORDER.findIndex((x) => a[0].includes(x) || x.includes(a[0]));
    const ib = CATEGORY_ORDER.findIndex((x) => b[0].includes(x) || x.includes(b[0]));
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}

export function filterCurriculum(list: CurriculumCourse[], filter: string, query: string) {
  let out = list;
  if (filter && filter !== "all") {
    out =
      filter === "scheduled"
        ? out.filter((c) => isScheduled(c.status))
        : out.filter((c) => (c.status || "not_taken") === filter);
  }
  const q = query.trim().toLowerCase();
  if (q) {
    out = out.filter(
      (c) =>
        String(c.courseCode).toLowerCase().includes(q) ||
        (c.courseNameTh || "").toLowerCase().includes(q) ||
        (c.category || "").toLowerCase().includes(q),
    );
  }
  return out;
}

export function topicStatus(t?: Topic | null): ReadStatus {
  if (!t) return "unread";
  if (t.status === "completed" || (!t.status && t.completed)) return "completed";
  if (t.status === "reading") return "reading";
  return "unread";
}

export function subStatus(s?: SubUnit | null): ReadStatus {
  if (!s) return "unread";
  const topics = s.topics || [];
  if (topics.length) {
    const done = topics.filter((t) => topicStatus(t) === "completed").length;
    if (done === topics.length) return "completed";
    const reading = topics.filter((t) => topicStatus(t) === "reading").length;
    if (done > 0 || reading > 0) return "reading";
    return "unread";
  }
  if (s.status === "completed" || (!s.status && s.completed)) return "completed";
  if (s.status === "reading") return "reading";
  return "unread";
}

export function unitStatus(u?: Unit | null): ReadStatus {
  if (!u) return "unread";
  const subs = u.subUnits || [];
  if (subs.length) {
    const done = subs.filter((s) => subStatus(s) === "completed").length;
    if (done === subs.length) return "completed";
    const reading = subs.filter((s) => subStatus(s) === "reading").length;
    if (done > 0 || reading > 0) return "reading";
    return "unread";
  }
  if (u.status === "completed" || (!u.status && u.completed)) return "completed";
  if (u.status === "reading") return "reading";
  return "unread";
}

export function cycle(status: ReadStatus): ReadStatus {
  if (status === "unread") return "reading";
  if (status === "reading") return "completed";
  return "unread";
}

export function applyRead(node: { status?: string; completed?: boolean }, status: ReadStatus) {
  node.status = status;
  node.completed = status === "completed";
}

export function bookProgress(book: Book) {
  const units = book.units || [];
  const total = units.length || book.totalUnits || 0;
  const done = units.filter((u) => unitStatus(u) === "completed").length;
  const reading = units.filter((u) => unitStatus(u) === "reading").length;
  let leaves = 0;
  let leavesDone = 0;
  for (const u of units) {
    const subs = u.subUnits || [];
    if (!subs.length) {
      leaves += 1;
      if (unitStatus(u) === "completed") leavesDone += 1;
      continue;
    }
    for (const s of subs) {
      const topics = s.topics || [];
      if (!topics.length) {
        leaves += 1;
        if (subStatus(s) === "completed") leavesDone += 1;
      } else {
        leaves += topics.length;
        leavesDone += topics.filter((t) => topicStatus(t) === "completed").length;
      }
    }
  }
  return {
    total,
    done,
    reading,
    percent: total ? Math.round((done / total) * 100) : 0,
    leaves,
    leavesDone,
    leafPercent: leaves ? Math.round((leavesDone / leaves) * 100) : 0,
  };
}

export function readingOverview(books: Book[]) {
  let units = 0;
  let done = 0;
  let reading = 0;
  let leaves = 0;
  let leavesDone = 0;
  let leavesReading = 0;
  for (const b of books) {
    const p = bookProgress(b);
    units += p.total;
    done += p.done;
    reading += p.reading;
    leaves += p.leaves;
    leavesDone += p.leavesDone;
    for (const u of b.units || []) {
      for (const s of u.subUnits || []) {
        const topics = s.topics || [];
        if (topics.length) {
          leavesReading += topics.filter((t) => topicStatus(t) === "reading").length;
        } else if (subStatus(s) === "reading") leavesReading += 1;
      }
      if (!(u.subUnits || []).length && unitStatus(u) === "reading") leavesReading += 1;
    }
  }
  return {
    books: books.length,
    units,
    done,
    reading,
    remain: Math.max(0, units - done),
    leaves,
    leavesDone,
    leavesReading,
    percent: leaves ? Math.round((leavesDone / leaves) * 100) : 0,
  };
}

export function readinessCopy(done: number, total: number, percent: number) {
  if (!total) return "ยังไม่มีแผนอ่านของวิชานี้";
  if (percent >= 100) return "อ่านครบทุกหน่วย พร้อมเข้าสอบ";
  if (percent >= 50) return `ผ่านครึ่งทางแล้ว เหลืออีก ${total - done} หน่วย`;
  if (percent > 0) return `อ่านแล้ว ${done} หน่วย เดินหน้าต่อได้`;
  return "ยังไม่เริ่ม เปิดหน่วยที่ 1 ได้เลย";
}

export interface ExamDraft {
  examType: ExamType;
  examFormat: ExamFormat;
  examDate: string;
  startTime: string;
  endTime: string;
  examVenue: string;
  examRoom: string;
  seatNumber: string;
  examRow: string;
}

export function draftFrom(data: StouData, code: string): ExamDraft {
  const exam = data.courses.find((c) => c.courseCode === code);
  const cur = data.curriculum.find((c) => c.courseCode === code);
  const type =
    (exam?.examType as ExamType) ||
    STATUS_TO_TYPE[cur?.status || ""] ||
    "regular";
  const { start, end } = exam ? timesOf(exam) : { start: "09:00", end: "12:00" };
  return {
    examType: type in TYPE_NAME ? type : "regular",
    examFormat: exam?.examFormat === "online" ? "online" : "onsite",
    examDate: exam?.examDate || "",
    startTime: start,
    endTime: end,
    examVenue: exam?.examVenue || data.examCenter.centerName || "",
    examRoom: exam?.examRoom || "",
    seatNumber: exam?.seatNumber || "",
    examRow: exam?.examRow || "",
  };
}

export function applyExamDraft(data: StouData, code: string, draft: ExamDraft) {
  const cur = data.curriculum.find((c) => c.courseCode === code);
  const name = cur?.courseNameTh || data.courses.find((c) => c.courseCode === code)?.courseNameTh || `ชุดวิชา ${code}`;
  if (cur) cur.status = TYPE_TO_STATUS[draft.examType];
  const next = normalizeExam(
    {
      courseCode: code,
      courseNameTh: name,
      credits: cur?.credits || 6,
      examType: draft.examType,
      examFormat: draft.examFormat,
      examDate: draft.examDate,
      startTime: draft.startTime || "09:00",
      endTime: draft.endTime || "12:00",
      examVenue: draft.examVenue,
      examRoom: draft.examRoom,
      seatNumber: draft.seatNumber,
      examRow: draft.examRow,
    },
    data.examCenter.centerName,
    name,
  );
  const idx = data.courses.findIndex((c) => c.courseCode === code);
  if (idx >= 0) data.courses[idx] = next;
  else data.courses.push(next);
}

export function setCourseStatus(data: StouData, code: string, status: CourseStatus) {
  const course = data.curriculum.find((c) => c.courseCode === code);
  if (!course) return false;
  course.status = status;
  if (isScheduled(status)) {
    const type = STATUS_TO_TYPE[status];
    let exam = data.courses.find((c) => c.courseCode === code);
    if (!exam) {
      data.courses.push(
        normalizeExam(
          {
            courseCode: code,
            courseNameTh: course.courseNameTh,
            credits: course.credits || 6,
            examType: type,
            examFormat: "onsite",
            examDate: "",
            startTime: "09:00",
            endTime: "12:00",
            examVenue: data.examCenter.centerName || "",
          },
          data.examCenter.centerName,
          course.courseNameTh,
        ),
      );
      return true;
    }
    exam.examType = type;
    exam.examTypeName = TYPE_NAME[type];
    return !exam.examDate;
  }
  data.courses = data.courses.filter((c) => c.courseCode !== code);
  return false;
}

export function mergeImport(current: StouData, json: unknown, replace: boolean): { data: StouData; added: number; updated: number; replaced: boolean } {
  if (!json || typeof json !== "object" || Array.isArray(json)) throw new Error("โครงสร้างข้อมูลไม่ถูกต้อง");
  const src = json as Partial<StouData> & { replaceCurriculum?: boolean; mode?: string };
  if (!Array.isArray(src.curriculum) && !Array.isArray(src.courses) && !src.student && !src.examCenter && !Array.isArray(src.studyPlan)) {
    throw new Error("ไม่พบข้อมูล curriculum / courses / studyPlan ในไฟล์ JSON");
  }
  const data = structuredClone(current);
  if (src.student) data.student = { ...data.student, ...src.student };
  if (src.examCenter) data.examCenter = { ...data.examCenter, ...src.examCenter };
  const isReplace = replace || src.replaceCurriculum === true || src.mode === "replace";
  let added = 0;
  let updated = 0;
  if (isReplace && Array.isArray(src.curriculum)) {
    data.curriculum = [];
    const codes = new Set(src.curriculum.map((c) => String(c.courseCode)));
    data.courses = data.courses.filter((x) => codes.has(String(x.courseCode)));
  }
  for (const item of src.curriculum || []) {
    if (!item?.courseCode) continue;
    const code = String(item.courseCode);
    const idx = data.curriculum.findIndex((x) => x.courseCode === code);
    if (idx >= 0) {
      Object.assign(data.curriculum[idx], item, { courseCode: code });
      updated++;
    } else {
      data.curriculum.push({ credits: 6, status: "not_taken", ...item, courseCode: code });
      added++;
    }
  }
  for (const item of src.courses || []) {
    if (!item?.courseCode) continue;
    const code = String(item.courseCode);
    const cur = data.curriculum.find((x) => x.courseCode === code);
    const idx = data.courses.findIndex((x) => x.courseCode === code);
    const norm = normalizeExam({ ...item, courseCode: code }, data.examCenter.centerName, cur?.courseNameTh);
    if (idx >= 0) {
      data.courses[idx] = norm;
      updated++;
    } else {
      data.courses.push(norm);
      added++;
    }
    if (cur && !isScheduled(cur.status) && cur.status !== "passed" && cur.status !== "transferred") {
      cur.status = TYPE_TO_STATUS[(norm.examType as ExamType) || "regular"];
    }
  }
  for (const c of data.curriculum) {
    if (isScheduled(c.status)) {
      if (!data.courses.some((x) => x.courseCode === c.courseCode)) {
        data.courses.push(
          normalizeExam(
            { courseCode: c.courseCode, courseNameTh: c.courseNameTh, examType: STATUS_TO_TYPE[c.status || "will_take"], examDate: "" },
            data.examCenter.centerName,
            c.courseNameTh,
          ),
        );
      }
    } else {
      data.courses = data.courses.filter((x) => x.courseCode !== c.courseCode);
    }
  }
  if (Array.isArray(src.studyPlan)) {
    for (const plan of src.studyPlan) {
      if (!plan?.courseCode) continue;
      const code = String(plan.courseCode);
      const idx = data.studyPlan.findIndex((x) => x.courseCode === code);
      if (idx >= 0) {
        data.studyPlan[idx] = { ...data.studyPlan[idx], ...plan, courseCode: code };
        updated++;
      } else {
        data.studyPlan.push({ ...plan, courseCode: code, units: plan.units || [] });
        added++;
      }
    }
  }
  return { data, added, updated, replaced: isReplace };
}

export function aiGuide() {
  return {
    purpose: "ไฟล์ข้อมูล STOU Ledger — ส่งให้ AI แก้ แล้วนำกลับมาอัปโหลด",
    instructionsForAI: [
      "ตอบกลับเป็น JSON ก้อนเดียว โครงสร้างเดียวกับไฟล์นี้",
      "อัปโหลดแบบรวม (merge) ตาม courseCode: มีอยู่แล้วจะอัปเดต ไม่มีจะเพิ่ม",
      "ถ้าต้องการเปลี่ยนสาขา ให้ใส่ replaceCurriculum: true หรือ mode: replace",
      "examDate เป็น YYYY-MM-DD, startTime/endTime เป็น HH:MM",
      "สถานะ curriculum: not_taken, will_take, will_take_samrit, will_take_summer, will_take_retake, passed, failed, transferred",
    ],
  };
}

export function exportPayload(data: StouData) {
  return { _aiGuide: aiGuide(), ...data };
}

export function mapsUrl(data: StouData, course: ExamCourse) {
  const q =
    course.examFormat === "online"
      ? ""
      : data.examCenter.googleMapsQuery || course.examVenue || data.examCenter.centerName || "";
  if (!q) return "";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function icsStamp(iso: string, time: string) {
  const [y, m, d] = iso.split("-");
  const [hh, mm] = (time || "09:00").split(":");
  return `${y}${m}${d}T${(hh || "09").padStart(2, "0")}${(mm || "00").padStart(2, "0")}00`;
}

function icsNow() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}T${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}Z`;
}

function icsText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function vevent(course: ExamCourse) {
  if (!course.examDate) return "";
  const { start, end } = timesOf(course);
  const room = course.examFormat === "online" ? "สอบออนไลน์ มสธ." : `ห้อง ${course.examRoom || "-"} ที่นั่ง ${course.seatNumber || "-"} แถว ${course.examRow || "-"}`;
  return [
    "BEGIN:VEVENT",
    `UID:stou-${course.courseCode}-${course.examDate}@stou-ledger`,
    `DTSTAMP:${icsNow()}`,
    `DTSTART;TZID=Asia/Bangkok:${icsStamp(course.examDate, start)}`,
    `DTEND;TZID=Asia/Bangkok:${icsStamp(course.examDate, end)}`,
    `SUMMARY:${icsText(`สอบ ${course.courseCode} ${course.courseNameTh}`)}`,
    `LOCATION:${icsText(course.examFormat === "online" ? "ออนไลน์" : course.examVenue || "")}`,
    `DESCRIPTION:${icsText(`${course.examTypeName || course.examTimeTh || ""} ${room}`)}`,
    "END:VEVENT",
  ].join("\r\n");
}

const ICS_ZONE = [
  "BEGIN:VTIMEZONE",
  "TZID:Asia/Bangkok",
  "BEGIN:STANDARD",
  "DTSTART:19700101T000000",
  "TZOFFSETFROM:+0700",
  "TZOFFSETTO:+0700",
  "TZNAME:+07",
  "END:STANDARD",
  "END:VTIMEZONE",
].join("\r\n");

function wrapCalendar(events: string[]) {
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//STOU Ledger//TH", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", ICS_ZONE, ...events, "END:VCALENDAR"].join("\r\n");
}

export function googleCalendarUrl(course: ExamCourse) {
  if (!course.examDate) return "";
  const { start, end } = timesOf(course);
  const text = `สอบ ${course.courseCode} ${course.courseNameTh}`;
  const dates = `${icsStamp(course.examDate, start)}/${icsStamp(course.examDate, end)}`;
  const loc = course.examFormat === "online" ? "ออนไลน์" : course.examVenue || "";
  const details = `${course.examTypeName || ""} ${course.examTimeTh || ""}\nห้อง ${course.examRoom || "-"} ที่นั่ง ${course.seatNumber || "-"} แถว ${course.examRow || "-"}`;
  const p = new URLSearchParams({ action: "TEMPLATE", text, dates, ctz: "Asia/Bangkok", location: loc, details });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

export function icsBody(course: ExamCourse) {
  const event = vevent(course);
  if (!event) return "";
  return wrapCalendar([event]);
}

export function icsAll(courses: ExamCourse[]) {
  const events = courses.map(vevent).filter(Boolean);
  if (!events.length) return "";
  return wrapCalendar(events);
}

export function sampleBook(): Book {
  const book = cloneSample().studyPlan.find((b) => b.courseCode === "10151");
  return book ? structuredClone(book) : freshBook("10151", "ไทยศึกษา", 15);
}
