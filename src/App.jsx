import { useState } from "react";

import "./App.css";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import Sidebar from "./components/Sidebar";
import PickAddOns from "./pages/PickAddOns";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";

function App() {
  const [step, setStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [online, setOnline] = useState(false);
const [storage, setStorage] = useState(false);
const [profile, setProfile] = useState(false);

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
              online={online}
  setOnline={setOnline}
  storage={storage}
  setStorage={setStorage}
  profile={profile}
  setProfile={setProfile}
              goBack={() => setStep(2)}
              goToNext={() => setStep(4)}
            />
          )}

          {step==4 && <Summary 
            online={online}
            storage={storage}
            profile={profile}
            isYearly={isYearly}
            gotoPlan={()=>setStep(2)}
          goBack={()=>setStep(3)} goToNext={()=>setStep(5)}/>}


          {step==5 && <ThankYou/>}
        </div>
      </div>
    </>
  );
}

export default App;
