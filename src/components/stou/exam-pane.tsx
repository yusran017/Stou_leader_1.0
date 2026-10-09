import { useEffect, useState } from "react";
import {
  BookOpenText,
  Building2,
  CalendarPlus,
  Clock3,
  MapPin,
  Monitor,
  Sun,
  Sunset,
} from "lucide-react";
import {
  bookProgress,
  countdownOf,
  dateParts,
  dayChip,
  examTypeOf,
  findNextExam,
  mapsUrl,
  pad,
  readinessCopy,
  sortedExams,
  timesOf,
} from "@/lib/stou/logic";
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

function ReadButton({ onRead }: { onRead: () => void }) {
  return (
    <button type="button" className="inline-flex h-9 items-center gap-1 rounded-full border border-line px-3 text-xs font-semibold" onClick={onRead}>
      <BookOpenText className="size-3.5" /> อ่าน
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
      {next && (
        <article className="overflow-hidden rounded-3xl border border-line bg-card shadow-lift">
          <button
            type="button"
            className="w-full text-left"
            onClick={() => setHeroOpen((v) => !v)}
          >
            <div className="flex items-start justify-between gap-3 px-4 pt-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-saffron">วิชาถัดไป</p>
                <p className="mt-1 font-display text-sm text-muted">{next.courseCode}</p>
                <h2 className="text-xl font-semibold leading-snug">{next.courseNameTh}</h2>
              </div>
              <DayStamp iso={next.examDate} />
            </div>

            <div className="mt-4 grid grid-cols-4 border-y border-line">
              {cd?.phase === "live" ? (
                <div className="col-span-4 px-4 py-5 text-center">
                  <p className="font-display text-4xl font-semibold text-seal-fail">กำลังสอบ</p>
                  <p className="text-sm text-muted">อยู่ในช่วง 4 ชั่วโมงหลังเวลาเริ่ม</p>
                </div>
              ) : (
                [
                  ["วัน", cd?.days ?? 0],
                  ["ชม.", cd?.hours ?? 0],
                  ["นาที", cd?.mins ?? 0],
                  ["วิ", cd?.secs ?? 0],
                ].map(([label, value]) => (
                  <div key={String(label)} className="px-1 py-3 text-center">
                    <div className="font-display text-4xl font-semibold tabular-nums leading-none">{cd ? pad(Number(value)) : "––"}</div>
                    <div className="mt-1 text-xs text-muted">{label}</div>
                  </div>
                ))
              )}
            </div>

            <HeroMeta course={next} />
          </button>
          {heroOpen && (
            <div className="px-4 pb-4">
              <ReadButton onRead={() => openReading(next.courseCode)} />
            </div>
          )}
        </article>
      )}

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
            centerQuery={mapsUrl(data, course)}
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

function HeroMeta({ course }: { course: ExamCourse }) {
  const t = timesOf(course);
  const parts = dateParts(course.examDate);
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 text-sm">
      <Session morning={t.morning} />
      <span className="text-muted">
        {parts.weekday} {parts.day} {parts.month} {parts.year}
      </span>
      <span className="inline-flex items-center gap-1 text-muted">
        <Clock3 className="size-3.5" />
        {t.start}–{t.end}
      </span>
    </div>
  );
}

function DayStamp({ iso }: { iso?: string }) {
  const chip = dayChip(iso);
  const tone =
    chip.tone === "today"
      ? "bg-seal-fail text-on-seal"
      : chip.tone === "soon"
        ? "bg-seal-summer text-on-seal"
        : chip.tone === "past"
          ? "bg-seal-idle text-on-seal"
          : "bg-wash text-ink";
  return <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", tone)}>{chip.text}</span>;
}

function Ticket({
  course,
  expanded,
  onToggle,
  onRead,
  centerQuery,
  progress,
}: {
  course: ExamCourse;
  expanded: boolean;
  onToggle: () => void;
  onRead: () => void;
  centerQuery: string;
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
      <button type="button" onClick={onToggle} className="flex w-full items-stretch text-left">
        <div className="flex w-20 shrink-0 flex-col items-center justify-center border-r border-dashed border-line bg-wash py-3">
          <span className="text-xs font-semibold text-muted">{parts.weekday || "วัน"}</span>
          <span className="font-display text-3xl font-semibold leading-none">{parts.day}</span>
          <span className="text-xs text-muted">{parts.month}</span>
        </div>
        <div className="min-w-0 flex-1 px-3 py-3">
          <div className="flex items-center gap-2">
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
        </div>
      </button>

      {expanded && (
        <div className="space-y-2 border-t border-line px-4 py-3 text-sm">
          <Detail icon={online ? Monitor : MapPin} label={online ? "รูปแบบ" : "สนามสอบ"} value={online ? "สอบออนไลน์ มสธ." : course.examVenue || "รอประกาศสนาม"} />
          {!online && (
            <Detail
              icon={Building2}
              label="ห้อง / ที่นั่ง"
              value={course.examRoom ? `${course.examRoom} · ที่นั่ง ${course.seatNumber || "-"} · แถว ${course.examRow || "-"}` : "รอประกาศห้องและที่นั่ง"}
            />
          )}
          {centerQuery && (
            <a className="inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold" href={centerQuery} target="_blank" rel="noreferrer">
              <MapPin className="size-4" /> เปิดแผนที่สนามสอบ
            </a>
          )}
          <ReadButton onRead={onRead} />
        </div>
      )}
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
