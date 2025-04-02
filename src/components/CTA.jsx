import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="bg-[#3e187a] bg-gradient-to-br from-[#3e187a] to-[#994ecc] text-white px-10 md:py-22 py-8 text-center flex flex-col gap-5 rounded-2xl my-10 md:mb-40 max-w-7xl mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="text-[2rem] md:text-[3.4rem] leading-none font-extrabold text-[#F5F7F8] lg:text-[4rem]">
          Learn More about fosnix{" "}
        </h2>
        <p className="md:text-[1.2rem] lg:text-[1.5rem]">
          Let’s bring your vision to life—efficiently and flawlessly.
        </p>
      </div>
      <div className="flex justify-center md:pt-5">
        <button className="px-5 py-2 lg:px-7 lg:py-3 lg:text-lg bg-white text-black rounded-full flex items-center gap-5 justify-between text-sm">
          Explore More{" "}
          <div className="bg-purple-300 px-3 py-3 lg:px-5 lg:py-5  rounded-full">
            <FaArrowRight />
          </div>{" "}
        </button>
      </div>
    </div>
  );
};

export default CTA;
