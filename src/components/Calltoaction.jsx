import React from "react";
import starimage from "../assets/star.png";
import springimage from "../assets/spring.png";

const Calltoaction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="container mx-auto px-4 ">
        <div className="relative">
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tighter lg:tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text capitalize lg:pb-2">
            Sign up for free today
          </h2>
          <div className="lg:w-[30%] md:w-[50%] mx-auto">
            <p className="text-center text-md mt-5 mb-3 ">
              Effortlessly turn your ideas into a fully functional, responsive,
              Saas website in just minutes with beautifull design.
            </p>
          </div>
          <img
            src={starimage}
            alt="starimage"
            className="hidden md:block absolute lg:w-[300px] lg:h-[300px] top-5 lg:right-30 rotate-[10deg] md:top-5 md:right-6 md:rotate-[25deg] md:w-[200px] md:h-[200px]"
          />
          <img
            src={springimage}
            className="hidden md:block absolute lg:top-0 md:top-3 lg:left-20 md:left-5 lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px]"
            alt="starimage"
          />
        </div>

        <div className="flex justify-center gap-4 mt-7">
          <button className="bg-black/80 rounded-lg px-6 py-2 text-sm text-white hover:bg-black/90">
            Log in
          </button>
          <button className="border px-4 py-2 rounded-lg text-sm">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;
