import { motion } from "framer-motion";
// import Lottie from "react-lottie";
import create from "../assets/createe.json";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Step1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: create, // JSON file imported from LottieFiles
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
    },
  };
  useGSAP(() => {
    let step1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".head",
        start: "top 80%",
        end: "top 30%",
        scrub: 2, // Slower scrub for smoother animation
      },
    });
    step1
      .from(".steph", {
        y: -100,
        opacity: 0,
        duration: 1.3, // Increased time to feel smoother
        ease: "power1.inOut",
        stagger: 0.2,
      })
      .from(".step1subheading", {
        y: 100,
        opacity: 0,
        duration: 1.3, // Increased time to feel smoother
        ease: "power1.inOut",
      });
  });
  return (
    <motion.section className="sticky top-0  h-screen lg:max-h-[1300px] w-full rounded-t-2xl overflow-hidden">
      {/* spapes animation  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 lg:top-[35%]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-[#9b4dff] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#6a1b9a] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
      </div>
      {/* </div> */}
      {/* shapes animation end  */}
      <div className="container mx-auto px-4 pt-20 md:pt-0 ">
        <div className="text-white capitalize flex flex-col md:flex-row md:gap-[20vw] overflow-hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
          <div className="">
            <div className="head">
              <h1 className=" text-6xl md:text-[7.5vw] tracking-tighter font-light overflow-hidden ">
                {"Step-One".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block steph bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text "
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="overflow-hidden mt-5 mb-10 ">
              <h2 className=" step1subheading bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-5xl tracking-tight pb-4 md:text-6xl ">
                Create and submit project
              </h2>
            </div>
            <p className=" bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[1.6vw] md:w-[70%]">
              Click on the 'Create Project' button, fill out the necessary
              details of your project, and submit the form for review.
            </p>
          </div>
          {/* <div className="md:h-[20vw] md:w-[50vw] lg:h-[30vw] lg:w-[40vw]">
            <Lottie  options={defaultOptions} />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Step1;
