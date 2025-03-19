import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Lottie from "react-lottie";
import create from "../assets/createe.json";
// import create from ""
const Step1 = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: create, // JSON file imported from LottieFiles
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
    },
  };

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0  h-screen md:max-h-[1300px] w-full rounded-t-2xl"
    >
      {/* spapes animation  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 lg:top-[35%]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-[#9b4dff] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#6a1b9a] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* </div> */}
      {/* shapes animation end  */}
      <div className="container mx-auto px-4 pt-20 md:pt-0 ">
        <div className="text-white capitalize flex flex-col md:gap-[20vw] md:flex-row overflow-hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="">
            <h1 className="text-6xl md:text-[7.5vw] tracking-tight font-light bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text">
              Step one{" "}
            </h1>
            <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight mt-5 mb-10 pb-4 md:text-6xl ">
              Create and submit project
            </h2>
            <p className="bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[1.6vw] md:w-[70%]">
              Click on the 'Create Project' button, fill out the necessary
              details of your project, and submit the form for review.
            </p>
          </div>
          <div className="lg:h-[30vw] lg:w-[40vw]">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Step1;
