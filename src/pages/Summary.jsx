import React from "react";

function Summary({goBack,goToNext,isYearly,gotoPlan,online,storage,profile}) {
 
  const planPrice = isYearly ? 90 : 9;

  const total =
    planPrice +
    (online ? (isYearly ? 10 : 1) : 0) +
    (storage ? (isYearly ? 20 : 2) : 0) +
    (profile ? (isYearly ? 20 : 2) : 0);
  
  return (
    <div className="flex flex-col mt-6 ml-[30px]">
      <h1 className="text-3xl font-semibold m-1">Finishing up</h1>
      <p className="text-gray-400 m-2">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-gray-100 w-[470px] rounded-2xl  h-[250px] mt-5">
<div className="flex flex-col m-2 p-2">
        <span className="text-gray-950 font-bold">Arcade ({isYearly?"Yearly":"Monthly"})</span>
        <div className="flex justify-between">
        <span onClick={gotoPlan} className="underline cursor-pointer text-indigo-500">Change</span>
        <p className="font-bold p-2">${planPrice}/{isYearly ?"yr":"mo"}</p>
        </div>
        <hr className="border border-gray-300"/>
        {online && (<div className="flex justify-between">
        <span className="p-2 text-gray-500">Online service</span>
        <p className="text-gray-800">{isYearly ?"+$10/yr":"+$1/mo"}</p>
        </div>)}

        {storage && ( <div className="flex justify-between">
        <span className="p-2 text-gray-500">Large storage</span>
        <p className="text-gray-800">{isYearly ?"+$20/yr":"+$2/mo"}</p>
        </div>)}
       
        {profile && (
  <div className="flex justify-between">
    <span className="p-2 text-gray-500">Customizable profile</span>
    <p className="text-gray-800">
      {isYearly ? "+$20/yr" : "+$2/mo"}
    </p>
  </div>
)}

        </div>
      </div>
      {profile && (<div className="flex justify-between">
        <span className="p-2 text-gray-500 ml-4">Total(per month)</span>
        <p className="p-2 text-indigo-900 font-bold text-xl">+${total}/{isYearly ?"yr":"mo"}</p>
        </div>)}
   
        <div className="flex justify-between mt-28">
          <button onClick={goBack} className="text-gray-500  cursor-pointer ">
            Go Back
          </button>
          <button
            className="
         bg-indigo-800
        text-white
         px-6 py-3
        cursor-pointer
        rounded-md
        font-medium 
       hover:bg-indigo-800
         transition
  "
            onClick={goToNext}
          >
           Confirm
          </button>
        </div>
    </div>
  );
}

export default Summary;
