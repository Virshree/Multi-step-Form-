import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";
import { useState } from "react";

function SelectPlan({ goToNext, goBack, isYearly, setIsYearly }) {
  return (
    <>
      <div className="flex flex-col mt-6">
        <h1 className="text-3xl font-bold mb-2">Select your plan</h1>
        <p className="text-slate-500">
          You have the option of monthly or yearly billing.
        </p>

        <div className="flex mt-7">
          <div className="w-[160px] m-2 border border-gray-400 h-[190px] p-5 rounded-2xl bg-white hover:border-blue-500 cursor-pointer">
            <img src={arcadeIcon} alt="icon" className="w-10 h-10 " />
            <h3 className="mt-14 font-bold">Arcade</h3>
            <p className="text-gray-400 text-md">
              {isYearly ? "$90/yr" : "$9/mo"}
            </p>
            {isYearly && <p className="text-sm">2 months free</p>}
          </div>
          <div className="w-[160px] m-2 border border-gray-400 h-[190px] p-5 rounded-2xl bg-white hover:border-blue-500 cursor-pointer">
            <img src={advancedIcon} alt="icon" className="w-10 h-10 " />
            <h3 className="mt-14 font-bold">Advanced</h3>
            <p className="text-gray-400">{isYearly ? "$120/yr" : "$12/mo"}</p>
            {isYearly && <p className="text-sm">2 months free</p>}
          </div>
          <div className="w-[160px] m-2 border border-gray-400 h-[190px] p-5 rounded-2xl bg-white hover:border-blue-500 cursor-pointer">
            <img src={proIcon} alt="icon" className="w-10 h-10 " />
            <h3 className="mt-14 font-bold">Pro</h3>
            <p className="text-gray-400">{isYearly ? "$150/yr" : "$15/mo"}</p>
            {isYearly && <p className="text-sm">2 months free</p>}
          </div>
        </div>

        <div className="bg-slate-100   flex items-center justify-center  w-[480px] h-[45px] mt-6 ">
          <span
            className={
              !isYearly ? " m-4 font-bold text-indigo-900" : "text-gray-400 "
            }
          >
            Montly{" "}
          </span>
          <div
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 m-4 bg-blue-900 rounded-full cursor-pointer relative"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300
      ${isYearly ? "left-7" : "left-1"}`}
            />
          </div>

          <span
            className={isYearly ? "font-bold text-blue-900" : "text-gray-400"}
          >
            Yearly
          </span>
        </div>
        <div className="flex justify-between mt-28">
          <button onClick={goBack} className="text-gray-500  cursor-pointer ">
            Go Back
          </button>
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
            onClick={goToNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default SelectPlan;
