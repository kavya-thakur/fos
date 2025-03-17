import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Step3 = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 bg-[#1A3636] h-screen w-full rounded-t-2xl"
    >
      <div className="container mx-auto px-4 pt-20 mt-14">
        <div className="text-white capitalize">
          <h1 className="text-6xl tracking-tight font-light bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text">
            Step three{" "}
          </h1>
          <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight mt-5 mb-10 pb-4 md:text-6xl">
            Developer Assignment
          </h2>
          <p className="bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg">
            A qualified developer will be assigned to your project to begin work on it based on the agreed-upon terms.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Step3;
