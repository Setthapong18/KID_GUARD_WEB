import React, { useState, useEffect, useRef } from "react";
import ThreePhoneMockup from "./components/ThreePhoneMockup";


/* ─── Intersection Observer Hook ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ─── Icons ─── */
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
      clipRule="evenodd"
    />
  </svg>
);

const AppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.523 15.341c-.585 0-1.06.474-1.06 1.06s.475 1.06 1.06 1.06c.586 0 1.06-.474 1.06-1.06s-.474-1.06-1.06-1.06zm-11.046 0c-.586 0-1.06.474-1.06 1.06s.474 1.06 1.06 1.06 1.06-.474 1.06-1.06-.474-1.06-1.06-1.06zm11.405-6.021 1.91-3.31a.4.4 0 0 0-.146-.544.398.398 0 0 0-.544.146l-1.935 3.352A11.582 11.582 0 0 0 12 7.89c-1.87 0-3.63.442-5.167 1.074l-1.935-3.352a.4.4 0 0 0-.544-.146.4.4 0 0 0-.146.544l1.91 3.31C2.846 11.196.5 14.493.5 18.3h23c0-3.807-2.346-7.104-5.618-8.98zM.5 18.3v.002-.003z" />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

/* ─── Extra Icons for Features ─── */
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
  </svg>
);

/* ─── FEATURES DATA (8 Features) ─── */
const FEATURES = [
  {
    icon: <LocationIcon />,
    title: "ติดตามตำแหน่ง",
    desc: "ดูตำแหน่งของบุตรหลานแบบเรียลไทม์บนแผนที่ มั่นใจได้ว่าอยู่ในบริเวณที่ปลอดภัย",
    color: "from-sage-400 to-sage-600",
  },
  {
    icon: <ClockIcon />,
    title: "จัดการเวลาหน้าจอ",
    desc: "กำหนดเวลาใช้งานอุปกรณ์ต่อวัน สร้างสมดุลระหว่างโลกออนไลน์กับกิจกรรมอื่น",
    color: "from-sage-500 to-sage-700",
  },
  {
    icon: <AppIcon />,
    title: "ดูการใช้แอปพลิเคชัน",
    desc: "ตรวจสอบว่าบุตรหลานใช้แอปอะไรบ้าง ใช้เป็นระยะเวลาเท่าไร บล็อกแอปไม่เหมาะสมได้ทันที",
    color: "from-sage-400 to-sage-600",
  },
  {
    icon: <CalendarIcon />,
    title: "จัดตารางเวลา",
    desc: "ตั้งเวลานอนและช่วงเวลาห้ามรบกวน สร้างวินัยและนิสัยที่ดีให้กับเด็ก",
    color: "from-sage-400 to-sage-600",
  },
  {
    icon: <StarIcon />,
    title: "ระบบรางวัล",
    desc: "สร้างแรงจูงใจให้ลูกด้วยระบบแต้มสะสมและรางวัลที่ปรับแต่งได้",
    color: "from-sage-500 to-sage-700",
  },
  {
    icon: <LockIcon />,
    title: "โหมดเด็กที่ปลอดภัย",
    desc: "โหมดพิเศษสำหรับเด็กที่ป้องกันด้วย PIN ไม่สามารถปิดหรือถอนการติดตั้งได้ง่าย",
    color: "from-sage-400 to-sage-600",
  },
  {
    icon: <UsersIcon />,
    title: "รองรับหลายโปรไฟล์",
    desc: "จัดการบุตรหลานหลายคนได้ในแอปเดียว พร้อมอวาตาร์น่ารักให้เลือก",
    color: "from-sage-500 to-sage-700",
  },
];

