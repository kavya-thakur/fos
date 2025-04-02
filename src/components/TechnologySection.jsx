import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import dotnet from "../assets/dotnet.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import python from "../assets/python.svg";
import reactjs from "../assets/reactjs.svg";
import nextjs from "../assets/nextjs.svg";
import angular from "../assets/angular.svg";
import vue from "../assets/vue.svg";
import postgres from "../assets/postgresql.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import flutter from "../assets/flutter.svg";
import reactnative from "../assets/reactnative.svg";
import azure from "../assets/azure.svg";
import aws from "../assets/aws.svg";
import devops from "../assets/devops.svg";
import wordpress from "../assets/wordpress.svg";

const TechnologySection = () => {
  const images = [
    { id: 1, title: "Backend", img: [dotnet, nodejs, php, python] },
    { id: 2, title: "Frontend", img: [angular, reactjs, nextjs, dotnet, vue] },
    { id: 3, title: "Database", img: [mysql, mongodb, postgres] },
    { id: 4, title: "Mobile", img: [flutter, reactnative] },
    { id: 5, title: "CMS", img: [wordpress] },
    { id: 6, title: "Info and Cloud", img: [azure, aws, devops] },
  ];

  const [activeFeature, setActiveFeature] = useState(images[0]);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Initial reveal animation
    gsap.fromTo(
      ".tech-icons div",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: "power2.out" }
    );
  }, [activeFeature]);

  return (
    <div className="max-w-7xl px-4 mx-auto py-20">
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl text-blue-50 mb-2 text-center md:text-3xl border-b-4 border-purple-500 w-fit font-semibold">Technologies</h2>
      <h2 className="text-3xl md:text-5xl text-center text-white font-semibold mb-5 ">Technologies we craft solution with</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setActiveFeature(image)}
            className={`my-2 px-4 py-2 rounded-lg transition font-md outline-none ${
              activeFeature.id === image.id
                ? "bg-[#3e187a] bg-gradient-to-br from-[#3e187a] to-[#994ecc] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-purple-400"
            }`}
          >
            {image.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-10 tech-icons">
        {activeFeature.img.map((icon, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="bg-neutral-900 p-5 rounded-lg"
          >
            <img src={icon} alt="" className="w-50 h-40 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
