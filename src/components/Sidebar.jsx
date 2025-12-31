import bgMobile from "/assets/images/bg-sidebar-mobile.svg";
import bgDesktop from "/assets/images/bg-sidebar-desktop.svg";

function Sidebar({ step }) {
  return (
    <>
      {/* ===== MOBILE SIDEBAR ===== */}
      <div className="relative md:hidden h-[170px]  ">
        <img
          src={bgMobile}
          alt="mobile sidebar"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex justify-center gap-4 pt-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center
              ${
                step === num
                  ? "bg-teal-200 text-black"
                  : "border border-white text-white"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <div className="hidden md:block relative w-[320px] h-[550px] rounded-xl overflow-hidden p-6">
        <img
          src={bgDesktop}
          alt="desktop sidebar"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center gap-4 mb-6 relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center
              ${
                step === num
                  ? "bg-teal-200 text-black"
                  : "border border-white text-white"
              }`}
            >
              {num}
            </div>

            <div>
              <p className="text-xs text-gray-300 tracking-widest">
                STEP {num}
              </p>
              <p className="text-white text-sm font-medium">
                {num === 1 && "YOUR INFO"}
                {num === 2 && "SELECT PLAN"}
                {num === 3 && "ADD-ONS"}
                {num === 4 && "SUMMARY"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