/* ─── HOW TO USE DATA ─── */
const STEPS = [
  {
    step: "01",
    title: "ดาวน์โหลด APK",
    desc: "กดปุ่มดาวน์โหลดบนเว็บไซต์เพื่อรับไฟล์ APK ของ KidGuard ลงบนอุปกรณ์ Android ของทั้งผู้ปกครองและเด็ก",
    icon: <DownloadIcon className="w-10 h-10" />,
  },
  {
    step: "02",
    title: "ติดตั้งแอป",
    desc: "เปิดไฟล์ APK ที่ดาวน์โหลดมา อนุญาตการติดตั้งจากแหล่งที่ไม่รู้จัก แล้วกดติดตั้ง",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "เชื่อมต่อบัญชี",
    desc: "เปิดแอป เลือกบทบาท (ผู้ปกครอง/เด็ก) ลงทะเบียนหรือเข้าสู่ระบบ แล้วเชื่อมต่อกับอุปกรณ์บุตรหลาน ด้วย PIN 6 หลัก",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
];

const PARENT_STEPS = [
  {
    icon: <UsersIcon />,
    title: "สมัครสมาชิก",
    desc: 'เลือก "ผู้ปกครอง" → ลงทะเบียนด้วยอีเมลและรหัสผ่าน → ระบบจะสร้าง PIN 6 หลักให้อัตโนมัติ',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
      </svg>
    ),
    title: "เพิ่มโปรไฟล์เด็ก",
    desc: 'กดปุ่ม "เพิ่มเด็ก" → เลือก Avatar → กรอกชื่อเล่นและอายุ → ตั้งเวลาจำกัดต่อวัน → เลือกโหมดดูแล',
  },
  {
    icon: <LocationIcon />,
    title: "ติดตามตำแหน่ง",
    desc: "ดูตำแหน่งเรียลไทม์ของเด็กบนแผนที่ อัปเดตอัตโนมัติ",
  },
  {
    icon: <ClockIcon />,
    title: "จัดการเวลาหน้าจอ",
    desc: "ตั้งเวลาจำกัดต่อวัน ดูเวลาที่ใช้ไปและเวลาที่เหลือ สามารถหยุดชั่วคราวได้ทันที",
  },
  {
    icon: <AppIcon />,
    title: "ควบคุมแอป",
    desc: "ดูรายการแอปทั้งหมด บล็อกแอปไม่เหมาะสม ค้นหาและรีเฟรชรายการแอปล่าสุด",
  },
  {
    icon: <CalendarIcon />,
    title: "จัดตารางเวลา",
    desc: "ตั้งเวลานอนหลับ (Sleep Schedule) และช่วงเวลาสงบ (Quiet Time) เช่น เวลาทำการบ้าน",
  },
  {
    icon: <StarIcon />,
    title: "ระบบรางวัล",
    desc: "สร้างรางวัลพร้อมสัญลักษณ์และแต้มที่ต้องสะสม แก้ไข/ลบรางวัลได้ด้วยการกดค้าง",
  },
];

