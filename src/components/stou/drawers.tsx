import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Drawer } from "vaul";
import { Check, Download, FileSpreadsheet, Moon, Sun, Upload } from "lucide-react";
import { draftFrom, durationLabel, EXAM_TYPES, presetOf, shiftTime, STATUS_OPTIONS, type ExamDraft } from "@/lib/stou/logic";
import { installReady, installedAlready, runInstall, subscribeInstall } from "@/lib/stou/install";
import { useStou } from "@/lib/stou/store";
import type { ExamFormat, ExamType } from "@/lib/stou/types";
import { cn } from "@/lib/utils";
import { Seal } from "./meta";

export function AppDrawers() {
  const drawer = useStou((s) => s.drawer);
  const setDrawer = useStou((s) => s.setDrawer);
  return (
    <Drawer.Root open={!!drawer} onOpenChange={(open) => !open && setDrawer(null)} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-ink/50" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[92dvh] w-full max-w-lg flex-col rounded-t-3xl border border-line bg-card outline-none">
          <div className="mx-auto mt-2 h-1.5 w-12 shrink-0 rounded-full bg-line" />
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {drawer?.kind === "settings" && <SettingsBody />}
            {drawer?.kind === "status" && <StatusBody code={drawer.code} />}
            {drawer?.kind === "exam" && <ExamBody code={drawer.code} />}
            {drawer?.kind === "book" && <BookBody />}
            {drawer?.kind === "unit" && <UnitBody code={drawer.code} />}
            {drawer?.kind === "subunit" && <SubBody code={drawer.code} unit={drawer.unit} />}
            {drawer?.kind === "topic" && <TopicBody code={drawer.code} unit={drawer.unit} subId={drawer.subId} />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function Title({ children }: { children: string }) {
  return (
    <Drawer.Title className="font-display text-xl font-semibold">
      {children}
    </Drawer.Title>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}

const inputCls = "h-11 w-full rounded-2xl border border-line bg-paper px-3 text-sm outline-none focus:border-saffron";

function SettingsBody() {
  const data = useStou((s) => s.data);
  const theme = useStou((s) => s.theme);
  const setTheme = useStou((s) => s.setTheme);
  const saveProfile = useStou((s) => s.saveProfile);
  const exportJson = useStou((s) => s.exportJson);
  const exportXls = useStou((s) => s.exportXls);
  const importJson = useStou((s) => s.importJson);
  const resetReading = useStou((s) => s.resetReading);
  const resetCurriculum = useStou((s) => s.resetCurriculum);
  const loadSample = useStou((s) => s.loadSample);
  const toggleSample = useStou((s) => s.toggleSample);
  const notify = useStou((s) => s.notify);
  const fileRef = useRef<HTMLInputElement>(null);
  const [replace, setReplace] = useState(false);
  const [student, setStudent] = useState(data.student);
  const [center, setCenter] = useState(data.examCenter);
  const canInstall = useSyncExternalStore(subscribeInstall, installReady, () => false);
  const standalone = useSyncExternalStore(subscribeInstall, installedAlready, () => false);

  return (
    <div className="space-y-4">
      <Title>ตั้งค่าและข้อมูล</Title>
      <p className="text-sm text-muted">
        หลักสูตร {data.curriculum.length} วิชา · ตารางสอบ {data.courses.length} · หนังสือ {data.studyPlan.length} เล่ม · เก็บบนเครื่องนี้ ออฟไลน์ได้
      </p>

      <button type="button" className="flex h-12 w-full items-center justify-between rounded-2xl border border-line bg-paper px-3 text-sm font-semibold" onClick={() => setTheme(theme === "day" ? "night" : "day")}>
        <span className="inline-flex items-center gap-2">{theme === "day" ? <Moon className="size-4" /> : <Sun className="size-4" />} {theme === "day" ? "โหมดตะเกียง (มืด)" : "โหมดกระดาษ (สว่าง)"}</span>
        <span className="text-xs text-muted">{theme === "day" ? "กลางวัน" : "กลางคืน"}</span>
      </button>

      {!standalone && (
        <button
          type="button"
          className="h-11 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron"
          onClick={async () => {
            if (!canInstall) {
              notify("เปิดเมนู ⋮ ของ Chrome แล้วเลือก ติดตั้งแอป หรือ เพิ่มไปที่หน้าจอหลัก", "warn");
              return;
            }
            const ok = await runInstall();
            if (ok) notify("ติดตั้งแล้ว ไอคอน STOU Ledger จะอยู่ที่หน้าจอหลัก");
          }}
        >
          ติดตั้งแอปและไอคอนบนหน้าจอ
        </button>
      )}

      <div className="grid grid-cols-2 gap-2">
        <button type="button" className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-seal-pass text-sm font-semibold text-on-seal" onClick={exportXls}>
          <FileSpreadsheet className="size-4" /> Excel 5 แผ่น
        </button>
        <button type="button" className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold" onClick={exportJson}>
          <Download className="size-4" /> สำรอง JSON
        </button>
      </div>

      <div className="space-y-2 rounded-2xl border border-line p-3">
        <p className="text-sm font-semibold">นำเข้า JSON</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <button type="button" className={cn("h-10 rounded-xl border", !replace ? "border-ink bg-ink text-paper" : "border-line")} onClick={() => setReplace(false)}>
            รวมของเดิม
          </button>
          <button type="button" className={cn("h-10 rounded-xl border", replace ? "border-ink bg-ink text-paper" : "border-line")} onClick={() => setReplace(true)}>
            แทนที่สาขา
          </button>
        </div>
        <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) importJson(f, replace); e.target.value = ""; }} />
        <button type="button" className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-2xl bg-saffron text-sm font-semibold text-on-saffron" onClick={() => fileRef.current?.click()}>
          <Upload className="size-4" /> เลือกไฟล์ .json
        </button>
      </div>

      <form
        className="space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          saveProfile(student, center);
        }}
      >
        <p className="text-sm font-semibold">บัตรนักศึกษาและสนามสอบ</p>
        <Field label="รหัสนักศึกษา">
          <input className={inputCls} value={student.studentId} onChange={(e) => setStudent({ ...student, studentId: e.target.value })} />
        </Field>
        <Field label="ชื่อ-นามสกุล">
          <input className={inputCls} value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
        </Field>
        <Field label="สาขาวิชา">
          <input className={inputCls} value={student.faculty || ""} onChange={(e) => setStudent({ ...student, faculty: e.target.value })} />
        </Field>
        <Field label="วิชาเอก">
          <input className={inputCls} value={student.major || ""} onChange={(e) => setStudent({ ...student, major: e.target.value })} />
        </Field>
        <Field label="ศูนย์วิทยพัฒนา">
          <input className={inputCls} value={student.center || ""} onChange={(e) => setStudent({ ...student, center: e.target.value })} />
        </Field>
        <div className="grid grid-cols-2 gap-2">
          <Field label="ภาค">
            <input className={inputCls} value={student.semester || ""} onChange={(e) => setStudent({ ...student, semester: e.target.value })} />
          </Field>
          <Field label="ปีการศึกษา">
            <input className={inputCls} value={student.academicYear || ""} onChange={(e) => setStudent({ ...student, academicYear: e.target.value })} />
          </Field>
        </div>
        <Field label="ชื่อสนามสอบ">
          <input className={inputCls} value={center.centerName || ""} onChange={(e) => setCenter({ ...center, centerName: e.target.value })} />
        </Field>
        <Field label="จังหวัด">
          <input className={inputCls} value={center.province || ""} onChange={(e) => setCenter({ ...center, province: e.target.value })} />
        </Field>
        <Field label="ที่อยู่ / คำค้นแผนที่">
          <input className={inputCls} value={center.googleMapsQuery || center.locationAddress || ""} onChange={(e) => setCenter({ ...center, googleMapsQuery: e.target.value, locationAddress: e.target.value })} />
        </Field>
        <button type="submit" className="h-11 w-full rounded-full bg-ink text-sm font-semibold text-paper">
          บันทึกโปรไฟล์
        </button>
      </form>

      <div className="space-y-2 rounded-2xl border border-seal-fail/40 p-3">
        <button type="button" className="h-10 w-full rounded-xl border border-line text-sm font-semibold" onClick={toggleSample}>
          เปิด/ปิดตัวอย่างหนังสือ 10151
        </button>
        <button type="button" className="h-10 w-full rounded-xl border border-line text-sm font-semibold" onClick={loadSample}>
          โหลดข้อมูลตัวอย่างทั้งชุด
        </button>
        <button type="button" className="h-10 w-full rounded-xl border border-seal-fail text-sm font-semibold text-seal-fail" onClick={resetReading}>
          รีเซ็ตความคืบหน้าการอ่าน
        </button>
        <button type="button" className="h-10 w-full rounded-xl border border-seal-fail text-sm font-semibold text-seal-fail" onClick={resetCurriculum}>
          ล้างรายวิชาในหลักสูตร
        </button>
      </div>
    </div>
  );
}

