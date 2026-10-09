import { useEffect, useSyncExternalStore } from "react";
import { BookOpenText, CalendarRange, Download, GraduationCap, Settings } from "lucide-react";
import { bindInstallPrompt, installReady, installedAlready, runInstall, subscribeInstall } from "@/lib/stou/install";
import { useStou } from "@/lib/stou/store";
import type { TabId } from "@/lib/stou/types";
import { cn } from "@/lib/utils";
import { ExamPane } from "./exam-pane";
import { ReadingPane } from "./reading-pane";
import { PlanPane } from "./plan-pane";
import { AppDrawers } from "./drawers";

const TABS: { id: TabId; label: string; icon: typeof CalendarRange }[] = [
  { id: "exams", label: "ตารางสอบ", icon: CalendarRange },
  { id: "reading", label: "อ่านหนังสือ", icon: BookOpenText },
  { id: "plan", label: "หลักสูตร", icon: GraduationCap },
];

function Mark() {
  return (
    <svg viewBox="0 0 48 48" className="size-10" aria-hidden>
      <rect width="48" height="48" rx="14" className="fill-saffron" />
      <path d="M12 18.5h24v14.2c0 1.2-1 2.3-2.4 2.3H14.4c-1.4 0-2.4-1-2.4-2.3V18.5Z" className="fill-on-saffron" />
      <path d="M12 16.2 24 10l12 6.2v2.3H12v-2.3Z" className="fill-on-seal" fillOpacity="0.85" />
      <path d="M24 18.8v14" className="stroke-saffron" strokeWidth="1.4" />
      <circle cx="34.5" cy="31.5" r="5.2" className="fill-seal-pass" />
      <path d="M32.2 31.5 33.8 33.2 36.8 29.8" className="stroke-on-seal" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppShell() {
  const tab = useStou((s) => s.tab);
  const setTab = useStou((s) => s.setTab);
  const boot = useStou((s) => s.boot);
  const theme = useStou((s) => s.theme);
  const booted = useStou((s) => s.booted);
  const toast = useStou((s) => s.toast);
  const dismiss = useStou((s) => s.dismissToast);
  const student = useStou((s) => s.data.student);
  const setDrawer = useStou((s) => s.setDrawer);
  const notify = useStou((s) => s.notify);
  const canInstall = useSyncExternalStore(subscribeInstall, installReady, () => false);
  const standalone = useSyncExternalStore(subscribeInstall, installedAlready, () => false);

  useEffect(() => bindInstallPrompt(), []);

  useEffect(() => {
    boot();
  }, [boot]);

  useEffect(() => {
    if (!import.meta.env.PROD || !("serviceWorker" in navigator)) return;
    const base = import.meta.env.BASE_URL || "/";
    navigator.serviceWorker.register(`${base}sw.js`, { scope: base }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!booted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, booted]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(dismiss, 4600);
    return () => window.clearTimeout(id);
  }, [toast, dismiss]);

  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Mark />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <h1 className="font-display text-lg font-semibold tracking-tight">STOU Ledger</h1>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-saffron">มสธ.</span>
            </div>
            <p className="truncate text-sm text-muted">
              {student.name || "นักศึกษา"} · {student.studentId || "ยังไม่ระบุรหัส"}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-card text-ink"
            aria-label="การตั้งค่าและข้อมูล"
            onClick={() => setDrawer({ kind: "settings" })}
          >
            <Settings className="size-5" strokeWidth={2.1} />
          </button>
          {!standalone && (
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-2xl bg-saffron text-on-saffron"
              aria-label="ติดตั้งแอป"
              onClick={async () => {
                if (canInstall) {
                  const ok = await runInstall();
                  if (ok) notify("ติดตั้งแอปแล้ว ไอคอนจะอยู่ที่หน้าจอหลัก");
                  return;
                }
                notify("เปิดเมนู ⋮ ของ Chrome แล้วเลือก ติดตั้งแอป หรือ เพิ่มไปที่หน้าจอหลัก", "warn");
              }}
            >
              <Download className="size-5" strokeWidth={2.2} />
            </button>
          )}
        </div>
      </header>

      <main className="px-4 pt-4 pb-32">
        {tab === "exams" && <ExamPane />}
        {tab === "reading" && <ReadingPane />}
        {tab === "plan" && <PlanPane />}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        aria-label="เมนูหลัก"
      >
        <div className="mx-auto flex max-w-lg gap-1 rounded-full border border-line bg-card p-1 shadow-lift">
          {TABS.map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold transition",
                  active ? "bg-ink text-paper" : "text-muted",
                )}
              >
                <Icon className="size-4" strokeWidth={2.2} />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4">
          <div
            className={cn(
              "pointer-events-auto max-w-sm rounded-full px-4 py-2.5 text-sm font-medium shadow-lift",
              toast.tone === "bad" && "bg-seal-fail text-on-seal",
              toast.tone === "warn" && "bg-seal-summer text-on-seal",
              toast.tone === "ok" && "bg-ink text-paper",
            )}
            role="status"
          >
            {toast.msg}
          </div>
        </div>
      )}

      <AppDrawers />
    </div>
  );
}
