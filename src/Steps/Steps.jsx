import React, { useState } from "react";
import firstvid from "../assets/firststep.mp4";
import secvid from "../assets/secoundstep.mp4";
import threevid from "../assets/threestep.mp4";
import fourvid from "../assets/complete.mp4";

const Steps = () => {
  const backgrounds = [
    "bg-gradient-to-r from-[#3e187a] to-[#994ecc]", // Step 1
    "bg-[#522258]", // Step 2
    "bg-[#1A3636]", // Step 3
    "bg-[#750E21]", // Step 4
  ];

  const [data, setdata] = useState([
    {
      step: "step one",
      heading: "Create and submit project",
      para: "Click on the 'Create Project' button, fill out the necessary details of your project, and submit the form for review.",
      vid: firstvid,
    },
    {
      step: "step two",
      heading: "Dedicated Support",
      para: "You will be assigned a dedicated point of contact to discuss the details of your project, ensuring all aspects and requirements are fully understood and addressed.",
      vid: secvid,
    },
    {
      step: "step three",
      heading: "Developer Assignment",
      para: "A qualified developer will be assigned to your project to begin work on it based on the agreed-upon terms",
      vid: threevid,
    },
    {
      step: "step four",
      heading: "Project Completion",
      para: "The assigned developer will complete your project and notify you once the work is done, ready for delivery.",
      vid: fourvid,
    },
  ]);
  return (
    <section className="sticky bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="pt-20 px-2 mb-10">
          <h1 className="font-extrabold text-5xl tracking-tight text-center text-[#E3DAC9] md:text-[8rem]">
            Steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e187a] to-[#994ecc]">
              follow
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-12 lg:gap-20 relative mx-auto">
          {data.map((step, i) => (
            <div
              key={i}
              className={`sticky top-30 md:top-30 px-5 flex flex-col md:flex-row md:items-center md:justify-between py-8 h-72 md:w-[80%] md:h-[40rem] lg:h-[45rem] rounded-2xl mx-auto ${backgrounds[i]}`}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-[#E3DAC9] text-3xl capitalize font-semibold mb-5 lg:text-7xl">
                  {step.step}
                </h1>
                <h2 className="font-semibold text-xl mb-2 lg:text-5xl">
                  {step.heading}
                </h2>
                <p className="text-white/70 md:text-md md:mt-5 lg:text-xl w-[80%]">
                  {step.para}
                </p>
              </div>
              <div className="hidden lg:block rounded-xl overflow-hidden">
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className=""
                  width={700}
                  src={step.vid}
                ></video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
