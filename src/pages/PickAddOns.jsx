import React from "react";

function PickAddOns({ goBack, goToNext, isYearly,online,setOnline,profile,setProfile,storage,setStorage }) {
  return (
    <div className="mt-7 flex flex-col">
      <h1 className="text-3xl font-bold mb-2">Pick add-ons</h1>
      <p className="text-slate-500">
        Add-ons help enhance your gaining experience.
      </p>

      <div
        className="w-[540px] h-[80px] 
      border border-gray-300 mt-6 
      cursor-pointer rounded-2xl hover:border-blue-800
     "
      >
        <input type="checkbox"   checked={online}
  onChange={() => setOnline(!online)}className="ml-[20px] scale-150  mt-[25px]" />
        <div className="flex justify-between  ml-[70px] mt-[-30px]">
          <div className="flex flex-col">
            <h3 className="font-bold ">Online service</h3>
            <p className="text-gray-400">Access to multiplayer games</p>
          </div>

          <div className="p-2">
            <p className="p-2 text-indigo-800">
              {isYearly ? "+$10/yr" : "+$1/mo"}
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[540px] h-[80px] 
      border border-gray-300 mt-6 
      cursor-pointer rounded-2xl 
      hover:border-blue-900"
      >
        <input type="checkbox"  checked={storage}
  onChange={() => setStorage(!storage)} className="ml-[20px] scale-150  mt-[25px]" />
        <div className="flex justify-between ml-[70px] mt-[-30px]">
          <div className="flex flex-col">
            <h3 className="font-bold ">Larger storage</h3>
            <p className="text-gray-400">Extra 1TB of cloud save</p>
          </div>
          <div className="p-2">
            <p className="text-indigo-800 p-2">
              {isYearly ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[540px] h-[80px] 
      border border-gray-300 mt-6 
      cursor-pointer rounded-2xl 
      hover:border-blue-900"
      >
        <input type="checkbox"  checked={profile}
  onChange={() => setProfile(!profile)} className="ml-[20px] scale-150  mt-[25px]" />
        <div className="flex justify-between ml-[70px] mt-[-30px]">
          <div className="flex flex-col">
            <h3 className="font-bold ">Customizable profile</h3>
            <p className="text-gray-400">Custom theme on your profile</p>
          </div>
          <div className="p-2">
            <p className="text-indigo-800 p-2">
              {isYearly ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
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
  );
}

export default PickAddOns;
