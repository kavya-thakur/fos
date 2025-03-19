import React, { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import support from "../assets/support.json";
const Step2 = () => {
  const container = useRef();
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: support, // JSON file imported from LottieFiles
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
    },
  };
  return (
    <motion.section className="sticky top-0 bg-[#522258] h-screen md:max-h-[1300px] w-full rounded-t-4xl">
      {/* shape animation */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[50vw] lg:top-[20vw]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-white/50 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#d21bdcbd] rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* shape aniamtion ends */}
      <div className="container mx-auto px-4 pt-20 md:pt-0 mt-14  ">
        <div className="text-white capitalize flex flex-col md:flex-row md:gap-[20vw] overflow-hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
          <div className="text-black capitalize">
            <h1 className="text-6xl md:text-[7.9vw] tracking-tight font-light text-black">
              Step Two{" "}
            </h1>
            <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl  tracking-tight mt-5 mb-10 pb-4">
              Dedicated Support
            </h2>
            <p className="text-white/60 text-lg lg:text-[1.6vw] md:w-[70%]">
              You will be assigned a dedicated point of contact to discuss the
              details of your project, ensuring all aspects and requirements are
              fully understood and addressed.
            </p>
          </div>
          <div className="md:w-[40vw] md:h-[30vw]">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Step2;
