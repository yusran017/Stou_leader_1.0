import { useEffect, useState } from "react";
import { BookOpen, BookPlus, Check, ChevronDown, CircleDashed, Plus, Trash2 } from "lucide-react";
import { bookProgress, readingOverview, subStatus, topicStatus, unitStatus } from "@/lib/stou/logic";
import { useStou } from "@/lib/stou/store";
import type { ReadStatus } from "@/lib/stou/types";
import { cn } from "@/lib/utils";

function stampClass(status: ReadStatus) {
  if (status === "completed") return "bg-seal-pass text-on-seal";
  if (status === "reading") return "bg-seal-summer text-on-seal";
  return "border border-line bg-card text-muted";
}

function StampIcon({ status }: { status: ReadStatus }) {
  const Icon = status === "completed" ? Check : status === "reading" ? BookOpen : CircleDashed;
  return <Icon className="size-5" strokeWidth={2.4} />;
}

function stampLabel(status: ReadStatus, what: string) {
  const name = status === "completed" ? "อ่านจบ" : status === "reading" ? "กำลังอ่าน" : "ยังไม่อ่าน";
  return `${what}: ${name}`;
}

export function ReadingPane() {
  const data = useStou((s) => s.data);
  const openBooks = useStou((s) => s.openBooks);
  const focusBook = useStou((s) => s.focusBook);
  const toggleBook = useStou((s) => s.toggleBook);
  const setDrawer = useStou((s) => s.setDrawer);
  const cycleUnit = useStou((s) => s.cycleUnit);
  const cycleSub = useStou((s) => s.cycleSub);
  const cycleTopic = useStou((s) => s.cycleTopic);
  const deleteSub = useStou((s) => s.deleteSub);
  const deleteTopic = useStou((s) => s.deleteTopic);
  const markBook = useStou((s) => s.markBook);
  const deleteBook = useStou((s) => s.deleteBook);
  const [openUnits, setOpenUnits] = useState<string[]>(["10151:1"]);

  const stats = readingOverview(data.studyPlan);

  useEffect(() => {
    if (!focusBook) return;
    const el = document.getElementById(`book-${focusBook}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [focusBook, data.studyPlan.length]);

  return (
    <div className="space-y-4">
      <section className="rounded-3xl border border-line bg-card p-4 shadow-lift">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-seal-pass">เตรียมสอบ</p>
            <h2 className="text-lg font-semibold">ความคืบหน้าการอ่าน</h2>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-semibold leading-none tabular-nums">{stats.percent}%</div>
            <div className="text-xs text-muted">
              {stats.leavesDone}/{stats.leaves} เรื่อง
            </div>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-wash">
          <div className="h-full rounded-full bg-seal-pass" style={{ width: `${stats.percent}%` }} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <Stat label="เล่ม" value={`${stats.books}`} />
          <Stat label="หน่วยจบ" value={`${stats.done}/${stats.units}`} />
          <Stat label="ยังเหลือ" value={`${stats.remain}`} />
        </div>
      </section>

      <div className="flex gap-2">
        <button type="button" className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-ink text-sm font-semibold text-paper" onClick={() => setDrawer({ kind: "book" })}>
          <BookPlus className="size-4" /> เพิ่มหนังสือ
        </button>
      </div>

      <p className="px-1 text-xs text-muted">แตะไอคอนเพื่อสลับสถานะ: ยังไม่อ่าน → กำลังอ่าน → อ่านจบ</p>

      {data.studyPlan.length === 0 && (
        <div className="rounded-3xl border border-dashed border-line bg-card px-4 py-8 text-center">
          <p className="font-semibold">ยังไม่มีหนังสือในรายการ</p>
          <p className="text-sm text-muted">เพิ่มจากวิชาในหลักสูตร หรือเปิดตัวอย่างไทยศึกษา</p>
        </div>
      )}

      {data.studyPlan.map((book) => {
        const p = bookProgress(book);
        const open = openBooks.includes(book.courseCode);
        const allDone = p.total > 0 && p.done === p.total;
        return (
          <article key={book.courseCode} id={`book-${book.courseCode}`} className="overflow-hidden rounded-3xl border border-line bg-card">
            <button type="button" className="flex w-full items-start gap-3 p-3 text-left" onClick={() => toggleBook(book.courseCode)}>
              <div className="relative grid size-12 place-items-center">
                <svg viewBox="0 0 36 36" className="absolute inset-0 size-12 -rotate-90">
                  <circle cx="18" cy="18" r="15" className="stroke-wash" strokeWidth="3" fill="none" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    className="stroke-seal-pass"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(p.percent / 100) * 94} 94`}
                  />
                </svg>
                <span className="font-display text-xs font-semibold tabular-nums">{p.percent}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm font-semibold">{book.courseCode}</span>
                  <span className="text-xs text-muted">
                    {p.done}/{p.total} หน่วย
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug">{book.courseNameTh}</h3>
                <p className="truncate text-xs text-muted">{book.bookTitle}</p>
              </div>
              <ChevronDown className={cn("mt-1 size-4 shrink-0 text-muted transition", open && "rotate-180")} />
            </button>

            {open && (
              <div className="space-y-2 border-t border-line px-3 py-3">
                <div className="flex flex-wrap gap-2">
                  <Mini onClick={() => markBook(book.courseCode, !allDone)}>{allDone ? "รีเซ็ตทั้งเล่ม" : "ติ๊กจบทั้งเล่ม"}</Mini>
                  <Mini onClick={() => setDrawer({ kind: "unit", code: book.courseCode })}>เพิ่มหน่วย</Mini>
                  <Mini
                    danger
                    onClick={() => {
                      if (confirm(`ลบแผนอ่านวิชา ${book.courseCode}?`)) deleteBook(book.courseCode);
                    }}
                  >
                    ลบเล่ม
                  </Mini>
                </div>

                <ol className="space-y-1.5">
                  {(book.units || []).map((unit) => {
                    const key = `${book.courseCode}:${unit.unit}`;
                    const st = unitStatus(unit);
                    const unitOpen = openUnits.includes(key);
                    return (
                      <li key={key} className="rounded-2xl bg-paper">
                        <div className="flex items-center gap-2 p-1.5">
                          <button type="button" aria-label={stampLabel(st, `หน่วย ${unit.unit}`)} title={stampLabel(st, `หน่วย ${unit.unit}`)} className={cn("grid size-11 shrink-0 place-items-center rounded-xl", stampClass(st))} onClick={() => cycleUnit(book.courseCode, unit.unit)}>
                            <StampIcon status={st} />
                          </button>
                          <button type="button" className="min-w-0 flex-1 text-left" onClick={() => setOpenUnits((cur) => (cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]))}>
                            <span className="text-xs text-muted">หน่วย {unit.unit}</span>
                            <p className="text-sm font-medium leading-snug">{unit.title}</p>
                          </button>
                          <button type="button" aria-label="เพิ่มตอนย่อย" className="grid size-10 place-items-center rounded-xl text-muted" onClick={() => setDrawer({ kind: "subunit", code: book.courseCode, unit: unit.unit })}>
                            <Plus className="size-4" />
                          </button>
                        </div>
                        {unitOpen && (
                          <ul className="space-y-1 px-2 pb-2">
                            {(unit.subUnits || []).map((sub) => {
                              const ss = subStatus(sub);
                              return (
                                <li key={sub.id} className="rounded-xl border border-line bg-card">
                                  <div className="flex items-center gap-2 p-1.5">
                                    <button type="button" aria-label={stampLabel(ss, `ตอน ${sub.id}`)} title={stampLabel(ss, `ตอน ${sub.id}`)} className={cn("grid size-10 shrink-0 place-items-center rounded-lg", stampClass(ss))} onClick={() => cycleSub(book.courseCode, unit.unit, sub.id)}>
                                      <StampIcon status={ss} />
                                    </button>
                                    <div className="min-w-0 flex-1">
                                      <p className="text-xs text-muted">ตอน {sub.id}</p>
                                      <p className="text-sm leading-snug">{sub.title}</p>
                                    </div>
                                    <button type="button" aria-label="เพิ่มเรื่อง" className="grid size-10 place-items-center text-muted" onClick={() => setDrawer({ kind: "topic", code: book.courseCode, unit: unit.unit, subId: String(sub.id) })}>
                                      <Plus className="size-4" />
                                    </button>
                                    <button
                                      type="button"
                                      aria-label="ลบตอน"
                                      className="grid size-10 place-items-center text-seal-fail"
                                      onClick={() => {
                                        if (confirm(`ลบตอน ${sub.id}?`)) deleteSub(book.courseCode, unit.unit, String(sub.id));
                                      }}
                                    >
                                      <Trash2 className="size-4" />
                                    </button>
                                  </div>
                                  {(sub.topics || []).length > 0 && (
                                    <ul className="space-y-1 px-2 pb-2">
                                      {sub.topics?.map((topic) => {
                                        const ts = topicStatus(topic);
                                        return (
                                          <li key={topic.id} className="flex items-center gap-2 rounded-lg bg-paper px-1.5 py-1">
                                            <button type="button" aria-label={stampLabel(ts, `เรื่อง ${topic.id}`)} title={stampLabel(ts, `เรื่อง ${topic.id}`)} className={cn("grid size-9 shrink-0 place-items-center rounded-lg", stampClass(ts))} onClick={() => cycleTopic(book.courseCode, unit.unit, String(sub.id), String(topic.id))}>
                                              <StampIcon status={ts} />
                                            </button>
                                            <div className="min-w-0 flex-1">
                                              <p className="text-xs text-muted">{topic.id}</p>
                                              <p className="text-sm leading-snug">{topic.title}</p>
                                            </div>
                                            <button
                                              type="button"
                                              aria-label="ลบเรื่อง"
                                              className="grid size-9 place-items-center text-seal-fail"
                                              onClick={() => {
                                                if (confirm(`ลบเรื่อง ${topic.id}?`)) deleteTopic(book.courseCode, unit.unit, String(sub.id), String(topic.id));
                                              }}
                                            >
                                              <Trash2 className="size-3.5" />
                                            </button>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                            {(unit.subUnits || []).length === 0 && <li className="px-2 text-xs text-muted">ยังไม่มีตอนย่อย</li>}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-paper px-2 py-2">
      <div className="font-display text-lg font-semibold tabular-nums">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}

function Mini({ children, onClick, danger }: { children: string; onClick: () => void; danger?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={cn("h-9 rounded-full border px-3 text-xs font-semibold", danger ? "border-seal-fail text-seal-fail" : "border-line")}>
      {children}
    </button>
  );
}