function StatusBody({ code }: { code: string }) {
  const course = useStou((s) => s.data.curriculum.find((c) => c.courseCode === code));
  const changeStatus = useStou((s) => s.changeStatus);
  if (!course) return <Title>ไม่พบวิชา</Title>;
  return (
    <div className="space-y-3">
      <Title>สถานะชุดวิชา</Title>
      <p className="text-sm text-muted">
        {course.courseCode} · {course.courseNameTh}
      </p>
      <div className="space-y-1.5">
        {STATUS_OPTIONS.map((opt) => {
          const on = (course.status || "not_taken") === opt.key;
          return (
            <button key={opt.key} type="button" className={cn("flex h-12 w-full items-center gap-3 rounded-2xl border px-2 text-left", on ? "border-ink" : "border-line")} onClick={() => changeStatus(code, opt.key)}>
              <Seal status={opt.key} className="size-9" />
              <span className="flex-1 text-sm font-semibold">{opt.label}</span>
              {on && <Check className="size-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExamBody({ code }: { code: string }) {
  const data = useStou((s) => s.data);
  const saveExam = useStou((s) => s.saveExam);
  const course = data.curriculum.find((c) => c.courseCode === code) || data.courses.find((c) => c.courseCode === code);
  const [draft, setDraft] = useState<ExamDraft>(() => draftFrom(data, code));
  const online = draft.examFormat === "online";
  const preset = presetOf(draft.startTime, draft.endTime);

  function setTime(partial: Partial<ExamDraft>) {
    setDraft((d) => ({ ...d, ...partial }));
  }

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        saveExam(code, draft);
      }}
    >
      <Title>กำหนดการสอบ</Title>
      <p className="text-sm font-medium">
        {code} · {course?.courseNameTh}
      </p>
      <Field label="ประเภทการสอบ">
        <select className={inputCls} value={draft.examType} onChange={(e) => setTime({ examType: e.target.value as ExamType })}>
          {EXAM_TYPES.map((t) => (
            <option key={t.key} value={t.key}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="รูปแบบ">
        <select className={inputCls} value={draft.examFormat} onChange={(e) => setTime({ examFormat: e.target.value as ExamFormat })}>
          <option value="onsite">สนามสอบ</option>
          <option value="online">สอบออนไลน์</option>
        </select>
      </Field>
      <Field label="วันสอบ">
        <input type="date" className={inputCls} value={draft.examDate} onChange={(e) => setTime({ examDate: e.target.value })} />
      </Field>
      <Field label="คาบ">
        <select
          className={inputCls}
          value={preset}
          onChange={(e) => {
            if (e.target.value === "morning") setTime({ startTime: "09:00", endTime: "12:00" });
            else if (e.target.value === "afternoon") setTime({ startTime: "13:30", endTime: "16:30" });
          }}
        >
          <option value="morning">เช้า 09:00–12:00</option>
          <option value="afternoon">บ่าย 13:30–16:30</option>
          <option value="custom">กำหนดเอง</option>
        </select>
      </Field>
      <div className="grid grid-cols-2 gap-2">
        <Field label="เริ่ม">
          <input type="time" className={inputCls} value={draft.startTime} onChange={(e) => setTime({ startTime: e.target.value })} />
        </Field>
        <Field label="เลิก">
          <input type="time" className={inputCls} value={draft.endTime} onChange={(e) => setTime({ endTime: e.target.value })} />
        </Field>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {[
          ["เริ่ม -1 ชม.", "start", -60],
          ["เริ่ม +1 ชม.", "start", 60],
          ["เลิก -15 น.", "end", -15],
          ["เลิก +15 น.", "end", 15],
        ].map(([label, which, delta]) => (
          <button
            key={String(label)}
            type="button"
            className="h-9 rounded-full border border-line px-3 text-xs font-semibold"
            onClick={() =>
              setDraft((d) =>
                which === "start" ? { ...d, startTime: shiftTime(d.startTime, Number(delta)) } : { ...d, endTime: shiftTime(d.endTime, Number(delta)) },
              )
            }
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-sm font-medium text-saffron">ใช้เวลาสอบ {durationLabel(draft.startTime, draft.endTime)}</p>
      {online ? (
        <p className="rounded-2xl bg-wash px-3 py-2 text-sm">สอบผ่านระบบออนไลน์ มสธ. ไม่ต้องระบุห้องและที่นั่ง</p>
      ) : (
        <>
          <Field label="สนามสอบ">
            <input className={inputCls} value={draft.examVenue} onChange={(e) => setTime({ examVenue: e.target.value })} />
          </Field>
          <Field label="ห้องสอบ">
            <input className={inputCls} value={draft.examRoom} onChange={(e) => setTime({ examRoom: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="เลขที่นั่ง">
              <input className={inputCls} value={draft.seatNumber} onChange={(e) => setTime({ seatNumber: e.target.value })} />
            </Field>
            <Field label="แถว">
              <input className={inputCls} value={draft.examRow} onChange={(e) => setTime({ examRow: e.target.value })} />
            </Field>
          </div>
        </>
      )}
      <button type="submit" className="h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron">
        บันทึกกำหนดการ
      </button>
    </form>
  );
}

function BookBody() {
  const curriculum = useStou((s) => s.data.curriculum);
  const addBook = useStou((s) => s.addBook);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [total, setTotal] = useState(15);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (!code.trim() || !name.trim()) return;
        addBook(code.trim(), name.trim(), Math.max(1, Math.min(30, total)));
      }}
    >
      <Title>เพิ่มหนังสือ</Title>
      <Field label="เลือกจากหลักสูตร">
        <select
          className={inputCls}
          defaultValue=""
          onChange={(e) => {
            const cur = curriculum.find((c) => c.courseCode === e.target.value);
            if (!cur) return;
            setCode(cur.courseCode);
            setName(cur.courseNameTh);
          }}
        >
          <option value="">— เลือกชุดวิชา —</option>
          {curriculum.map((c) => (
            <option key={c.courseCode} value={c.courseCode}>
              {c.courseCode} {c.courseNameTh}
            </option>
          ))}
        </select>
      </Field>
      <Field label="รหัสวิชา">
        <input className={inputCls} value={code} onChange={(e) => setCode(e.target.value)} required />
      </Field>
      <Field label="ชื่อวิชา">
        <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} required />
      </Field>
      <Field label="จำนวนหน่วย (1–30)">
        <input className={inputCls} type="number" min={1} max={30} value={total} onChange={(e) => setTotal(Number(e.target.value))} />
      </Field>
      <button type="submit" className="h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron">
        เพิ่มเข้าแผนอ่าน
      </button>
    </form>
  );
}

function UnitBody({ code }: { code: string }) {
  const addUnit = useStou((s) => s.addUnit);
  const [title, setTitle] = useState("");
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        addUnit(code, title);
      }}
    >
      <Title>เพิ่มหน่วย</Title>
      <p className="text-sm text-muted">วิชา {code}</p>
      <Field label="ชื่อหน่วย">
        <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="เช่น กฎหมายและกระบวนการยุติธรรม" required />
      </Field>
      <button type="submit" className="h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron">
        เพิ่มหน่วย
      </button>
    </form>
  );
}

function SubBody({ code, unit }: { code: string; unit: number }) {
  const book = useStou((s) => s.data.studyPlan.find((b) => b.courseCode === code));
  const found = book?.units.find((u) => u.unit === unit);
  const addSub = useStou((s) => s.addSub);
  const next = (found?.subUnits?.length || 0) + 1;
  const [id, setId] = useState(`${unit}.${next}`);
  const [title, setTitle] = useState("");
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        addSub(code, unit, id.trim(), title.trim());
      }}
    >
      <Title>เพิ่มตอนย่อย</Title>
      <p className="text-sm text-muted">
        {code} · หน่วย {unit} {found?.title || ""}
      </p>
      <Field label="ลำดับตอน">
        <input className={inputCls} value={id} onChange={(e) => setId(e.target.value)} required />
      </Field>
      <Field label="ชื่อตอน">
        <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Field>
      <button type="submit" className="h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron">
        เพิ่มตอน
      </button>
    </form>
  );
}

function TopicBody({ code, unit, subId }: { code: string; unit: number; subId: string }) {
  const book = useStou((s) => s.data.studyPlan.find((b) => b.courseCode === code));
  const sub = book?.units.find((u) => u.unit === unit)?.subUnits?.find((s) => String(s.id) === subId);
  const addTopic = useStou((s) => s.addTopic);
  const next = (sub?.topics?.length || 0) + 1;
  const [id, setId] = useState(`${subId}.${next}`);
  const [title, setTitle] = useState("");
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        addTopic(code, unit, subId, id.trim(), title.trim());
      }}
    >
      <Title>เพิ่มเรื่อง</Title>
      <p className="text-sm text-muted">
        ตอน {subId} · {sub?.title}
      </p>
      <Field label="ลำดับเรื่อง">
        <input className={inputCls} value={id} onChange={(e) => setId(e.target.value)} required />
      </Field>
      <Field label="ชื่อเรื่อง">
        <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Field>
      <button type="submit" className="h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron">
        เพิ่มเรื่อง
      </button>
    </form>
  );
}
