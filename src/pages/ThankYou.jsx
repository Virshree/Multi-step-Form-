import React from "react";
import thankyouIcon from "/assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="flex justify-center absolute  top-20 sm:relative sm:top-0 ">
    <div className="bg-white h-[440px] text-center flex flex-col items-center justify-center m-auto p-6 rounded-xl shadow-lg w-[90%] sm:w-md sm:bg-transparent sm:shadow-none">
    <div className="flex flex-col top-[75px] ml-[10px] items-center gap-4  ">
      <img src={thankyouIcon} alt="thank-you" className="scale-80 mb-3" />
      <h3 className="font-bold text-4xl">Thank you!</h3>
      <p className="text-base text-gray-500/80 sm:text-sm w-[98%]">
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      </div>
    </div>
    </div>
  );
}

export default ThankYou;
