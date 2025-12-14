import React, { useState } from "react";

function PersonalInfo({ goToNext }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      goToNext();
    }
  };
  return (
    <div className="">
      {/* Content */}
      <div className="flex-1 ">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Personal info
        </h1>
        <p className="text-slate-500 mb-6">
          Please provide your name, email address, and phone number.
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between  max-w-[400px]">
            <label className="text-md font-medium text-slate-700">Name</label>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className={`w-full max-w-[400px] rounded-md px-3 py-2
              ${errors.email ? "border-red-500" : "border-slate-300"}
              border focus:outline focus:ring-2 focus:ring-blue-500`}
          />
          <div className="flex justify-between  max-w-[400px]">
            <label className="text-md font-medium text-slate-700 mt-3 ">
              Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-3">{errors.email}</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g.stephenking@lorem.com"
            className={`w-full max-w-[400px] rounded-md px-3 py-2
              ${errors.email ? "border-red-500" : "border-slate-300"}
              border focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          <div className="flex justify-between  max-w-[400px]">
            <label className="text-md font-medium text-slate-700 mt-3">
              Phone Number
            </label>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-3">{errors.phone}</p>
            )}
          </div>

          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className={`w-full max-w-[400px] rounded-md px-3 py-2
              ${errors.email ? "border-red-500" : "border-slate-300"}
              border focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              onClick={handleNext}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
