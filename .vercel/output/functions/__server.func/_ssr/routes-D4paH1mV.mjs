import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as Award, C as CalendarRange, D as BookOpenText, E as BookPlus, O as BookMarked, S as Check, T as Building2, _ as Download, a as Sun, b as CircleMinus, c as Search, d as Pencil, f as Moon, g as FileSpreadsheet, h as GraduationCap, i as Sunset, j as ArrowLeftRight, k as BadgeCheck, l as RotateCcw, m as MapPin, o as SunMedium, p as Monitor, r as Trash2, s as Settings, t as Upload, u as Plus, v as Clock3, w as CalendarPlus, x as ChevronDown, y as CircleX } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4paH1mV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sampleData = {
	"student": {
		"studentId": "6630018899",
		"name": "นายสมชาย ใจดีมุ่งมั่น",
		"degree": "ปริญญาตรี",
		"faculty": "สาขาวิชาวิทยาศาสตร์และเทคโนโลยี",
		"major": "วิทยาการคอมพิวเตอร์และสารสนเทศ",
		"center": "ศูนย์วิทยพัฒนา มสธ. นนทบุรี",
		"semester": "1",
		"academicYear": "2567"
	},
	"examCenter": {
		"centerName": "โรงเรียนเบญจมราชูทิศ",
		"province": "นนทบุรี",
		"locationAddress": "ถนนประชาราษฎร์ ตำบลสวนใหญ่ อำเภอเมือง จังหวัดนนทบุรี",
		"googleMapsQuery": "โรงเรียนเบญจมราชูทิศ นนทบุรี"
	},
	"courses": [
		{
			"courseCode": "10151",
			"courseNameTh": "ไทยศึกษา",
			"credits": 6,
			"examType": "regular",
			"examTypeName": "สอบไล่ประจำภาคปกติ",
			"examFormat": "onsite",
			"examFormatName": "สนามสอบ",
			"examDate": "2026-11-21",
			"examDateTh": "วันเสาร์ที่ 21 พฤศจิกายน 2569",
			"examSession": "morning",
			"examTimeTh": "คาบเช้า 09:00 - 12:00 น.",
			"examRoom": "อาคาร 3 ห้อง 324",
			"seatNumber": "042",
			"examRow": "4",
			"examVenue": "โรงเรียนเบญจมราชูทิศ"
		},
		{
			"courseCode": "96414",
			"courseNameTh": "การโปรแกรมคอมพิวเตอร์",
			"credits": 6,
			"examType": "samrit",
			"examTypeName": "โครงการสัมฤทธิบัตร",
			"examFormat": "online",
			"examFormatName": "สอบออนไลน์",
			"examDate": "2026-11-21",
			"examDateTh": "วันเสาร์ที่ 21 พฤศจิกายน 2569",
			"examSession": "afternoon",
			"examTimeTh": "คาบบ่าย 13:30 - 16:30 น.",
			"examRoom": "",
			"seatNumber": "",
			"examRow": "",
			"examVenue": "สอบออนไลน์ มสธ."
		},
		{
			"courseCode": "96408",
			"courseNameTh": "การจัดการระบบฐานข้อมูล",
			"credits": 6,
			"examType": "retake",
			"examTypeName": "การสอบซ่อม (Make-up)",
			"examFormat": "onsite",
			"examFormatName": "สนามสอบ",
			"examDate": "2026-11-22",
			"examDateTh": "วันอาทิตย์ที่ 22 พฤศจิกายน 2569",
			"examSession": "morning",
			"examTimeTh": "คาบเช้า 09:00 - 12:00 น.",
			"examRoom": "อาคาร 2 ห้อง 201",
			"seatNumber": "018",
			"examRow": "2",
			"examVenue": "โรงเรียนเบญจมราชูทิศ"
		}
	],
	"curriculum": [
		{
			"courseCode": "10103",
			"courseNameTh": "ทักษะชีวิต",
			"credits": 6,
			"category": "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
			"status": "passed"
		},
		{
			"courseCode": "10111",
			"courseNameTh": "ภาษาอังกฤษเพื่อการสื่อสาร",
			"credits": 6,
			"category": "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
			"status": "passed"
		},
		{
			"courseCode": "10131",
			"courseNameTh": "สังคมมนุษย์",
			"credits": 6,
			"category": "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
			"status": "transferred"
		},
		{
			"courseCode": "10141",
			"courseNameTh": "วิทยาศาสตร์ เทคโนโลยีและสิ่งแวดล้อมเพื่อชีวิต",
			"credits": 6,
			"category": "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "10151",
			"courseNameTh": "ไทยศึกษา",
			"credits": 6,
			"category": "หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
			"status": "will_take"
		},
		{
			"courseCode": "96304",
			"courseNameTh": "การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "failed"
		},
		{
			"courseCode": "96407",
			"courseNameTh": "การพัฒนาระบบสารสนเทศ",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "96408",
			"courseNameTh": "การจัดการระบบฐานข้อมูล",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "will_take_retake"
		},
		{
			"courseCode": "96414",
			"courseNameTh": "การโปรแกรมคอมพิวเตอร์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "will_take_samrit"
		},
		{
			"courseCode": "99202",
			"courseNameTh": "การวิเคราะห์ข้อมูล",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99313",
			"courseNameTh": "การสื่อสารไร้สายและเครือข่าย",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99315",
			"courseNameTh": "สถาปัตยกรรมคอมพิวเตอร์และระบบปฏิบัติการ",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99409",
			"courseNameTh": "ประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศและการสื่อสาร",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99410",
			"courseNameTh": "การจัดการและการออกแบบระบบโทรคมนาคม",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99412",
			"courseNameTh": "หลักการและการบริหารเครือข่าย",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99419",
			"courseNameTh": "ความมั่นคงปลอดภัยไซเบอร์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "96102",
			"courseNameTh": "คณิตศาสตร์และสถิติสำหรับวิทยาศาสตร์และเทคโนโลยี",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (2 ชุดวิชา)",
			"status": "passed"
		},
		{
			"courseCode": "99203",
			"courseNameTh": "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "96411",
			"courseNameTh": "ระบบสารสนเทศและการจัดการความรู้",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "96412",
			"courseNameTh": "การบริหารโครงการด้านเทคโนโลยีสารสนเทศ",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99201",
			"courseNameTh": "วิทยาศาสตร์สำหรับเทคโนโลยีสารสนเทศและการสื่อสาร",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99301",
			"courseNameTh": "เทคโนโลยีการบริการผ่านเว็บและการประยุกต์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99314",
			"courseNameTh": "โครงสร้างข้อมูลและขั้นตอนวิธี",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99321",
			"courseNameTh": "การประยุกต์เทคโนโลยีสารสนเทศและการสื่อสารสำหรับผู้สูงอายุ",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99402",
			"courseNameTh": "การจัดการความมั่นคงปลอดภัยในระบบคอมพิวเตอร์",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99414",
			"courseNameTh": "เทคโนโลยีมัลติมีเดีย",
			"credits": 6,
			"category": "หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
			"status": "not_taken"
		},
		{
			"courseCode": "99999",
			"courseNameTh": "หมวดวิชาเลือกเสรี (เลือกชุดวิชาใดก็ได้ของ มสธ.)",
			"credits": 6,
			"category": "หมวดวิชาเลือกเสรี (1 ชุดวิชา)",
			"status": "not_taken"
		}
	],
	"studyPlan": [{
		"courseCode": "10151",
		"courseNameTh": "ไทยศึกษา",
		"bookTitle": "เอกสารการสอนชุดวิชาไทยศึกษา (15 หน่วย)",
		"totalUnits": 15,
		"units": [
			{
				"unit": 1,
				"title": "ความรู้ทั่วไปเกี่ยวกับไทยศึกษา",
				"completed": true,
				"subUnits": [
					{
						"id": "1.1",
						"title": "ความหมายและขอบข่ายของไทยศึกษา",
						"completed": true,
						"topics": [{
							"id": "1.1.1",
							"title": "ความหมายและเป้าหมายของไทยศึกษา",
							"completed": true
						}, {
							"id": "1.1.2",
							"title": "ขอบข่ายและประเด็นสำคัญในไทยศึกษา",
							"completed": true
						}]
					},
					{
						"id": "1.2",
						"title": "แนวคิดและทฤษฎีในการศึกษาไทย",
						"completed": true,
						"topics": [{
							"id": "1.2.1",
							"title": "แนวคิดเชิงโครงสร้างหน้าที่และพัฒนาการ",
							"completed": true
						}, {
							"id": "1.2.2",
							"title": "ทฤษฎีการเปลี่ยนแปลงทางสังคมและวัฒนธรรม",
							"completed": true
						}]
					},
					{
						"id": "1.3",
						"title": "ระเบียบวิธีและแหล่งข้อมูลไทยศึกษา",
						"completed": true
					}
				]
			},
			{
				"unit": 2,
				"title": "สิ่งแวดล้อมทางกายภาพกับวิถีชีวิตไทย",
				"completed": true,
				"subUnits": [
					{
						"id": "2.1",
						"title": "สภาพแวดล้อมทางภูมิศาสตร์ของไทย",
						"completed": true,
						"topics": [{
							"id": "2.1.1",
							"title": "ลักษณะภูมิประเทศและภูมิอากาศในแต่ละภาค",
							"completed": true
						}, {
							"id": "2.1.2",
							"title": "อิทธิพลของภูมิศาสตร์ต่อการตั้งถิ่นฐาน",
							"completed": true
						}]
					},
					{
						"id": "2.2",
						"title": "ทรัพยากรธรรมชาติกับวิถีชีวิตคนไทย",
						"completed": true
					},
					{
						"id": "2.3",
						"title": "นิเวศวัฒนธรรมและการปรับตัว",
						"completed": true
					}
				]
			},
			{
				"unit": 3,
				"title": "ระบบสังคมและสถาบันทางสังคมไทย",
				"completed": true,
				"subUnits": [
					{
						"id": "3.1",
						"title": "โครงสร้างและความสัมพันธ์ทางสังคมไทย",
						"completed": true
					},
					{
						"id": "3.2",
						"title": "ครอบครัว เครือญาติ และชุมชนไทย",
						"completed": true
					},
					{
						"id": "3.3",
						"title": "การจัดระเบียบและการเปลี่ยนแปลงทางสังคม",
						"completed": true
					}
				]
			},
			{
				"unit": 4,
				"title": "ระบบเศรษฐกิจไทย",
				"completed": true,
				"subUnits": [
					{
						"id": "4.1",
						"title": "วิวัฒนาการและโครงสร้างเศรษฐกิจไทย",
						"completed": true
					},
					{
						"id": "4.2",
						"title": "ภาคเกษตรกรรม อุตสาหกรรม และบริการ",
						"completed": true
					},
					{
						"id": "4.3",
						"title": "ปรัชญาเศรษฐกิจพอเพียงกับการพัฒนา",
						"completed": true
					}
				]
			},
			{
				"unit": 5,
				"title": "การเมืองการปกครองไทย",
				"completed": true,
				"subUnits": [
					{
						"id": "5.1",
						"title": "พัฒนาการทางการเมืองการปกครองไทย",
						"completed": true
					},
					{
						"id": "5.2",
						"title": "สถาบันการเมืองและรัฐธรรมนูญไทย",
						"completed": true
					},
					{
						"id": "5.3",
						"title": "การมีส่วนร่วมทางการเมืองของประชาชน",
						"completed": true
					}
				]
			},
			{
				"unit": 6,
				"title": "กฎหมายและกระบวนการยุติธรรมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "6.1",
						"title": "ประวัติศาสตร์และวิวัฒนาการกฎหมายไทย",
						"completed": false
					},
					{
						"id": "6.2",
						"title": "กฎหมายที่เกี่ยวข้องกับชีวิตประจำวัน",
						"completed": false
					},
					{
						"id": "6.3",
						"title": "ระบบและองค์กรในกระบวนการยุติธรรมไทย",
						"completed": false
					}
				]
			},
			{
				"unit": 7,
				"title": "ศาสนาและความเชื่อในสังคมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "7.1",
						"title": "พระพุทธศาสนากับสังคมไทย",
						"completed": false
					},
					{
						"id": "7.2",
						"title": "ศาสนาพราหมณ์-ฮินดู ศาสนาอิสลาม คริสต์",
						"completed": false
					},
					{
						"id": "7.3",
						"title": "ความเชื่อพื้นบ้านและพิธีกรรมในสังคมไทย",
						"completed": false
					}
				]
			},
			{
				"unit": 8,
				"title": "ภาษาและวรรณกรรมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "8.1",
						"title": "ลักษณะและวิวัฒนาการของภาษาไทย",
						"completed": false
					},
					{
						"id": "8.2",
						"title": "วรรณกรรมไทยสมัยโบราณถึงรัตนโกสินทร์",
						"completed": false
					},
					{
						"id": "8.3",
						"title": "วรรณกรรมร่วมสมัยและวรรณกรรมท้องถิ่น",
						"completed": false
					}
				]
			},
			{
				"unit": 9,
				"title": "ศิลปวัฒนธรรมและประเพณีไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "9.1",
						"title": "ทัศนศิลป์ สถาปัตยกรรม และประติมากรรมไทย",
						"completed": false
					},
					{
						"id": "9.2",
						"title": "ดนตรี นาฏศิลป์ และการละเล่นพื้นบ้าน",
						"completed": false
					},
					{
						"id": "9.3",
						"title": "ประเพณีและเทศกาลสำคัญของไทย",
						"completed": false
					}
				]
			},
			{
				"unit": 10,
				"title": "วิทยาศาสตร์ เทคโนโลยี และภูมิปัญญาไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "10.1",
						"title": "ภูมิปัญญาพื้นบ้านและการแพทย์แผนไทย",
						"completed": false
					},
					{
						"id": "10.2",
						"title": "การพัฒนาวิทยาศาสตร์และเทคโนโลยีในไทย",
						"completed": false
					},
					{
						"id": "10.3",
						"title": "การประยุกต์ภูมิปัญญากับเทคโนโลยีสมัยใหม่",
						"completed": false
					}
				]
			},
			{
				"unit": 11,
				"title": "การเปลี่ยนแปลงทางสังคมและวัฒนธรรมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "11.1",
						"title": "ปัจจัยที่ทำให้เกิดการเปลี่ยนแปลงทางสังคม",
						"completed": false
					},
					{
						"id": "11.2",
						"title": "กระแสโลกาภิวัตน์กับวัฒนธรรมไทย",
						"completed": false
					},
					{
						"id": "11.3",
						"title": "การปรับตัวและการอนุรักษ์เอกลักษณ์ไทย",
						"completed": false
					}
				]
			},
			{
				"unit": 12,
				"title": "ปัญหาและแนวทางการพัฒนาสังคมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "12.1",
						"title": "ปัญหาสังคม ความยากจน และความเหลื่อมล้ำ",
						"completed": false
					},
					{
						"id": "12.2",
						"title": "ปัญหาสิ่งแวดล้อมและคุณภาพชีวิต",
						"completed": false
					},
					{
						"id": "12.3",
						"title": "ยุทธศาสตร์และแนวทางการพัฒนาที่ยั่งยืน",
						"completed": false
					}
				]
			},
			{
				"unit": 13,
				"title": "ไทยกับประชาคมระหว่างประเทศ",
				"completed": false,
				"subUnits": [
					{
						"id": "13.1",
						"title": "ความสัมพันธ์ระหว่างประเทศของไทยในอดีต",
						"completed": false
					},
					{
						"id": "13.2",
						"title": "บทบาทของไทยในประชาคมอาเซียน (ASEAN)",
						"completed": false
					},
					{
						"id": "13.3",
						"title": "ไทยในเวทีการเมืองและเศรษฐกิจโลก",
						"completed": false
					}
				]
			},
			{
				"unit": 14,
				"title": "สื่อสารมวลชนกับการพัฒนาสังคมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "14.1",
						"title": "วิวัฒนาการสื่อสารมวลชนไทย",
						"completed": false
					},
					{
						"id": "14.2",
						"title": "สื่อดิจิทัลและสังคมออนไลน์ในยุคปัจจุบัน",
						"completed": false
					},
					{
						"id": "14.3",
						"title": "การรู้เท่าทันสื่อและจริยธรรมสื่อมวลชน",
						"completed": false
					}
				]
			},
			{
				"unit": 15,
				"title": "แนวโน้มและอนาคตของสังคมไทย",
				"completed": false,
				"subUnits": [
					{
						"id": "15.1",
						"title": "การเปลี่ยนแปลงโครงสร้างประชากรผู้สูงวัย",
						"completed": false
					},
					{
						"id": "15.2",
						"title": "การเตรียมความพร้อมต่อการเปลี่ยนแปลงในอนาคต",
						"completed": false
					},
					{
						"id": "15.3",
						"title": "ภาพอนาคตและวิสัยทัศน์การพัฒนาสังคมไทย",
						"completed": false
					}
				]
			}
		]
	}]
};
var SCHEDULED = [
	"will_take",
	"will_take_samrit",
	"will_take_summer",
	"will_take_retake"
];
var STATUS_OPTIONS = [
	{
		key: "will_take",
		label: "ลงทะเบียนสอบไล่ (ภาคปกติ)",
		short: "ภาคปกติ"
	},
	{
		key: "will_take_samrit",
		label: "ลงทะเบียนโครงการสัมฤทธิบัตร",
		short: "สัมฤทธิบัตร"
	},
	{
		key: "will_take_summer",
		label: "ลงทะเบียนภาคพิเศษ / ฤดูร้อน",
		short: "ฤดูร้อน"
	},
	{
		key: "will_take_retake",
		label: "ลงทะเบียนสอบซ่อม (Make-up)",
		short: "สอบซ่อม"
	},
	{
		key: "failed",
		label: "สอบไม่ผ่าน (รอซ่อม / ลงใหม่)",
		short: "ไม่ผ่าน"
	},
	{
		key: "passed",
		label: "สอบผ่านแล้ว (ได้ S / H)",
		short: "ผ่านแล้ว"
	},
	{
		key: "transferred",
		label: "เทียบโอนชุดวิชา",
		short: "เทียบโอน"
	},
	{
		key: "not_taken",
		label: "ยังไม่ลงทะเบียน",
		short: "ยังไม่ลง"
	}
];
var EXAM_TYPES = [
	{
		key: "regular",
		label: "สอบไล่ประจำภาคปกติ"
	},
	{
		key: "samrit",
		label: "โครงการสัมฤทธิบัตร"
	},
	{
		key: "summer",
		label: "ภาคพิเศษ / ภาคฤดูร้อน"
	},
	{
		key: "retake",
		label: "การสอบซ่อม (Make-up)"
	}
];
var TYPE_NAME = {
	regular: "สอบไล่ประจำภาคปกติ",
	samrit: "โครงการสัมฤทธิบัตร",
	summer: "ภาคพิเศษ / ภาคฤดูร้อน",
	retake: "การสอบซ่อม (Make-up)"
};
var STATUS_TO_TYPE = {
	will_take: "regular",
	will_take_samrit: "samrit",
	will_take_summer: "summer",
	will_take_retake: "retake"
};
var TYPE_TO_STATUS = {
	regular: "will_take",
	samrit: "will_take_samrit",
	summer: "will_take_summer",
	retake: "will_take_retake"
};
var DAY = [
	"วันอาทิตย์",
	"วันจันทร์",
	"วันอังคาร",
	"วันพุธ",
	"วันพฤหัสบดี",
	"วันศุกร์",
	"วันเสาร์"
];
var MONTH = [
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
	"ธันวาคม"
];
var MONTH_SHORT = [
	"ม.ค.",
	"ก.พ.",
	"มี.ค.",
	"เม.ย.",
	"พ.ค.",
	"มิ.ย.",
	"ก.ค.",
	"ส.ค.",
	"ก.ย.",
	"ต.ค.",
	"พ.ย.",
	"ธ.ค."
];
function statusLabel(status) {
	return STATUS_OPTIONS.find((s) => s.key === status)?.label ?? "ยังไม่ลงทะเบียน";
}
function statusShort(status) {
	return STATUS_OPTIONS.find((s) => s.key === status)?.short ?? "ยังไม่ลง";
}
function isScheduled(status) {
	return SCHEDULED.includes(status || "not_taken");
}
function examTypeOf(course, curriculum) {
	if (course.examType && course.examType in TYPE_NAME) return course.examType;
	return STATUS_TO_TYPE[(curriculum?.find((c) => c.courseCode === course.courseCode))?.status || ""] || "regular";
}
function cloneSample() {
	return structuredClone(sampleData);
}
function freshBook(code, name, total = 15) {
	const units = [];
	for (let i = 1; i <= total; i++) units.push({
		unit: i,
		title: `หน่วยที่ ${i}: สาระการเรียนรู้ที่ ${i}`,
		completed: false,
		status: "unread",
		subUnits: [
			1,
			2,
			3
		].map((n) => ({
			id: `${i}.${n}`,
			title: `ตอนที่ ${i}.${n} สาระสำคัญที่ ${n}`,
			completed: false,
			status: "unread"
		}))
	});
	return {
		courseCode: code,
		courseNameTh: name,
		bookTitle: `เอกสารการสอนชุดวิชา${name} (${total} หน่วย)`,
		totalUnits: total,
		units
	};
}
function normalizeExam(c, centerName, curName) {
	const m = { ...c };
	const type = m.examType && m.examType in TYPE_NAME ? m.examType : "regular";
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
function normalizeData(raw) {
	const src = raw && typeof raw === "object" ? raw : {};
	const student = {
		...cloneSample().student,
		...src.student || {}
	};
	const examCenter = { ...src.examCenter || {} };
	const curriculum = Array.isArray(src.curriculum) ? src.curriculum.map((c) => ({
		...c,
		courseCode: String(c.courseCode)
	})) : [];
	return {
		student,
		examCenter,
		courses: Array.isArray(src.courses) ? src.courses.filter((c) => c && c.courseCode).map((c) => normalizeExam({
			...c,
			courseCode: String(c.courseCode)
		}, examCenter.centerName, curriculum.find((x) => x.courseCode === String(c.courseCode))?.courseNameTh)) : [],
		curriculum,
		studyPlan: Array.isArray(src.studyPlan) ? src.studyPlan.filter((b) => b && b.courseCode).map((b) => ({
			...b,
			courseCode: String(b.courseCode),
			units: b.units || []
		})) : []
	};
}
function thaiDate(iso) {
	const d = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(d.getTime())) return iso;
	return `${DAY[d.getDay()]}ที่ ${d.getDate()} ${MONTH[d.getMonth()]} ${d.getFullYear() + 543}`;
}
function dateParts(iso) {
	if (!iso) return {
		day: "–",
		month: "รอวัน",
		year: "",
		weekday: ""
	};
	const d = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(d.getTime())) return {
		day: "–",
		month: iso,
		year: "",
		weekday: ""
	};
	return {
		day: String(d.getDate()),
		month: MONTH_SHORT[d.getMonth()],
		year: String(d.getFullYear() + 543),
		weekday: DAY[d.getDay()].replace("วัน", "")
	};
}
function timesOf(c) {
	const start = c.startTime || (c.examSession === "afternoon" ? "13:30" : "09:00");
	const end = c.endTime || (c.examSession === "afternoon" ? "16:30" : "12:00");
	const morning = Number(start.split(":")[0]) < 13;
	return {
		start,
		end,
		morning,
		label: morning ? "ช่วงเช้า" : "ช่วงบ่าย"
	};
}
function shiftTime(hhmm, delta) {
	const [h, m] = hhmm.split(":").map(Number);
	let total = (Number.isFinite(h) ? h : 9) * 60 + (Number.isFinite(m) ? m : 0) + delta;
	total = (total % 1440 + 1440) % 1440;
	return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}
