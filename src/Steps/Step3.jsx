import { motion } from "framer-motion";
// import Lottie from "react-lottie";
import assign from "../assets/assign.json";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Step3 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: assign, // JSON file imported from LottieFiles
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
    },
  };
  useGSAP(() => {
    let step3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".head3",
        start: "top 80%",
        end: "top 30%",
        scrub: 2, // Slower scrub for smoother animation
      },
    });
    step3
      .from(".step3h", {
        y: -100,
        opacity: 0,
        duration: 1.3, // Increased time to feel smoother
        ease: "power1.inOut",
        stagger: 0.2,
      })
      .from(".step3subheading", {
        y: 100,
        opacity: 0,
        duration: 1.3, // Increased time to feel smoother
        ease: "power1.inOut",
      });
  });
  return (
    <motion.section className="sticky top-0 bg-[#1A3636] overflow-hidden h-screen md:max-h-[1300px] w-full rounded-t-2xl ">
      {/* spape animation  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[29%] lg:top-[35%]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-orange-700 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-black/20 rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* shape animation end  */}
      <div className="container mx-auto px-4 pt-5 md:pt-0 mt-14  ">
        <div className="text-white capitalize flex flex-col md:flex-row md:gap-[20vw] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div>
            <div className="head3">
              <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
                {"Step-Three".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block step3h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text "
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="step3subheading overflow-hidden mt-5 mb-10 ">
              <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl  tracking-tight">
                Developer Assignment
              </h2>
            </div>
            <p className="  bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[1.7vw] md:w-[70%]">
              A qualified developer will be assigned to your project to begin
              work on it based on the agreed-upon terms.
            </p>
          </div>
          {/* <div className="lg:h-[30vw] lg:w-[42vw] md:w-[38vw] ">
            <Lottie options={defaultOptions} />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Step3;
