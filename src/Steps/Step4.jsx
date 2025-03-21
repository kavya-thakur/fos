import React from "react";
import Lottie from "react-lottie";
import complete from "../assets/complete.json";
const Step4 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: complete, // JSON file imported from LottieFiles
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
    },
  };
  return (
    <section className="sticky top-0 bg-[#750E21]  h-screen w-full md:max-h-[1300px] rounded-t-4xl overflow-hidden">
      {/* shapes animation start  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[29%] lg:-right-90">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-white/90 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw] "></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-white/40 rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* shapes animation ends  */}
      <div className="container mx-auto px-4  ">
        <div className=" text-white capitalize pt-20  flex flex-col md:flex-row md:gap-[20vw] md:absolute md:top-1/2  md:left-1/2 md:-translate-x-1/2  md:-translate-y-1/2 ">
          <div className="">
            <h1 className="text-5xl md:text-[6.9vw] tracking-tight font-light bg-gradient-to-r from-neutral-300 to-stone-400  text-transparent bg-clip-text ">
            final step{" "}
            </h1>
            <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800  text-transparent bg-clip-text  text-6xl tracking-tight mt-5 mb-10 pb-4 ">
              Project Completion
            </h2>
            <p className="  bg-gradient-to-r from-neutral-300 to-stone-400  text-transparent bg-clip-text text-lg md:text-[1.8vw] md:w-[70%]">
              The assigned developer will complete your project and notify you
              once the work is done, ready for delivery.
            </p>
          </div>
          <div className="lg:h-[36vw] lg:w-[46vw] md:w-[30vw]">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4;
