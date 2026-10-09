import {
  ArrowLeftRight,
  Award,
  BadgeCheck,
  BookMarked,
  CircleMinus,
  RotateCcw,
  SunMedium,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import type { CourseStatus, ExamType } from "@/lib/stou/types";

export const STATUS_SEAL: Record<CourseStatus, { icon: LucideIcon; bg: string; bar: string }> = {
  will_take: { icon: BookMarked, bg: "bg-seal-regular", bar: "bg-seal-regular" },
  will_take_samrit: { icon: Award, bg: "bg-seal-samrit", bar: "bg-seal-samrit" },
  will_take_summer: { icon: SunMedium, bg: "bg-seal-summer", bar: "bg-seal-summer" },
  will_take_retake: { icon: RotateCcw, bg: "bg-seal-retake", bar: "bg-seal-retake" },
  failed: { icon: XCircle, bg: "bg-seal-fail", bar: "bg-seal-fail" },
  passed: { icon: BadgeCheck, bg: "bg-seal-pass", bar: "bg-seal-pass" },
  transferred: { icon: ArrowLeftRight, bg: "bg-seal-move", bar: "bg-seal-move" },
  not_taken: { icon: CircleMinus, bg: "bg-seal-idle", bar: "bg-seal-idle" },
};

export const EXAM_BAR: Record<ExamType, string> = {
  regular: "bg-seal-regular",
  samrit: "bg-seal-samrit",
  summer: "bg-seal-summer",
  retake: "bg-seal-retake",
};

export function Seal({ status, className = "size-9" }: { status?: string; className?: string }) {
  const meta = STATUS_SEAL[(status as CourseStatus) || "not_taken"] || STATUS_SEAL.not_taken;
  const Icon = meta.icon;
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl text-on-seal ${meta.bg} ${className}`}>
      <Icon className="size-[55%]" strokeWidth={2.2} />
    </span>
  );
}
