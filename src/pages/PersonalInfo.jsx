import React, { useState, useEffect } from "react";

function PersonalInfo({ goToNext }) {
  // Step 1: Consolidate form data into a single state object
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  // 👇 Load saved data when component mounts
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
    setPhone(localStorage.getItem("phone") || "");
  }, []);

  // Step 2: Validate the form and save to localStorage
  const handleNext = () => {
    const newErrors = {};

    // Validation
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!phone.trim()) newErrors.phone = "Phone number is required";

    // If there are no errors, proceed to the next step
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      localStorage.setItem("phone", phone);
      // clear after navigation
      setName("");
      setEmail("");
      setPhone("");
      setErrors({}); // Clear errors if everything is valid
      // Trigger the next step
      goToNext();
    } else {
      setErrors(newErrors); // Set validation errors
    }
  };
  useEffect(() => {
    const handleRefresh = () => {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
    };
    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.addEventListener("beforeunload", handleRefresh);
    };
  }, []);
  return (
    <div className=" flex justify-center absolute  top-20 sm:relative sm:top-0">
          <div className=" bg-white m-auto p-6 rounded-xl w-[90%] sm:bg-transparent sm:shadow-none sm:w-md  ">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
        Personal info
      </h1>

      <p className="text-slate-500 mb-6 text-md md:text-base">
        Please provide your name, email address, and phone number. 
      </p>

      <form className="space-y-4">
        {/* Name */}
        <div className="flex justify-between">
          <label className="text-sm font-medium text-slate-700">Name</label>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Stephen King"
          className={`w-full rounded-md px-3 py-2 border ${
            errors.name ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        {/* Email */}
        <div className="flex justify-between">
          <label className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. stephenking@lorem.com"
          className={`w-full rounded-md px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        {/* Phone */}
        <div className="flex justify-between">
          <label className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            if (v.length <= 10) setPhone(v);
          }}
          placeholder="e.g. +1 234 567 890"
          className={`w-full rounded-md px-3 py-2 border ${
            errors.phone ? "border-red-500" : "border-slate-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </form>

      {/* Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white px-9 mt-[95px] py-4 md:static md:bg-transparent md:px-0 md:py-0 flex justify-end">
        <button
          onClick={handleNext}
          className="bg-blue-950 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition cursor-pointer"
        >
          Next Step
        </button>
      </div>
  </div>
    </div>
  );
}

export default PersonalInfo;
