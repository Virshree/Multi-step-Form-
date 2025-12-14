import React from "react";
import bgDesktop from "/assets/images/bg-sidebar-desktop.svg";
function Sidebar({ step }) {
  return (
    <div className=" relative w-[260px] h-[550px] overflow-hidden rounded-xl p-6">
      <img
        src={bgDesktop}
        alt="sidebar background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="flex  relative items-center gap-3 mb-6">
          <div
            className={`w-8 h-8  rounded-full flex items-center justify-center
            ${step === num ? "bg-teal-200 text-black" : "border border-white"}`}
          >
            {num}
          </div>

          <div>
            <p className="text-xs opacity-70  text-gray-200 tracking-widest">
              STEP {num}
            </p>
            <p className="text-white">
              {num === 1 && "YOUR INFO"}
              {num === 2 && "SELECT PLAN"}
              {num === 3 && "ADD-ONS"}
              {num === 4 && "SUMMARY"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
