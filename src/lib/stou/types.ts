export type CourseStatus =
  | "not_taken"
  | "will_take"
  | "will_take_samrit"
  | "will_take_summer"
  | "will_take_retake"
  | "passed"
  | "failed"
  | "transferred";

export type ExamType = "regular" | "samrit" | "summer" | "retake";
export type ExamFormat = "onsite" | "online";
export type ReadStatus = "unread" | "reading" | "completed";
export type TabId = "exams" | "reading" | "plan";
export type ThemeId = "day" | "night";

export interface Student {
  studentId: string;
  name: string;
  degree?: string;
  faculty?: string;
  major?: string;
  center?: string;
  semester?: string;
  academicYear?: string;
}

export interface ExamCenter {
  centerCode?: string;
  centerName?: string;
  province?: string;
  locationAddress?: string;
  googleMapsQuery?: string;
  examFormat?: string;
  examFormatText?: string;
  rulesNote?: string;
}

export interface ExamCourse {
  courseCode: string;
  courseNameTh: string;
  courseNameEn?: string;
  credits?: number;
  examType?: ExamType | string;
  examTypeName?: string;
  examFormat?: ExamFormat | string;
  examFormatName?: string;
  examDate?: string;
  examDateTh?: string;
  examSession?: "morning" | "afternoon" | string;
  startTime?: string;
  endTime?: string;
  examTimeTh?: string;
  examRoom?: string;
  seatNumber?: string;
  examRow?: string;
  examVenue?: string;
}

export interface CurriculumCourse {
  courseCode: string;
  courseNameTh: string;
  credits?: number;
  category?: string;
  status?: CourseStatus | string;
}

export interface Topic {
  id: string;
  title: string;
  completed?: boolean;
  status?: ReadStatus | string;
}

export interface SubUnit {
  id: string;
  title: string;
  completed?: boolean;
  status?: ReadStatus | string;
  topics?: Topic[];
}

export interface Unit {
  unit: number;
  title: string;
  completed?: boolean;
  status?: ReadStatus | string;
  subUnits?: SubUnit[];
}

export interface Book {
  courseCode: string;
  courseNameTh: string;
  bookTitle?: string;
  totalUnits?: number;
  units: Unit[];
}

export interface StouData {
  student: Student;
  examCenter: ExamCenter;
  courses: ExamCourse[];
  curriculum: CurriculumCourse[];
  studyPlan: Book[];
}

export interface ToastNote {
  id: number;
  msg: string;
  tone: "ok" | "warn" | "bad";
}

export type DrawerState =
  | null
  | { kind: "settings" }
  | { kind: "exam"; code: string }
  | { kind: "status"; code: string }
  | { kind: "book" }
  | { kind: "unit"; code: string }
  | { kind: "subunit"; code: string; unit: number }
  | { kind: "topic"; code: string; unit: number; subId: string };
