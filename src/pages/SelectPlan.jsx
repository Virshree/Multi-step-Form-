import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";
import { useState } from "react";

function SelectPlan({ goToNext, goBack, isYearly, setIsYearly }) {
  return (
    <div className="absolute  top-20 sm:relative sm:top-0">
      <div className="bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:bg-transparent sm:shadow-none sm:w-md  ">
        <h1 className="text-3xl font-bold mb-2 p-2">Select your plan</h1>
        <p className="text-slate-500 p-1">
          You have the option of monthly or yearly billing.
        </p>

        <div className="flex flex-col gap-4 mt-6 md:flex-row md:gap-6">
          <div
            className="flex items-center gap-4 border border-gray-300 rounded-xl p-4 bg-white cursor-pointer hover:border-blue-500
             w-full
             md:flex-col md:items-start md:gap-6 md:w-44 md:h-48 md:p-5"
          >
            <img src={arcadeIcon} alt="icon" className="w-10 h-10" />

            <div>
              <h3 className="font-bold">Arcade</h3>
              <p className="text-gray-400 text-sm">
                {isYearly ? "$90/yr" : "$9/mo"}
              </p>
              {isYearly && (
                <p className="text-sm text-blue-900 ">2 months free</p>
              )}
            </div>
          </div>

          <div
            className="flex items-center gap-4 border border-gray-300 rounded-xl p-4 bg-white  hover:border-blue-500 cursor-pointer
             w-full
             md:flex-col md:items-start md:gap-6 md:w-44 md:h-48 md:p-5"
          >
            <img src={advancedIcon} alt="icon" className="w-10 h-10 " />
            <div>
              <h3 className="font-bold">Advanced</h3>
              <p className="text-gray-400 text-sm">
                {isYearly ? "$120/yr" : "$12/mo"}
              </p>
              {isYearly && <p className="text-sm text-blue-900">2 months free</p>}
            </div>
          </div>
          <div
            className="flex items-center gap-4 border border-gray-300 rounded-xl p-4 bg-white cursor-pointer hover:border-blue-500
             w-full
             md:flex-col md:items-start md:gap-6 md:w-44 md:h-48 md:p-5"
          >
            <img src={proIcon} alt="icon" className="w-10 h-10 " />
            <div>
              <h3 className=" font-bold">Pro</h3>

              <p className="text-gray-400">{isYearly ? "$150/yr" : "$15/mo"}</p>
              {isYearly && <p className="text-sm text-blue-900">2 months free</p>}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 flex items-center justify-center w-full h-[45px] mt-6 rounded-lg md:w-[420px] md:mx-auto ">
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
        {/* MOBILE FIXED FOOTER / DESKTOP NORMAL */}
        <div className=" bg-white fixed left-0 bottom-0 w-full p-4 flex justify-between mt-20 items-center sm:bg-transparent sm:absolute sm:p-0  ">
          <button
            onClick={goBack}
            className="text-gray-500 font-medium cursor-pointer hover:text-blue-950 transition"
          >
            Go Back
          </button>

          <button
            onClick={goToNext}
            className="bg-blue-950 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
