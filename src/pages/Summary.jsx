import React from "react";

function Summary({
  goBack,
  goToNext,
  isYearly,
  gotoPlan,
  online,
  storage,
  profile,
}) {
  const planPrice = isYearly ? 90 : 9;

  const onlinePrice = online ? (isYearly ? 10 : 1) : 0;
  const storagePrice = storage ? (isYearly ? 20 : 2) : 0;
  const profilePrice = profile ? (isYearly ? 20 : 2) : 0;

  const total = planPrice + onlinePrice + storagePrice + profilePrice;

  return (
    <div className="flex justify-center absolute  top-20 sm:relative sm:top-0 ">
     <div className="bg-white m-auto p-6 rounded-xl w-[90%] sm:bg-transparent sm:shadow-none sm:w-md">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">
        Finishing up
      </h1>
      <p className="text-gray-400 mb-6">
        Double-check everything looks OK before confirming.
      </p>

      {/* SUMMARY CARD */}
      <div className="bg-gray-100 rounded-xl p-4">
        {/* PLAN */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-900">
              Arcade ({isYearly ? "Yearly" : "Monthly"})
            </p>
            <button
              onClick={gotoPlan}
              className="underline text-indigo-500 text-sm"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-gray-900">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </p>
        </div>

        <hr className="my-4" />

        {/* ADD-ONS */}
        {online && (
          <div className="flex justify-between text-gray-500 mb-2">
            <span>Online service</span>
            <span>+${onlinePrice}/{isYearly ? "yr" : "mo"}</span>
          </div>
        )}

        {storage && (
          <div className="flex justify-between text-gray-500 mb-2">
            <span>Larger storage</span>
            <span>+${storagePrice}/{isYearly ? "yr" : "mo"}</span>
          </div>
        )}

        {profile && (
          <div className="flex justify-between text-gray-500">
            <span>Customizable profile</span>
            <span>+${profilePrice}/{isYearly ? "yr" : "mo"}</span>
          </div>
        )}
      </div>

      {/* TOTAL */}
      <div className="flex justify-between items-center mt-6 px-2">
        <span className="text-gray-500">
          Total (per {isYearly ? "year" : "month"})
        </span>
        <span className="text-indigo-800 font-bold text-xl">
          +${total}/{isYearly ? "yr" : "mo"}
        </span>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-25 md:mt-28  md:static
  fixed bottom-0 left-0 right-0 bg-white  p-4
  md:p-0
  md:bg-transparent">
        <button
          onClick={goBack}
          className="text-gray-500 font-medium cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={goToNext}
          className="bg-indigo-800 text-white px-6 py-3 cursor-pointer rounded-md font-medium hover:bg-indigo-700 transition"
        >
          Confirm
        </button>
      </div>
      </div>
    </div>
  );
}

export default Summary;
