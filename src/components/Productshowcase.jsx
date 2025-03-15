import React from "react";
import productimage from "../assets/product-image.png";
import { easeInOut, motion } from "framer-motion";
const Productshowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2DCFF] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <div className=" text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Boost your productivity
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.1,
              ease: easeInOut,
            },
          }}
          className="text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text capitalize "
        >
          A more effective way to track progress
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.2,
              ease: easeInOut,
            },
          }}
          className="text-center text-md mt-3 mb-3"
        >
          Effortlessly turn your ideas into a fully functional, responsive, Saas
          website in just minutes with beautifull design.
        </motion.p>
        <img src={productimage} className="lg:w-[85%] lg:mx-auto" alt="" />
      </div>
    </section>
  );
};

export default Productshowcase;
