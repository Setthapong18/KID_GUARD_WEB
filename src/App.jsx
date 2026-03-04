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
    icon: "📥",
  },
  {
    step: "02",
    title: "ติดตั้งแอป",
    desc: "เปิดไฟล์ APK ที่ดาวน์โหลดมา อนุญาตการติดตั้งจากแหล่งที่ไม่รู้จัก แล้วกดติดตั้ง",
    icon: "📲",
  },
  {
    step: "03",
    title: "เชื่อมต่อบัญชี",
    desc: "เปิดแอป เลือกบทบาท (ผู้ปกครอง/เด็ก) ลงทะเบียนหรือเข้าสู่ระบบ แล้วเชื่อมต่อกับอุปกรณ์บุตรหลาน ด้วย PIN 6 หลัก",
    icon: "🔗",
  },
];

const PARENT_STEPS = [
  {
    icon: "👤",
    title: "สมัครสมาชิก",
    desc: 'เลือก "ผู้ปกครอง" → ลงทะเบียนด้วยอีเมลและรหัสผ่าน → ระบบจะสร้าง PIN 6 หลักให้อัตโนมัติ',
  },
  {
    icon: "👶",
    title: "เพิ่มโปรไฟล์เด็ก",
    desc: 'กดปุ่ม "เพิ่มเด็ก" → เลือก Avatar → กรอกชื่อเล่นและอายุ → ตั้งเวลาจำกัดต่อวัน → เลือกโหมดดูแล',
  },
  {
    icon: "📍",
    title: "ติดตามตำแหน่ง",
    desc: "ดูตำแหน่งเรียลไทม์ของเด็กบนแผนที่ อัปเดตอัตโนมัติ",
  },
  {
    icon: "⏰",
    title: "จัดการเวลาหน้าจอ",
    desc: "ตั้งเวลาจำกัดต่อวัน ดูเวลาที่ใช้ไปและเวลาที่เหลือ สามารถหยุดชั่วคราวได้ทันที",
  },
  {
    icon: "📊",
    title: "ควบคุมแอป",
    desc: "ดูรายการแอปทั้งหมด บล็อกแอปไม่เหมาะสม ค้นหาและรีเฟรชรายการแอปล่าสุด",
  },
  {
    icon: "📅",
    title: "จัดตารางเวลา",
    desc: "ตั้งเวลานอนหลับ (Sleep Schedule) และช่วงเวลาสงบ (Quiet Time) เช่น เวลาทำการบ้าน",
  },
  {
    icon: "🌟",
    title: "ระบบรางวัล",
    desc: "สร้างรางวัลพร้อม Emoji และแต้มที่ต้องสะสม แก้ไข/ลบรางวัลได้ด้วยการกดค้าง",
  },
];

