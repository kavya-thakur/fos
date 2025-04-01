import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workimage from "../assets/workmockup.jpeg";
import miss from "../assets/miss.png";
import Testimonials from "./Testimonials";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const missionRef = useRef(null);
  const missionImgRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Work Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );

    // Mission Section Animation
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 85%",
        },
      }
    );

    // Mission Image Animation
    gsap.fromTo(
      missionImgRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionImgRef.current,
          start: "top 85%",
        },
      }
    );

    // CTA Section Animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="bg-neutral-950 mx-auto">
        <div className="container pt-20 mx-auto px-4">
          <div className="subheading text-white pt-15 mx-auto">
            <h2
              ref={headingRef}
              className="capitalize text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold text-start"
            >
              Passionate About Design. <br />
              <span className="text-purple-500">Powered</span> by Innovation
            </h2>

            <div ref={imageRef} className="mt-10 bg-center">
              <img
                className="rounded-xl bg-cover"
                src={workimage}
                alt="Work Mockup"
              />
            </div>
          </div>

          <div className="md:flex mt-40 md:justify-between md:items-center md:px-20 gap-10">
            <div ref={missionImgRef} className="hidden md:block">
              <img
                className="rounded-xl md:w-full lg:w-[500px]"
                src={miss}
                alt="Mission"
              />
            </div>
            <div
              ref={missionRef}
              className="subheading2 text-white md:py-[15vh] lg:w-1/2"
            >
              <h2 className="capitalize text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold">
                Our <span className="text-purple-500">Mission</span>
              </h2>
              <p className="font-light md:text-xl text-white/70">
                Our mission is to empower businesses with exceptional web
                solutions that enhance digital presence, improve efficiency, and
                drive growth. We believe in innovation, collaboration, and
                delivering high-quality results that exceed expectations.
              </p>
            </div>
          </div>

          <div ref={ctaRef} className="my-20">
            <div className="project bg-gradient-to-r from-[#3e187a] to-[#994ecc] rounded-xl h-[60vh] flex flex-col items-center text-center mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-[5vw] mt-20 font-extrabold text-[#E3DAC9]">
                Let’s Build Something Amazing!
              </h1>
              <button className="px-6 py-2 lg:px-10 lg:py-5 lg:text-[1vw] text-[14px] text-black font-md bg-[#E3DAC9] rounded-full mt-10 md:mt-20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      <Testimonials />
      </section>
    </>
  );
};

export default About;
