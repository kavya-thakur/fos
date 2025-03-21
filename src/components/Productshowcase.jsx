import React from "react";
import productimage from "../assets/product-image.png";
import { GridBackgroundDemo } from "./Background";

const Productshowcase = () => {
  return (
    <>
      {" "}
      <section className="relative  bg-black py-24 lg:pt-[35vw]">
        <GridBackgroundDemo />
        <div className="z-10  inset-0 flex items-center justify-center flex-col absolute container mx-auto px-4 gap-4 md:gap-10">
          <div className="flex justify-center mb-4">
            <div className="text-white/90 inline-flex border border-[#FFFF]/30 px-3 py-1 rounded-lg tracking-tight ">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tighter text-white/70 capitalize ">
            A more effective way to <span className="text-purple-500">track</span> progress
          </h2>
          <p className=" text-center text-md mt-3 mb-3 text-white/80 md:text-lg font-extralight">
            Effortlessly turn your ideas into a fully functional, responsive, <br />
            Saas website in just minutes with beautiful design.
          </p>
          <img
            src={productimage}
            className="lg:w-[85%] lg:mx-auto"
            alt="Product"
          />
        </div>
      </section>
    </>
  );
};

export default Productshowcase;
