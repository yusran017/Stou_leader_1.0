import { saveTextFile } from "./files";
import { bookProgress, creditBuckets, statusLabel, timesOf } from "./logic";
import type { StouData } from "./types";

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;")
    .replace(/"/g, "\u0026quot;");
}

function cell(val: unknown, style = "Cell", type: "String" | "Number" = "String", span = 0) {
  const merge = span > 0 ? ` ss:MergeAcross="${span}"` : "";
  const t = type === "Number" && typeof val === "number" ? "Number" : "String";
  return `<Cell ss:StyleID="${style}"${merge}><Data ss:Type="${t}">${esc(val)}</Data></Cell>`;
}

function row(cells: string[], h = 20) {
  return `<Row ss:Height="${h}">${cells.join("")}</Row>`;
}

function sheet(name: string, cols: string, rows: string[]) {
  return `<Worksheet ss:Name="${esc(name)}"><Table>${cols}${rows.join("")}</Table><WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"><ProtectObjects>False</ProtectObjects><ProtectScenarios>False</ProtectScenarios></WorksheetOptions></Worksheet>`;
}

const STYLES = `
<Styles>
 <Style ss:ID="Title"><Font ss:FontName="Leelawadee UI" ss:Size="16" ss:Bold="1" ss:Color="#8F3416"/><Interior ss:Color="#F3ECDF" ss:Pattern="Solid"/></Style>
 <Style ss:ID="Sub"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Color="#6F655C"/></Style>
 <Style ss:ID="Head"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Bold="1" ss:Color="#FFF7F2"/><Interior ss:Color="#1C1612" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/></Style>
 <Style ss:ID="Sec"><Font ss:FontName="Leelawadee UI" ss:Size="11" ss:Bold="1" ss:Color="#8F3416"/><Interior ss:Color="#F6E4D6" ss:Pattern="Solid"/></Style>
 <Style ss:ID="Cell"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Color="#1C1612"/><Alignment ss:Vertical="Center" ss:WrapText="1"/></Style>
 <Style ss:ID="Bold"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Bold="1" ss:Color="#1C1612"/></Style>
 <Style ss:ID="Mid"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Color="#1C1612"/><Alignment ss:Horizontal="Center" ss:Vertical="Center"/></Style>
 <Style ss:ID="Good"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Bold="1" ss:Color="#145C3A"/><Interior ss:Color="#E5F6EE" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center"/></Style>
 <Style ss:ID="Bad"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Bold="1" ss:Color="#9F1239"/><Interior ss:Color="#FDE8EE" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center"/></Style>
 <Style ss:ID="Wait"><Font ss:FontName="Leelawadee UI" ss:Size="10" ss:Bold="1" ss:Color="#243E6A"/><Interior ss:Color="#E7EEF8" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center"/></Style>
</Styles>`;

