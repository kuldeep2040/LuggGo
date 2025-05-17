// import React from "react";

// const font = "Poppins, sans-serif";
// const unsplashImg =
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=800";

// export default function PromoHero() {
//   return (
//     <div
//       className="relative min-h-screen bg-[#f4f8fd] flex items-center justify-center overflow-hidden font-sans"
//       style={{ fontFamily: font }}
//     >
//       {/* SVG doodles and decor */}
//       <svg className="absolute top-16 left-14 z-0" width="90" height="60">
//         <g stroke="#222" strokeWidth="3" strokeLinecap="round">
//           <line x1="0" y1="14" x2="60" y2="0" />
//           <line x1="16" y1="36" x2="85" y2="19" />
//           <line x1="38" y1="56" x2="90" y2="40" />
//         </g>
//       </svg>
//       <svg className="absolute left-8 bottom-12" width="120" height="50">
//         <path
//           d="M8 24Q20 55 62 30Q104 5 112 38"
//           stroke="#8945E5"
//           strokeWidth="4"
//           fill="none"
//         />
//       </svg>
//       <svg className="absolute top-[38%] right-32" width="48" height="48">
//         <circle
//           cx="24"
//           cy="24"
//           r="19"
//           stroke="#B2B7D9"
//           strokeWidth="2"
//           fill="none"
//         />
//       </svg>
//       <svg className="absolute bottom-20 right-36" width="84" height="52">
//         <polyline
//           fill="none"
//           stroke="#8945E5"
//           strokeWidth="5"
//           points="4,44 26,40 50,10 75,44"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//         />
//       </svg>
//       <div className="absolute left-[44%] bottom-44 w-3 h-3 rounded-full bg-[#34CB4A]" />
//       <div className="absolute right-80 top-[10%] w-3 h-3 rounded-full bg-[#1350FF]" />
//       {/* <svg
//         className="absolute right-0 -top-24 w-36 z-0 select-none"
//         viewBox="0 0 160 160"
//         fill="none"
//       >
//         <path d="M160 0V160H0Q25 40 100 0H160Z" fill="#FFD29D" />
//       </svg> */}
//       {/* End doodles */}

//       <div className="relative z-10 flex max-w-7xl w-full justify-center items-center py-10">
//         {/* Left column */}
//         <div className="w-[41%] pl-8 pt-8">
//           <h1 className="text-[44px] leading-[1.16] font-bold text-[#15181F]">
//             Make more money
//             <br />
//             and <span className="text-[#1F3CFF]">grow your event.</span>
//           </h1>
//           <div className="mt-7 text-[18px] text-[#50556a] leading-[1.55] max-w-[450px]">
//             Our 0.9% fee is the lowest on the market. It will allow you to keep
//             more profits and help grow your event. The faster your event grows,
//             the closer we are to reaching our mission of ensuring
//           </div>
//           <div className="mt-10">
//             <a
//               href="#"
//               className="flex items-center gap-2 text-[#3562e3] font-medium text-[16px] hover:underline"
//             >
//               <svg
//                 width="12"
//                 height="20"
//                 className="inline-block -mt-1"
//                 fill="none"
//                 stroke="#3562e3"
//                 strokeWidth="2"
//               >
//                 <path d="M2 10L8 14M2 10L8 6" />
//               </svg>
//               Want the <span className="underline ml-1">lowest fee?</span>
//             </a>
//           </div>
//         </div>

//         {/* Right column: image and overlays */}
//         <div className="relative w-[59%] flex items-center min-h-[410px]">
//           <img
//             src={unsplashImg}
//             alt="Team"
//             className="rounded-3xl object-cover w-[370px] h-[230px] shadow-xl ml-8"
//             style={{ border: "7px solid #fff" }}
//           />

//           {/* Growth stat bubble */}
//           <div className="absolute top-4 left-[245px] px-5 py-2.5 bg-white rounded-2xl shadow-md flex flex-col items-start gap-1 w-[130px] z-20">
//             <span className="text-xs text-gray-500 font-medium uppercase">
//               growth
//             </span>
//             <div className="flex items-center gap-2">
//               <span className="text-lg font-bold text-[#15181F]">144%</span>
//               <svg
//                 width="18"
//                 height="18"
//                 fill="none"
//                 className="inline"
//               >
//                 <path
//                   d="M3 9l5 5 7-7"
//                   stroke="#3F62FB"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Chart bottom right */}
//           <div className="absolute bottom-2 left-[220px] bg-white px-4 pt-4 pb-2 rounded-2xl shadow-xl w-[220px] min-h-[100px] flex flex-col items-center">
//             {/* Chart mimic */}
//             <svg viewBox="0 0 200 55" width="180" height="46">
//               <rect
//                 x="0"
//                 y="0"
//                 width="200"
//                 height="55"
//                 rx="12"
//                 fill="#F3F7FF"
//               />
//               <path
//                 d="M15,40 Q40,10 75,28 Q105,53 125,22 Q155,5 175,35"
//                 stroke="#3F62FB"
//                 strokeWidth="3"
//                 fill="none"
//               />
//               <circle cx="174" cy="35" r="3" fill="#3F62FB" />
//               <text
//                 x="140"
//                 y="20"
//                 fontSize="11"
//                 fontWeight="bold"
//                 fill="#3F62FB"
//               >
//                 +38%
//               </text>
//             </svg>
//             <div className="text-xs text-gray-400 font-medium mt-2 self-start">
//               Jun&nbsp;&nbsp;&nbsp;&nbsp; Jul&nbsp;&nbsp;&nbsp;&nbsp; Aug&nbsp;&nbsp;&nbsp;&nbsp; Sep&nbsp;&nbsp;&nbsp;&nbsp; Oct&nbsp;&nbsp;&nbsp;&nbsp; Nov
//             </div>
//           </div>

