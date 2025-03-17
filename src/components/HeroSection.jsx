import Productshowcase from "./Productshowcase";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import starbg from "../assets/stars.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marque from "./Marque";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Stepwrapper from "./Stepwrapper";
const HeroSection = () => {
  // for cursor animation

  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
  useGSAP(() => {
    const mouseMove = (e) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    gsap.to(".cursor", {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.8,
      ease: "power1",
    });
  }, [mousePosition]);
  // for input animation

  const [placeholder, setPlaceholder] = useState("Loading...");
  const placeholders = [
    "Enter project dets",
    "write your requirements",
    "Search something",
    "What’s your query?",
    "Write a message",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 3000); // Change placeholder every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section
        className="h-screen bg-black overflow-hidden relative"
        style={{
          backgroundImage: `url(${starbg})`,
          backgroundSize: "cover",
        }}
      >
        {/* custom cursor */}
        {/* <div className="cursor h-6 w-6 rounded-full bg-white/80 fixed z-20"></div> */}
        {/* <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div> */}

        {/* {start planet } */}
        <div className="absolute  rounded-full h-74 w-74 md:h-96 md:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
          {/* ring one  */}
          <motion.div
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
            className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-20"
          >
            <div className="h-2 w-2 bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-2 w-2 bg-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-5 w-5 bg-white absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </motion.div>
          {/* ring 2 */}
          <motion.div
            animate={{
              rotate: "-1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 90,
            }}
            className="rounded-full h-[444px] w-[444px] md:h-[780px] md:w-[780px] absolute border-dashed border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          ></motion.div>
          {/* ring 3 */}
          <motion.div
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
            className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          >
            <div className="h-2 w-2 bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-2 w-2 bg-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-5 w-5 bg-white absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </motion.div>
          {/* rings end  */}
          {/* wraper div  */}
          <div className="container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white relative">
            <div className="flex justify-center items-center">
              <h1 className="text-[20vw] md:text-[16vw] lg:text-[13vw]  font-semibold tracking-tighter text-white/80 text-center">
                Fosnix
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-md text-white/70 mt-5 lg:-mt-10 text-center text-sm "
            >
              We offer expert frontend, backend, and DevOps services Simply
              submit your project details to get started and we'll connect with
              you to discuss how we can help.
            </motion.p>
            <div className="w-full px-4 py-3 mt-5 bg-white/50 rounded-full absolute -bottom-30 flex justify-between">
              <input
                type="text"
                placeholder={placeholder}
                className=" "
              ></input>

              <Link to={"/description"}>
                <button className="px-4 py-2 rounded-full bg-white text-black text-sm absolute right-2 top-[5.6px] ">
                  Create
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stepwrapper />
      <Productshowcase />
      <Marque />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HeroSection;
