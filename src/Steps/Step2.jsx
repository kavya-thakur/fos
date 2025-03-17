import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Step2 = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Apply scroll-based transformations using framer-motion
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 bg-[#522258] h-screen w-full  rounded-t-4xl"
    >
      <div className="container mx-auto px-4 pt-20 mt-14">
        <div className="text-black capitalize pt-20">
          <h1 className="text-6xl tracking-tight font-light text-black">
            Step two{" "}
          </h1>
          <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight mt-5 mb-10 pb-4">
            Create and submit project
          </h2>
          <p className="text-white/60 text-lg">
            Click on the 'Create Project' button, fill out the necessary details
            of your project, and submit the form for review.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Step2;