const CHILD_STEPS = [
  {
    icon: "🔗",
    title: "เชื่อมต่อกับผู้ปกครอง",
    desc: 'เปิดแอป → เลือก "เด็ก" → กรอก PIN 6 หลักจากผู้ปกครอง → ระบบเชื่อมต่ออัตโนมัติ',
  },
  {
    icon: "😄",
    title: "สร้างโปรไฟล์",
    desc: 'เลือก Avatar ที่ชอบ → กรอกชื่อเล่นและอายุ → กด "เริ่มต้นใช้งาน"',
  },
  {
    icon: "🛡️",
    title: "เปิดโหมดเด็ก",
    desc: "กดเปิดโหมดเด็ก → ระบบนับเวลา/บล็อกแอป/ตารางเวลาทำงานอัตโนมัติ → ปิดได้เฉพาะ PIN ผู้ปกครอง",
  },
  {
    icon: "⭐",
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
    { href: "#about-project", label: "เกี่ยวกับโปรเจค" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "glass shadow-lg shadow-sage-900/5 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/assets/Kid_Guard.png"
            alt="KidGuard"
            className="w-10 h-10 rounded-xl shadow-lg shadow-sage-500/30 group-hover:shadow-sage-500/50 transition-shadow"
          />
          <span className="text-xl font-bold text-sage-800 tracking-tight">
            Kid<span className="text-sage-500">Guard</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sage-700 hover:text-sage-900 font-medium text-sm transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-sage-600/25 hover:shadow-sage-700/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            ดาวน์โหลด
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-sage-700 p-2"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in-up">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-sage-700 hover:text-sage-900 hover:bg-sage-50 rounded-xl font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center bg-gradient-to-r from-sage-600 to-sage-700 text-white py-3 rounded-xl font-semibold"
          >
            ดาวน์โหลด
          </a>
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sage-200">
              <ShieldIcon />
              โปรเจคจบ — Parental Control App
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-sage-900">ดูแลบุตรหลาน</span>
            <br />
            <span className="text-gradient-sage">อย่างอุ่นใจ</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-sage-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            KidGuard แอปพลิเคชันที่ช่วยให้ผู้ปกครองดูแลความปลอดภัยของบุตรหลาน
            ด้วยการติดตามตำแหน่ง จัดการเวลาหน้าจอ และแจ้งเตือนอัจฉริยะ
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-sage-600/30 hover:shadow-sage-700/50 hover:-translate-y-1 active:translate-y-0"
            >
              <DownloadIcon className="w-6 h-6 group-hover:animate-bounce" />
              ดาวน์โหลดฟรี
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white/60 hover:bg-white text-sage-700 px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-sage-200 hover:border-sage-300 hover:-translate-y-1"
            >
              ดูฟีเจอร์
              <ChevronDown />
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-10 flex items-center gap-8 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">Android</div>
              <div className="text-sm text-sage-500">รองรับ</div>
            </div>
            <div className="w-px h-10 bg-sage-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">ฟรี</div>
              <div className="text-sm text-sage-500">ไม่มีค่าใช้จ่าย</div>
            </div>
            <div className="w-px h-10 bg-sage-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-sage-800">ปลอดภัย</div>
              <div className="text-sm text-sage-500">100%</div>
            </div>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="hidden lg:flex justify-center items-center animate-fade-in-up delay-400 lg:pl-10">
          <ThreePhoneMockup />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-sage-400">
        <ChevronDown />
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
      className="relative py-24 sm:py-32 bg-white"
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="inline-block bg-sage-100 text-sage-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-sage-200">
            ฟีเจอร์หลัก
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sage-900 mb-4">
            ทุกสิ่งที่คุณต้องการ
          </h2>
          <p className="text-sage-500 text-lg max-w-2xl mx-auto">
            KidGuard
            มาพร้อมฟีเจอร์ครบครันเพื่อให้ผู้ปกครองดูแลบุตรหลานได้อย่างมั่นใจ
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-sage-50 to-white border border-sage-100 hover:border-sage-300 transition-all duration-500 hover:shadow-xl hover:shadow-sage-200/50 hover:-translate-y-2 ${inView ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center mb-5 shadow-lg shadow-sage-500/20 group-hover:scale-110 transition-transform duration-300`}
              >
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-sage-800 mb-3">
                {f.title}
              </h3>
              <p className="text-sage-500 leading-relaxed">{f.desc}</p>

              {/* Hover glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-sage-200/0 to-sage-300/0 group-hover:from-sage-200/20 group-hover:to-sage-300/20 transition-all duration-500 -z-10" />
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
      className="relative py-24 sm:py-32 bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="inline-block bg-white text-sage-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-sage-200 shadow-sm">
            เริ่มต้นง่ายๆ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sage-900 mb-4">
            วิธีการใช้งาน
          </h2>
          <p className="text-sage-500 text-lg max-w-2xl mx-auto">
            3 ขั้นตอนง่ายๆ ในการเริ่มใช้ KidGuard ดูแลบุตรหลานของคุณ
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`relative ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-sage-300 to-sage-200" />
              )}
              <div className="relative glass rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-sage-200/30 transition-all duration-500 hover:-translate-y-2 group">
                <div className="absolute -top-4 -right-2 w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-sage-500/30 rotate-3 group-hover:rotate-0 transition-transform">
                  {s.step}
                </div>
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-sage-800 mb-3">
                  {s.title}
                </h3>
                <p className="text-sage-500 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Guide — Parent / Child Tabs */}
        <div className={inView ? "animate-fade-in-up delay-400" : "opacity-0"}>
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-sage-900 mb-3">
            คู่มือการใช้งานละเอียด
          </h3>
          <p className="text-center text-sage-500 mb-8">
            เลือกบทบาทเพื่อดูขั้นตอนการตั้งค่า
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab("parent")}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all ${activeTab === "parent"
                ? "bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-lg shadow-sage-500/30"
                : "bg-white text-sage-600 border border-sage-200 hover:border-sage-400"
                }`}
            >
              👨‍👩‍👦 ฝั่งผู้ปกครอง
            </button>
            <button
              onClick={() => setActiveTab("child")}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all ${activeTab === "child"
                ? "bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-lg shadow-sage-500/30"
                : "bg-white text-sage-600 border border-sage-200 hover:border-sage-400"
                }`}
            >
              👶 ฝั่งเด็ก
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {(activeTab === "parent" ? PARENT_STEPS : CHILD_STEPS).map(
              (item, i) => (
                <div
                  key={`${activeTab}-${i}`}
                  className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-sage-200/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-sage-400">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-sage-800 mb-2">{item.title}</h4>
                  <p className="text-sage-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Permission Notice */}
        <div
          className={`mt-16 glass rounded-2xl p-6 max-w-2xl mx-auto ${inView ? "animate-fade-in-up delay-600" : "opacity-0"}`}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-xl">
              ⚠️
            </div>
            <div>
              <h4 className="font-bold text-sage-800 mb-1">
                การอนุญาตติดตั้ง APK
              </h4>
              <p className="text-sage-500 text-sm leading-relaxed">
                เนื่องจากแอปยังไม่ได้อยู่บน Play Store ในครั้งแรกที่ติดตั้ง
                อุปกรณ์จะขออนุญาตให้ "ติดตั้งจากแหล่งที่ไม่รู้จัก" (Unknown
                Sources) ไปที่{" "}
                <strong>ตั้งค่า → ความปลอดภัย → แหล่งที่ไม่รู้จัก</strong>{" "}
                แล้วเปิดใช้งาน
              </p>
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
function DownloadSection() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about-project"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-sage-800 via-sage-900 to-sage-950 overflow-hidden"
      ref={ref}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage-700/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* ─── Project Credits ─── */}
        <div
          className={`${inView ? "animate-fade-in-up delay-500" : "opacity-0"}`}
        >
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-white mb-2">
            เกี่ยวกับโปรเจกต์
          </h3>
          <p className="text-center text-sage-400 mb-12">
            โปรเจกต์จบการศึกษา — สาขาเทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล
          </p>

          {/* Team Members — Full Width Top Row */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-sage-700/30 hover:border-sage-500/40 transition-colors mb-8">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 rounded-xl bg-sage-600/30 flex items-center justify-center text-xl">
                👥
              </div>
              <h4 className="text-lg font-bold text-white">ทีมผู้พัฒนา</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { name: "นางสาว ปัณฑารีย์ ภูมิพลับ", img: "/assets/1.jpg" },
                { name: "นาย เศรษฐพงษ์ ป้อมรุ่ง", img: "/assets/2.png" },
                { name: "นาย อรรถพล ดอกไม้", img: "/assets/3.png" },
              ].map((member, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-1.5 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl opacity-40 group-hover:opacity-70 blur-md transition-opacity" />
                    <img
                      src={member.img}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-2xl object-cover ring-3 ring-sage-500/60 group-hover:ring-sage-400 transition-all"
                    />
                  </div>
                  <p className="text-sage-200 font-medium text-sm">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advisors */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-sage-700/30 hover:border-sage-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sage-600/30 flex items-center justify-center text-xl">
                  🎓
                </div>
                <h4 className="text-lg font-bold text-white">
                  อาจารย์ที่ปรึกษา
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sage-200 font-medium">
                      ผศ. ไกรมน มณีศิลป์
                    </p>
                    <p className="text-sage-500 text-sm">
                      อาจารย์ที่ปรึกษาหลัก
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-300 to-sage-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sage-200 font-medium">
                      ผศ. พัฒน์นรี จันทราภิรมย์
                    </p>
                    <p className="text-sage-500 text-sm">
                      อาจารย์ที่ปรึกษาร่วม
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* University */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-sage-700/30 hover:border-sage-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sage-600/30 flex items-center justify-center text-xl">
                  🏫
                </div>
                <h4 className="text-lg font-bold text-white">สถาบันการศึกษา</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sage-500 text-xs uppercase tracking-wider mb-1">
                    มหาวิทยาลัย
                  </p>
                  <p className="text-sage-200 font-medium">
                    มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
                  </p>
                </div>
                <div>
                  <p className="text-sage-500 text-xs uppercase tracking-wider mb-1">
                    คณะ
                  </p>
                  <p className="text-sage-200 font-medium">
                    วิทยาศาสตร์และเทคโนโลยี
                  </p>
                </div>
                <div>
                  <p className="text-sage-500 text-xs uppercase tracking-wider mb-1">
                    สาขาวิชา
                  </p>
                  <p className="text-sage-200 font-medium">
                    เทคโนโลยีสารสนเทศและการสื่อสารดิจิทัล
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-sage-700/30 hover:border-sage-500/40 transition-colors md:col-span-2">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-10 h-10 rounded-xl bg-sage-600/30 flex items-center justify-center text-xl">
                  ⚙️
                </div>
                <h4 className="text-lg font-bold text-white">
                  เครื่องมือที่ใช้พัฒนา
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {/* Flutter */}
                <div className="bg-sage-800/50 rounded-2xl p-5 text-center border border-sage-700/30 hover:border-sage-500/30 hover:bg-sage-700/40 transition-all group">
                  <div className="flex justify-center mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-[#54C5F8] group-hover:scale-110 transition-transform"
                      fill="currentColor"
                    >
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                    </svg>
                  </div>
                  <p className="text-sage-200 text-sm font-semibold">Flutter</p>
                </div>

                {/* Java */}
                <div className="bg-sage-800/50 rounded-2xl p-5 text-center border border-sage-700/30 hover:border-sage-500/30 hover:bg-sage-700/40 transition-all group">
                  <div className="flex justify-center mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-[#E76F00] group-hover:scale-110 transition-transform"
                      fill="currentColor"
                    >
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" />
                    </svg>
                  </div>
                  <p className="text-sage-200 text-sm font-semibold">
                    Java Native
                  </p>
                </div>

                {/* Firebase */}
                <div className="bg-sage-800/50 rounded-2xl p-5 text-center border border-sage-700/30 hover:border-sage-500/30 hover:bg-sage-700/40 transition-all group">
                  <div className="flex justify-center mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 group-hover:scale-110 transition-transform"
                      fill="none"
                    >
                      <path
                        d="M3.89 15.673L6.255 1.618a.473.473 0 0 1 .885-.167l2.503 4.68-5.753 9.542z"
                        fill="#FFC24A"
                      />
                      <path
                        d="M9.456 8.462L3.89 15.673 6.255 1.618a.473.473 0 0 1 .885-.167l2.316 4.33v2.68z"
                        fill="#FFA712"
                      />
                      <path
                        d="M15.467 8.02l-1.386-1.508.025-.026L11.21 1.28a.48.48 0 0 0-.854.024L3.89 15.672l7.27 4.504a1.44 1.44 0 0 0 1.49.008l7.24-4.493-4.423-7.67z"
                        fill="#F4BD62"
                      />
                      <path
                        d="M15.467 8.02l-1.386-1.508-4.64 9.17 3.83 2.505a1.44 1.44 0 0 0 1.49.008l7.24-4.493-4.423-7.67-2.111 1.989z"
                        fill="#FFA50E"
                      />
                      <path
                        d="M15.542 20.158a1.44 1.44 0 0 1-1.49-.009l-7.233-4.477-.93 1.544 8.097 5.02a1.44 1.44 0 0 0 1.49-.008l7.24-4.494-.937-1.546-6.237 3.97z"
                        fill="#F6820C"
                      />
                      <path
                        d="M3.89 15.673l.07-.127.863-1.428 5.633-7.656L8.14 1.475a.473.473 0 0 0-.885.167L3.89 15.673z"
                        fill="#FDE068"
                      />
                      <path
                        d="M9.44 18.192l-.018-.034L3.89 15.674l-.93 1.543 6.446 3.993.037-.015-.003-3.003z"
                        fill="#FCCA3F"
                      />
                      <path
                        d="M15.542 20.158l6.237-3.97.937 1.546-7.24 4.494a1.44 1.44 0 0 1-1.49.008L6.96 17.216l.864-1.424 6.228 3.857a1.44 1.44 0 0 0 1.49.509z"
                        fill="#EEAB37"
                      />
                    </svg>
                  </div>
                  <p className="text-sage-200 text-sm font-semibold">
                    Firebase
                  </p>
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
   FOOTER
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-sage-950 text-sage-400 py-10 border-t border-sage-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/Kid_Guard.png"
              alt="KidGuard"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sage-300 font-semibold">
              Kid<span className="text-sage-500">Guard</span>
            </span>
          </div>

          {/* University Info */}
          <p className="text-sm text-center">
            โปรเจกต์จบการศึกษา — มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
          </p>

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} KidGuard. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   APP (Main)
   ═══════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar />
      <Hero />
      <Features />
      <HowToUse />
      <DownloadSection />
      <Footer />
    </div>
  );
}
