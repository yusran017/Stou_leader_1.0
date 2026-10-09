import { useEffect, useState } from "react";
import { BookOpenText, Building2, CalendarPlus, Clock3, MapPin, Monitor, Sun, Sunset } from "lucide-react";
import { bookProgress, countdownOf, dateParts, dayChip, examTypeOf, findNextExam, pad, readinessCopy, sortedExams, timesOf } from "@/lib/stou/logic";
import { useStou } from "@/lib/stou/store";
import type { ExamCourse, ExamType } from "@/lib/stou/types";
import { cn } from "@/lib/utils";
import { EXAM_BAR } from "./meta";

const TYPE_SHORT: Record<ExamType, string> = {
  regular: "ภาคปกติ",
  samrit: "สัมฤทธิบัตร",
  summer: "ฤดูร้อน",
  retake: "สอบซ่อม",
};

function ReadChip({ onRead }: { onRead: () => void }) {
  return (
    <button
      type="button"
      aria-label="อ่านวิชานี้"
      className="inline-flex h-9 shrink-0 items-center gap-1 rounded-full bg-ink px-3 text-xs font-semibold text-paper"
      onClick={(event) => {
        event.stopPropagation();
        onRead();
      }}
    >
      <BookOpenText className="size-3.5" />
      อ่าน
    </button>
  );
}

function Session({ morning }: { morning: boolean }) {
  const Icon = morning ? Sun : Sunset;
  return (
    <span className={cn("inline-flex items-center gap-1 font-medium", morning ? "text-seal-summer" : "text-seal-retake")}>
      <Icon className="size-3.5" strokeWidth={2.3} />
      {morning ? "เช้า" : "บ่าย"}
    </span>
  );
}

export function ExamPane() {
  const data = useStou((s) => s.data);
  const setTab = useStou((s) => s.setTab);
  const openReading = useStou((s) => s.openReading);
  const [open, setOpen] = useState<string | null>(null);
  const [heroOpen, setHeroOpen] = useState(false);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const next = findNextExam(data.courses);
  const cd = now == null ? null : countdownOf(next, now);

  if (!data.courses.length) {
    return (
      <section className="rounded-3xl border border-dashed border-line bg-card px-5 py-10 text-center">
        <CalendarPlus className="mx-auto size-8 text-saffron" />
        <h2 className="mt-3 text-lg font-semibold">ยังไม่มีวิชาในตารางสอบ</h2>
        <p className="mt-1 text-sm text-muted">ไปที่หลักสูตร แล้วตั้งสถานะเป็นจะสอบ ภาคปกติ สัมฤทธิบัตร ฤดูร้อน หรือสอบซ่อม</p>
        <button type="button" className="mt-4 h-11 rounded-full bg-saffron px-5 text-sm font-semibold text-on-saffron" onClick={() => setTab("plan")}>
          เปิดโครงสร้างหลักสูตร
        </button>
      </section>
    );
  }

  return (
    <div className="space-y-4">
      {next && <NextExam course={next} cd={cd} open={heroOpen} onToggle={() => setHeroOpen((v) => !v)} onRead={() => openReading(next.courseCode)} />}

      <div className="flex items-end justify-between px-1">
        <h3 className="text-sm font-semibold">ใบสอบทั้งหมด</h3>
        <span className="text-xs text-muted">{data.courses.length} วิชา</span>
      </div>

      <div className="space-y-3">
        {sortedExams(data.courses).map((course) => (
          <Ticket
            key={course.courseCode}
            course={course}
            expanded={open === course.courseCode}
            onToggle={() => setOpen((c) => (c === course.courseCode ? null : course.courseCode))}
            onRead={() => openReading(course.courseCode)}
            progress={bookProgress(
              data.studyPlan.find((b) => b.courseCode === course.courseCode) || {
                courseCode: course.courseCode,
                courseNameTh: course.courseNameTh,
                units: [],
              },
            )}
          />
        ))}
      </div>
    </div>
  );
}