function durationLabel(start, end) {
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
function presetOf(start, end) {
	if (start === "09:00" && end === "12:00") return "morning";
	if (start === "13:30" && end === "16:30") return "afternoon";
	return "custom";
}
function dayOffset(iso) {
	if (!iso) return null;
	const exam = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	const now = /* @__PURE__ */ new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	return Math.round((exam.getTime() - today.getTime()) / 864e5);
}
function dayChip(iso) {
	const d = dayOffset(iso);
	if (d === null) return {
		text: "รอประกาศวัน",
		tone: "wait"
	};
	if (d > 1) return {
		text: `อีก ${d} วัน`,
		tone: "future"
	};
	if (d === 1) return {
		text: "พรุ่งนี้",
		tone: "soon"
	};
	if (d === 0) return {
		text: "วันนี้",
		tone: "today"
	};
	return {
		text: "ผ่านไปแล้ว",
		tone: "past"
	};
}
function sortedExams(courses) {
	return [...courses].sort((a, b) => {
		const ka = `${a.examDate || "9999-99-99"}${a.startTime || "09:00"}`;
		const kb = `${b.examDate || "9999-99-99"}${b.startTime || "09:00"}`;
		return ka.localeCompare(kb);
	});
}
function findNextExam(courses) {
	const dated = sortedExams(courses.filter((c) => c.examDate));
	if (!dated.length) return courses[0] ?? null;
	const now = Date.now();
	for (const c of dated) {
		const { start } = timesOf(c);
		if ((/* @__PURE__ */ new Date(`${c.examDate}T${start}:00`)).getTime() - now > -144e5) return c;
	}
	return dated[0];
}
function countdownOf(course, now = Date.now()) {
	if (!course?.examDate) return null;
	const { start } = timesOf(course);
	const diff = (/* @__PURE__ */ new Date(`${course.examDate}T${start}:00`)).getTime() - now;
	if (diff <= 0 && diff > -144e5) return {
		days: 0,
		hours: 0,
		mins: 0,
		secs: 0,
		phase: "live"
	};
	if (diff <= 0) return {
		days: 0,
		hours: 0,
		mins: 0,
		secs: 0,
		phase: "past"
	};
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff % 864e5 / 36e5),
		mins: Math.floor(diff % 36e5 / 6e4),
		secs: Math.floor(diff % 6e4 / 1e3),
		phase: "wait"
	};
}
function pad(n) {
	return String(n).padStart(2, "0");
}
function creditBuckets(curriculum) {
	const count = (pred) => curriculum.filter(pred).length;
	const earnedCourses = curriculum.filter((c) => c.status === "passed" || c.status === "transferred");
	const sum = (pred) => earnedCourses.filter(pred).length * 6;
	const earned = earnedCourses.reduce((s, c) => s + (c.credits || 6), 0);
	return {
		earned,
		percent: Math.min(100, Math.round(earned / 126 * 100)),
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
		retake: count((c) => c.status === "will_take_retake")
	};
}
var CATEGORY_ORDER = [
	"หมวดวิชาศึกษาทั่วไป กลุ่มวิชาบังคับ (5 ชุดวิชา)",
	"หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (11 ชุดวิชา)",
	"หมวดวิชาเฉพาะ กลุ่มวิชาบังคับ (2 ชุดวิชา)",
	"หมวดวิชาเฉพาะ กลุ่มวิชาเลือก (เลือก 2 ชุดวิชา)",
	"หมวดวิชาเลือกเสรี (1 ชุดวิชา)"
];
function categoryTitle(category) {
	if (category.includes("หมวดวิชาศึกษาทั่วไป")) return {
		title: "หมวดศึกษาทั่วไป",
		sub: "บังคับ 5 ชุดวิชา · 30 หน่วยกิต",
		tone: "gen"
	};
	if (category.includes("หมวดวิชาเฉพาะ") && category.includes("กลุ่มวิชาบังคับ")) return {
		title: "วิชาเฉพาะ บังคับ",
		sub: category.includes("11") ? "บังคับ 11 ชุดวิชา" : category.includes("2 ชุด") ? "บังคับ 2 ชุดวิชา" : "วิชาบังคับ",
		tone: "core"
	};
	if (category.includes("กลุ่มวิชาเลือก")) return {
		title: "วิชาเฉพาะ เลือก",
		sub: "เลือก 2 ชุดวิชา · 12 หน่วยกิต",
		tone: "elec"
	};
	if (category.includes("เลือกเสรี")) return {
		title: "วิชาเลือกเสรี",
		sub: "1 ชุดวิชา · 6 หน่วยกิต",
		tone: "free"
	};
	return {
		title: category,
		sub: "",
		tone: "gen"
	};
}
function groupCurriculum(list) {
	const groups = /* @__PURE__ */ new Map();
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
function filterCurriculum(list, filter, query) {
	let out = list;
	if (filter && filter !== "all") out = filter === "scheduled" ? out.filter((c) => isScheduled(c.status)) : out.filter((c) => (c.status || "not_taken") === filter);
	const q = query.trim().toLowerCase();
	if (q) out = out.filter((c) => String(c.courseCode).toLowerCase().includes(q) || (c.courseNameTh || "").toLowerCase().includes(q) || (c.category || "").toLowerCase().includes(q));
	return out;
}
function topicStatus(t) {
	if (!t) return "unread";
	if (t.status === "completed" || !t.status && t.completed) return "completed";
	if (t.status === "reading") return "reading";
	return "unread";
}
function subStatus(s) {
	if (!s) return "unread";
	const topics = s.topics || [];
	if (topics.length) {
		const done = topics.filter((t) => topicStatus(t) === "completed").length;
		if (done === topics.length) return "completed";
		const reading = topics.filter((t) => topicStatus(t) === "reading").length;
		if (done > 0 || reading > 0) return "reading";
		return "unread";
	}
	if (s.status === "completed" || !s.status && s.completed) return "completed";
	if (s.status === "reading") return "reading";
	return "unread";
}
function unitStatus(u) {
	if (!u) return "unread";
	const subs = u.subUnits || [];
	if (subs.length) {
		const done = subs.filter((s) => subStatus(s) === "completed").length;
		if (done === subs.length) return "completed";
		const reading = subs.filter((s) => subStatus(s) === "reading").length;
		if (done > 0 || reading > 0) return "reading";
		return "unread";
	}
	if (u.status === "completed" || !u.status && u.completed) return "completed";
	if (u.status === "reading") return "reading";
	return "unread";
}
function cycle(status) {
	if (status === "unread") return "reading";
	if (status === "reading") return "completed";
	return "unread";
}
function applyRead(node, status) {
	node.status = status;
	node.completed = status === "completed";
}
function bookProgress(book) {
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
		percent: total ? Math.round(done / total * 100) : 0,
		leaves,
		leavesDone,
		leafPercent: leaves ? Math.round(leavesDone / leaves * 100) : 0
	};
}
function readingOverview(books) {
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
				if (topics.length) leavesReading += topics.filter((t) => topicStatus(t) === "reading").length;
				else if (subStatus(s) === "reading") leavesReading += 1;
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
		percent: leaves ? Math.round(leavesDone / leaves * 100) : 0
	};
}
function readinessCopy(done, total, percent) {
	if (!total) return "ยังไม่มีแผนอ่านของวิชานี้";
	if (percent >= 100) return "อ่านครบทุกหน่วย พร้อมเข้าสอบ";
	if (percent >= 50) return `ผ่านครึ่งทางแล้ว เหลืออีก ${total - done} หน่วย`;
	if (percent > 0) return `อ่านแล้ว ${done} หน่วย เดินหน้าต่อได้`;
	return "ยังไม่เริ่ม เปิดหน่วยที่ 1 ได้เลย";
}
function draftFrom(data, code) {
	const exam = data.courses.find((c) => c.courseCode === code);
	const cur = data.curriculum.find((c) => c.courseCode === code);
	const type = exam?.examType || STATUS_TO_TYPE[cur?.status || ""] || "regular";
	const { start, end } = exam ? timesOf(exam) : {
		start: "09:00",
		end: "12:00"
	};
	return {
		examType: type in TYPE_NAME ? type : "regular",
		examFormat: exam?.examFormat === "online" ? "online" : "onsite",
		examDate: exam?.examDate || "",
		startTime: start,
		endTime: end,
		examVenue: exam?.examVenue || data.examCenter.centerName || "",
		examRoom: exam?.examRoom || "",
		seatNumber: exam?.seatNumber || "",
		examRow: exam?.examRow || ""
	};
}
function applyExamDraft(data, code, draft) {
	const cur = data.curriculum.find((c) => c.courseCode === code);
	const name = cur?.courseNameTh || data.courses.find((c) => c.courseCode === code)?.courseNameTh || `ชุดวิชา ${code}`;
	if (cur) cur.status = TYPE_TO_STATUS[draft.examType];
	const next = normalizeExam({
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
		examRow: draft.examRow
	}, data.examCenter.centerName, name);
	const idx = data.courses.findIndex((c) => c.courseCode === code);
	if (idx >= 0) data.courses[idx] = next;
	else data.courses.push(next);
}
function setCourseStatus(data, code, status) {
	const course = data.curriculum.find((c) => c.courseCode === code);
	if (!course) return false;
	course.status = status;
	if (isScheduled(status)) {
		const type = STATUS_TO_TYPE[status];
		let exam = data.courses.find((c) => c.courseCode === code);
		if (!exam) {
			data.courses.push(normalizeExam({
				courseCode: code,
				courseNameTh: course.courseNameTh,
				credits: course.credits || 6,
				examType: type,
				examFormat: "onsite",
				examDate: "",
				startTime: "09:00",
				endTime: "12:00",
				examVenue: data.examCenter.centerName || ""
			}, data.examCenter.centerName, course.courseNameTh));
			return true;
		}
		exam.examType = type;
		exam.examTypeName = TYPE_NAME[type];
		return !exam.examDate;
	}
	data.courses = data.courses.filter((c) => c.courseCode !== code);
	return false;
}
function mergeImport(current, json, replace) {
	if (!json || typeof json !== "object" || Array.isArray(json)) throw new Error("โครงสร้างข้อมูลไม่ถูกต้อง");
	const src = json;
	if (!Array.isArray(src.curriculum) && !Array.isArray(src.courses) && !src.student && !src.examCenter && !Array.isArray(src.studyPlan)) throw new Error("ไม่พบข้อมูล curriculum / courses / studyPlan ในไฟล์ JSON");
	const data = structuredClone(current);
	if (src.student) data.student = {
		...data.student,
		...src.student
	};
	if (src.examCenter) data.examCenter = {
		...data.examCenter,
		...src.examCenter
	};
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
			data.curriculum.push({
				credits: 6,
				status: "not_taken",
				...item,
				courseCode: code
			});
			added++;
		}
	}
	for (const item of src.courses || []) {
		if (!item?.courseCode) continue;
		const code = String(item.courseCode);
		const cur = data.curriculum.find((x) => x.courseCode === code);
		const idx = data.courses.findIndex((x) => x.courseCode === code);
		const norm = normalizeExam({
			...item,
			courseCode: code
		}, data.examCenter.centerName, cur?.courseNameTh);
		if (idx >= 0) {
			data.courses[idx] = norm;
			updated++;
		} else {
			data.courses.push(norm);
			added++;
		}
		if (cur && !isScheduled(cur.status) && cur.status !== "passed" && cur.status !== "transferred") cur.status = TYPE_TO_STATUS[norm.examType || "regular"];
	}
	for (const c of data.curriculum) if (isScheduled(c.status)) {
		if (!data.courses.some((x) => x.courseCode === c.courseCode)) data.courses.push(normalizeExam({
			courseCode: c.courseCode,
			courseNameTh: c.courseNameTh,
			examType: STATUS_TO_TYPE[c.status || "will_take"],
			examDate: ""
		}, data.examCenter.centerName, c.courseNameTh));
	} else data.courses = data.courses.filter((x) => x.courseCode !== c.courseCode);
	if (Array.isArray(src.studyPlan)) for (const plan of src.studyPlan) {
		if (!plan?.courseCode) continue;
		const code = String(plan.courseCode);
		const idx = data.studyPlan.findIndex((x) => x.courseCode === code);
		if (idx >= 0) {
			data.studyPlan[idx] = {
				...data.studyPlan[idx],
				...plan,
				courseCode: code
			};
			updated++;
		} else {
			data.studyPlan.push({
				...plan,
				courseCode: code,
				units: plan.units || []
			});
			added++;
		}
	}
	return {
		data,
		added,
		updated,
		replaced: isReplace
	};
}
function aiGuide() {
	return {
		purpose: "ไฟล์ข้อมูล STOU Ledger — ส่งให้ AI แก้ แล้วนำกลับมาอัปโหลด",
		instructionsForAI: [
			"ตอบกลับเป็น JSON ก้อนเดียว โครงสร้างเดียวกับไฟล์นี้",
			"อัปโหลดแบบรวม (merge) ตาม courseCode: มีอยู่แล้วจะอัปเดต ไม่มีจะเพิ่ม",
			"ถ้าต้องการเปลี่ยนสาขา ให้ใส่ replaceCurriculum: true หรือ mode: replace",
			"examDate เป็น YYYY-MM-DD, startTime/endTime เป็น HH:MM",
			"สถานะ curriculum: not_taken, will_take, will_take_samrit, will_take_summer, will_take_retake, passed, failed, transferred"
		]
	};
}
function exportPayload(data) {
	return {
		_aiGuide: aiGuide(),
		...data
	};
}
function mapsUrl(data, course) {
	const q = course.examFormat === "online" ? "" : data.examCenter.googleMapsQuery || course.examVenue || data.examCenter.centerName || "";
	if (!q) return "";
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
function icsStamp(iso, time) {
	const [y, m, d] = iso.split("-");
	const [hh, mm] = time.split(":");
	return `${y}${m}${d}T${hh}${mm}00`;
}
function googleCalendarUrl(course) {
	if (!course.examDate) return "";
	const { start, end } = timesOf(course);
	const text = `สอบ ${course.courseCode} ${course.courseNameTh}`;
	const dates = `${icsStamp(course.examDate, start)}/${icsStamp(course.examDate, end)}`;
	const loc = course.examVenue || "";
	const details = `${course.examTypeName || ""} ${course.examTimeTh || ""}\nห้อง ${course.examRoom || "-"} ที่นั่ง ${course.seatNumber || "-"} แถว ${course.examRow || "-"}`;
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text,
		dates,
		ctz: "Asia/Bangkok",
		location: loc,
		details
	}).toString()}`;
}
function icsBody(course) {
	if (!course.examDate) return "";
	const { start, end } = timesOf(course);
	const loc = course.examVenue || "";
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//STOU Ledger//TH",
		"BEGIN:VEVENT",
		`DTSTART:${icsStamp(course.examDate, start)}`,
		`DTEND:${icsStamp(course.examDate, end)}`,
		`SUMMARY:สอบ ${course.courseCode} ${course.courseNameTh}`,
		`LOCATION:${loc}`,
		`DESCRIPTION:${course.examTimeTh || ""} ห้อง ${course.examRoom || "-"} ที่นั่ง ${course.seatNumber || "-"}`,
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
}
function sampleBook() {
	const book = cloneSample().studyPlan.find((b) => b.courseCode === "10151");
	return book ? structuredClone(book) : freshBook("10151", "ไทยศึกษา", 15);
}
function esc(v) {
	return String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function cell(val, style = "Cell", type = "String", span = 0) {
	return `<Cell ss:StyleID="${style}"${span > 0 ? ` ss:MergeAcross="${span}"` : ""}><Data ss:Type="${type === "Number" && typeof val === "number" ? "Number" : "String"}">${esc(val)}</Data></Cell>`;
}
function row(cells, h = 20) {
	return `<Row ss:Height="${h}">${cells.join("")}</Row>`;
}
function sheet(name, cols, rows) {
	return `<Worksheet ss:Name="${esc(name)}"><Table>${cols}${rows.join("")}</Table></Worksheet>`;
}
var STYLES = `
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
function buildExcel(data) {
	const student = data.student;
	const curriculum = data.curriculum;
	const courses = data.courses;
	const books = data.studyPlan;
	const k = creditBuckets(curriculum);
	const remainCr = Math.max(0, 126 - k.earned);
	const remainCourses = Math.ceil(remainCr / 6);
	const semesters = Math.ceil(remainCourses / 3);
	const nowTh = (/* @__PURE__ */ new Date()).toLocaleString("th-TH", {
		dateStyle: "long",
		timeStyle: "short"
	});
	const s1 = [
		row([cell("STOU Ledger — รายงานความก้าวหน้าการศึกษา มสธ.", "Title", "String", 5)], 28),
		row([cell(`ออกเมื่อ ${nowTh}`, "Sub", "String", 5)]),
		row([cell("ข้อมูลนักศึกษา", "Sec", "String", 5)]),
		row([
			cell("รหัสนักศึกษา", "Bold"),
			cell(student.studentId || "-"),
			cell("ชื่อ", "Bold"),
			cell(student.name || "-", "Cell", "String", 2)
		]),
		row([
			cell("สาขา", "Bold"),
			cell(student.faculty || "-", "Cell", "String", 2),
			cell("วิชาเอก", "Bold"),
			cell(student.major || "-", "Cell", "String", 1)
		]),
		row([
			cell("ศูนย์", "Bold"),
			cell(student.center || "-", "Cell", "String", 2),
			cell("ภาค / ปี", "Bold"),
			cell(`${student.semester || "-"} / ${student.academicYear || "-"}`)
		]),
		row([cell("ความก้าวหน้า", "Sec", "String", 5)]),
		row([
			cell("หน่วยกิตสะสม", "Head"),
			cell("เปอร์เซ็นต์", "Head"),
			cell("คงเหลือ", "Head"),
			cell("ชุดวิชาที่เหลือโดยประมาณ", "Head"),
			cell("ภาคเรียนโดยประมาณ", "Head"),
			cell("สนามสอบ", "Head")
		]),
		row([
			cell(`${k.earned} / 126`, "Good"),
			cell(`${k.percent}%`, "Good"),
			cell(`${remainCr}`, "Mid", "Number"),
			cell(remainCourses, "Mid", "Number"),
			cell(semesters, "Mid", "Number"),
			cell(data.examCenter.centerName || "-")
		]),
		row([
			cell("หมวด", "Head"),
			cell("เป้าหมาย", "Head"),
			cell("สะสม", "Head"),
			cell("คงเหลือ", "Head"),
			cell("ความคืบหน้า", "Head"),
			cell("", "Head")
		]),
		row([
			cell("ศึกษาทั่วไป"),
			cell(30, "Mid", "Number"),
			cell(k.gen, "Mid", "Number"),
			cell(Math.max(0, 30 - k.gen), "Mid", "Number"),
			cell(`${Math.round(k.gen / 30 * 100)}%`, "Mid"),
			cell("")
		]),
		row([
			cell("เฉพาะบังคับ"),
			cell(78, "Mid", "Number"),
			cell(k.core, "Mid", "Number"),
			cell(Math.max(0, 78 - k.core), "Mid", "Number"),
			cell(`${Math.round(k.core / 78 * 100)}%`, "Mid"),
			cell("")
		]),
		row([
			cell("เฉพาะเลือก"),
			cell(12, "Mid", "Number"),
			cell(k.elec, "Mid", "Number"),
			cell(Math.max(0, 12 - k.elec), "Mid", "Number"),
			cell(`${Math.round(k.elec / 12 * 100)}%`, "Mid"),
			cell("")
		]),
		row([
			cell("เลือกเสรี"),
			cell(6, "Mid", "Number"),
			cell(k.free, "Mid", "Number"),
			cell(Math.max(0, 6 - k.free), "Mid", "Number"),
			cell(`${Math.round(k.free / 6 * 100)}%`, "Mid"),
			cell("")
		]),
		row([cell("สถานะ", "Sec", "String", 5)]),
		row([
			cell("ผ่าน", "Bold"),
			cell(k.passed, "Mid", "Number"),
			cell("เทียบโอน", "Bold"),
			cell(k.transferred, "Mid", "Number"),
			cell("จะสอบ", "Bold"),
			cell(k.scheduled, "Mid", "Number")
		]),
		row([
			cell("ไม่ผ่าน", "Bold"),
			cell(k.failed, "Mid", "Number"),
			cell("ยังไม่ลง", "Bold"),
			cell(k.notTaken, "Mid", "Number"),
			cell("ทั้งหมด", "Bold"),
			cell(curriculum.length, "Mid", "Number")
		])
	];
	const s2 = [
		row([cell("ตารางสอบและสนามสอบ", "Title", "String", 11)], 28),
		row([cell(`${data.examCenter.centerName || "มสธ."} ${data.examCenter.province || ""} · ${data.examCenter.locationAddress || ""}`, "Sub", "String", 11)]),
		row([
			"ลำดับ",
			"รหัส",
			"ชื่อชุดวิชา",
			"หน่วยกิต",
			"ประเภท",
			"รูปแบบ",
			"วันที่",
			"เวลา",
			"สนาม",
			"ห้อง",
			"แถว",
			"ที่นั่ง"
		].map((h) => cell(h, "Head")))
	];
	if (!courses.length) s2.push(row([cell("ยังไม่มีวิชาในตารางสอบ", "Mid", "String", 11)]));
	courses.forEach((c, i) => {
		const t = timesOf(c);
		s2.push(row([
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
			cell(c.seatNumber || "-")
		]));
	});
	s2.push(row([cell("เข้าสนามก่อนเวลาอย่างน้อย 30 นาที เตรียมบัตรประชาชน บัตรนักศึกษา ดินสอ 2B", "Sub", "String", 11)]));
	const s3 = [row([cell("ความคืบหน้าการอ่านหนังสือ", "Title", "String", 6)], 28), row([
		"รหัส",
		"วิชา",
		"หน่วย",
		"ชื่อหน่วย",
		"สถานะ",
		"ตอนย่อยที่จบ",
		"เรื่องที่จบ"
	].map((h) => cell(h, "Head")))];
	for (const b of books) {
		const p = bookProgress(b);
		if (!b.units?.length) {
			s3.push(row([
				cell(b.courseCode, "Bold"),
				cell(b.courseNameTh),
				cell("-"),
				cell(b.bookTitle || ""),
				cell("ยังไม่มีหน่วย"),
				cell(""),
				cell("")
			]));
			continue;
		}
		for (const u of b.units) {
			const subs = u.subUnits || [];
			const subDone = subs.filter((s) => s.completed || s.status === "completed").length;
			const topics = subs.flatMap((s) => s.topics || []);
			const topicDone = topics.filter((t) => t.completed || t.status === "completed").length;
			const st = u.status === "completed" || u.completed ? "อ่านจบ" : u.status === "reading" ? "กำลังอ่าน" : "ยังไม่อ่าน";
			const style = st === "อ่านจบ" ? "Good" : st === "กำลังอ่าน" ? "Wait" : "Cell";
			s3.push(row([
				cell(b.courseCode, "Bold"),
				cell(b.courseNameTh),
				cell(u.unit, "Mid", "Number"),
				cell(u.title),
				cell(st, style),
				cell(subs.length ? `${subDone}/${subs.length}` : "-", "Mid"),
				cell(topics.length ? `${topicDone}/${topics.length}` : "-", "Mid")
			]));
		}
		s3.push(row([
			cell(""),
			cell(`รวม ${b.courseCode}`, "Bold"),
			cell(`${p.done}/${p.total}`),
			cell(`${p.percent}%`),
			cell(""),
			cell(""),
			cell("")
		]));
	}
	if (!books.length) s3.push(row([cell("ยังไม่มีรายการอ่าน", "Mid", "String", 6)]));
	const s4 = [row([cell("โครงสร้างหลักสูตร 126 หน่วยกิต", "Title", "String", 5)], 28), row([
		"รหัส",
		"ชื่อชุดวิชา",
		"หน่วยกิต",
		"หมวด",
		"สถานะ",
		"อยู่ในตารางสอบ"
	].map((h) => cell(h, "Head")))];
	for (const c of curriculum) {
		const onExam = courses.some((x) => x.courseCode === c.courseCode);
		const st = c.status || "not_taken";
		const style = st === "passed" || st === "transferred" ? "Good" : st === "failed" ? "Bad" : st.startsWith("will_") ? "Wait" : "Cell";
		s4.push(row([
			cell(c.courseCode, "Bold"),
			cell(c.courseNameTh),
			cell(c.credits || 6, "Mid", "Number"),
			cell(c.category || ""),
			cell(statusLabel(st), style),
			cell(onExam ? "ใช่" : "ไม่", "Mid")
		]));
	}
	const left = curriculum.filter((c) => !c.status || c.status === "not_taken" || c.status === "failed");
	const s5 = [
		row([cell("แผนที่เหลือและวิชาที่ยังไม่จบ", "Title", "String", 4)], 28),
		row([cell(`เหลือประมาณ ${remainCr} หน่วยกิต · ${remainCourses} ชุดวิชา · ${semesters} ภาคเรียน (คิดชุดวิชาละ 6 นก. เทอมละ 3 ชุด)`, "Sub", "String", 4)]),
		row([
			"รหัส",
			"ชื่อชุดวิชา",
			"สถานะ",
			"หมวด",
			"หน่วยกิต"
		].map((h) => cell(h, "Head")))
	];
	for (const c of left) s5.push(row([
		cell(c.courseCode, "Bold"),
		cell(c.courseNameTh),
		cell(statusLabel(c.status), c.status === "failed" ? "Bad" : "Cell"),
		cell(c.category || ""),
		cell(c.credits || 6, "Mid", "Number")
	]));
	if (!left.length) s5.push(row([cell("ไม่มีวิชาค้างในสถานะยังไม่ลงหรือไม่ผ่าน", "Good", "String", 4)]));
	return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
${STYLES}
${sheet("สรุปภาพรวม", "<Column ss:Width=\"160\"/><Column ss:Width=\"120\"/><Column ss:Width=\"160\"/><Column ss:Width=\"140\"/><Column ss:Width=\"120\"/><Column ss:Width=\"160\"/>", s1)}
${sheet("ตารางสอบ", "<Column ss:Width=\"40\"/><Column ss:Width=\"70\"/><Column ss:Width=\"220\"/><Column ss:Width=\"60\"/><Column ss:Width=\"140\"/><Column ss:Width=\"80\"/><Column ss:Width=\"180\"/><Column ss:Width=\"90\"/><Column ss:Width=\"160\"/><Column ss:Width=\"120\"/><Column ss:Width=\"50\"/><Column ss:Width=\"60\"/>", s2)}
${sheet("การอ่านหนังสือ", "<Column ss:Width=\"70\"/><Column ss:Width=\"180\"/><Column ss:Width=\"50\"/><Column ss:Width=\"260\"/><Column ss:Width=\"90\"/><Column ss:Width=\"80\"/><Column ss:Width=\"80\"/>", s3)}
${sheet("โครงสร้างหลักสูตร", "<Column ss:Width=\"70\"/><Column ss:Width=\"260\"/><Column ss:Width=\"70\"/><Column ss:Width=\"280\"/><Column ss:Width=\"180\"/><Column ss:Width=\"80\"/>", s4)}
${sheet("วิชาที่ยังเหลือ", "<Column ss:Width=\"70\"/><Column ss:Width=\"260\"/><Column ss:Width=\"180\"/><Column ss:Width=\"280\"/><Column ss:Width=\"70\"/>", s5)}
</Workbook>`;
}
function downloadExcel(data) {
	const xml = buildExcel(data);
	const blob = new Blob([xml], { type: "application/vnd.ms-excel;charset=utf-8;" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	const year = (/* @__PURE__ */ new Date()).getFullYear() + 543;
	a.download = `STOU_Ledger_${data.student.studentId || "report"}_${year}.xls`;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(a.href);
}
var KEY = "stou-ledger-v1";
var THEME_KEY = "stou-ledger-theme";
var LEGACY = ["stou_aero_glass_v6", "stou_liquid_glass_v5"];
function readSaved() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem(KEY) || LEGACY.map((k) => localStorage.getItem(k)).find(Boolean) || null;
	if (!raw) return null;
	try {
		return normalizeData(JSON.parse(raw));
	} catch {
		return null;
	}
}
function persist(data) {
	localStorage.setItem(KEY, JSON.stringify(data));
	localStorage.setItem("stou_aero_glass_v6_custom", "1");
}
var toastSeq = 1;
function paintReadTree(unit, status) {
	applyRead(unit, status);
	for (const s of unit.subUnits || []) {
		applyRead(s, status);
		for (const t of s.topics || []) applyRead(t, status);
	}
}
var useStou = create((set, get) => ({
	data: cloneSample(),
	tab: "exams",
	theme: "day",
	drawer: null,
	toast: null,
	booted: false,
	filter: "all",
	query: "",
	openBooks: ["10151"],
	collapsedUnits: [],
	focusBook: null,
	boot: () => {
		const saved = readSaved();
		let theme = "day";
		try {
			const t = localStorage.getItem(THEME_KEY);
			if (t === "night" || t === "day") theme = t;
		} catch {}
		if (saved) set({
			data: saved,
			theme,
			booted: true
		});
		else set({
			theme,
			booted: true
		});
	},
	setTab: (tab) => set({ tab }),
	setTheme: (theme) => {
		localStorage.setItem(THEME_KEY, theme);
		document.documentElement.setAttribute("data-theme", theme);
		const meta = document.querySelector("meta[name=\"theme-color\"]");
		if (meta) meta.setAttribute("content", theme === "night" ? "#12100e" : "#f3ecdf");
		set({ theme });
	},
	setDrawer: (drawer) => set({ drawer }),
	notify: (msg, tone = "ok") => set({ toast: {
		id: ++toastSeq,
		msg,
		tone
	} }),
	dismissToast: () => set({ toast: null }),
	setFilter: (filter) => set({ filter }),
	setQuery: (query) => set({ query }),
	patch: (fn, msg, tone = "ok") => {
		const next = structuredClone(get().data);
		fn(next);
		persist(next);
		set({
			data: next,
			toast: msg ? {
				id: ++toastSeq,
				msg,
				tone
			} : get().toast
		});
	},
	changeStatus: (code, status) => {
		let openExam = false;
		get().patch((d) => {
			openExam = setCourseStatus(d, code, status);
		});
		const name = EXAM_TOAST[status](code);
		get().notify(name.msg, name.tone);
		if (openExam) set({ drawer: {
			kind: "exam",
			code
		} });
		else set({ drawer: null });
	},
	saveExam: (code, draft) => {
		get().patch((d) => applyExamDraft(d, code, draft), `บันทึกตารางสอบ ${code} แล้ว`);
		set({ drawer: null });
	},
	saveProfile: (student, center) => {
		get().patch((d) => {
			d.student = {
				...d.student,
				...student
			};
			d.examCenter = {
				...d.examCenter,
				...center
			};
		}, "บันทึกข้อมูลนักศึกษาและสนามสอบแล้ว");
	},
	openReading: (code) => {
		get().patch((d) => {
			if (!d.studyPlan.some((b) => b.courseCode === code)) {
				const cur = d.curriculum.find((c) => c.courseCode === code) || d.courses.find((c) => c.courseCode === code);
				d.studyPlan.push(freshBook(code, cur?.courseNameTh || `ชุดวิชา ${code}`, 15));
			}
		});
		set((s) => ({
			tab: "reading",
			focusBook: code,
			openBooks: s.openBooks.includes(code) ? s.openBooks : [...s.openBooks, code]
		}));
	},
	toggleBook: (code) => set((s) => ({ openBooks: s.openBooks.includes(code) ? s.openBooks.filter((c) => c !== code) : [...s.openBooks, code] })),
	toggleUnitCollapse: (code, unit) => {
		const key = `${code}:${unit}`;
		set((s) => ({ collapsedUnits: s.collapsedUnits.includes(key) ? s.collapsedUnits.filter((k) => k !== key) : [...s.collapsedUnits, key] }));
	},
	toggleAllCollapse: (code) => {
		const book = get().data.studyPlan.find((b) => b.courseCode === code);
		if (!book) return;
		const keys = (book.units || []).map((u) => `${code}:${u.unit}`);
		const allIn = keys.every((k) => get().collapsedUnits.includes(k));
		set((s) => ({ collapsedUnits: allIn ? s.collapsedUnits.filter((k) => !k.startsWith(`${code}:`)) : [.../* @__PURE__ */ new Set([...s.collapsedUnits, ...keys])] }));
	},
	cycleUnit: (code, unitNo) => {
		const current = get().data.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
		if (!current) return;
		const next = cycle(unitStatus(current));
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			if (unit) paintReadTree(unit, next);
		}, next === "completed" ? `อ่านจบหน่วยที่ ${unitNo}` : next === "reading" ? `กำลังอ่านหน่วยที่ ${unitNo}` : `หน่วยที่ ${unitNo} กลับเป็นยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
	},
	cycleSub: (code, unitNo, subId) => {
		const current = get().data.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo)?.subUnits?.find((s) => String(s.id) === String(subId));
		if (!current) return;
		const next = cycle(subStatus(current));
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
			if (!unit || !sub) return;
			applyRead(sub, next);
			for (const t of sub.topics || []) applyRead(t, next);
			applyRead(unit, unitStatus(unit));
		}, next === "completed" ? `อ่านจบตอน ${subId}` : next === "reading" ? `กำลังอ่านตอน ${subId}` : `ตอน ${subId} ยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
	},
	cycleTopic: (code, unitNo, subId, topicId) => {
		const current = get().data.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo)?.subUnits?.find((s) => String(s.id) === String(subId))?.topics?.find((t) => String(t.id) === String(topicId));
		if (!current) return;
		const next = cycle(topicStatus(current));
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
			const topic = sub?.topics?.find((t) => String(t.id) === String(topicId));
			if (!unit || !sub || !topic) return;
			applyRead(topic, next);
			applyRead(sub, subStatus(sub));
			applyRead(unit, unitStatus(unit));
		}, next === "completed" ? `อ่านจบเรื่อง ${topicId}` : next === "reading" ? `กำลังอ่านเรื่อง ${topicId}` : `เรื่อง ${topicId} ยังไม่อ่าน`, next === "unread" ? "warn" : "ok");
	},
	markBook: (code, done) => {
		get().patch((d) => {
			const book = d.studyPlan.find((b) => b.courseCode === code);
			if (!book) return;
			for (const u of book.units || []) paintReadTree(u, done ? "completed" : "unread");
		}, done ? `ติ๊กอ่านครบวิชา ${code}` : `รีเซ็ตการอ่านวิชา ${code}`);
	},
	deleteBook: (code) => {
		get().patch((d) => {
			d.studyPlan = d.studyPlan.filter((b) => b.courseCode !== code);
		}, `ลบแผนอ่าน ${code} แล้ว`, "warn");
		set((s) => ({ openBooks: s.openBooks.filter((c) => c !== code) }));
	},
	addBook: (code, name, total) => {
		if (get().data.studyPlan.some((b) => b.courseCode === code)) {
			get().notify(`วิชา ${code} มีในรายการอ่านแล้ว`, "warn");
			return false;
		}
		get().patch((d) => {
			d.studyPlan.push(freshBook(code, name, total));
		}, `เพิ่มหนังสือ ${code} แล้ว`);
		set((s) => ({
			openBooks: [...s.openBooks, code],
			drawer: null,
			tab: "reading",
			focusBook: code
		}));
		return true;
	},
	addUnit: (code, title) => {
		get().patch((d) => {
			const book = d.studyPlan.find((b) => b.courseCode === code);
			if (!book) return;
			const n = (book.units?.length || 0) + 1;
			book.units = book.units || [];
			book.units.push({
				unit: n,
				title: title.trim() || `หน่วยที่ ${n}`,
				completed: false,
				status: "unread",
				subUnits: [{
					id: `${n}.1`,
					title: `ตอนที่ ${n}.1`,
					completed: false,
					status: "unread"
				}, {
					id: `${n}.2`,
					title: `ตอนที่ ${n}.2`,
					completed: false,
					status: "unread"
				}]
			});
			book.totalUnits = book.units.length;
		}, "เพิ่มหน่วยใหม่แล้ว");
		set({ drawer: null });
	},
	addSub: (code, unitNo, id, title) => {
		let ok = true;
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			if (!unit) return;
			unit.subUnits = unit.subUnits || [];
			if (unit.subUnits.some((s) => String(s.id) === id)) {
				ok = false;
				return;
			}
			unit.subUnits.push({
				id,
				title,
				completed: false,
				status: "unread"
			});
			applyRead(unit, unitStatus(unit));
		});
		if (!ok) {
			get().notify(`ตอน ${id} มีอยู่แล้ว`, "bad");
			return false;
		}
		get().notify(`เพิ่มตอน ${id} แล้ว`);
		set({ drawer: null });
		return true;
	},
	deleteSub: (code, unitNo, subId) => {
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			if (!unit?.subUnits) return;
			unit.subUnits = unit.subUnits.filter((s) => String(s.id) !== String(subId));
			applyRead(unit, unitStatus(unit));
		}, `ลบตอน ${subId} แล้ว`, "warn");
	},
	addTopic: (code, unitNo, subId, id, title) => {
		let ok = true;
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
			if (!unit || !sub) return;
			sub.topics = sub.topics || [];
			if (sub.topics.some((t) => String(t.id) === id)) {
				ok = false;
				return;
			}
			sub.topics.push({
				id,
				title,
				completed: false,
				status: "unread"
			});
			applyRead(sub, subStatus(sub));
			applyRead(unit, unitStatus(unit));
		});
		if (!ok) {
			get().notify(`เรื่อง ${id} มีอยู่แล้ว`, "bad");
			return false;
		}
		get().notify(`เพิ่มเรื่อง ${id} แล้ว`);
		set({ drawer: null });
		return true;
	},
	deleteTopic: (code, unitNo, subId, topicId) => {
		get().patch((d) => {
			const unit = d.studyPlan.find((b) => b.courseCode === code)?.units.find((u) => u.unit === unitNo);
			const sub = unit?.subUnits?.find((s) => String(s.id) === String(subId));
			if (!unit || !sub?.topics) return;
			sub.topics = sub.topics.filter((t) => String(t.id) !== String(topicId));
			applyRead(sub, subStatus(sub));
			applyRead(unit, unitStatus(unit));
		}, `ลบเรื่อง ${topicId} แล้ว`, "warn");
	},
	toggleSample: () => {
		if (get().data.studyPlan.some((b) => b.courseCode === "10151")) {
			get().patch((d) => {
				d.studyPlan = d.studyPlan.filter((b) => b.courseCode !== "10151");
			}, "ปิดตัวอย่างหนังสือ 10151 แล้ว", "warn");
			return;
		}
		get().patch((d) => {
			d.studyPlan.unshift(sampleBook());
		}, "เปิดตัวอย่าง ไทยศึกษา 15 หน่วยแล้ว");
		set((s) => ({
			openBooks: [...s.openBooks, "10151"],
			tab: "reading"
		}));
	},
	resetReading: () => {
		if (!get().data.studyPlan.length) {
			get().notify("ไม่มีรายการหนังสือ", "warn");
			return;
		}
		if (!confirm("รีเซ็ตสถานะการอ่านทุกวิชาให้เป็นยังไม่อ่าน?")) return;
		get().patch((d) => {
			for (const b of d.studyPlan) for (const u of b.units || []) paintReadTree(u, "unread");
		}, "รีเซ็ตความคืบหน้าการอ่านแล้ว", "warn");
		set({ drawer: null });
	},
	resetCurriculum: () => {
		const n = get().data.curriculum.length;
		if (!n) {
			get().notify("ไม่มีรายวิชาให้ล้าง", "warn");
			return;
		}
		if (!confirm(`ล้างรายวิชาในหลักสูตรทั้งหมด ${n} วิชา?\nตารางสอบจะถูกล้างตามไปด้วย เพื่อเตรียมนำเข้าสาขาใหม่`)) return;
		get().patch((d) => {
			d.curriculum = [];
			d.courses = [];
		}, "ล้างหลักสูตรแล้ว พร้อมนำเข้าสาขาใหม่", "warn");
		set({ drawer: null });
	},
	loadSample: () => {
		if (!confirm("โหลดข้อมูลตัวอย่าง มสธ. ทับข้อมูลปัจจุบัน?")) return;
		const next = cloneSample();
		persist(next);
		set({
			data: next,
			drawer: null,
			tab: "exams",
			openBooks: ["10151"],
			toast: {
				id: ++toastSeq,
				msg: "โหลดข้อมูลตัวอย่างแล้ว",
				tone: "ok"
			}
		});
	},
	exportJson: () => {
		const data = get().data;
		const blob = new Blob([JSON.stringify(exportPayload(data), null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `STOU_Ledger_${data.student.studentId || "backup"}.json`;
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(a.href);
		get().notify("ดาวน์โหลดไฟล์สำรอง JSON แล้ว");
	},
	exportXls: () => {
		downloadExcel(get().data);
		get().notify("ส่งออก Excel 5 แผ่นงานแล้ว");
	},
	importJson: (file, replace) => {
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const json = JSON.parse(String(reader.result));
				const result = mergeImport(get().data, json, replace);
				persist(result.data);
				set({
					data: result.data,
					drawer: null,
					toast: {
						id: ++toastSeq,
						msg: result.replaced ? `แทนที่หลักสูตรแล้ว (${result.data.curriculum.length} วิชา)` : `นำเข้าแล้ว เพิ่ม ${result.added} แก้ไข ${result.updated}`,
						tone: "ok"
					}
				});
			} catch (err) {
				get().notify(err instanceof Error ? err.message : "ไฟล์ JSON ไม่ถูกต้อง", "bad");
			}
		};
		reader.onerror = () => get().notify("อ่านไฟล์ไม่สำเร็จ", "bad");
		reader.readAsText(file);
	}
}));
var EXAM_TOAST = {
	will_take: (code) => ({
		msg: `เพิ่ม ${code} ในตารางสอบไล่`,
		tone: "ok"
	}),
	will_take_samrit: (code) => ({
		msg: `เพิ่ม ${code} โครงการสัมฤทธิบัตร`,
		tone: "ok"
	}),
	will_take_summer: (code) => ({
		msg: `เพิ่ม ${code} ภาคฤดูร้อน`,
		tone: "ok"
	}),
	will_take_retake: (code) => ({
		msg: `เพิ่ม ${code} สอบซ่อม`,
		tone: "ok"
	}),
	passed: (code) => ({
		msg: `วิชา ${code} ผ่านแล้ว สะสม 6 หน่วยกิต`,
		tone: "ok"
	}),
	transferred: (code) => ({
		msg: `เทียบโอน ${code} สำเร็จ`,
		tone: "ok"
	}),
	failed: (code) => ({
		msg: `${code} ไม่ผ่าน — เลือกสอบซ่อมได้`,
		tone: "bad"
	}),
	not_taken: (code) => ({
		msg: `${code} ตั้งเป็นยังไม่ลงทะเบียน`,
		tone: "warn"
	})
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var STATUS_SEAL = {
	will_take: {
		icon: BookMarked,
		bg: "bg-seal-regular",
		bar: "bg-seal-regular"
	},
	will_take_samrit: {
		icon: Award,
		bg: "bg-seal-samrit",
		bar: "bg-seal-samrit"
	},
	will_take_summer: {
		icon: SunMedium,
		bg: "bg-seal-summer",
		bar: "bg-seal-summer"
	},
	will_take_retake: {
		icon: RotateCcw,
		bg: "bg-seal-retake",
		bar: "bg-seal-retake"
	},
	failed: {
		icon: CircleX,
		bg: "bg-seal-fail",
		bar: "bg-seal-fail"
	},
	passed: {
		icon: BadgeCheck,
		bg: "bg-seal-pass",
		bar: "bg-seal-pass"
	},
	transferred: {
		icon: ArrowLeftRight,
		bg: "bg-seal-move",
		bar: "bg-seal-move"
	},
	not_taken: {
		icon: CircleMinus,
		bg: "bg-seal-idle",
		bar: "bg-seal-idle"
	}
};
var EXAM_BAR = {
	regular: "bg-seal-regular",
	samrit: "bg-seal-samrit",
	summer: "bg-seal-summer",
	retake: "bg-seal-retake"
};
function Seal({ status, className = "size-9" }) {
	const meta = STATUS_SEAL[status || "not_taken"] || STATUS_SEAL.not_taken;
	const Icon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex shrink-0 items-center justify-center rounded-xl text-on-seal ${meta.bg} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-[55%]",
			strokeWidth: 2.2
		})
	});
}
var TYPE_SHORT = {
	regular: "ภาคปกติ",
	samrit: "สัมฤทธิบัตร",
	summer: "ฤดูร้อน",
	retake: "สอบซ่อม"
};
function downloadIcs(course) {
	const body = icsBody(course);
	if (!body) return;
	const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = `exam-${course.courseCode}.ics`;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(a.href);
}
function Session({ morning }) {
	const Icon = morning ? Sun : Sunset;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1 font-medium", morning ? "text-seal-summer" : "text-seal-retake"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-3.5",
			strokeWidth: 2.3
		}), morning ? "เช้า" : "บ่าย"]
	});
}
function ExamPane() {
	const data = useStou((s) => s.data);
	const setTab = useStou((s) => s.setTab);
	const setDrawer = useStou((s) => s.setDrawer);
	const openReading = useStou((s) => s.openReading);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(Date.now());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const next = findNextExam(data.courses);
	const cd = now == null ? null : countdownOf(next, now);
	if (!data.courses.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-dashed border-line bg-card px-5 py-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "mx-auto size-8 text-saffron" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-lg font-semibold",
				children: "ยังไม่มีวิชาในตารางสอบ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "ไปที่หลักสูตร แล้วตั้งสถานะเป็นจะสอบ ภาคปกติ สัมฤทธิบัตร ฤดูร้อน หรือสอบซ่อม"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 h-11 rounded-full bg-saffron px-5 text-sm font-semibold text-on-saffron",
				onClick: () => setTab("plan"),
				children: "เปิดโครงสร้างหลักสูตร"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-3xl border border-line bg-card shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3 px-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-saffron",
								children: "วิชาถัดไป"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-sm text-muted",
								children: next.courseCode
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold leading-snug",
								children: next.courseNameTh
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayStamp, { iso: next.examDate })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 border-y border-line",
						children: cd?.phase === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-4 px-4 py-5 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl font-semibold text-seal-fail",
								children: "กำลังสอบ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "อยู่ในช่วง 4 ชั่วโมงหลังเวลาเริ่ม"
							})]
						}) : [
							["วัน", cd?.days ?? 0],
							["ชม.", cd?.hours ?? 0],
							["นาที", cd?.mins ?? 0],
							["วิ", cd?.secs ?? 0]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-1 py-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-semibold tabular-nums leading-none",
								children: cd ? pad(Number(value)) : "––"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted",
								children: label
							})]
						}, String(label)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMeta, { course: next }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 px-4 pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 flex-1 rounded-full bg-ink text-sm font-semibold text-paper",
							onClick: () => setDrawer({
								kind: "exam",
								code: next.courseCode
							}),
							children: "แก้วันเวลาและที่นั่ง"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex h-11 items-center gap-1 rounded-full border border-line px-4 text-sm font-semibold",
							onClick: () => openReading(next.courseCode),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, { className: "size-4" }), "อ่าน"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "ใบสอบทั้งหมด"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [data.courses.length, " วิชา"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: sortedExams(data.courses).map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
					course,
					expanded: open === course.courseCode,
					onToggle: () => setOpen((c) => c === course.courseCode ? null : course.courseCode),
					onEdit: () => setDrawer({
						kind: "exam",
						code: course.courseCode
					}),
					onRead: () => openReading(course.courseCode),
					centerQuery: mapsUrl(data, course),
					gcal: googleCalendarUrl(course),
					progress: bookProgress(data.studyPlan.find((b) => b.courseCode === course.courseCode) || {
						courseCode: course.courseCode,
						courseNameTh: course.courseNameTh,
						units: []
					})
				}, course.courseCode))
			})
		]
	});
}
function HeroMeta({ course }) {
	const t = timesOf(course);
	const parts = dateParts(course.examDate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Session, { morning: t.morning }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted",
				children: [
					parts.weekday,
					" ",
					parts.day,
					" ",
					parts.month,
					" ",
					parts.year
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5" }),
					t.start,
					"–",
					t.end
				]
			})
		]
	});
}
function DayStamp({ iso }) {
	const chip = dayChip(iso);
	const tone = chip.tone === "today" ? "bg-seal-fail text-on-seal" : chip.tone === "soon" ? "bg-seal-summer text-on-seal" : chip.tone === "past" ? "bg-seal-idle text-on-seal" : "bg-wash text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("rounded-full px-2.5 py-1 text-xs font-semibold", tone),
		children: chip.text
	});
}
function Ticket({ course, expanded, onToggle, onEdit, onRead, centerQuery, gcal, progress }) {
	const type = examTypeOf(course);
	const t = timesOf(course);
	const parts = dateParts(course.examDate);
	const chip = dayChip(course.examDate);
	const online = course.examFormat === "online";
	const ready = readinessCopy(progress.done, progress.total, progress.percent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative overflow-hidden rounded-3xl border border-line bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-y-0 left-0 w-1.5", EXAM_BAR[type]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onToggle,
				className: "flex w-full items-stretch text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-20 shrink-0 flex-col items-center justify-center border-r border-dashed border-line bg-wash py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-muted",
							children: parts.weekday || "วัน"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-semibold leading-none",
							children: parts.day
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: parts.month
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-semibold",
								children: course.courseCode
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-2 py-0.5 text-xs font-semibold text-on-seal", EXAM_BAR[type]),
								children: TYPE_SHORT[type]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0.5 text-base font-semibold leading-snug",
							children: course.courseNameTh
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Session, { morning: t.morning }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t.start,
									"–",
									t.end
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chip.text })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: progress.total ? `อ่าน ${progress.done}/${progress.total} หน่วย · ${ready}` : ready
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-seal-pass",
								style: { width: `${progress.percent}%` }
							})
						})
					]
				})]
			}),
			expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 border-t border-line px-4 py-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
						icon: online ? Monitor : MapPin,
						label: online ? "รูปแบบ" : "สนามสอบ",
						value: online ? "สอบออนไลน์ มสธ." : course.examVenue || "รอประกาศสนาม"
					}),
					!online && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
						icon: Building2,
						label: "ห้อง / ที่นั่ง",
						value: course.examRoom ? `${course.examRoom} · ที่นั่ง ${course.seatNumber || "-"} · แถว ${course.examRow || "-"}` : "รอประกาศห้องและที่นั่ง"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-ink text-sm font-semibold text-paper",
								onClick: onEdit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), " แก้ไข"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold",
								onClick: onRead,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, { className: "size-4" }), " อ่านวิชานี้"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: cn("inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold", !gcal && "pointer-events-none opacity-40"),
								href: gcal || void 0,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "size-4" }), " Google ปฏิทิน"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !course.examDate,
								className: "inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold disabled:opacity-40",
								onClick: () => downloadIcs(course),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " ไฟล์ .ics"]
							}),
							centerQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "col-span-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold",
								href: centerQuery,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " เปิดแผนที่สนามสอบ"]
							})
						]
					})
				]
			})
		]
	});
}
function Detail({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-4 shrink-0 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-muted",
			children: [label, ": "]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})] })]
	});
}
function stampClass(status) {
	if (status === "completed") return "bg-seal-pass text-on-seal";
	if (status === "reading") return "bg-seal-summer text-on-seal";
	return "border border-line bg-card text-muted";
}
function stampMark(status) {
	if (status === "completed") return "จบ";
	if (status === "reading") return "กำลัง";
	return "ยัง";
}
function ReadingPane() {
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
	const [openUnits, setOpenUnits] = (0, import_react.useState)(["10151:1"]);
	const stats = readingOverview(data.studyPlan);
	(0, import_react.useEffect)(() => {
		if (!focusBook) return;
		document.getElementById(`book-${focusBook}`)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [focusBook, data.studyPlan.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line bg-card p-4 shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-seal-pass",
							children: "เตรียมสอบ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "ความคืบหน้าการอ่าน"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-4xl font-semibold leading-none tabular-nums",
								children: [stats.percent, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted",
								children: [
									stats.leavesDone,
									"/",
									stats.leaves,
									" เรื่อง"
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-wash",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-seal-pass",
							style: { width: `${stats.percent}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-3 gap-2 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "เล่ม",
								value: `${stats.books}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "หน่วยจบ",
								value: `${stats.done}/${stats.units}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "ยังเหลือ",
								value: `${stats.remain}`
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-ink text-sm font-semibold text-paper",
					onClick: () => setDrawer({ kind: "book" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookPlus, { className: "size-4" }), " เพิ่มหนังสือ"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-1 text-xs text-muted",
				children: "แตะตราสถานะเพื่อสลับ: ยังไม่อ่าน → กำลังอ่าน → อ่านจบ"
			}),
			data.studyPlan.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-dashed border-line bg-card px-4 py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "ยังไม่มีหนังสือในรายการ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "เพิ่มจากวิชาในหลักสูตร หรือเปิดตัวอย่างไทยศึกษา"
				})]
			}),
			data.studyPlan.map((book) => {
				const p = bookProgress(book);
				const open = openBooks.includes(book.courseCode);
				const allDone = p.total > 0 && p.done === p.total;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: `book-${book.courseCode}`,
					className: "overflow-hidden rounded-3xl border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-start gap-3 p-3 text-left",
						onClick: () => toggleBook(book.courseCode),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid size-12 place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 36 36",
									className: "absolute inset-0 size-12 -rotate-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "15",
										className: "stroke-wash",
										strokeWidth: "3",
										fill: "none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "18",
										r: "15",
										className: "stroke-seal-pass",
										strokeWidth: "3",
										fill: "none",
										strokeLinecap: "round",
										strokeDasharray: `${p.percent / 100 * 94} 94`
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs font-semibold tabular-nums",
									children: p.percent
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-semibold",
											children: book.courseCode
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted",
											children: [
												p.done,
												"/",
												p.total,
												" หน่วย"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold leading-snug",
										children: book.courseNameTh
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted",
										children: book.bookTitle
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-1 size-4 shrink-0 text-muted transition", open && "rotate-180") })
						]
					}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 border-t border-line px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									onClick: () => markBook(book.courseCode, !allDone),
									children: allDone ? "รีเซ็ตทั้งเล่ม" : "ติ๊กจบทั้งเล่ม"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									onClick: () => setDrawer({
										kind: "unit",
										code: book.courseCode
									}),
									children: "เพิ่มหน่วย"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									danger: true,
									onClick: () => {
										if (confirm(`ลบแผนอ่านวิชา ${book.courseCode}?`)) deleteBook(book.courseCode);
									},
									children: "ลบเล่ม"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1.5",
							children: (book.units || []).map((unit) => {
								const key = `${book.courseCode}:${unit.unit}`;
								const st = unitStatus(unit);
								const unitOpen = openUnits.includes(key);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl bg-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 p-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": `สถานะหน่วย ${unit.unit}`,
												className: cn("grid size-11 shrink-0 place-items-center rounded-xl text-xs font-bold", stampClass(st)),
												onClick: () => cycleUnit(book.courseCode, unit.unit),
												children: stampMark(st)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "min-w-0 flex-1 text-left",
												onClick: () => setOpenUnits((cur) => cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted",
													children: ["หน่วย ", unit.unit]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium leading-snug",
													children: unit.title
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "เพิ่มตอนย่อย",
												className: "grid size-10 place-items-center rounded-xl text-muted",
												onClick: () => setDrawer({
													kind: "subunit",
													code: book.courseCode,
													unit: unit.unit
												}),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
											})
										]
									}), unitOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "space-y-1 px-2 pb-2",
										children: [(unit.subUnits || []).map((sub) => {
											const ss = subStatus(sub);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "rounded-xl border border-line bg-card",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 p-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															className: cn("grid size-10 shrink-0 place-items-center rounded-lg text-xs font-bold", stampClass(ss)),
															onClick: () => cycleSub(book.courseCode, unit.unit, sub.id),
															children: stampMark(ss)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs text-muted",
																children: ["ตอน ", sub.id]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm leading-snug",
																children: sub.title
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-label": "เพิ่มเรื่อง",
															className: "grid size-10 place-items-center text-muted",
															onClick: () => setDrawer({
																kind: "topic",
																code: book.courseCode,
																unit: unit.unit,
																subId: String(sub.id)
															}),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-label": "ลบตอน",
															className: "grid size-10 place-items-center text-seal-fail",
															onClick: () => {
																if (confirm(`ลบตอน ${sub.id}?`)) deleteSub(book.courseCode, unit.unit, String(sub.id));
															},
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
														})
													]
												}), (sub.topics || []).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-1 px-2 pb-2",
													children: sub.topics?.map((topic) => {
														const ts = topicStatus(topic);
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-2 rounded-lg bg-paper px-1.5 py-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	className: cn("grid size-9 shrink-0 place-items-center rounded-lg text-xs font-bold", stampClass(ts)),
																	onClick: () => cycleTopic(book.courseCode, unit.unit, String(sub.id), String(topic.id)),
																	children: stampMark(ts)
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "min-w-0 flex-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-xs text-muted",
																		children: topic.id
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm leading-snug",
																		children: topic.title
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	"aria-label": "ลบเรื่อง",
																	className: "grid size-9 place-items-center text-seal-fail",
																	onClick: () => {
																		if (confirm(`ลบเรื่อง ${topic.id}?`)) deleteTopic(book.courseCode, unit.unit, String(sub.id), String(topic.id));
																	},
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
																})
															]
														}, topic.id);
													})
												})]
											}, sub.id);
										}), (unit.subUnits || []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "px-2 text-xs text-muted",
											children: "ยังไม่มีตอนย่อย"
										})]
									})]
								}, key);
							})
						})]
					})]
				}, book.courseCode);
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-paper px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-lg font-semibold tabular-nums",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted",
			children: label
		})]
	});
}
function Mini({ children, onClick, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 rounded-full border px-3 text-xs font-semibold", danger ? "border-seal-fail text-seal-fail" : "border-line"),
		children
	});
}
var FILTERS = [
	{
		id: "all",
		label: "ทั้งหมด"
	},
	{
		id: "scheduled",
		label: "จะสอบ"
	},
	{
		id: "passed",
		label: "ผ่าน"
	},
	{
		id: "will_take",
		label: "ภาคปกติ"
	},
	{
		id: "will_take_samrit",
		label: "สัมฤทธิบัตร"
	},
	{
		id: "will_take_summer",
		label: "ฤดูร้อน"
	},
	{
		id: "will_take_retake",
		label: "ซ่อม"
	},
	{
		id: "failed",
		label: "ไม่ผ่าน"
	},
	{
		id: "transferred",
		label: "เทียบโอน"
	},
	{
		id: "not_taken",
		label: "ยังไม่ลง"
	}
];
var BARS = [
	{
		key: "gen",
		label: "ศึกษาทั่วไป",
		max: 30,
		dot: "bg-seal-regular"
	},
	{
		key: "core",
		label: "เฉพาะบังคับ",
		max: 78,
		dot: "bg-seal-retake"
	},
	{
		key: "elec",
		label: "เฉพาะเลือก",
		max: 12,
		dot: "bg-seal-samrit"
	},
	{
		key: "free",
		label: "เลือกเสรี",
		max: 6,
		dot: "bg-seal-move"
	}
];
function PlanPane() {
	const data = useStou((s) => s.data);
	const filter = useStou((s) => s.filter);
	const query = useStou((s) => s.query);
	const setFilter = useStou((s) => s.setFilter);
	const setQuery = useStou((s) => s.setQuery);
	const setDrawer = useStou((s) => s.setDrawer);
	const k = creditBuckets(data.curriculum);
	const counts = {
		all: data.curriculum.length,
		scheduled: k.scheduled,
		passed: k.passed,
		will_take: k.regular,
		will_take_samrit: k.samrit,
		will_take_summer: k.summer,
		will_take_retake: k.retake,
		failed: k.failed,
		transferred: k.transferred,
		not_taken: k.notTaken
	};
	const groups = groupCurriculum(filterCurriculum(data.curriculum, filter, query));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl border border-line bg-card p-4 shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-saffron",
							children: "ปริญญาตรี · 126 หน่วยกิต"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-lg font-semibold",
							children: "ความก้าวหน้า"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-semibold leading-none tabular-nums",
								children: k.earned
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted",
								children: [
									"จาก 126 · ",
									k.percent,
									"%"
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-wash",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-saffron",
							style: { width: `${k.percent}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-2.5",
						children: BARS.map((bar) => {
							const value = k[bar.key];
							const pct = Math.min(100, Math.round(value / bar.max * 100));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", bar.dot) }), bar.label]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [
										value,
										" / ",
										bar.max
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-wash",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-full rounded-full", bar.dot),
									style: { width: `${pct}%` }
								})
							})] }, bar.key);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "ค้นรหัสหรือชื่อวิชา",
					"aria-label": "ค้นหารายวิชา",
					className: "h-11 w-full rounded-2xl border border-line bg-card pr-3 pl-10 text-sm outline-none focus:border-saffron"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4",
				children: FILTERS.map((f) => {
					const active = filter === f.id;
					const seal = STATUS_SEAL[f.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setFilter(f.id),
						className: cn("inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold", active ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"),
						children: [
							seal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", active ? "bg-paper" : seal.bar) }),
							f.label,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("tabular-nums", active ? "text-paper/80" : "text-muted"),
								children: counts[f.id] ?? 0
							})
						]
					}, f.id);
				})
			}),
			groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-dashed border-line bg-card px-4 py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "ไม่พบวิชา"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "ลองคำค้นอื่น หรือเลือกตัวกรองทั้งหมด"
				})]
			}),
			groups.map(([cat, courses]) => {
				const info = categoryTitle(cat);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: info.title
						}), info.sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: info.sub
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [courses.length, " ชุด"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: courses.map((course) => {
							const status = course.status || "not_taken";
							const exam = data.courses.find((c) => c.courseCode === course.courseCode);
							const scheduled = isScheduled(status);
							const t = exam ? timesOf(exam) : null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-2xl border border-line bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "flex w-full items-start gap-3 p-3 text-left",
										onClick: () => setDrawer({
											kind: "status",
											code: course.courseCode
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-display text-sm font-semibold",
														children: course.courseCode
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs text-muted",
														children: [course.credits || 6, " นก."]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-base font-semibold leading-snug",
													children: course.courseNameTh
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-0.5 text-xs font-medium text-muted",
													children: statusShort(status)
												})
											]
										})]
									}),
									status === "passed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, {
										tone: "bg-seal-pass",
										children: [
											"สะสมแล้ว ",
											course.credits || 6,
											" หน่วยกิต"
										]
									}),
									status === "transferred" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, {
										tone: "bg-seal-move",
										children: [
											"เทียบโอนแล้ว ",
											course.credits || 6,
											" หน่วยกิต"
										]
									}),
									status === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
										tone: "bg-seal-fail",
										children: "ไม่ผ่าน — เลือกสอบซ่อมหรือลงใหม่ได้"
									}),
									scheduled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2 border-t border-line px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "min-w-0 text-xs text-muted",
											children: [exam?.examDateTh ? `${exam.examDateTh} · ${t?.start}–${t?.end}` : "ยังไม่ระบุวันสอบ", exam?.examFormat === "online" ? " · ออนไลน์" : exam?.examRoom ? ` · ${exam.examRoom}` : ""]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "h-9 shrink-0 rounded-full bg-wash px-3 text-xs font-semibold",
											onClick: () => setDrawer({
												kind: "exam",
												code: course.courseCode
											}),
											children: "กำหนดสอบ"
										})]
									})
								]
							}, course.courseCode);
						})
					})]
				}, cat);
			})
		]
	});
}
function Note({ children, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("px-3 py-1.5 text-xs font-medium text-on-seal", tone),
		children
	});
}
function AppDrawers() {
	const drawer = useStou((s) => s.drawer);
	const setDrawer = useStou((s) => s.setDrawer);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
		open: !!drawer,
		onOpenChange: (open) => !open && setDrawer(null),
		shouldScaleBackground: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-50 bg-ink/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
			className: "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[92dvh] w-full max-w-lg flex-col rounded-t-3xl border border-line bg-card outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-1.5 w-12 shrink-0 rounded-full bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: [
					drawer?.kind === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsBody, {}),
					drawer?.kind === "status" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBody, { code: drawer.code }),
					drawer?.kind === "exam" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamBody, { code: drawer.code }),
					drawer?.kind === "book" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookBody, {}),
					drawer?.kind === "unit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitBody, { code: drawer.code }),
					drawer?.kind === "subunit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubBody, {
						code: drawer.code,
						unit: drawer.unit
					}),
					drawer?.kind === "topic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicBody, {
						code: drawer.code,
						unit: drawer.unit,
						subId: drawer.subId
					})
				]
			})]
		})] })
	});
}
function Title({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
		className: "font-display text-xl font-semibold",
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-xs font-semibold text-muted",
			children: label
		}), children]
	});
}
var inputCls = "h-11 w-full rounded-2xl border border-line bg-paper px-3 text-sm outline-none focus:border-saffron";
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
	const fileRef = (0, import_react.useRef)(null);
	const [replace, setReplace] = (0, import_react.useState)(false);
	const [install, setInstall] = (0, import_react.useState)(null);
	const [student, setStudent] = (0, import_react.useState)(data.student);
	const [center, setCenter] = (0, import_react.useState)(data.examCenter);
	(0, import_react.useEffect)(() => {
		const onPrompt = (e) => {
			e.preventDefault();
			setInstall(e);
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		return () => window.removeEventListener("beforeinstallprompt", onPrompt);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "ตั้งค่าและข้อมูล" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"หลักสูตร ",
					data.curriculum.length,
					" วิชา · ตารางสอบ ",
					data.courses.length,
					" · หนังสือ ",
					data.studyPlan.length,
					" เล่ม · เก็บบนเครื่องนี้ ออฟไลน์ได้"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex h-12 w-full items-center justify-between rounded-2xl border border-line bg-paper px-3 text-sm font-semibold",
				onClick: () => setTheme(theme === "day" ? "night" : "day"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [
						theme === "day" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }),
						" ",
						theme === "day" ? "โหมดตะเกียง (มืด)" : "โหมดกระดาษ (สว่าง)"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: theme === "day" ? "กลางวัน" : "กลางคืน"
				})]
			}),
			install && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "h-11 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				onClick: async () => {
					await install.prompt();
					setInstall(null);
				},
				children: "ติดตั้งแอปบนหน้าจอเครื่อง"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-seal-pass text-sm font-semibold text-on-seal",
					onClick: exportXls,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-4" }), " Excel 5 แผ่น"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-line text-sm font-semibold",
					onClick: exportJson,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " สำรอง JSON"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 rounded-2xl border border-line p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "นำเข้า JSON"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("h-10 rounded-xl border", !replace ? "border-ink bg-ink text-paper" : "border-line"),
							onClick: () => setReplace(false),
							children: "รวมของเดิม"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("h-10 rounded-xl border", replace ? "border-ink bg-ink text-paper" : "border-line"),
							onClick: () => setReplace(true),
							children: "แทนที่สาขา"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "application/json,.json",
						className: "hidden",
						onChange: (e) => {
							const f = e.target.files?.[0];
							if (f) importJson(f, replace);
							e.target.value = "";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-2xl bg-saffron text-sm font-semibold text-on-saffron",
						onClick: () => fileRef.current?.click(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), " เลือกไฟล์ .json"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-2",
				onSubmit: (e) => {
					e.preventDefault();
					saveProfile(student, center);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "บัตรนักศึกษาและสนามสอบ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "รหัสนักศึกษา",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: student.studentId,
							onChange: (e) => setStudent({
								...student,
								studentId: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "ชื่อ-นามสกุล",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: student.name,
							onChange: (e) => setStudent({
								...student,
								name: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "สาขาวิชา",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: student.faculty || "",
							onChange: (e) => setStudent({
								...student,
								faculty: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "วิชาเอก",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: student.major || "",
							onChange: (e) => setStudent({
								...student,
								major: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "ศูนย์วิทยพัฒนา",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: student.center || "",
							onChange: (e) => setStudent({
								...student,
								center: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ภาค",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: student.semester || "",
								onChange: (e) => setStudent({
									...student,
									semester: e.target.value
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ปีการศึกษา",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: student.academicYear || "",
								onChange: (e) => setStudent({
									...student,
									academicYear: e.target.value
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "ชื่อสนามสอบ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: center.centerName || "",
							onChange: (e) => setCenter({
								...center,
								centerName: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "จังหวัด",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: center.province || "",
							onChange: (e) => setCenter({
								...center,
								province: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "ที่อยู่ / คำค้นแผนที่",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: center.googleMapsQuery || center.locationAddress || "",
							onChange: (e) => setCenter({
								...center,
								googleMapsQuery: e.target.value,
								locationAddress: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-11 w-full rounded-full bg-ink text-sm font-semibold text-paper",
						children: "บันทึกโปรไฟล์"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 rounded-2xl border border-seal-fail/40 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 w-full rounded-xl border border-line text-sm font-semibold",
						onClick: toggleSample,
						children: "เปิด/ปิดตัวอย่างหนังสือ 10151"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 w-full rounded-xl border border-line text-sm font-semibold",
						onClick: loadSample,
						children: "โหลดข้อมูลตัวอย่างทั้งชุด"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 w-full rounded-xl border border-seal-fail text-sm font-semibold text-seal-fail",
						onClick: resetReading,
						children: "รีเซ็ตความคืบหน้าการอ่าน"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-10 w-full rounded-xl border border-seal-fail text-sm font-semibold text-seal-fail",
						onClick: resetCurriculum,
						children: "ล้างรายวิชาในหลักสูตร"
					})
				]
			})
		]
	});
}
function StatusBody({ code }) {
	const course = useStou((s) => s.data.curriculum.find((c) => c.courseCode === code));
	const changeStatus = useStou((s) => s.changeStatus);
	if (!course) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "ไม่พบวิชา" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "สถานะชุดวิชา" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					course.courseCode,
					" · ",
					course.courseNameTh
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1.5",
				children: STATUS_OPTIONS.map((opt) => {
					const on = (course.status || "not_taken") === opt.key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("flex h-12 w-full items-center gap-3 rounded-2xl border px-2 text-left", on ? "border-ink" : "border-line"),
						onClick: () => changeStatus(code, opt.key),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {
								status: opt.key,
								className: "size-9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm font-semibold",
								children: opt.label
							}),
							on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
						]
					}, opt.key);
				})
			})
		]
	});
}
function ExamBody({ code }) {
	const data = useStou((s) => s.data);
	const saveExam = useStou((s) => s.saveExam);
	const course = data.curriculum.find((c) => c.courseCode === code) || data.courses.find((c) => c.courseCode === code);
	const [draft, setDraft] = (0, import_react.useState)(() => draftFrom(data, code));
	const online = draft.examFormat === "online";
	const preset = presetOf(draft.startTime, draft.endTime);
	function setTime(partial) {
		setDraft((d) => ({
			...d,
			...partial
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault();
			saveExam(code, draft);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "กำหนดการสอบ" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium",
				children: [
					code,
					" · ",
					course?.courseNameTh
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ประเภทการสอบ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: inputCls,
					value: draft.examType,
					onChange: (e) => setTime({ examType: e.target.value }),
					children: EXAM_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t.key,
						children: t.label
					}, t.key))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "รูปแบบ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: inputCls,
					value: draft.examFormat,
					onChange: (e) => setTime({ examFormat: e.target.value }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "onsite",
						children: "สนามสอบ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "online",
						children: "สอบออนไลน์"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "วันสอบ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					className: inputCls,
					value: draft.examDate,
					onChange: (e) => setTime({ examDate: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "คาบ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: inputCls,
					value: preset,
					onChange: (e) => {
						if (e.target.value === "morning") setTime({
							startTime: "09:00",
							endTime: "12:00"
						});
						else if (e.target.value === "afternoon") setTime({
							startTime: "13:30",
							endTime: "16:30"
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "morning",
							children: "เช้า 09:00–12:00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "afternoon",
							children: "บ่าย 13:30–16:30"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "custom",
							children: "กำหนดเอง"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "เริ่ม",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						className: inputCls,
						value: draft.startTime,
						onChange: (e) => setTime({ startTime: e.target.value })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "เลิก",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						className: inputCls,
						value: draft.endTime,
						onChange: (e) => setTime({ endTime: e.target.value })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [
					[
						"เริ่ม -1 ชม.",
						"start",
						-60
					],
					[
						"เริ่ม +1 ชม.",
						"start",
						60
					],
					[
						"เลิก -15 น.",
						"end",
						-15
					],
					[
						"เลิก +15 น.",
						"end",
						15
					]
				].map(([label, which, delta]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-9 rounded-full border border-line px-3 text-xs font-semibold",
					onClick: () => setDraft((d) => which === "start" ? {
						...d,
						startTime: shiftTime(d.startTime, Number(delta))
					} : {
						...d,
						endTime: shiftTime(d.endTime, Number(delta))
					}),
					children: label
				}, String(label)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-saffron",
				children: ["ใช้เวลาสอบ ", durationLabel(draft.startTime, draft.endTime)]
			}),
			online ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-wash px-3 py-2 text-sm",
				children: "สอบผ่านระบบออนไลน์ มสธ. ไม่ต้องระบุห้องและที่นั่ง"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "สนามสอบ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: draft.examVenue,
						onChange: (e) => setTime({ examVenue: e.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "ห้องสอบ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: draft.examRoom,
						onChange: (e) => setTime({ examRoom: e.target.value })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "เลขที่นั่ง",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: draft.seatNumber,
							onChange: (e) => setTime({ seatNumber: e.target.value })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "แถว",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: draft.examRow,
							onChange: (e) => setTime({ examRow: e.target.value })
						})
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				children: "บันทึกกำหนดการ"
			})
		]
	});
}
function BookBody() {
	const curriculum = useStou((s) => s.data.curriculum);
	const addBook = useStou((s) => s.addBook);
	const [code, setCode] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [total, setTotal] = (0, import_react.useState)(15);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault();
			if (!code.trim() || !name.trim()) return;
			addBook(code.trim(), name.trim(), Math.max(1, Math.min(30, total)));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "เพิ่มหนังสือ" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "เลือกจากหลักสูตร",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: inputCls,
					defaultValue: "",
					onChange: (e) => {
						const cur = curriculum.find((c) => c.courseCode === e.target.value);
						if (!cur) return;
						setCode(cur.courseCode);
						setName(cur.courseNameTh);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "— เลือกชุดวิชา —"
					}), curriculum.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: c.courseCode,
						children: [
							c.courseCode,
							" ",
							c.courseNameTh
						]
					}, c.courseCode))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "รหัสวิชา",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: code,
					onChange: (e) => setCode(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ชื่อวิชา",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: name,
					onChange: (e) => setName(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "จำนวนหน่วย (1–30)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					type: "number",
					min: 1,
					max: 30,
					value: total,
					onChange: (e) => setTotal(Number(e.target.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				children: "เพิ่มเข้าแผนอ่าน"
			})
		]
	});
}
function UnitBody({ code }) {
	const addUnit = useStou((s) => s.addUnit);
	const [title, setTitle] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault();
			addUnit(code, title);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "เพิ่มหน่วย" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: ["วิชา ", code]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ชื่อหน่วย",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "เช่น กฎหมายและกระบวนการยุติธรรม",
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				children: "เพิ่มหน่วย"
			})
		]
	});
}
function SubBody({ code, unit }) {
	const found = useStou((s) => s.data.studyPlan.find((b) => b.courseCode === code))?.units.find((u) => u.unit === unit);
	const addSub = useStou((s) => s.addSub);
	const next = (found?.subUnits?.length || 0) + 1;
	const [id, setId] = (0, import_react.useState)(`${unit}.${next}`);
	const [title, setTitle] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault();
			addSub(code, unit, id.trim(), title.trim());
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "เพิ่มตอนย่อย" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					code,
					" · หน่วย ",
					unit,
					" ",
					found?.title || ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ลำดับตอน",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: id,
					onChange: (e) => setId(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ชื่อตอน",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: title,
					onChange: (e) => setTitle(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				children: "เพิ่มตอน"
			})
		]
	});
}
function TopicBody({ code, unit, subId }) {
	const sub = useStou((s) => s.data.studyPlan.find((b) => b.courseCode === code))?.units.find((u) => u.unit === unit)?.subUnits?.find((s) => String(s.id) === subId);
	const addTopic = useStou((s) => s.addTopic);
	const next = (sub?.topics?.length || 0) + 1;
	const [id, setId] = (0, import_react.useState)(`${subId}.${next}`);
	const [title, setTitle] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault();
			addTopic(code, unit, subId, id.trim(), title.trim());
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: "เพิ่มเรื่อง" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"ตอน ",
					subId,
					" · ",
					sub?.title
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ลำดับเรื่อง",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: id,
					onChange: (e) => setId(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ชื่อเรื่อง",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: inputCls,
					value: title,
					onChange: (e) => setTitle(e.target.value),
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 w-full rounded-full bg-saffron text-sm font-semibold text-on-saffron",
				children: "เพิ่มเรื่อง"
			})
		]
	});
}
var TABS = [
	{
		id: "exams",
		label: "ตารางสอบ",
		icon: CalendarRange
	},
	{
		id: "reading",
		label: "อ่านหนังสือ",
		icon: BookOpenText
	},
	{
		id: "plan",
		label: "หลักสูตร",
		icon: GraduationCap
	}
];
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: "size-10",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "48",
				height: "48",
				rx: "14",
				className: "fill-saffron"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 18.5h24v14.2c0 1.2-1 2.3-2.4 2.3H14.4c-1.4 0-2.4-1-2.4-2.3V18.5Z",
				className: "fill-on-saffron"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 16.2 24 10l12 6.2v2.3H12v-2.3Z",
				className: "fill-on-seal",
				fillOpacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 18.8v14",
				className: "stroke-saffron",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34.5",
				cy: "31.5",
				r: "5.2",
				className: "fill-seal-pass"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32.2 31.5 33.8 33.2 36.8 29.8",
				className: "stroke-on-seal",
				strokeWidth: "1.4",
				fill: "none",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	});
}
function AppShell() {
	const tab = useStou((s) => s.tab);
	const setTab = useStou((s) => s.setTab);
	const boot = useStou((s) => s.boot);
	const theme = useStou((s) => s.theme);
	const booted = useStou((s) => s.booted);
	const toast = useStou((s) => s.toast);
	const dismiss = useStou((s) => s.dismissToast);
	const student = useStou((s) => s.data.student);
	const setDrawer = useStou((s) => s.setDrawer);
	(0, import_react.useEffect)(() => {
		boot();
	}, [boot]);
	(0, import_react.useEffect)(() => {
		if (!booted) return;
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme, booted]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const id = window.setTimeout(dismiss, 2800);
		return () => window.clearTimeout(id);
	}, [toast, dismiss]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh w-full max-w-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/90 px-4 py-3 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-lg font-semibold tracking-tight",
									children: "STOU Ledger"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-saffron",
									children: "มสธ."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm text-muted",
								children: [
									student.name || "นักศึกษา",
									" · ",
									student.studentId || "ยังไม่ระบุรหัส"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-card text-ink",
							"aria-label": "การตั้งค่าและข้อมูล",
							onClick: () => setDrawer({ kind: "settings" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
								className: "size-5",
								strokeWidth: 2.1
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "px-4 pt-4 pb-32",
				children: [
					tab === "exams" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExamPane, {}),
					tab === "reading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingPane, {}),
					tab === "plan" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanPane, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				"aria-label": "เมนูหลัก",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-lg gap-1 rounded-full border border-line bg-card p-1 shadow-lift",
					children: TABS.map((item) => {
						const Icon = item.icon;
						const active = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(item.id),
							className: cn("flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold transition", active ? "bg-ink text-paper" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								strokeWidth: 2.2
							}), item.label]
						}, item.id);
					})
				})
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("pointer-events-auto max-w-sm rounded-full px-4 py-2.5 text-sm font-medium shadow-lift", toast.tone === "bad" && "bg-seal-fail text-on-seal", toast.tone === "warn" && "bg-seal-summer text-on-seal", toast.tone === "ok" && "bg-ink text-paper"),
					role: "status",
					children: toast.msg
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDrawers, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
