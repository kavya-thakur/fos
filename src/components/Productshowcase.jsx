
import React, { useRef } from "react";
import productimage from "../assets/product-image.png";
import { GridBackgroundDemo } from "./Background";

const Productshowcase = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-black pt-24 lg:pt-[35vw]"
    >
      <GridBackgroundDemo />
      <div className="z-10 inset-0 flex items-center justify-center flex-col absolute container mx-auto px-4 gap-4 md:gap-10 overflow-hidden">
        {/* Highlight Badge */}
        <div className="flex justify-center mb-4">
          <div className="animate-item text-[#F5F7F8] inline-flex border border-white/30 px-3 py-1 rounded-lg tracking-tight">
            Boost your productivity
          </div>
        </div>

        {/* Heading */}
        <div className="animate-item text-center font-extrabold text-4xl md:text-4xl lg:text-6xl tracking-tighter text-[#F5F7F8] capitalize leading-none">
          A more effective way <br />
          <span className="text-purple-500">track</span> progress
        </div>

        {/* Paragraph */}
        <p className="animate-item text-center text-sm text-white/80 md:text-md ">
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in minutes with beautiful design.
        </p>

        {/* Image */}
        <img
          src={productimage}
          className="animate-item lg:w-[72%] lg:mx-auto"
          alt="Product"
        />
      </div>
    </section>
  );
};

export default Productshowcase;
