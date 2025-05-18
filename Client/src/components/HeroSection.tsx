import React from 'react';

const personImg = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=640&h=640&facepad=2&q=80"; // Orange sweater, blue bg
const avatarImg = "https://randomuser.me/api/portraits/women/52.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f4f8fc] min-h-[90vh] flex items-center overflow-x-clip pb-5">
      {/* Decorative Shapes - hidden on mobile for clarity */}
      <span className="hidden sm:block absolute left-[6vw] top-[88px] w-3.5 h-3.5 bg-[#f6a623] rounded-full"/>
      <span className="hidden sm:block absolute left-[12vw] top-[350px] w-3 h-3 bg-[#1338fc] rounded-full"/>
      <span className="hidden md:block absolute left-[25vw] bottom-[140px] w-9 h-9 border-2 border-dashed border-[#a884ff] rounded-full opacity-50"/>
      <span className="hidden md:block absolute right-[13vw] top-[100px] w-9 h-9 border-2 border-[#ffe58f] rounded-full opacity-75" />
      <span className="hidden sm:block absolute right-[22vw] top-[172px] w-2.5 h-2.5 bg-[#1338fc] rounded-full"/>
      <span className="hidden sm:block absolute right-[11vw] top-[229px] w-2.5 h-2.5 bg-[#27d06f] rounded-full"/>
      <span className="hidden sm:block absolute right-[7vw] bottom-[76px] w-2.5 h-2.5 bg-[#fd4c5c] rounded-full"/>

      <div className="w-full max-w-[1124px] mx-auto flex flex-col lg:flex-row justify-between items-center relative px-3 sm:px-6 pt-0">
        {/* Left Side */}
        <div className="flex flex-col items-start w-full lg:w-[480px] max-w-[98vw] lg:max-w-[52vw] mt-2 lg:mt-0">
          <span className="flex items-center gap-2 px-3 py-1 bg-[#edfff6] border border-[#10bd5e] rounded-full text-xs font-bold text-[#10bd5e] mb-6 sm:mb-8 mt-6 sm:mt-[25px] shadow-sm min-h-[30px]">
            NEW
            <span className="font-medium text-[#3f3f46] ml-2 whitespace-nowrap">Promote your event on social media</span>
          </span>
          <h1 className="font-black text-[32px] sm:text-[42px] md:text-[52px] leading-[1.13] text-[#25244c] mb-2 sm:mb-3 tracking-tight drop-shadow-xl" style={{fontFamily:'inherit'}}>
            Sell Tickets<br/>
            <span className="text-[#2a8efc]">Online.</span>
          </h1>
          <p className="text-[#757493] text-base sm:text-lg mb-6 sm:mb-10">Sell your online tickets easily with best user satisfaction.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center mb-9 sm:mb-12 w-full">
            <button className="bg-[#1536ec] hover:bg-[#0d1dab] transition px-7 py-3 text-base sm:px-8 sm:py-3 rounded-full text-white font-bold shadow-lg shadow-[#bed2ff]/40 w-full sm:w-auto">
              Get Started
            </button>
            <button className="flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3 bg-white border border-[#dfeaff] rounded-full text-[#1536ec] font-semibold text-base sm:text-lg shadow-md w-full sm:w-auto justify-center">
              <span className="w-8 h-8 bg-[#edf0fd] flex items-center justify-center rounded-full">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><circle cx="9.5" cy="9.5" r="9" stroke="#1536ec"/><path d="M8 6l4 3.5L8 13" fill="#1536ec"/></svg>
              </span>
              Play video
            </button>
          </div>
          <div className="flex gap-10 sm:gap-16 mb-5 sm:mb-6 mt-2 max-w-[340px] w-full">
            <div className="text-left">
              <div className="font-extrabold text-xl sm:text-2xl text-[#222248] leading-[1] mb-0">32k+</div>
              <span className="uppercase text-xs text-[#b2b1cb] font-semibold tracking-wide">Available tickets</span>
            </div>
            <div className="text-left">
              <div className="font-extrabold text-xl sm:text-2xl text-[#222248] leading-[1] mb-0">12k+</div>
              <span className="uppercase text-xs text-[#b2b1cb] font-semibold tracking-wide">tickets sells</span>
            </div>
          </div>
          <p className="mt-2 sm:mt-3 text-[#181848] text-base sm:text-[17px] leading-[1.65] max-w-[360px]">
            <span className="font-semibold text-[#2a8efc]">Over 29k+</span> tikets businesses growing with D-agency.
          </p>
        </div>
        {/* Right Side */}
        <div className="relative flex items-center justify-center w-full max-w-full min-h-[280px] h-[340px] sm:w-[520px] sm:h-[530px] mt-8 sm:mt-[54px] lg:mr-[-10px]">
          {/* Main Profile & Masked BG Circle */}
          <div className="absolute z-0 left-[12vw] sm:left-[64px] top-[6vw] sm:top-[18px] w-[72vw] max-w-[372px] h-[72vw] max-h-[372px] rounded-full bg-[#e7f3fa] border-[6px] sm:border-[8px] border-white filter drop-shadow-xl"/>
          <img src={personImg} alt="Hero" className="absolute left-[10vw] sm:left-[58px] top-[24vw] sm:top-[32px] w-[72vw] max-w-[372px] h-[72vw] max-h-[372px] object-cover rounded-[30px] sm:rounded-[44px] border-[5px] sm:border-[7px] border-white shadow-xl z-10" />
          {/* User Info Card */}
          <div className="absolute left-0 top-[32vw] sm:top-[102px] flex items-center bg-white rounded-full shadow-xl border border-[#eef0f8] px-3 sm:px-4 py-2 w-[70vw] max-w-[224px] h-[48px] sm:h-[61px] z-20">
            <img src={avatarImg} alt="user" className="w-[35px] sm:w-[44px] h-[35px] sm:h-[44px] rounded-full object-cover border border-[#e9ebf3] mr-2" />
            <div className="flex flex-col ml-1 sm:ml-2">
              <span className="font-semibold text-[15px] sm:text-[16px] text-[#25244c] leading-tight truncate">Katrina monte</span>
              <span className="text-[#b6b5d2] text-[12px] sm:text-[13px] truncate">014689......</span>
            </div>
            <span className="flex-1"/>
            <svg width="24" height="24" className="mr-2 hidden md:block" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#F4F4F8" strokeWidth="2"/></svg>
          </div>
          {/* Ticket/QR Card */}
          <div className="absolute left-[24vw] sm:left-[120px] bottom-[22vw] sm:bottom-[56px] w-[70vw] max-w-[264px] h-[60px] sm:h-[82px] bg-white rounded-[16px] sm:rounded-[22px] border border-[#eaf2ff] shadow-md flex px-3 sm:px-4 items-center z-30">
            <span className="w-8 sm:w-10 h-8 sm:h-10 bg-[#edf2ff] flex items-center justify-center rounded-full mr-2">
              <svg width="21" height="21" className="sm:hidden" viewBox="0 0 21 21" fill="none"><path d="M6 11h7M10 8l3 3-3 3" stroke="#2455ef" strokeWidth="2"/><circle cx="10.5" cy="10.5" r="10" stroke="#eaf5ff"/></svg>
              <svg width="25" height="25" className="hidden sm:block" viewBox="0 0 25 25" fill="none"><path d="M8 12.5h9M13 8.5l5 4-5 4" stroke="#2455ef" style={{strokeWidth:2}}/><circle cx="12.5" cy="12.5" r="12" stroke="#eaf5ff" /></svg>
            </span>
            <div className="ml-2 mt-1">
              <div className="leading-tight text-[13px] sm:text-[16px] text-[#25244c] font-semibold">01</div>
              <div className="text-xs text-[#a8a6c5] font-bold -mt-[2px]">Person</div>
            </div>
            <div className="flex flex-col leading-tight items-center mx-4 sm:mx-6">
              <span className="font-extrabold text-base sm:text-lg text-[#2a8efc] mb-[-3px]">28</span>
              <span className="uppercase text-[#a8a6c5] text-xs tracking-tight">June</span>
            </div>
            <span className="mr-2"/>
            <div className="flex flex-col items-center">
              <svg width="28" height="28" className="sm:hidden" viewBox="0 0 28 28"><rect x="3" y="3" width="22" height="22" rx="5" fill="#eff7fd"/><rect x="9" y="9" width="10" height="10" rx="2" fill="#2a8efc"/></svg>
              <svg width="34" height="34" className="hidden sm:block" viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="6" fill="#eff7fd"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#2a8efc"/></svg>
              <span className="text-[#0acd7d] text-[9px] sm:text-[10px] font-semibold leading-none">Your Ticket</span>
            </div>
          </div>
          {/* Graph Card */}
          <div className="absolute right-0 sm:right-[5px] bottom-0 w-[90vw] max-w-[275px] h-[115px] sm:h-[180px] bg-white rounded-[14px] sm:rounded-[20px] shadow-2xl border border-[#f3f3fa] flex flex-col pt-2 sm:pt-6 pb-3 sm:pb-5 px-3 sm:px-7 z-40">
            <div className="flex w-full justify-between items-center mb-1 sm:mb-4">
              <div className="text-[#25244c] text-[14px] sm:text-[20px] font-bold">$30,491</div>
              <div className="flex items-center gap-0 ml-1">
                <svg height="15" width="15" className="sm:hidden" viewBox="0 0 15 15" fill="none"><path d="M4 10L7.5 5.5L11 9.5" stroke="#0acd7d" strokeWidth="2"/><path d="M12 10V5" stroke="#0acd7d" strokeWidth="2"/></svg>
                <svg height="19" width="19" className="hidden sm:block" viewBox="0 0 19 19" fill="none"><path d="M5 14L9.5 7L14 13" stroke="#0acd7d" strokeWidth="2"/><path d="M15 14V6" stroke="#0acd7d" strokeWidth="2"/></svg>
                <div className="text-[#0acd7d] text-[11px] sm:text-[16px] font-semibold ml-1">144%</div>
              </div>
            </div>
            <div className="pt-0 sm:pt-1 mb-2 sm:mb-7">
              <svg width="100" height="25" className="sm:hidden" viewBox="0 0 100 25" fill="none"><path d="M2 18L24 8L51 12L75 2L98 18" stroke="#2a8efc" strokeWidth="3" fill="none"/></svg>
              <svg width="220" height="55" className="hidden sm:block" viewBox="0 0 220 55" fill="none"><path d="M5 40L51 17L102 32L150 5L205 40L215 28" stroke="#2a8efc" strokeWidth="4" fill="none"/></svg>
            </div>
            <div className="flex w-full justify-between items-end mt-auto">
              <div className="flex flex-col">
                <span className="uppercase text-[10px] sm:text-[11px] text-[#adb0c9] tracking-wide font-semibold">DEPOSITED</span>
                <span className="text-[#1536ec] font-extrabold text-[14px] sm:text-[17px] leading-none">$547,210</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="uppercase text-[10px] sm:text-[11px] text-[#adb0c9] tracking-wide font-semibold">SAVED</span>
                <span className="text-[#0acd7d] font-extrabold text-[14px] sm:text-[17px] leading-none">$22,426</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}