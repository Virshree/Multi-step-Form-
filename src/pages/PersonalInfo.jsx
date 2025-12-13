import React from "react";
import bgDesktop from "/assets/images/bg-sidebar-desktop.svg";
function PersonalInfo() {
  return (
    <div className="bg-[hsl(218_100%_97%)]  pt-24 w-full min-h-screen ">
      <div className="bg-white flex items-start gap-8 w-full max-w-[880px]  mx-auto rounded-xl shadow-md p-6 ">
        {/* Sidebar Image */}
        <div className="relative w-[260px] h-[500px]">
          {/* Background Image */}
          <img
            src={bgDesktop}
            alt="bgDesktop"
            className="absolute inset-0 w-full rounded-xl h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col rounded-2xl text-white p-6 gap-4">
          <p className="bg-teal-400 text-black rounded-full w-[30px] h-[30px] mt-5 flex items-center justify-center">1</p>
    <div className="mt-[-60px] ml-[60px]">
    <span className="text-xs tracking-widest opacity-80">STEP 1</span>
            <h3 className="font-bold">YOUR INFO</h3>
    </div>
    <p className="bg-teal-400 text-black rounded-full w-[30px] h-[30px] mt-5 flex items-center justify-center">2</p>
    <div className="mt-[-60px] ml-[60px]">
    <span className="text-xs tracking-widest opacity-80">STEP 2</span>
            <h3 className="font-bold">SELECT PLAN</h3>
    </div>
    <p className="bg-teal-400 text-black rounded-full w-[30px] h-[30px] mt-5 flex items-center justify-center">3</p>
    <div className="mt-[-60px] ml-[60px]">
    <span className="text-xs tracking-widest opacity-80">STEP 3</span>
            <h3 className="font-bold">ADD-ONS</h3>
    </div>
    <p className="bg-transparent border-e-white text-black rounded-full w-[30px] h-[30px] mt-5 flex items-center justify-center">4</p>
    <div className="mt-[-60px] ml-[60px]">
    <span className="text-xs tracking-widest opacity-80">STEP 4</span>
            <h3 className="font-bold">SUMMARY</h3>
    </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Personal info
          </h3>
          <p className="text-slate-500 mb-6">
            Please provide your name, email address, and phone number.
          </p>

          <div className="flex flex-col gap-2">
            <label className="text-md font-medium text-slate-700">Name</label>

            <input
              type="text"
              placeholder="e.g. Stephen King"
              className="
      w-full max-w-[400px]
      border border-slate-300
      rounded-md
      px-3 py-2
      text-slate-800
      placeholder-slate-400
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
    "
            />

            <label className="text-md font-medium text-slate-700 mt-4">
              Email Address
            </label>

            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className="
      w-full max-w-[400px]
      border border-slate-300
      rounded-md
      px-3 py-2
      text-slate-800
      placeholder-slate-400
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
    "
            />

            <label className="text-md font-medium text-slate-700 mt-4">
              Phone Number
            </label>

            <input
              type="number"
              placeholder="e.g. +1 234 567 890"
              className="
      w-full max-w-[400px]
      border border-slate-300
      rounded-md
      px-3 py-2
      text-slate-800
      placeholder-slate-400
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
    "
            />
            <div className="flex justify-end mt-32">
              <button
                className="
    bg-blue-950
    text-white
    px-6 py-3
    cursor-pointer
    rounded-md
    font-medium
    hover:bg-blue-900
    transition
  "
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
