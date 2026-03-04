import React from "react";

/* ─── Shared UI Components ─── */

const PhoneFrame = ({ children, scale = 1, className = "" }) => (
    <div
        className={`relative bg-[#080808] rounded-[3.5rem] p-[10px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6)] border-[8px] border-[#1a1a1a] ring-1 ring-white/10 transition-transform duration-700 ${className}`}
        style={{
            width: "320px",
            minWidth: "320px",
            height: "660px",
            transformOrigin: "center center",
            transform: `scale(${scale})`,
        }}
    >
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-28 h-7 bg-[#080808] rounded-full z-[100] flex items-center justify-center border border-white/5">
            <div className="w-9 h-[4px] bg-[#1a1a1a] rounded-full" />
        </div>
        <div className="relative w-full h-full bg-[#FAFAFC] rounded-[2.8rem] overflow-hidden flex flex-col font-['Itim'] select-none">
            {children}
        </div>
    </div>
);

/* ─── Screen 1 (Left): Child Home Screen (EXACT FLUTTER MATCH) ─── */

const ChildHomeScreenMock = () => (
    <div className="flex flex-col h-full bg-[#F6FBF4] overflow-y-auto hide-scrollbar">
        <div className="p-[24px] pt-[60px] flex flex-col items-center">
            {/* _buildPointsCard */}
            <div className="w-full bg-gradient-to-br from-[#6B9080] to-[#84A98C] p-[20px] rounded-[28px] shadow-lg shadow-[#6B9080]/25 flex items-center gap-[16px] text-white mb-9">
                <div className="w-[56px] h-[56px] bg-white/20 rounded-[16px] flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                </div>
                <div className="flex-1">
                    <p className="text-white/80 text-[14px] font-medium leading-none">แต้มสะสม</p>
                    <p className="text-[28px] font-bold mt-1 leading-none">1,250 pts</p>
                </div>
                <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="text-sm">🏆</span>
                    <span className="text-[13px] font-bold">Level 13</span>
                </div>
            </div>

            {/* _buildShieldIcon */}
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#6B9080] to-[#84A98C] shadow-2xl shadow-[#6B9080]/30 flex items-center justify-center text-white mb-8 animate-pulse-soft">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
                </svg>
            </div>

            <h2 className="text-[#1A1A2E] text-[28px] font-bold tracking-tight mb-2 leading-none">สวัสดี Junior</h2>
            <p className="text-[#6B7280] text-[15px] font-normal opacity-80 leading-none">โหมดป้องกันกำลังทำงาน</p>

            {/* _buildToggleSwitch */}
            <div className="mt-10 w-[88px] h-[48px] bg-gradient-to-r from-[#6B9080] to-[#84A98C] rounded-full p-1 flex items-center justify-end shadow-lg shadow-[#6B9080]/30">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-[#6B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            {/* _buildStatusBadge */}
            <div className="mt-6 bg-[#10B981]/10 text-[#10B981] px-[20px] py-[10px] rounded-full font-bold text-[14px] border border-[#10B981]/25 flex items-center gap-2.5">
                <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                กำลังป้องกัน
            </div>

            {/* _buildScreenTimeCard Section 1 */}
            <div className="mt-8 w-full bg-white p-5 rounded-[24px] border border-[#CCE3DE] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-[#CCE3DE] rounded-[14px] flex items-center justify-center text-[#6B9080]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex-1">
                    <p className="text-[#6B7280] text-[13px] font-medium">เวลาเล่นทั้งหมดวันนี้</p>
                    <p className="text-[26px] font-bold text-[#6B9080] leading-none">1ชม. 45น.</p>
                </div>
            </div>
        </div>
    </div>
);

/* ─── Screen 2 (Center): Role Selection (100% MATCH) ─── */

const RoleSelectionScreenMock = () => (
    <div className="flex flex-col h-full bg-[#FAFAFC] p-7 text-center overflow-hidden">
        <div className="flex-1 flex flex-col items-center pt-14">
            <div className="w-20 h-20 bg-[#779C85] rounded-[24px] shadow-[0_12px_24px_rgba(119,156,133,0.3)] flex items-center justify-center mb-7 overflow-hidden">
                <img src="/assets/Kid_Guard.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[#1A1A2E] text-[34px] font-bold tracking-tight mb-2">Kid Guard</h1>
            <p className="text-[#6B7280] text-[15px] font-normal mb-14 tracking-wide">ปกป้อง ดูแล เข้าใจ</p>
            <div className="flex items-center gap-2.5 mb-8">
                <div className="w-1.5 h-1.5 bg-[#6B9080] rounded-full" />
                <span className="text-[#6B7280] text-[14px] font-medium opacity-80">เลือกบทบาทของคุณ</span>
            </div>
            <div className="w-full bg-white rounded-[24px] p-5 mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#F0F0F5] flex items-center gap-4 cursor-pointer">
                <div className="w-[52px] h-[52px] bg-[#6B9080]/10 rounded-[18px] flex items-center justify-center text-[#6B9080]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-[#1A1A2E] text-[18px] font-bold">ผู้ปกครอง</h4>
                    <p className="text-[#9CA3AF] text-[13px] font-normal mt-1.5 leading-tight">จัดการและดูแลกิจกรรมของลูก</p>
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
            </div>
            <div className="w-full bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#F0F0F5] flex items-center gap-4 cursor-pointer">
                <div className="w-[52px] h-[52px] bg-[#E67E22]/10 rounded-[18px] flex items-center justify-center text-[#E67E22]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-[#1A1A2E] text-[18px] font-bold">เด็ก</h4>
                    <p className="text-[#9CA3AF] text-[13px] font-normal mt-1.5 leading-tight">เชื่อมต่อกับบัญชีผู้ปกครอง</p>
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
            </div>
        </div>
        <div className="pb-10 flex items-center justify-center gap-2 text-[#9CA3AF] text-[13px] font-normal">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            ปลอดภัยและเป็นส่วนตัว
        </div>
    </div>
);

/* ─── Screen 3 (Right): Parent Dashboard (EXACT FLUTTER MATCH) ─── */

const ParentDashboardScreenMock = () => (
    <div className="flex flex-col h-full bg-white overflow-y-auto hide-scrollbar">
        {/* HomeHeaderWidget */}
        <div className="px-6 pt-[56px] pb-5 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-[#9CA3AF] text-[15px] font-normal">Good Afternoon,</span>
                <span className="text-[#1F2937] text-[26px] font-bold leading-none mt-1.5">Parent</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#F0F0F5] shadow-sm flex items-center justify-center">
                    <div className="relative">
                        <svg className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-white" />
                    </div>
                </div>
                <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#6B9080] to-[#CCE3DE] rounded-[16px] flex items-center justify-center text-white font-bold text-[18px]">P</div>
            </div>
        </div>

        <div className="px-6 pb-24">
            {/* _buildSectionHeader + Carousel */}
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[#1F2937] text-[20px] font-bold">My Children</h4>
                <span className="text-[#6B9080] text-[12px] font-bold bg-[#6B9080]/10 px-3 py-1.5 rounded-[10px]">See All</span>
            </div>
            <div className="flex gap-4 mb-8 overflow-hidden">
                <div className="flex-shrink-0 w-[140px] h-[160px] p-4 rounded-[28px] bg-gradient-to-br from-[#6B9080] to-[#84A98C] shadow-lg shadow-[#6B9080]/20 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">👦</div>
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#6B9080]" />
                        </div>
                        <div className="bg-white/20 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white uppercase">Active</div>
                    </div>
                    <div>
                        <p className="text-white text-[16px] font-bold leading-none">Junior</p>
                        <div className="flex items-center gap-1 mt-1.5 opacity-80">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" /></svg>
                            <span className="text-white text-[11px] font-medium">1h 45m</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-[140px] h-[160px] p-4 rounded-[28px] bg-white border border-[#F0F5F2] flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="w-12 h-12 rounded-full bg-[#f2f6f3] flex items-center justify-center text-2xl">👧</div>
                        <div className="bg-slate-50 px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-400 uppercase">Offline</div>
                    </div>
                    <div>
                        <p className="text-[#1F2937] text-[16px] font-bold leading-none">Sarah</p>
                        <p className="text-slate-400 text-[11px] font-medium mt-1.5">Last seen 2h ago</p>
                    </div>
                </div>
            </div>

            {/* StatsCardWidget */}
            <div className="bg-gradient-to-br from-[#6B9080] to-[#84A98C] p-6 rounded-[32px] shadow-xl shadow-[#6B9080]/15 mb-8">
                <div className="flex justify-between mb-5">
                    <div>
                        <span className="text-white/80 text-[14px] font-medium tracking-wide">Screen Time Today</span>
                        <div className="flex items-baseline text-white mt-1.5 gap-1.5">
                            <span className="text-[52px] font-bold leading-none tracking-tighter">1</span>
                            <span className="text-[24px] font-normal opacity-70 leading-none">h</span>
                            <span className="text-[52px] font-bold leading-none tracking-tighter ml-1">45</span>
                            <span className="text-[24px] font-normal opacity-70 leading-none">m</span>
                        </div>
                    </div>
                    <div className="w-20 h-20 bg-white/10 rounded-[22px] flex items-center justify-center relative">
                        <svg className="w-[52px] h-[52px] rotate-[-90deg]">
                            <circle cx="26" cy="26" r="22" stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" />
                            <circle cx="26" cy="26" r="22" stroke="white" strokeWidth="6" fill="transparent" strokeDasharray="138" strokeDashoffset="48" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[12px] font-black text-white">65%</span>
                    </div>
                </div>
                <div className="bg-white/12 p-3.5 rounded-[16px] flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#10B981]/30 rounded-lg flex items-center justify-center text-white text-lg">📉</div>
                    <span className="text-white text-[14px] font-medium flex-1">12% less than yesterday</span>
                    <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>

            {/* DeviceStatusWidget */}
            <div className="bg-white p-5 rounded-[28px] border border-[#F0F5F2] shadow-sm mb-8 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#10B981]/10 rounded-[18px] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#10B981] rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
                <div className="flex-1">
                    <p className="text-[#10B981] text-[17px] font-bold leading-none">Device Online</p>
                    <p className="text-[#9CA3AF] text-[14px] font-normal mt-1 leading-none">Active now</p>
                </div>
                <div className="bg-[#6B9080]/10 px-4 py-2 rounded-[12px] text-[#6B9080] text-[13px] font-bold">Details</div>
            </div>

            {/* QuickActionsWidget */}
            <h4 className="text-[#1F2937] text-[18px] font-bold mb-4">Quick Actions</h4>
            <div className="grid grid-cols-3 gap-3">
                {[
                    { l: 'Time Limit', i: '⏰', c: '#6B9080' },
                    { l: 'App Block', i: '🚫', c: '#EF4444' },
                    { l: 'Location', i: '📍', c: '#3B82F6' },
                    { l: 'Schedule', i: '📅', c: '#F59E0B' },
                    { l: 'Pause', i: '⏸️', c: '#EF4444' },
                    { l: 'Rewards', i: '🏆', c: '#8B5CF6' },
                ].map((a, i) => (
                    <div key={i} className="bg-white rounded-[22px] border border-[#F0F5F2] p-2 aspect-square flex flex-col items-center justify-center shadow-sm active:scale-95 transition-all">
                        <div className="w-13 h-13 rounded-full flex items-center justify-center text-2xl mb-2" style={{ backgroundColor: a.c + '15', color: a.c }}>{a.i}</div>
                        <span className="text-[#3F4E4F] text-[11px] font-bold tracking-wide">{a.l}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ThreePhoneMockup = () => {
    return (
        <div className="relative w-full max-w-2xl px-4 py-24 flex items-center justify-center scale-[0.7] lg:scale-[0.85]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] -z-10 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#6B9080]/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-[#CCE3DE]/25 rounded-full blur-[120px]" />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[95px] z-10 opacity-70 scale-[0.88] -rotate-[12deg] transition-all duration-700 hover:opacity-100 hover:rotate-0 hover:scale-[1.0] hover:z-40 cursor-pointer animate-float" style={{ animationDelay: '-1.5s' }}>
                <PhoneFrame scale={0.9}>
                    <ChildHomeScreenMock />
                </PhoneFrame>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[95px] z-10 opacity-70 scale-[0.90] rotate-[10deg] transition-all duration-700 hover:opacity-100 hover:rotate-0 hover:scale-[1.0] hover:z-40 cursor-pointer animate-float" style={{ animationDelay: '-3s' }}>
                <PhoneFrame scale={0.92}>
                    <ParentDashboardScreenMock />
                </PhoneFrame>
            </div>

            <div className="relative z-20 animate-float">
                <div className="absolute -inset-24 bg-[#6B9080]/15 rounded-full blur-[80px] -z-10" />
                <PhoneFrame scale={1}>
                    <RoleSelectionScreenMock />
                </PhoneFrame>
            </div>

            <div className="absolute -top-16 -right-20 z-50 bg-white/95 backdrop-blur-md shadow-2xl rounded-[24px] p-6 border border-white/40 flex items-center gap-4 animate-float hidden md:flex" style={{ animationDelay: '-0.8s' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#6B9080] to-[#84A98C] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-[#6B9080]/30">🛡️</div>
                <div className="pr-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Kid Guard App</p>
                    <p className="text-[16px] font-bold text-[#1F2937]">Protection Live</p>
                </div>
            </div>
        </div>
    );
};

export default ThreePhoneMockup;
