
import React, { useEffect } from "react";
import { FaChevronRight, FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const CategoryCard = ({ title, description, items, whyChooseUs }) => {

  useEffect(() => {
    // GSAP animation for the Title (letter by letter reveal)
    gsap.fromTo(
      ".title",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
        stagger: 0.1,
        // Animate letter by letter
        text: { value: title, type: "chars" }
      }
    );

    // Description fade-in with subtle effect
    gsap.fromTo(
      ".description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Why Choose Us section animation
    gsap.fromTo(
      ".why-choose-us",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      ".why-choose-us-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        delay: 1.5
      }
    );

    // Items fade-in and slight scaling effect (staggered)
    gsap.fromTo(
      ".offer-list .item",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        delay: 1.2
      }
    );

    // Scroll-triggered animations for items
    ScrollTrigger.batch(".item", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6 }),
      start: "top 80%",
      toggleActions: "play none none none",
    });
  }, [title]);

  return (
    <div className="my-20 px-4 md:px-12 lg:px-20 ">
      <div className="text-white">
        <h2 className="title text-4xl md:text-5xl font-extrabold mb-6 text-[#d1d1d6]">
          {title}
        </h2>
        <p className="description text-neutral-300 mb-8 md:text-lg leading-relaxed">
          {description}
        </p>

        <h3 className="why-choose-us text-2xl md:text-3xl font-semibold mb-6 mt-10 text-[#d1d1d6]">
          Why Choose Us?
        </h3>
        <div className="why-choose-us">
          {whyChooseUs.map((point, index) => (
            <div
              key={index}
              className="why-choose-us-item flex items-center mb-4 text-neutral-300 text-lg"
            >
              <FaCheckCircle className="text-[#f8a700] mr-3" />
              <p>{point}</p>
            </div>
          ))}
        </div>

        <h3 className="flex items-center gap-3 text-2xl text-[#f8a700] mt-10 mb-6 font-semibold">
          We Offer <FaChevronRight className="text-xl" />
        </h3>
        <div className="offer-list grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="item bg-[#333] p-4 rounded-lg hover:bg-[#444] transition duration-300 text-center font-medium text-lg shadow-lg border border-[#444]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