//           {/* Deposited card */}
//           <div className="absolute top-[78px] left-[36px] bg-white px-5 py-3 rounded-2xl shadow-md flex flex-col items-start gap-1 w-[130px] z-20">
//             <span className="text-xs text-gray-500 font-medium uppercase flex items-center gap-1">
//               <svg width="15" height="15" fill="none">
//                 <rect
//                   x="2.5"
//                   y="2.5"
//                   width="10"
//                   height="10"
//                   rx="4"
//                   stroke="#3F62FB"
//                   strokeWidth="2"
//                 />
//                 <rect
//                   x="5"
//                   y="5"
//                   width="5"
//                   height="5"
//                   rx="2.5"
//                   fill="#3F62FB"
//                 />
//               </svg>
//               DEPOSITED
//             </span>
//             <span className="text-[17px] text-[#3562e3] font-bold">
//               $547,210
//             </span>
//           </div>

//           {/* Saved card */}
//           <div className="absolute top-[180px] left-[90px] bg-white px-5 py-3 rounded-2xl shadow-md flex flex-col items-start gap-1 w-[120px] z-20">
//             <span className="text-xs text-gray-500 font-medium uppercase flex items-center gap-1">
//               <svg width="15" height="15" fill="none">
//                 <rect
//                   x="2.5"
//                   y="2.5"
//                   width="10"
//                   height="10"
//                   rx="4"
//                   stroke="#3F62FB"
//                   strokeWidth="2"
//                 />
//                 <rect
//                   x="5"
//                   y="5"
//                   width="5"
//                   height="5"
//                   rx="2.5"
//                   fill="#3F62FB"
//                 />
//               </svg>
//               SAVED
//             </span>
//             <span className="text-[17px] text-[#3562e3] font-bold">
//               $22,426
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

const font = "Poppins, sans-serif";
const unsplashImg =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=800";

export default function PromoHero() {
  return (
    <div
      className="relative min-h-screen bg-[#f4f8fd] flex items-center justify-center overflow-hidden font-sans"
      style={{ fontFamily: font }}
    >
       <svg className="absolute top-8 left-8 z-0" width="90" height="60">
        <g stroke="#222" strokeWidth="3" strokeLinecap="round">
          <line x1="0" y1="14" x2="60" y2="0" />
          <line x1="16" y1="36" x2="85" y2="19" />
          <line x1="38" y1="56" x2="90" y2="40" />
        </g>
      </svg>

      <svg className="absolute left-10 bottom-10 z-0" width="100" height="60">
        <path
          d="M10 20 Q 40 50 90 10"
          stroke="#FF5D8F"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <svg className="absolute top-10 right-10 z-0" width="80" height="80">
        <circle cx="40" cy="40" r="30" stroke="#A47CF3" strokeWidth="3" fill="none" />
      </svg>

      <svg className="absolute bottom-12 right-10 z-0" width="80" height="50">
        <polyline
          fill="none"
          stroke="#00C2FF"
          strokeWidth="5"
          points="4,44 26,40 50,10 75,44"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-[15%] right-[15%] w-2 h-2 bg-[#FF9F1C] rounded-full"></div>
      <div className="absolute bottom-[12%] left-[20%] w-3 h-3 bg-[#2EC4B6] rounded-full"></div>
      <div className="absolute top-[60%] left-[85%] w-2 h-2 bg-[#B2B7D9] rounded-full"></div>
      <div className="absolute top-[38%] right-32" width="48" height="48">
        <svg width="48" height="48">
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke="#B2B7D9"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row max-w-6xl w-full items-center justify-center px-6 py-12 gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-[42px] md:text-[50px] leading-tight font-bold text-[#15181F]">
            Store your luggage <br />
            <span className="text-[#1F3CFF]">anytime, anywhere.</span>
          </h1>
          <p className="mt-6 text-[18px] text-[#50556a] leading-relaxed">
            Luggo is your smart cloakroom alternative. We provide safe, affordable, and accessible luggage storage near airports, railway stations, and city centers — starting with Tier-1 cities in India.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-[#1F3CFF] hover:bg-[#1430b8] text-white text-[16px] font-medium px-6 py-3 rounded-lg transition"
            >
              Book a Storage Spot
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={unsplashImg}
            alt="Storage"
            className="rounded-3xl object-cover w-[360px] h-[240px] shadow-xl"
            style={{ border: "7px solid #fff" }}
          />
        </div>
      </div>
    </div>
  );
}




