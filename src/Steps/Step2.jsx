import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Step2 = () => {
  const container = useRef();

  return (
    <motion.section className="sticky top-0 bg-[#522258] h-screen w-full rounded-t-4xl">
      {/* shape animation */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[50vw] lg:top-[20vw]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-white/50 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#d21bdcbd] rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* shape aniamtion ends */}
      <div className="container mx-auto px-4 pt-20 mt-14">
        <div className="text-black capitalize pt-20">
          <h1 className="text-6xl md:text-[10vw] tracking-tight font-light text-black">
            Step two{" "}
          </h1>
          <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl  tracking-tight mt-5 mb-10 pb-4">
            Create and submit project
          </h2>
          <p className="text-white/60 text-lg lg:text-[2vw] md:w-1/2">
            Click on the 'Create Project' button, fill out the necessary details
            of your project, and submit the form for review.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Step2;
