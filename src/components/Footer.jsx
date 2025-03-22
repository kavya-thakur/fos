

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null); // Scoped reference for animation

  useGSAP(
    () => {
      let ftop = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 4, // Slower scrub for smoother animation
        },
      });

      ftop
        .from(".footerp", {
          y: 100,
          opacity: 0,
          duration: 2, // Slower reveal
          ease: "expo.inOut",
          stagger: 0.4, // Delays each line for better flow
        })
        .from(
          ".fheading",
          {
            y: -100,
            rotate: -30,
            opacity: 0,
            duration: 1.3, // Increased time to feel smoother
            ease: "power1.inOut",
            stagger: 0.25,
          },
          "-=1"
        )
        .from(".menus", {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      ("-=2");
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="footer w-full relative mx-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-white overflow-hidden">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            {"fosnix".split("").map((char, index) => (
              <span key={index} className="inline-block fheading">
                {char}
              </span>
            ))}
          </h1>
          <div className="overflow-hidden">
            {[
              "We are here to make things",
              "happen just trust",
              "the process",
            ].map((line, i) => (
              <p
                key={i}
                className="footerp text-3xl md:text-[5vw] lg:text-5xl capitalize text-purple-400"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Menus */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 mt-8 overflow-hidden">
          <div className="menus border-t-1 border-gray-400 w-full lg:w-1/2">
            <div className="text-white/80 flex flex-col gap-3 mt-5 md:text-[3.5vw] lg:text-xl lg:gap-8">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
            </div>
          </div>
          <div className="menus border-t-1 border-gray-400 w-full lg:w-1/2">
            <div className="text-white/80 flex flex-col gap-3 underline mt-5 md:text-[3.5vw] lg:text-xl lg:gap-8">
              <Link to="/linkedin">LinkedIn</Link>
              <Link to="/instagram">Instagram</Link>
              <Link to="/x">X</Link>
              <Link to="/facebook">Facebook</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 md:mt-8 border-t-1 border-gray-400">
          <div className="flex mt-3 justify-center gap-10 text-white uppercase text-xs md:text-md md:py-5">
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>
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
