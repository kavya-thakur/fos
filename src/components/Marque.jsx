import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <section className="overflow-hidden sticky">
      <div className="py-10 w-full bg-[#240B50]">
        <div className="text flex z-2 overflow-hidden whitespace-nowrap text-white">
          <motion.h1
            initial={{
              x: 0,
            }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
            className="text-[14vw] leading-none font-semibold uppercase  pl-10"
          >
            We Are Fosnix{" "}
          </motion.h1>
          <motion.h1
            initial={{
              x: 0,
            }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
            className="text-[14vw] leading-none font-semibold uppercase  pl-10"
          >
            We Are Fosnix{" "}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Marque;