export function buildExcel(data: StouData) {
  const student = data.student;
  const curriculum = data.curriculum;
  const courses = data.courses;
  const books = data.studyPlan;
  const k = creditBuckets(curriculum);
  const remainCr = Math.max(0, 126 - k.earned);
  const remainCourses = Math.ceil(remainCr / 6);
  const semesters = Math.ceil(remainCourses / 3);
  const nowTh = new Date().toLocaleString("th-TH", { dateStyle: "long", timeStyle: "short" });

  const s1 = [
    row([cell("STOU Ledger — รายงานความก้าวหน้าการศึกษา มสธ.", "Title", "String", 5)], 28),
    row([cell(`ออกเมื่อ ${nowTh}`, "Sub", "String", 5)]),
    row([cell("ข้อมูลนักศึกษา", "Sec", "String", 5)]),
    row([cell("รหัสนักศึกษา", "Bold"), cell(student.studentId || "-"), cell("ชื่อ", "Bold"), cell(student.name || "-", "Cell", "String", 2)]),
    row([cell("สาขา", "Bold"), cell(student.faculty || "-", "Cell", "String", 2), cell("วิชาเอก", "Bold"), cell(student.major || "-", "Cell", "String", 1)]),
    row([cell("ศูนย์", "Bold"), cell(student.center || "-", "Cell", "String", 2), cell("ภาค / ปี", "Bold"), cell(`${student.semester || "-"} / ${student.academicYear || "-"}`)]),
    row([cell("ความก้าวหน้า", "Sec", "String", 5)]),
    row([cell("หน่วยกิตสะสม", "Head"), cell("เปอร์เซ็นต์", "Head"), cell("คงเหลือ", "Head"), cell("ชุดวิชาที่เหลือโดยประมาณ", "Head"), cell("ภาคเรียนโดยประมาณ", "Head"), cell("สนามสอบ", "Head")]),
    row([
      cell(`${k.earned} / 126`, "Good"),
      cell(`${k.percent}%`, "Good"),
      cell(`${remainCr}`, "Mid", "Number"),
      cell(remainCourses, "Mid", "Number"),
      cell(semesters, "Mid", "Number"),
      cell(data.examCenter.centerName || "-"),
    ]),
    row([cell("หมวด", "Head"), cell("เป้าหมาย", "Head"), cell("สะสม", "Head"), cell("คงเหลือ", "Head"), cell("ความคืบหน้า", "Head"), cell("", "Head")]),
    row([cell("ศึกษาทั่วไป"), cell(30, "Mid", "Number"), cell(k.gen, "Mid", "Number"), cell(Math.max(0, 30 - k.gen), "Mid", "Number"), cell(`${Math.round((k.gen / 30) * 100)}%`, "Mid"), cell("")]),
    row([cell("เฉพาะบังคับ"), cell(78, "Mid", "Number"), cell(k.core, "Mid", "Number"), cell(Math.max(0, 78 - k.core), "Mid", "Number"), cell(`${Math.round((k.core / 78) * 100)}%`, "Mid"), cell("")]),
    row([cell("เฉพาะเลือก"), cell(12, "Mid", "Number"), cell(k.elec, "Mid", "Number"), cell(Math.max(0, 12 - k.elec), "Mid", "Number"), cell(`${Math.round((k.elec / 12) * 100)}%`, "Mid"), cell("")]),
    row([cell("เลือกเสรี"), cell(6, "Mid", "Number"), cell(k.free, "Mid", "Number"), cell(Math.max(0, 6 - k.free), "Mid", "Number"), cell(`${Math.round((k.free / 6) * 100)}%`, "Mid"), cell("")]),
    row([cell("สถานะ", "Sec", "String", 5)]),
    row([cell("ผ่าน", "Bold"), cell(k.passed, "Mid", "Number"), cell("เทียบโอน", "Bold"), cell(k.transferred, "Mid", "Number"), cell("จะสอบ", "Bold"), cell(k.scheduled, "Mid", "Number")]),
    row([cell("ไม่ผ่าน", "Bold"), cell(k.failed, "Mid", "Number"), cell("ยังไม่ลง", "Bold"), cell(k.notTaken, "Mid", "Number"), cell("ทั้งหมด", "Bold"), cell(curriculum.length, "Mid", "Number")]),
  ];

  const s2 = [
    row([cell("ตารางสอบและสนามสอบ", "Title", "String", 11)], 28),
    row([cell(`${data.examCenter.centerName || "มสธ."} ${data.examCenter.province || ""} · ${data.examCenter.locationAddress || ""}`, "Sub", "String", 11)]),
    row(
      ["ลำดับ", "รหัส", "ชื่อชุดวิชา", "หน่วยกิต", "ประเภท", "รูปแบบ", "วันที่", "เวลา", "สนาม", "ห้อง", "แถว", "ที่นั่ง"].map((h) =>
        cell(h, "Head"),
      ),
    ),
  ];
  if (!courses.length) s2.push(row([cell("ยังไม่มีวิชาในตารางสอบ", "Mid", "String", 11)]));
  courses.forEach((c, i) => {
    const t = timesOf(c);
    s2.push(
      row([
        cell(i + 1, "Mid", "Number"),
        cell(c.courseCode, "Bold"),
        cell(c.courseNameTh),
        cell(c.credits || 6, "Mid", "Number"),
        cell(c.examTypeName || ""),
        cell(c.examFormat === "online" ? "ออนไลน์" : "สนามสอบ", c.examFormat === "online" ? "Wait" : "Good"),
        cell(c.examDateTh || c.examDate || "ยังไม่กำหนด"),
        cell(`${t.start} - ${t.end}`),
        cell(c.examVenue || "-"),
        cell(c.examRoom || "-"),
        cell(c.examRow || "-"),
        cell(c.seatNumber || "-"),
      ]),
    );
  });
  s2.push(row([cell("เข้าสนามก่อนเวลาอย่างน้อย 30 นาที เตรียมบัตรประชาชน บัตรนักศึกษา ดินสอ 2B", "Sub", "String", 11)]));

  const s3 = [
    row([cell("ความคืบหน้าการอ่านหนังสือ", "Title", "String", 6)], 28),
    row(["รหัส", "วิชา", "หน่วย", "ชื่อหน่วย", "สถานะ", "ตอนย่อยที่จบ", "เรื่องที่จบ"].map((h) => cell(h, "Head"))),
  ];
  for (const b of books) {
    const p = bookProgress(b);
    if (!b.units?.length) {
      s3.push(row([cell(b.courseCode, "Bold"), cell(b.courseNameTh), cell("-"), cell(b.bookTitle || ""), cell("ยังไม่มีหน่วย"), cell(""), cell("")]));
      continue;
    }
    for (const u of b.units) {
      const subs = u.subUnits || [];
      const subDone = subs.filter((s) => s.completed || s.status === "completed").length;
      const topics = subs.flatMap((s) => s.topics || []);
      const topicDone = topics.filter((t) => t.completed || t.status === "completed").length;
      const st = u.status === "completed" || u.completed ? "อ่านจบ" : u.status === "reading" ? "กำลังอ่าน" : "ยังไม่อ่าน";
      const style = st === "อ่านจบ" ? "Good" : st === "กำลังอ่าน" ? "Wait" : "Cell";
      s3.push(
        row([
          cell(b.courseCode, "Bold"),
          cell(b.courseNameTh),
          cell(u.unit, "Mid", "Number"),
          cell(u.title),
          cell(st, style),
          cell(subs.length ? `${subDone}/${subs.length}` : "-", "Mid"),
          cell(topics.length ? `${topicDone}/${topics.length}` : "-", "Mid"),
        ]),
      );
    }
    s3.push(row([cell(""), cell(`รวม ${b.courseCode}`, "Bold"), cell(`${p.done}/${p.total}`), cell(`${p.percent}%`), cell(""), cell(""), cell("")]));
  }
  if (!books.length) s3.push(row([cell("ยังไม่มีรายการอ่าน", "Mid", "String", 6)]));

  const s4 = [
    row([cell("โครงสร้างหลักสูตร 126 หน่วยกิต", "Title", "String", 5)], 28),
    row(["รหัส", "ชื่อชุดวิชา", "หน่วยกิต", "หมวด", "สถานะ", "อยู่ในตารางสอบ"].map((h) => cell(h, "Head"))),
  ];
  for (const c of curriculum) {
    const onExam = courses.some((x) => x.courseCode === c.courseCode);
    const st = c.status || "not_taken";
    const style = st === "passed" || st === "transferred" ? "Good" : st === "failed" ? "Bad" : st.startsWith("will_") ? "Wait" : "Cell";
    s4.push(
      row([
        cell(c.courseCode, "Bold"),
        cell(c.courseNameTh),
        cell(c.credits || 6, "Mid", "Number"),
        cell(c.category || ""),
        cell(statusLabel(st), style),
        cell(onExam ? "ใช่" : "ไม่", "Mid"),
      ]),
    );
  }

  const left = curriculum.filter((c) => !c.status || c.status === "not_taken" || c.status === "failed");
  const s5 = [
    row([cell("แผนที่เหลือและวิชาที่ยังไม่จบ", "Title", "String", 4)], 28),
    row([cell(`เหลือประมาณ ${remainCr} หน่วยกิต · ${remainCourses} ชุดวิชา · ${semesters} ภาคเรียน (คิดชุดวิชาละ 6 นก. เทอมละ 3 ชุด)`, "Sub", "String", 4)]),
    row(["รหัส", "ชื่อชุดวิชา", "สถานะ", "หมวด", "หน่วยกิต"].map((h) => cell(h, "Head"))),
  ];
  for (const c of left) {
    s5.push(row([cell(c.courseCode, "Bold"), cell(c.courseNameTh), cell(statusLabel(c.status), c.status === "failed" ? "Bad" : "Cell"), cell(c.category || ""), cell(c.credits || 6, "Mid", "Number")]));
  }
  if (!left.length) s5.push(row([cell("ไม่มีวิชาค้างในสถานะยังไม่ลงหรือไม่ผ่าน", "Good", "String", 4)]));

  const cols6 = "<Column ss:Width=\"160\"/><Column ss:Width=\"120\"/><Column ss:Width=\"160\"/><Column ss:Width=\"140\"/><Column ss:Width=\"120\"/><Column ss:Width=\"160\"/>";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Author>STOU Ledger</Author>
  <LastAuthor>STOU Ledger</LastAuthor>
  <Created>${new Date().toISOString()}</Created>
  <Company>Sukhothai Thammathirat Open University</Company>
  <Version>16.00</Version>
 </DocumentProperties>
 <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
  <WindowHeight>12000</WindowHeight>
  <WindowWidth>24000</WindowWidth>
  <ProtectStructure>False</ProtectStructure>
  <ProtectWindows>False</ProtectWindows>
 </ExcelWorkbook>
${STYLES}
${sheet("สรุปภาพรวม", cols6, s1)}
${sheet("ตารางสอบ", "<Column ss:Width=\"40\"/><Column ss:Width=\"70\"/><Column ss:Width=\"220\"/><Column ss:Width=\"60\"/><Column ss:Width=\"140\"/><Column ss:Width=\"80\"/><Column ss:Width=\"180\"/><Column ss:Width=\"90\"/><Column ss:Width=\"160\"/><Column ss:Width=\"120\"/><Column ss:Width=\"50\"/><Column ss:Width=\"60\"/>", s2)}
${sheet("การอ่านหนังสือ", "<Column ss:Width=\"70\"/><Column ss:Width=\"180\"/><Column ss:Width=\"50\"/><Column ss:Width=\"260\"/><Column ss:Width=\"90\"/><Column ss:Width=\"80\"/><Column ss:Width=\"80\"/>", s3)}
${sheet("โครงสร้างหลักสูตร", "<Column ss:Width=\"70\"/><Column ss:Width=\"260\"/><Column ss:Width=\"70\"/><Column ss:Width=\"280\"/><Column ss:Width=\"180\"/><Column ss:Width=\"80\"/>", s4)}
${sheet("วิชาที่ยังเหลือ", "<Column ss:Width=\"70\"/><Column ss:Width=\"260\"/><Column ss:Width=\"180\"/><Column ss:Width=\"280\"/><Column ss:Width=\"70\"/>", s5)}
</Workbook>`;
  return xml;
}

export function downloadExcel(data: StouData) {
  const xml = buildExcel(data);
  const year = new Date().getFullYear() + 543;
  const name = `STOU_Academic_Report_5Sheets_${data.student.studentId || "report"}_${year}.xls`;
  return saveTextFile(name, xml, "application/vnd.ms-excel");
}
