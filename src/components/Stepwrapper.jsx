import React from "react";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Steps from "../Steps/Steps";

const Stepwrapper = () => {
  return (
    <div className="relative">
      {/* <Step1 />
      <Step2 />
      <Step3 />
      <Step4 /> */}
      <Steps />
    </div>
  );
};

export default Stepwrapper;