function NextExam({
  course,
  cd,
  open,
  onToggle,
  onRead,
}: {
  course: ExamCourse;
  cd: ReturnType<typeof countdownOf>;
  open: boolean;
  onToggle: () => void;
  onRead: () => void;
}) {
  const parts = dateParts(course.examDate);
  const t = timesOf(course);
  const chip = dayChip(course.examDate);
  const type = examTypeOf(course);

  return (
    <article className="relative overflow-hidden rounded-[28px] bg-saffron text-on-saffron shadow-lift">
      <div className="pointer-events-none absolute -right-6 -top-8 font-display text-8xl font-semibold text-on-saffron/10">มสธ.</div>
      <div className="relative flex items-center justify-between gap-3 px-5 pt-5">
        <button type="button" className="text-[11px] font-semibold tracking-[0.22em]" onClick={onToggle}>
          วิชาถัดไป
        </button>
        <div className="flex items-center gap-2">
          {open && <ReadChip onRead={onRead} />}
          <button type="button" className="rounded-full bg-on-saffron/15 px-2.5 py-1 text-xs font-semibold" onClick={onToggle}>
            {chip.text}
          </button>
        </div>
      </div>
      <button type="button" className="relative w-full text-left" onClick={onToggle}>
        <div className="mt-5 flex items-end justify-between gap-4 px-5">
          <div>
            <p className="font-display text-7xl font-semibold leading-none">{parts.day || "—"}</p>
            <p className="mt-1 text-sm">
              {parts.weekday} {parts.month} {parts.year}
            </p>
          </div>
          <div className="max-w-[52%] pb-1 text-right">
            <p className="font-display text-sm text-on-saffron/80">{course.courseCode}</p>
            <h2 className="text-lg font-semibold leading-snug">{course.courseNameTh}</h2>
            <p className="mt-1 text-xs text-on-saffron/80">{TYPE_SHORT[type]}</p>
          </div>
        </div>
        <div className="mx-4 mt-5 rounded-2xl bg-paper px-3 py-3 text-ink">
          {cd?.phase === "live" ? (
            <p className="text-center font-display text-3xl font-semibold text-seal-fail">กำลังสอบ</p>
          ) : (
            <div className="grid grid-cols-4">
              {[
                ["วัน", cd?.days ?? 0],
                ["ชม.", cd?.hours ?? 0],
                ["นาที", cd?.mins ?? 0],
                ["วิ", cd?.secs ?? 0],
              ].map(([label, value]) => (
                <div key={String(label)} className="text-center">
                  <div className="font-display text-3xl font-semibold tabular-nums leading-none">{cd ? pad(Number(value)) : "––"}</div>
                  <div className="mt-1 text-[11px] text-muted">{label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-2 text-xs">
            <Session morning={t.morning} />
            <span className="inline-flex items-center gap-1 text-muted">
              <Clock3 className="size-3.5" />
              {t.start}–{t.end}
            </span>
          </div>
        </div>
        <div className="h-4" />
      </button>
    </article>
  );
}

function Ticket({
  course,
  expanded,
  onToggle,
  onRead,
  progress,
}: {
  course: ExamCourse;
  expanded: boolean;
  onToggle: () => void;
  onRead: () => void;
  progress: ReturnType<typeof bookProgress>;
}) {
  const type = examTypeOf(course);
  const t = timesOf(course);
  const parts = dateParts(course.examDate);
  const chip = dayChip(course.examDate);
  const online = course.examFormat === "online";
  const ready = readinessCopy(progress.done, progress.total, progress.percent);

  return (
    <article className="relative overflow-hidden rounded-3xl border border-line bg-card">
      <div className={cn("absolute inset-y-0 left-0 w-1.5", EXAM_BAR[type])} />
      <div className="flex items-start">
        <button type="button" onClick={onToggle} className="flex w-20 shrink-0 flex-col items-center justify-center self-stretch border-r border-dashed border-line bg-wash py-3 text-left">
          <span className="text-xs font-semibold text-muted">{parts.weekday || "วัน"}</span>
          <span className="font-display text-3xl font-semibold leading-none">{parts.day}</span>
          <span className="text-xs text-muted">{parts.month}</span>
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2 p-3">
            <button type="button" onClick={onToggle} className="min-w-0 flex-1 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-sm font-semibold">{course.courseCode}</span>
                <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold text-on-seal", EXAM_BAR[type])}>{TYPE_SHORT[type]}</span>
              </div>
              <h3 className="mt-0.5 text-base font-semibold leading-snug">{course.courseNameTh}</h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                <Session morning={t.morning} />
                <span>
                  {t.start}–{t.end}
                </span>
                <span>{chip.text}</span>
              </div>
              <p className="mt-2 text-xs text-muted">{progress.total ? `อ่าน ${progress.done}/${progress.total} หน่วย · ${ready}` : ready}</p>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper">
                <div className="h-full rounded-full bg-seal-pass" style={{ width: `${progress.percent}%` }} />
              </div>
            </button>
            {expanded && <ReadChip onRead={onRead} />}
          </div>
          {expanded && (
            <div className="space-y-2 border-t border-line px-3 pt-2 pb-3 text-sm">
              <Detail icon={online ? Monitor : MapPin} label={online ? "รูปแบบ" : "สนามสอบ"} value={online ? "สอบออนไลน์ มสธ." : course.examVenue || "รอประกาศสนาม"} />
              {!online && (
                <Detail
                  icon={Building2}
                  label="ห้อง / ที่นั่ง"
                  value={course.examRoom ? `${course.examRoom} · ที่นั่ง ${course.seatNumber || "-"} · แถว ${course.examRow || "-"}` : "รอประกาศห้องและที่นั่ง"}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Detail({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 size-4 shrink-0 text-saffron" />
      <p>
        <span className="text-muted">{label}: </span>
        <span className="font-medium">{value}</span>
      </p>
    </div>
  );
}
