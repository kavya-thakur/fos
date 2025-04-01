import React, { useEffect, useState } from "react";
import { GridBackgroundDemo } from "./Background";
import { motion } from "framer-motion";
import Stepwrapper from "./Stepwrapper";
import Productshowcase from "./Productshowcase";
import Testimonials from "./Testimonials";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Features from "./Features";
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

  // div size increase
  const [isClicked, setIsClicked] = useState(false); // State to track click

  const handleDivClick = () => {
    setIsClicked(!isClicked); // Toggle the click state
  };
  return (
    <>
      <section>
        <div className="relative overflow-hidden">
          <GridBackgroundDemo />

          <div className="container absolute z-10  inset-0 mx-auto px-4 ">
            <div className="pt-[40vw] md:pt-[40vw] lg:pt-[10vw] 2xl:max-pt-[40vw]">
              <div className="lg:max-w-[80%] md:max-w-[70%] flex justify-center items-center mx-auto">
                <h1 className="bg-gradient-to-br from-slate-50 to-zinc-400 bg-clip-text text-transparent font-extrabold text-[11vw] md:text-[6.5vw] text-center tracking-tight leading-none ">
                  One{" "}
                  <span className="bg-[linear-gradient(316deg,#3e187a_0%,#994ecc_74%)] text-transparent bg-clip-text">
                    search
                  </span>{" "}
                  bar for your projects
                </h1>
              </div>

              <div className="flex justify-center items-center gap-2 md:gap-4 mt-[10vw] md:mt-[3vw]">
                {/* Static "We offer" text */}
                <h1 className="text-3xl md:text-5xl 2xl:text-[3.4vw] font-extrabold text-white/70 tracking-tighter ">
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
                  <span className=" font-medium text-3xl  2xl:text-[3.4vw] md:text-5xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent tracking-tighter ">
                    {words[currentWordIndex]}
                  </span>
                </motion.div>
              </div>
              {/* end  */}
              <div
                onClick={handleDivClick} // Handle the click event
                className={`relative mt-[10vw] md:mt-[3vw] md:w-1/2 flex justify-center items-center mx-auto bg-black border border-white/20 text-white rounded-full 2xl:px-[2vw] 2xl:py-[0.5vw] transition-all duration-300 `}
              >
                <motion.input
                  type="text"
                  className="px-3 py-3 w-[100%] 2xl:text-xl outline-none "
                  placeholder={`${currentText}${cursorVisible ? "|" : ""}`} // Add blinking cursor
                  autoFocus
                />
                <Link to={"/description"}>
                  <button className="text-black text-sm absolute top-1/2 -translate-y-1/2 right-2 px-4 py-2 font-light bg-white rounded-full 2xl:px-[2vw] 2xl:py-[0.8vw] 2xl:text-[0.9vw]">
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* gradient shape */}
        </div>

        {/* login page  */}
      </section>
      <Stepwrapper />
      <Productshowcase />
      <Features/>
      <Testimonials />
      <div className="bg-[#3e187a] bg-gradient-to-br from-[#3e187a] to-[#994ecc] text-white px-10 md:py-22 py-8 text-center flex flex-col gap-5 rounded-2xl my-10 md:mb-40 max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <h2 className="text-[2rem] md:text-[3.4rem] leading-none font-extrabold text-[#F5F7F8] lg:text-[4rem]">
            Learn More about fosnix{" "}
          </h2>
          <p className="md:text-[1.2rem] lg:text-[1.5rem]">Let’s bring your vision to life—efficiently and flawlessly.</p>
        </div>
        <div className="flex justify-center md:pt-5">
          <button className="px-5 py-2 lg:px-7 lg:py-3 lg:text-lg bg-white text-black rounded-full flex items-center gap-5 justify-between text-sm">Explore More <div className="bg-purple-300 px-3 py-3 lg:px-5 lg:py-5  rounded-full"><FaArrowRight /></div> </button>
        </div>
      </div>
    </>
  );
};

export default Home;
