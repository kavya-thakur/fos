import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  // headind and paragraph animation logic
  const text = "fosnix"; // Heading text

  // Split the text into individual characters
  const characters = text.split("");

  const paragraph = `We are here to make things<br />happen just trust<br />the process`;

  // Split the paragraph by '<br />' to get individual lines
  const lines = paragraph.split("<br />");

  // heading and paragraph animation ends

  let ftop = gsap.timeline();
  useGSAP(() => {
    ftop.from(".footerp", {
      y: 140,
      duration: 1.6,
      ease: "expo.inOut",
      delay: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%", // When the top of the element reaches 80% of the viewport height
        end: "top 30%", // When the top of the element reaches 30% of the viewport height
        scrub: 3, // Smoothly scrubs the animation
        
      },
    });
    ftop.from(".fheading", {
      y: -120,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%", // When the top of the element reaches 80% of the viewport height
        end: "top 30%", // When the top of the element reaches 30% of the viewport height
        scrub: 3, // Smoothly scrubs the animation
      },
    });
    ftop.from(".menus", {
      opacity:0,
      x: 100,
      
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 30%", // When the top of the element reaches 80% of the viewport height
        end: "top 10%", // When the top of the element reaches 30% of the viewport height
        scrub: 3, // Smoothly scrubs the animation
      },
    });
  });

  return (
    <footer
      className="footer w-full relative mx-auto"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-white overflow-hidden">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl">
            {characters.map((char, index) => (
              <span
                key={index}
                className="inline-block fheading"
                style={{
                  animationDelay: `${index * 0.1}s`, // Stagger the animation for each character
                }}
              >
                {char}
              </span>
            ))}
          </h1>
          <div className="overflow-hidden">
            {lines.map((line, lineIndex) => (
              <p
                className="footerp text-3xl md:text-[5vw] lg:text-5xl capitalize text-purple-400"
                key={lineIndex}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 mt-8 overflow-hidden">
          <div className="menus border-t-1 border-gray-400 w-full lg:w-1/2">
            <div className=" text-white/80 flex flex-col gap-3 mt-5 md:text-[3.5vw] lg:text-xl lg:gap-8">
              <Link className="">Home</Link>
              <Link className="">About</Link>
              <Link className="">Services</Link>
              <Link className="">Work</Link>
            </div>
          </div>
          <div className="menus border-t-1 border-gray-400 w-full lg:w-1/2">
            <div className=" text-white/80 flex flex-col gap-3 underline mt-5 md:text-[3.5vw] lg:text-xl lg:gap-8">
              <Link className="">LinkedIn</Link>
              <Link className="">Instagram</Link>
              <Link className="">X</Link>
              <Link className="">Facebook</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center gap-10 text-white uppercase text-xs mt-6 md:mt-8 border-t-1 border-gray-400 md:text-md md:py-5">
            <h3 className="mt-3 md:mt-0">Terms & Conditions</h3>
            <h3 className="mt-3 md:mt-0">Privacy Policy</h3>
          </div>
          <div className="text-white flex justify-center pt-2 text-xs md:text-md">
            @2025 Rightdata All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
