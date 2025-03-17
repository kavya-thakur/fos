import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="h-screen bg-black pt-10 relative overflow-hidden">
      {/* shapes animation start  */}
      <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] -top-[4%] -right-30 lg:-right-120 lg:-top-[20vw]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-[#9b4dff] rounded-full blur-[20px] lg:h-[30vw] lg:w-[30vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#6a1b9a] rounded-full blur-[20px] lg:h-[30vw] lg:w-[30vw]"></div>
      </div>
      {/* shapes animation ends  */}
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-white/90 pt-20 pb-5 ">
          <h1 className="flex flex-col text-5xl lg:text-6xl">
            <span>EYE-</span>
            <span>OPENING</span>
            <span>PRESENTATION</span>
          </h1>
          <div className="">
            <h1>WE ARE THE BEST</h1>
          </div>
          <div className="pt-10 flex flex-col gap-3 ">
            {" "}
            <h1 className="text-4xl ml-3">Socials</h1>
            <Link className="px-10 py-5 bg-neutral-600 rounded-full capitalize">
              Instagram
            </Link>
            <Link className="px-10 py-5 bg-neutral-600 rounded-full capitalize">
              twitter
            </Link>
            <Link className="px-10 py-5 bg-neutral-600 rounded-full capitalize">
              Facebook
            </Link>
            <Link className="px-10 py-5 bg-neutral-600 rounded-full capitalize">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
