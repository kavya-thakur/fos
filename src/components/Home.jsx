import React, { useEffect, useState } from "react";
import { GridBackgroundDemo } from "./Background";
import { motion } from "framer-motion";
import Stepwrapper from "./Stepwrapper";
import Productshowcase from "./Productshowcase";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { useRef } from "react";

const Home = () => {
  const words = ["Frontend", "Backend", "DevOps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through the words
    }, 1800); // Change the word every 4 seconds (adjust this as needed)

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, []);

  //  animatino for input
  const phrases = [
    "EEnter your details  ",

    "WWrite requirements  ",
    "EEnter your project   ",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Ref to track the typing progress without causing re-renders
  const typingProgress = useRef(0);

  useEffect(() => {
    const phrase = phrases[index]; // Get the current phrase
    typingProgress.current = 0; // Reset typing progress for each phrase
    setCurrentText(""); // Reset the current text before typing

    const typingInterval = setInterval(() => {
      // Add one character at a time to the text
      setCurrentText((prev) => prev + phrase[typingProgress.current]);
      typingProgress.current++;

      if (typingProgress.current === phrase.length) {
        clearInterval(typingInterval); // Stop typing once the phrase is fully typed
      }
    }, 150); // Adjust typing speed here (150ms)

    // Cycle to the next phrase after 3 seconds (when typing is done)
    const phraseChangeInterval = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length); // Cycle through the phrases
    }, 3000); // Change phrase after 3 seconds

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle the cursor visibility
    }, 500); // Cursor blink speed

    // Cleanup the intervals on component unmount or index change
    return () => {
      clearInterval(cursorInterval);
      clearTimeout(phraseChangeInterval);
      clearInterval(typingInterval);
    };
  }, [index]); // Runs when the index changes (i.e., phrase changes)
  return (
    <>
      <section>
        <div className="min-h-screen w-full relative overflow-hidden">
          <GridBackgroundDemo />
          <div className="absolute bg-purple-600 w-[90vw] h-[120vw] md:max-w-[56vw] md:h-[56vw] -right-5 md:right-40 blur-[10px] md:blur-[30px] md:rounded-t-[50%] rounded-t-[600%] top-120 md:top-180 2xl:top-[36vw] 2xl:right-110">
            {/* Jelly Shape 1 */}
            <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-[#9b4dff] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
            {/* Jelly Shape 2 */}
            <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#6a1b9a] rounded-full blur-[20px] lg:h-[40vw] lg:w-[40vw]"></div>
          </div>
          <div className="container absolute z-10  inset-0 mx-auto px-4 ">
            <div className="pt-[40vw] md:pt-[40vw] lg:pt-[10vw] 2xl:max-pt-[40vw]">
              <div className="lg:max-w-[80%] md:max-w-[70%] flex justify-center items-center mx-auto">
                <h1 className="bg-gradient-to-br from-slate-50 to-zinc-400 bg-clip-text text-transparent font-semibold text-[11vw] md:text-[6.5vw] text-center tracking-tight leading-none ">
                  One search bar for your projects
                </h1>
              </div>

              <div className="flex justify-center items-center gap-2 md:gap-4 mt-[10vw] md:mt-[3vw]">
                {/* Static "We offer" text */}
                <h1 className="text-4xl md:text-5xl 2xl:text-[3.4vw] font-semibold text-white/70">
                  We offer
                </h1>

                {/* Animated word */}
                <motion.div
                  key={words[currentWordIndex]} // Key to force re-render when word changes
                  initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and 30px below
                  animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                  exit={{ opacity: 0, y: -30 }} // Exit state, fade out and move up
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className=" font-medium text-4xl  2xl:text-[3.4vw] md:text-5xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent tracking-tight">
                    {words[currentWordIndex]}
                  </span>
                </motion.div>
              </div>
              {/* end  */}
              <div className="relative mt-[10vw] md:mt-[3vw] md:w-1/2 flex justify-center items-center mx-auto bg-black border border-white/20 text-white rounded-full 2xl:px-[2vw] 2xl:py-[0.5vw]">
                {/* <input
                  type="text"
                  placeholder="Enter you dets"
                  className="px-3 py-3 w-full 2xl:text-xl outline-none"

                /> */}
                <motion.input
                  type="text"
                  className="px-3 py-3 w-full 2xl:text-xl outline-none"
                  placeholder={`${currentText}${cursorVisible ? "|" : ""}`} // Add blinking cursor
                  // readOnly
                  autoFocus
                />
                <button className="text-black text-sm absolute top-1/2 -translate-y-1/2 right-2 px-4 py-2 font-light bg-white rounded-full 2xl:px-[2vw] 2xl:py-[0.8vw] 2xl:text-[0.9vw]">
                  Search
                </button>
              </div>
              <div className="text-white/70 absolute bottom-25 md:bottom-35 2xl:bottom-10 right-1/2 translate-x-1/2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly moved down
                  animate={{
                    opacity: [0, 1, 0], // Animate from 0 (hidden) to 1 (visible) and back to 0
                    y: [20, 0, -20], // Animate from below to normal position, then slightly up
                  }}
                  transition={{
                    duration: 1, // Duration for one full cycle (fade in and out)
                    ease: "easeInOut", // Smooth easing function
                    repeat: Infinity, // Repeat indefinitely
                    repeatDelay: 0.5, // Delay between repeats, effectively creating the 1 second loop
                  }}
                  className="text-[5vw] md:text-[2vw] text-center leading-none tracking-tight"
                >
                  Scroll me to see the steps
                </motion.h2>
              </div>
            </div>
          </div>
          {/* gradient shape */}
        </div>
      </section>
      <Stepwrapper />
      <Productshowcase />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
