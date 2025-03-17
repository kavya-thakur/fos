import React from "react";
import productimage from "../assets/product-image.png";
import { GridBackgroundDemo } from "./Background";

const Productshowcase = () => {
  return (
    <>
      {" "}
      <section className="relative bg-black py-24">
        <GridBackgroundDemo />
        <div className="z-10  inset-0 flex items-center justify-center flex-col absolute container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="text-transparent bg-clip-text text-sm inline-flex border border-[#FFFF]/10 px-3 py-1 rounded-lg tracking-tight bg-gradient-to-r from-neutral-300 to-stone-400">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tighter bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text capitalize">
            A more effective way to track progress
          </h2>
          <p className="text-center text-md mt-3 mb-3 bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text">
            Effortlessly turn your ideas into a fully functional, responsive,
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
