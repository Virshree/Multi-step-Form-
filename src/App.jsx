import { useState } from "react";

import "./App.css";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import Sidebar from "./components/Sidebar";
import PickAddOns from "./pages/PickAddOns";

function App() {
  const [step, setStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <div className="bg-[hsl(218_100%_97%)] min-h-screen flex items-center justify-center">
        <div className="bg-white flex gap-8 w-full max-w-[880px] rounded-xl shadow-md p-6">
          {/* STATIC SIDEBAR */}
          <Sidebar step={step} />

          {/* RIGHT CONTENT ONLY CHANGES */}
          {step === 1 && <PersonalInfo goToNext={() => setStep(2)} />}
          {step === 2 && (
            <SelectPlan
              isYearly={isYearly}
              setIsYearly={setIsYearly}
              goBack={() => setStep(1)}
              goToNext={() => setStep(3)}
            />
          )}
          {step == 3 && (
            <PickAddOns
              isYearly={isYearly}
              goBack={() => setStep(2)}
              goToNext={() => setStep(4)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
