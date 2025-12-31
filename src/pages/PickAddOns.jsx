import React from "react";

function PickAddOns({
  goBack,
  goToNext,
  isYearly,
  online,
  setOnline,
  profile,
  setProfile,
  storage,
  setStorage,
}) {
  return (
    <div className="flex  justify-center absolute top-20   sm:relative sm:top-0">
    <div className="bg-white m-auto p-6 rounded-xl shadow-lg w-[90%] sm:bg-transparent sm:shadow-none sm:w-md   ">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Pick add-ons
      </h1>
      <p className="text-slate-500 mb-6">
        Add-ons help enhance your gaming experience.
      </p>

      {/* ADD-ON CARD */}
      <label className="flex  items-center justify-between border border-gray-300 rounded-xl p-4 mb-4 cursor-pointer hover:border-blue-800">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={online}
            onChange={() => setOnline(!online)}
            className="scale-125"
          />
          <div>
            <h3 className="font-bold">Online service</h3>
            <p className="text-gray-400 text-sm">
              Access to multiplayer games
            </p>
          </div>
        </div>
        <p className="text-indigo-800 text-sm font-medium">
          {isYearly ? "+$10/yr" : "+$1/mo"}
        </p>
      </label>

      <label className="flex items-center justify-between border border-gray-300 rounded-xl p-4 mb-4 cursor-pointer hover:border-blue-800">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={storage}
            onChange={() => setStorage(!storage)}
            className="scale-125"
          />
          <div>
            <h3 className="font-bold">Larger storage</h3>
            <p className="text-gray-400 text-sm">
              Extra 1TB of cloud save
            </p>
          </div>
        </div>
        <p className="text-indigo-800 text-sm font-medium">
          {isYearly ? "+$20/yr" : "+$2/mo"}
        </p>
      </label>

      <label className="flex items-center justify-between border border-gray-300 rounded-xl p-4 mb-6 cursor-pointer hover:border-blue-800">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={profile}
            onChange={() => setProfile(!profile)}
            className="scale-125"
          />
          <div>
            <h3 className="font-bold">Customizable profile</h3>
            <p className="text-gray-400 text-sm">
              Custom theme on your profile
            </p>
          </div>
        </div>
        <p className="text-indigo-800 text-sm font-medium">
          {isYearly ? "+$20/yr" : "+$2/mo"}
        </p>
      </label>

    {/* FOOTER BUTTONS */}
<div className="
  flex justify-between items-center
  
  md:mt-20
  md:static
  fixed bottom-0 left-0 right-0
  bg-white
  p-4
  md:p-0
  md:bg-transparent
">
  <button
    onClick={goBack}
    className="text-gray-500 font-medium cursor-pointer"
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

export default PickAddOns;
