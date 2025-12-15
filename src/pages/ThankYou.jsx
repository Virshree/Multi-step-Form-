import React from "react";
import thankyouIcon from "/assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="flex flex-col top-[75px] ml-[40px] items-center gap-4  ">
      <img src={thankyouIcon} alt="thank-you" className="w-16 h-16 mt-[170px]" />
      <h3 className="font-bold text-4xl">Thank you!</h3>
      <p className="text-gray-400 w-[450px] text-center">
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYou;
