import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Step3 = () => {
  const container = useRef();

  return (
    <motion.section className="sticky top-0 bg-[#1A3636] overflow-hidden h-screen w-full rounded-t-2xl">
      {/* spape animation  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[29%] lg:top-[35%]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-orange-700 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-black/20 rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* shape animation end  */}
      <div className="container mx-auto px-4 pt-20 mt-14">
        <div className="text-white capitalize">
          <h1 className="text-6xl md:text-[10vw] tracking-tight font-light bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text">
            Step three{" "}
          </h1>
          <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight mt-5 mb-10 pb-4 md:text-6xl">
            Developer Assignment
          </h2>
          <p className="bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[2vw] md:w-1/2">
            A qualified developer will be assigned to your project to begin work
            on it based on the agreed-upon terms.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Step3;