const CHILD_STEPS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    title: "เชื่อมต่อกับผู้ปกครอง",
    desc: 'เปิดแอป → เลือก "เด็ก" → กรอก PIN 6 หลักจากผู้ปกครอง → ระบบเชื่อมต่ออัตโนมัติ',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
      </svg>
    ),
    title: "สร้างโปรไฟล์",
    desc: 'เลือก Avatar ที่ชอบ → กรอกชื่อเล่นและอายุ → กด "เริ่มต้นใช้งาน"',
  },
  {
    icon: <ShieldIcon />,
    title: "เปิดโหมดเด็ก",
    desc: "กดเปิดโหมดเด็ก → ระบบนับเวลา/บล็อกแอป/ตารางเวลาทำงานอัตโนมัติ → ปิดได้เฉพาะ PIN ผู้ปกครอง",
  },
  {
    icon: <StarIcon />,
    title: "ดูแต้มสะสม",
    desc: "ดูแต้มที่มีและรางวัลที่แลกได้ พร้อมเวลาหน้าจอคงเหลือในหน้าหลัก",
  },
];

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "ฟีเจอร์" },
    { href: "#how-to-use", label: "วิธีใช้งาน" },
    { href: "#installation", label: "คู่มือติดตั้ง APK" },
    { href: "#about-project", label: "เกี่ยวกับโปรเจค" },
  ];

  return (
    <nav
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[96%] sm:w-[95%] max-w-6xl z-50 transition-all duration-700 ${scrolled
        ? "glass rounded-[2rem] py-2.5 sm:py-3 px-5 sm:px-8 shadow-premium"
        : "bg-transparent py-4 sm:py-5 px-5 sm:px-8"
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/assets/Kid_Guard.png"
              alt="KidGuard"
              className="w-10 h-10 rounded-xl shadow-sage-glow group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-sage-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold text-sage-900 tracking-tight">
            Kid<span className="text-sage-500">Guard</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sage-700 hover:text-sage-900 font-medium text-sm transition-all relative group whitespace-nowrap"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/KidGuard.apk"
            download
            className="relative overflow-hidden group bg-sage-800 text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all hover:bg-sage-900 hover:shadow-sage-glow hover:-translate-y-0.5"
          >
            <span className="relative z-10">ดาวน์โหลด</span>
            <div className="absolute inset-x-0 bottom-0 h-0 bg-sage-600 transition-all duration-300 group-hover:h-full -z-0" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-sage-800 p-2 hover:bg-sage-100 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-4 rounded-3xl p-6 animate-scale-in border border-white/20">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sage-800 font-semibold text-lg hover:text-sage-600 px-4 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/KidGuard.apk"
              download
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center bg-sage-800 text-white py-4 rounded-2xl font-bold shadow-lg"
            >
              ดาวน์โหลด APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Background with mesh-like blobs */}
      <div className="absolute inset-0 bg-[#FDFCFA]" />

      {/* Dynamic Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-sage-100/40 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-[0%] left-[-5%] w-[40vw] h-[40vw] bg-sage-200/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-accent-400/20 rounded-full blur-[80px] animate-pulse-soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase text-sage-600 border border-sage-100 shadow-sm mb-6 sm:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
              </span>
              Parental Control Redefined
            </span>
          </div>

          <h1 className="animate-reveal text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-10">
            <span className="text-sage-950 text-gradient-sage">ดูแลบุตรหลาน</span>
            <br />
            <span className="text-sage-900">อย่างพรีเมียม</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-sage-600 text-base sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
            สัมผัสประสบการณ์การดูแลบุตรหลานยุคใหม่
            <span className="text-sage-900 block mt-2">ง่าย ปลอดภัย และอัจฉริยะที่สุด</span>
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <a
              href="/KidGuard.apk"
              download
              className="group relative overflow-hidden bg-sage-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-[2rem] text-lg sm:text-xl font-bold transition-all shadow-premium hover:shadow-sage-glow hover:-translate-y-1"
            >
              <div className="relative z-10 flex items-center gap-3">
                <DownloadIcon className="w-7 h-7 group-hover:translate-y-1 transition-transform" />
                เริ่มต้นใช้งานฟรี
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-sage-600 to-sage-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#features"
              className="glass px-8 sm:px-10 py-4 sm:py-5 rounded-[2rem] text-lg sm:text-xl font-bold text-sage-800 hover:bg-white hover:shadow-premium transition-all hover:-translate-y-1 flex items-center gap-2 justify-center"
            >
              สำรวจฟีเจอร์
              <ChevronDown />
            </a>
          </div>

          {/* New Premium Stats */}
          <div className="animate-fade-in-up delay-400 mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-sage-900 leading-none mb-1.5 sm:mb-2">100%</div>
              <div className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">Privacy Secured</div>
            </div>
            <div className="border-l border-sage-200 pl-4 sm:pl-8">
              <div className="text-2xl sm:text-3xl font-black text-sage-900 leading-none mb-1.5 sm:mb-2">Android</div>
              <div className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">Full Platform</div>
            </div>
            <div className="border-l border-sage-200 pl-4 sm:pl-8">
              <div className="text-2xl sm:text-3xl font-black text-sage-900 leading-none mb-1.5 sm:mb-2">FREE</div>
              <div className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">Open Source</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative animate-float pt-6 sm:pt-10 lg:pt-0">
          <div className="absolute inset-0 bg-sage-500/10 blur-[100px] rounded-full" />
          <ThreePhoneMockup />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FEATURES SECTION
   ═══════════════════════════════════════════════════════ */
function Features() {
  const [ref, inView] = useInView();

  return (
    <section
      id="features"
      className="relative py-20 sm:py-32 bg-white overflow-hidden"
      ref={ref}
    >
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-sage-50 rounded-full blur-[100px] opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-24 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sage-950 mb-4 sm:mb-6 tracking-tight">
            ฟีเจอร์ที่ออกแบบมา<br /><span className="text-gradient-sage">เพื่อความสบายใจของคุณ</span>
          </h2>
          <p className="text-sage-500 text-base sm:text-xl max-w-2xl mx-auto font-medium">
            รวมทุกเทคโนโลยีเพื่อการดูแลบุตรหลานอย่างรอบด้าน ใช้งานง่ายเพียงปลายนิ้วสัมผัส
          </p>
        </div>

        {/* Bento-ish Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {FEATURES.slice(0, 6).map((f, i) => (
            <div
              key={i}
              className={`group card-hover glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-sage-100 ${inView ? "animate-fade-in-up" : "opacity-0"
                } ${i === 0 || i === 4 ? "sm:col-span-2 md:col-span-2" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center mb-6 sm:mb-10 shadow-lg group-hover:rotate-6 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-3 sm:mb-4 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sage-600 text-base sm:text-lg leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HOW TO USE SECTION
   ═══════════════════════════════════════════════════════ */
function HowToUse() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState("parent");

  return (
    <section
      id="how-to-use"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-sage-50 via-white to-sage-100/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-24 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sage-950 mb-4 sm:mb-6">
            เริ่มต้นดูแล<br /><span className="text-gradient-sage">ใน 3 ขั้นตอนง่ายๆ</span>
          </h2>
          <p className="text-sage-500 text-base sm:text-xl max-w-2xl mx-auto font-medium">
            ติดตั้งง่าย ไม่ยุ่งยาก พร้อมระบบความปลอดภัยระดับพรีเมียม
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-20 sm:mb-32">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`relative group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[70%] w-full h-[2px] bg-gradient-to-r from-sage-200 to-transparent -z-10" />
              )}
              <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-center shadow-premium group-hover:shadow-sage-glow transition-all duration-500 hover:-translate-y-3 border border-sage-50">
                <div className="absolute top-5 left-5 sm:top-8 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-sage-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl font-black rotate-[-10deg] group-hover:rotate-0 transition-transform">
                  {s.step}
                </div>
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-sage-50 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-sage-600 mb-6 sm:mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  {s.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-sage-900 mb-3 sm:mb-4">
                  {s.title}
                </h3>
                <p className="text-sage-500 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Guide — Parent / Child Tabs */}
        <div className={inView ? "animate-fade-in-up delay-400" : "opacity-0"}>
          <div className="glass max-w-5xl mx-auto rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12 border border-white/60 shadow-premium">
            <h3 className="text-center text-2xl sm:text-3xl font-black text-sage-950 mb-3 sm:mb-4">
              คู่มือการใช้งานเชิงลึก
            </h3>
            <p className="text-center text-sage-500 text-base sm:text-lg mb-8 sm:mb-12 font-medium">
              เลือกบทบาทเพื่อดูวิธีการตั้งค่าอย่างละเอียด
            </p>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
              <button
                onClick={() => setActiveTab("parent")}
                className={`px-6 sm:px-10 py-3.5 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-bold text-base sm:text-lg transition-all flex items-center gap-2 sm:gap-3 ${activeTab === "parent"
                  ? "bg-sage-900 text-white shadow-xl translate-y-[-4px]"
                  : "bg-sage-50 text-sage-600 hover:bg-sage-100"
                  }`}
              >
                <UsersIcon /> ผู้ปกครอง
              </button>
              <button
                onClick={() => setActiveTab("child")}
                className={`px-6 sm:px-10 py-3.5 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-bold text-base sm:text-lg transition-all flex items-center gap-2 sm:gap-3 ${activeTab === "child"
                  ? "bg-sage-900 text-white shadow-xl translate-y-[-4px]"
                  : "bg-sage-50 text-sage-600 hover:bg-sage-100"
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
                </svg>
                บุตรหลาน
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {(activeTab === "parent" ? PARENT_STEPS : CHILD_STEPS).map(
                (item, i) => (
                  <div
                    key={`${activeTab}-${i}`}
                    className="bg-white/50 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-sage-100 hover:bg-white hover:shadow-premium transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-sage-50 flex items-center justify-center text-sage-700 group-hover:scale-110 transition-transform group-hover:bg-sage-900 group-hover:text-white">
                        {item.icon}
                      </div>
                      <span className="text-xs font-black text-sage-400 uppercase tracking-widest">
                        Step {i + 1}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-sage-900 mb-2 sm:mb-3">{item.title}</h4>
                    <p className="text-sage-600 leading-relaxed font-medium text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ── Installation Guide Section ── */}
        <div id="installation" className={`mt-24 w-full max-w-7xl mx-auto ${inView ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-amber-600 border border-amber-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              สำคัญ — อ่านก่อนติดตั้ง
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-sage-950 mb-4 whitespace-nowrap">
              คู่มือติดตั้ง APK
            </h3>
            <p className="text-sage-500 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              เนื่องจากแอปยังไม่ได้อยู่บน Play Store จึงต้องตั้งค่าเล็กน้อยก่อนติดตั้ง
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Card 1: Allow Unknown Sources */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-sage-100 shadow-premium">
              {/* Card Header */}
              <div className="flex items-center gap-4 sm:gap-5 mb-8 pb-6 border-b border-sage-100">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-sage-900 leading-tight">อนุญาตติดตั้งจากแหล่งที่ไม่รู้จัก</h4>
                  <p className="text-sage-400 text-sm font-medium mt-1">ขั้นตอนเปิดสิทธิ์ติดตั้งไฟล์ APK</p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50/80 border border-sage-100/60 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sage-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">1</div>
                  <p className="text-sage-700 font-medium text-[15px]">เปิด <strong className="text-sage-900">ตั้งค่า (Settings)</strong> บนมือถือ</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50/80 border border-sage-100/60 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sage-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">2</div>
                  <p className="text-sage-700 font-medium text-[15px]">ไปที่ <strong className="text-sage-900">แอป & การแจ้งเตือน</strong> หรือ <strong className="text-sage-900">ความปลอดภัย</strong> (แล้วแต่ยี่ห้อมือถือ)</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50/80 border border-sage-100/60 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sage-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">3</div>
                  <p className="text-sage-700 font-medium text-[15px]">เลือก <strong className="text-sage-900">การเข้าถึงพิเศษ</strong> → <strong className="text-sage-900">ติดตั้งแอปที่ไม่รู้จัก</strong></p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50/80 border border-sage-100/60 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sage-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">4</div>
                  <p className="text-sage-700 font-medium text-[15px]">เลือกแอปที่ใช้ดาวน์โหลด (เช่น <strong className="text-sage-900">Chrome</strong> หรือ <strong className="text-sage-900">Files</strong>) แล้วเปิด <strong className="text-sage-900">"อนุญาตจากแหล่งนี้"</strong></p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50/80 border border-sage-100/60 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-sage-900 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">5</div>
                  <p className="text-sage-700 font-medium text-[15px]">กลับไปเปิดไฟล์ <strong className="text-sage-900">KidGuard.apk</strong> ที่ดาวน์โหลดมา แล้วกด <strong className="text-sage-900">"ติดตั้ง"</strong></p>
                </div>
              </div>

              {/* Quick Tip */}
              <div className="mt-6 bg-sage-50 rounded-2xl p-4 sm:p-5 border border-sage-100 flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">💡</span>
                <p className="text-sage-600 text-sm font-medium leading-relaxed">
                  <strong className="text-sage-800">เคล็ดลับ:</strong> เมนูอาจแตกต่างกันไปตามยี่ห้อมือถือ หากหาไม่เจอให้ลองค้นหาคำว่า <strong className="text-sage-800">"ติดตั้งแอปที่ไม่รู้จัก"</strong> ในช่องค้นหาของตั้งค่า
                </p>
              </div>
            </div>

            {/* Card 2: Disable Google Play Protect */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-sage-100 shadow-premium">
              {/* Card Header */}
              <div className="flex items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-sage-100">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-sage-900 leading-tight">ปิด Google Play Protect <span className="text-sm font-bold text-blue-500">(ชั่วคราว)</span></h4>
                  <p className="text-sage-400 text-sm font-medium mt-1">หากติดตั้งแล้วขึ้นคำเตือน "แอปนี้อาจเป็นอันตราย"</p>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-blue-50 rounded-2xl p-4 sm:p-5 border border-blue-100 mb-6 flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">ℹ️</span>
                <p className="text-blue-700 text-sm font-medium leading-relaxed">
                  Google Play Protect อาจบล็อกการติดตั้งแอปที่ไม่ได้มาจาก Play Store เนื่องจากแอปยังอยู่ในขั้นตอนพัฒนาจึงยังไม่ได้ลงทะเบียน — <strong>ติดตั้งเสร็จแล้วเปิด Play Protect กลับได้เลย</strong>
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">1</div>
                  <p className="text-sage-700 font-medium text-[15px]">เปิดแอป <strong className="text-sage-900">Google Play Store</strong> บนมือถือ</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">2</div>
                  <p className="text-sage-700 font-medium text-[15px]">แตะ <strong className="text-sage-900">รูปโปรไฟล์</strong> ที่มุมขวาบน → เลือก <strong className="text-sage-900">Play Protect</strong></p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">3</div>
                  <p className="text-sage-700 font-medium text-[15px]">แตะ <strong className="text-sage-900">ไอคอนรูปเฟือง ⚙️</strong> ที่มุมขวาบน</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">4</div>
                  <p className="text-sage-700 font-medium text-[15px]">ปิดสวิตช์ <strong className="text-red-600">"สแกนแอปด้วย Play Protect"</strong> แล้วกดยืนยัน</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/40 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">5</div>
                  <p className="text-sage-700 font-medium text-[15px]">กลับไป <strong className="text-sage-900">ติดตั้ง KidGuard.apk</strong> ได้ตามปกติ</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">✓</div>
                  <p className="text-emerald-800 font-semibold text-[15px]">หลังติดตั้งเสร็จ → กลับไปเปิด Play Protect เหมือนเดิม เพื่อความปลอดภัย</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   DOWNLOAD SECTION
   ═══════════════════════════════════════════════════════ */
function Footer() {
  const [ref, inView] = useInView();
  const [selectedMember, setSelectedMember] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedMember]);

  return (
    <footer
      id="about-project"
      className="relative pt-20 sm:pt-32 pb-0 bg-sage-950 overflow-hidden"
      ref={ref}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sage-900 rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-sage-800 rounded-full blur-[120px] opacity-10" />

      {/* Developer Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-sage-900 border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] w-full max-w-lg overflow-hidden animate-fade-in-up shadow-2xl relative max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-black/20 text-white flex items-center justify-center hover:bg-black/40 border border-white/10 transition-all z-20 group"
              onClick={() => setSelectedMember(null)}
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-56 sm:h-72 md:h-96">
              <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-2">{selectedMember.name}</h4>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></span>
                  <p className="text-sage-400 font-bold text-sm uppercase tracking-widest">{selectedMember.role}</p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 pt-4 sm:pt-6 pb-8 sm:pb-12 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] custom-scrollbar">
              <div className="space-y-6">
                {/* BIO Section */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h5 className="text-sage-500 text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">ประวัติการทำงาน / บทบาท</h5>
                  <p className="text-sage-100 leading-relaxed font-medium text-base sm:text-lg">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-sage-500 text-[9px] font-black uppercase tracking-widest mb-1 opacity-60">รหัสประจำตัว</h5>
                    <p className="text-white font-bold">{selectedMember.details?.studentId}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-sage-500 text-[9px] font-black uppercase tracking-widest mb-1 opacity-60">วันเกิด</h5>
                    <p className="text-white font-bold">{selectedMember.details?.birthDate}</p>
                  </div>
                </div>

                {/* Education */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h5 className="text-sage-500 text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">ประวัติการศึกษา</h5>
                  <p className="text-sage-200 text-sm leading-relaxed">{selectedMember.details?.education}</p>
                </div>

                {/* Contact & Address */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-sage-500 text-[9px] font-black uppercase tracking-widest opacity-60">ข้อมูลการติดต่อ</h5>
                      <a
                        href={selectedMember.social?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sage-500/50 transition-all text-white text-[10px] font-bold group"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        VIEW GITHUB
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sage-200 text-sm">
                        <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {selectedMember.details?.phone}
                      </div>
                      <div className="flex items-center gap-3 text-sage-200 text-sm">
                        <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        {selectedMember.details?.email}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h5 className="text-sage-500 text-[9px] font-black uppercase tracking-widest mb-1 opacity-60">ที่อยู่ปัจจุบัน</h5>
                    <p className="text-sage-200 text-sm leading-relaxed">{selectedMember.details?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-10 sm:mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">เกี่ยวกับโปรเจกต์</h3>
          <p className="text-sage-400 font-medium max-w-2xl mx-auto text-sm sm:text-base">
            โปรเจกต์จบการศึกษา — สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล
            คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
          </p>
        </div>

        {/* 1. Team Members — Full Width */}
        <div className={`mb-12 ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-8 sm:mb-10 text-center flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-sage-500/30"></span>
              ทีมผู้พัฒนาแอปพลิเคชัน
              <span className="w-12 h-px bg-sage-500/30"></span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  name: "นางสาว ปัณฑารีย์ ภูมิพลับ",
                  img: "/assets/1.jpg",
                  role: "UI/UX & จัดทำรายงาน",
                  social: { github: "https://github.com/Pumpam02" },
                  details: {
                    major: "สาขาเทคโนโลยีคอมพิวเตอร์",
                    studentId: "116510906072-3",
                    birthDate: "02 ตุลาคม พ.ศ. 2546",
                    education: "ศึกษาต่อระดับปริญญาตรีในปีพ.ศ. 2565 สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล คณะวิทยาศาสตร์และเทคโนโลยีมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (จบการศึกษาระดับมัธยมศึกษา ในปีการศึกษา พ.ศ. 2565 โรงเรียนพระนารายณ์จังหวัด ลพบุรี)",
                    address: "6/2 หมู่ที่ 3 ต.วังจั่น อ.โคกสำโรง จ.ลพบุรี 15120",
                    phone: "064-783-9269",
                    email: "panthareepmp@gmail.com"
                  },
                  bio: "รับผิดชอบการออกแบบ User Interface (UI) และ User Experience (UX) ทั้งหมดของระบบ รวมถึงภาระหน้าที่ในการจัดทำสไลด์นำเสนอ ตรวจทานรายงานทางวิชาการ และเป็นผู้ตรวจสอบความเรียบร้อย (Quality Check) เพื่อให้ตัวแอปพลิเคชันมีความถูกต้องและสมบูรณ์ที่สุด"
                },
                {
                  name: "นาย เศรษฐพงษ์ ป้อมรุ่ง",
                  img: "/assets/2.png",
                  role: "Full-stack Developer & Database",
                  social: { github: "https://github.com/Mynnts" },
                  details: {
                    major: "สาขาเทคโนโลยีคอมพิวเตอร์",
                    studentId: "116510906076-4",
                    birthDate: "18 มีนาคม พ.ศ. 2547",
                    education: "ศึกษาต่อระดับปริญญาตรี ในปี พ.ศ. 2565 สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล คณะวิทยาศาสตร์และเทคโนโลยีมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (จบการศึกษาระดับมัธยมศึกษา ในปีการศึกษา พ.ศ. 2565 โรงเรียนหนองแค “สรกิจพิทยา” จังหวัด สระบุรี)",
                    address: "18/8 หมู่ 7 ตำบล กุ่มหัก อำเภอ หนองแค จังหวัด สระบุรี 18140",
                    phone: "098-621-7686",
                    email: "setthapongc@gmail.com"
                  },
                  bio: "รับผิดชอบการพัฒนาแบบ Full-stack ทั้งในส่วนของ Frontend และ Backend รวมถึงการออกแบบและวางรากฐานระบบฐานข้อมูลทั้งหมดเพื่อให้ระบบสามารถทำงานประสานกันได้อย่างมีประสิทธิภาพและมีความเสถียรสูงสุด"
                },
                {
                  name: "นาย อรรถพล ดอกไม้",
                  img: "/assets/3.png",
                  role: "Full-stack Developer & SDET",
                  social: { github: "https://github.com/Arm181818" },
                  details: {
                    major: "สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล",
                    studentId: "116510906077-2",
                    birthDate: "18 สิงหาคม พ.ศ. 2546",
                    education: "ศึกษาต่อระดับปริญญาตรีในปี พ.ศ. 2565 สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (จบการศึกษาระดับมัธยมศึกษา ในปีการศึกษา พ.ศ. 2565 โรงเรียนนวมินทราชูทิศ กรุงเทพมหานคร จังหวัดกรุงเทพมหานคร)",
                    address: "115/218 ซอยนวมินทร์ 163 แยก 15-12 ถนนนวมินทร์ แขวงนวลจันทร์ เขตบึงกุ่ม กทม. 10230",
                    phone: "063-321-6187",
                    email: "atthapolarm254629@gmail.com"
                  },
                  bio: "รับผิดชอบการพัฒนาแบบ Full-stack ทั้งในส่วนของ Frontend และ Backend พร้อมควบตำแหน่ง SDET (Software Development Engineer in Test) โดยเน้นการตรวจสอบความถูกต้องเรียบร้อยและวิเคราะห์บัคของแอปพลิเคชัน เพื่อให้ระบบมีความเสถียรและมอบประสบการณ์การใช้งานที่สมบูรณ์แบบที่สุด"
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => setSelectedMember(m)}
                >
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-br from-sage-500 to-sage-700 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500" />
                    <img
                      src={m.img}
                      alt={m.name}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-[1.5rem] sm:rounded-[2rem] object-cover ring-2 ring-white/10 group-hover:ring-sage-500/50 transition-all duration-500 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-sage-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-sage-400 transition-colors">{m.name}</h5>
                  <p className="text-sage-600 text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">คลิกเพื่อดูประวัติ</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Advisors & University — Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Advisors */}
          <div className={`bg-white/5 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 ${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <h4 className="text-white text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-4">
              <span className="w-2 h-2 bg-sage-500 rounded-full"></span>
              อาจารย์ที่ปรึกษา
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-sage-500/20 flex items-center justify-center text-sage-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0l7.5 3.333a.75.75 0 0 1-.6 1.39l-7.2-3.2-7.2 3.2a.75.75 0 0 1-.6-1.39l7.5-3.333Z" /><path d="M6.457 8.525a.75.75 0 0 1 .491.704v5.44a4.125 4.125 0 0 0 8.25 0v-5.44a.75.75 0 0 1 1.242-.563l.35.311c.214.19.511.233.77.108l.38-.184a.75.75 0 0 1 .655 1.348l-.38.184c-.58.283-1.25.185-1.73-.243l-.045-.04v4.067c0 3.12-2.529 5.648-5.648 5.648-3.119 0-5.647-2.528-5.647-5.648v-4.067A4.125 4.125 0 0 0 2.25 12h1.5a2.625 2.625 0 0 1 2.707-3.475Z" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold">ผศ. ไกรมน มณีศิลป์</p>
                  <p className="text-sage-500 text-sm">อาจารย์ที่ปรึกษาหลัก</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-sage-500/20 flex items-center justify-center text-sage-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.7 2.805a.75.75 0 0 1 .6 0l7.5 3.333a.75.75 0 0 1-.6 1.39l-7.2-3.2-7.2 3.2a.75.75 0 0 1-.6-1.39l7.5-3.333Z" /><path d="M6.457 8.525a.75.75 0 0 1 .491.704v5.44a4.125 4.125 0 0 0 8.25 0v-5.44a.75.75 0 0 1 1.242-.563l.35.311c.214.19.511.233.77.108l.38-.184a.75.75 0 0 1 .655 1.348l-.38.184c-.58.283-1.25.185-1.73-.243l-.045-.04v4.067c0 3.12-2.529 5.648-5.648 5.648-3.119 0-5.647-2.528-5.647-5.648v-4.067A4.125 4.125 0 0 0 2.25 12h1.5a2.625 2.625 0 0 1 2.707-3.475Z" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold">ผศ. พัฒน์นรี จันทราภิรมย์</p>
                  <p className="text-sage-500 text-sm">อาจารย์ที่ปรึกษาร่วม</p>
                </div>
              </div>
            </div>
          </div>

          {/* University */}
          <div className={`bg-white/5 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 flex flex-col justify-center ${inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            <h4 className="text-white text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sage-500/20 flex items-center justify-center text-sage-400 border border-white/5">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 3L2 8V11H4V18H3V20H21V18H20V11H22V8L12 3M18 11V18H16V11H18M13 11V18H11V11H13M8 11V18H6V11H8M12 5L19 8.5L12 12L5 8.5L12 5Z" />
                </svg>
              </div>
              สถาบันการศึกษา
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-sage-500 text-xs font-black uppercase tracking-widest mb-1 opacity-60">มหาวิทยาลัย</p>
                <p className="text-white font-bold text-lg leading-tight">มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</p>
              </div>
              <div>
                <p className="text-sage-500 text-xs font-black uppercase tracking-widest mb-1 opacity-60">คณะ</p>
                <p className="text-white font-bold text-lg leading-tight">วิทยาศาสตร์และเทคโนโลยี</p>
              </div>
              <div>
                <p className="text-sage-500 text-xs font-black uppercase tracking-widest mb-1 opacity-60">สาขาวิชา</p>
                <p className="text-white font-bold text-lg leading-tight">เทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Tech Stack — Bottom Full Width */}
        <div className={`mt-16 mb-4 ${inView ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          <div className="flex flex-col items-center mb-6">
            <div className="w-10 h-10 rounded-xl bg-sage-600/20 flex items-center justify-center text-sage-400 mb-3 border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
              </svg>
            </div>
            <h4 className="text-white text-lg font-bold">เครื่องมือที่ใช้พัฒนา</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {/* Flutter */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sage-500/30 transition-all text-center">
              <div className="flex justify-center mb-2 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#54C5F8]" fill="currentColor">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                </svg>
              </div>
              <p className="text-white text-sm font-bold">Flutter</p>
            </div>

            {/* Java */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sage-500/30 transition-all text-center">
              <div className="flex justify-center mb-2 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#E76F00]" fill="currentColor">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" />
                </svg>
              </div>
              <p className="text-white text-sm font-bold">Java Native</p>
            </div>

            {/* Firebase */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sage-500/30 transition-all text-center">
              <div className="flex justify-center mb-2 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
                  <path d="M3.89 15.673L6.255 1.618a.473.473 0 0 1 .885-.167l2.503 4.68-5.753 9.542z" fill="#FFC24A" />
                  <path d="M9.456 8.462L3.89 15.673 6.255 1.618a.473.473 0 0 1 .885-.167l2.316 4.33v2.68z" fill="#FFA712" />
                  <path d="M15.467 8.02l-1.386-1.508.025-.026L11.21 1.28a.48.48 0 0 0-.854.024L3.89 15.672l7.27 4.504a1.44 1.44 0 0 0 1.49.008l7.24-4.493-4.423-7.67z" fill="#F4BD62" />
                  <path d="M15.467 8.02l-1.386-1.508-4.64 9.17 3.83 2.505a1.44 1.44 0 0 0 1.49.008l7.24-4.493-4.423-7.67-2.111 1.989z" fill="#FFA50E" />
                  <path d="M15.542 20.158a1.44 1.44 0 0 1-1.49-.009l-7.233-4.477-.93 1.544 8.097 5.02a1.44 1.44 0 0 0 1.49-.008l7.24-4.494-.937-1.546-6.237 3.97z" fill="#F6820C" />
                  <path d="M3.89 15.673l.07-.127.863-1.428 5.633-7.656L8.14 1.475a.473.473 0 0 0-.885.167L3.89 15.673z" fill="#FDE068" />
                  <path d="M9.44 18.192l-.018-.034L3.89 15.674l-.93 1.543 6.446 3.993.037-.015-.003-3.003z" fill="#FCCA3F" />
                  <path d="M15.542 20.158l6.237-3.97.937 1.546-7.24 4.494a1.44 1.44 0 0 1-1.49.008L6.96 17.216l.864-1.424 6.228 3.857a1.44 1.44 0 0 0 1.49.509z" fill="#EEAB37" />
                </svg>
              </div>
              <p className="text-white text-sm font-bold">Firebase</p>
            </div>

            {/* GitHub */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sage-500/30 transition-all text-center">
              <div className="flex justify-center mb-2 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-white opacity-80" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <p className="text-white text-sm font-bold">GitHub</p>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Bottom Strip Footer Band */}
      <div className={`mt-10 border-t border-white/5 bg-black/40 backdrop-blur-md py-5 sm:py-6 ${inView ? "animate-fade-in delay-500" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <img src="/assets/Kid_Guard.png" alt="KidGuard" className="w-8 h-8 rounded-lg opacity-80" />
            <span className="text-sage-300/80 font-bold text-sm tracking-tight">KidGuard</span>
          </div>

          {/* Center: Project Info */}
          <p className="text-sage-500/60 text-xs md:text-sm font-medium text-center">
            โปรเจกต์จบการศึกษา — มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
          </p>

          {/* Right: Copyright */}
          <p className="text-sage-600/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            © 2026 KidGuard. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
}
