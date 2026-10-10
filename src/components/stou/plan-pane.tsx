import { type ReactNode } from "react";
import { Search } from "lucide-react";
import { categoryTitle, creditBuckets, filterCurriculum, groupCurriculum, isScheduled, statusShort, timesOf } from "@/lib/stou/logic";
import { useStou } from "@/lib/stou/store";
import type { CourseStatus } from "@/lib/stou/types";
import { cn } from "@/lib/utils";
import { STATUS_SEAL, Seal } from "./meta";

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "ทั้งหมด" },
  { id: "scheduled", label: "จะสอบ" },
  { id: "passed", label: "ผ่าน" },
  { id: "will_take", label: "ภาคปกติ" },
  { id: "will_take_samrit", label: "สัมฤทธิบัตร" },
  { id: "will_take_summer", label: "ฤดูร้อน" },
  { id: "will_take_retake", label: "ซ่อม" },
  { id: "failed", label: "ไม่ผ่าน" },
  { id: "transferred", label: "เทียบโอน" },
  { id: "not_taken", label: "ยังไม่ลง" },
];

const BARS = [
  { key: "gen" as const, label: "ศึกษาทั่วไป", max: 30, dot: "bg-seal-regular" },
  { key: "core" as const, label: "เฉพาะบังคับ", max: 78, dot: "bg-seal-retake" },
  { key: "elec" as const, label: "เฉพาะเลือก", max: 12, dot: "bg-seal-samrit" },
  { key: "free" as const, label: "เลือกเสรี", max: 6, dot: "bg-seal-move" },
];

export function PlanPane() {
  const data = useStou((s) => s.data);
  const filter = useStou((s) => s.filter);
  const query = useStou((s) => s.query);
  const setFilter = useStou((s) => s.setFilter);
  const setQuery = useStou((s) => s.setQuery);
  const setDrawer = useStou((s) => s.setDrawer);
  const k = creditBuckets(data.curriculum);
  const counts: Record<string, number> = {
    all: data.curriculum.length,
    scheduled: k.scheduled,
    passed: k.passed,
    will_take: k.regular,
    will_take_samrit: k.samrit,
    will_take_summer: k.summer,
    will_take_retake: k.retake,
    failed: k.failed,
    transferred: k.transferred,
    not_taken: k.notTaken,
  };
  const filtered = filterCurriculum(data.curriculum, filter, query);
  const groups = groupCurriculum(filtered);

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-line bg-card p-4 shadow-lift">
        <div className="flex items-end justify-between gap-3" data-pane-head>
          <div>
            <p className="text-xs font-semibold tracking-widest text-saffron">ปริญญาตรี · 126 หน่วยกิต</p>
            <h2 className="mt-1 text-lg font-semibold">ความก้าวหน้า</h2>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-semibold leading-none tabular-nums">{k.earned}</div>
            <div className="text-xs text-muted">จาก 126 · {k.percent}%</div>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-wash">
          <div className="h-full rounded-full bg-saffron" style={{ width: `${k.percent}%` }} />
        </div>
        <div className="mt-4 space-y-2.5">
          {BARS.map((bar) => {
            const value = k[bar.key];
            const pct = Math.min(100, Math.round((value / bar.max) * 100));
            return (
              <div key={bar.key}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <span className={cn("size-2 rounded-full", bar.dot)} />
                    {bar.label}
                  </span>
                  <span className="tabular-nums text-muted">
                    {value} / {bar.max}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-wash">
                  <div className={cn("h-full rounded-full", bar.dot)} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ค้นรหัสหรือชื่อวิชา"
          aria-label="ค้นหารายวิชา"
          className="h-11 w-full rounded-2xl border border-line bg-card pr-3 pl-10 text-sm outline-none focus:border-saffron"
        />
      </div>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          const seal = STATUS_SEAL[f.id as CourseStatus];
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold",
                active ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink",
              )}
            >
              {seal && <span className={cn("size-2 rounded-full", active ? "bg-paper" : seal.bar)} />}
              {f.label}
              <span className={cn("tabular-nums", active ? "text-paper/80" : "text-muted")}>{counts[f.id] ?? 0}</span>
            </button>
          );
        })}
      </div>

      {groups.length === 0 && (
        <div className="rounded-3xl border border-dashed border-line bg-card px-4 py-8 text-center">
          <p className="font-semibold">ไม่พบวิชา</p>
          <p className="text-sm text-muted">ลองคำค้นอื่น หรือเลือกตัวกรองทั้งหมด</p>
        </div>
      )}

      {groups.map(([cat, courses]) => {
        const info = categoryTitle(cat);
        return (
          <section key={cat} className="space-y-2">
            <div className="flex items-end justify-between px-1">
              <div>
                <h3 className="text-sm font-semibold">{info.title}</h3>
                {info.sub && <p className="text-xs text-muted">{info.sub}</p>}
              </div>
              <span className="text-xs text-muted">{courses.length} ชุด</span>
            </div>
            <div className="space-y-2">
              {courses.map((course) => {
                const status = (course.status || "not_taken") as CourseStatus;
                const exam = data.courses.find((c) => c.courseCode === course.courseCode);
                const scheduled = isScheduled(status);
                const t = exam ? timesOf(exam) : null;
                return (
                  <article key={course.courseCode} className="overflow-hidden rounded-2xl border border-line bg-card">
                    <button type="button" className="flex w-full items-start gap-3 p-3 text-left" onClick={() => setDrawer({ kind: "status", code: course.courseCode })}>
                      <Seal status={status} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-semibold">{course.courseCode}</span>
                          <span className="text-xs text-muted">{course.credits || 6} นก.</span>
                        </div>
                        <h4 className="text-base font-semibold leading-snug">{course.courseNameTh}</h4>
                        <p className="mt-0.5 text-xs font-medium text-muted">{statusShort(status)}</p>
                      </div>
                    </button>
                    {status === "passed" && <Note tone="bg-seal-pass">สะสมแล้ว {course.credits || 6} หน่วยกิต</Note>}
                    {status === "transferred" && <Note tone="bg-seal-move">เทียบโอนแล้ว {course.credits || 6} หน่วยกิต</Note>}
                    {status === "failed" && <Note tone="bg-seal-fail">ไม่ผ่าน — เลือกสอบซ่อมหรือลงใหม่ได้</Note>}
                    {scheduled && (
                      <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-2">
                        <p className="min-w-0 text-xs text-muted">
                          {exam?.examDateTh ? `${exam.examDateTh} · ${t?.start}–${t?.end}` : "ยังไม่ระบุวันสอบ"}
                          {exam?.examFormat === "online" ? " · ออนไลน์" : exam?.examRoom ? ` · ${exam.examRoom}` : ""}
                        </p>
                        <button type="button" className="h-9 shrink-0 rounded-full bg-wash px-3 text-xs font-semibold" onClick={() => setDrawer({ kind: "exam", code: course.courseCode })}>
                          กำหนดสอบ
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Note({ children, tone }: { children: ReactNode; tone: string }) {
  return <p className={cn("px-3 py-1.5 text-xs font-medium text-on-seal", tone)}>{children}</p>;
}
