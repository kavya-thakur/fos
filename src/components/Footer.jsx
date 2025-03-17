import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer 
    
    className="min-h-screen bg-black pt-10">
      <div className="container mx-auto px-4">
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
