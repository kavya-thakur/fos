import React from "react";

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
