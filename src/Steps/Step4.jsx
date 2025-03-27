

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Step4 = () => {
  const step4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let step4 = gsap.timeline({
        scrollTrigger: {
          trigger: step4Ref.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none", // Stops re-rendering
        },
      });

      step4.fromTo(
        [".step4h", ".step4subheading"],
        { opacity: 0, y: 50, willChange: "transform, opacity" }, // Hardware-accelerated
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.inOut", stagger: 0.1 }
      );
    }, step4Ref);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <section
      ref={step4Ref}
      className="sticky top-0 bg-[#750E21] h-screen w-full md:max-h-[1300px] rounded-t-4xl overflow-hidden"
    >
      {/* Optimized Shape Animation */}
      <div className="absolute flex justify-center items-center w-[40vw] h-[40vw] top-[60%] right-0 md:top-[30%] lg:-right-80">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-36 w-36 absolute bg-white/80 rounded-full blur-[10px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-36 w-36 absolute bg-white/30 rounded-full blur-[20px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-white capitalize pt-20 flex flex-col md:flex-row md:gap-[15vw] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div>
            <div className="head4">
              <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
                {"Step-Four".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block step4h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text"
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="step4subheading overflow-hidden mt-5 mb-10">
              <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight">
                Project Completion
              </h2>
            </div>
            <p className="bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[1.8vw] md:w-[70%]">
              The assigned developer will complete your project and notify you
              once the work is done, ready for delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4;

