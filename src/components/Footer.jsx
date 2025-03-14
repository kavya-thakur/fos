import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="">
      <div className=" mx-auto  bg-black pt-10 pb-4">
        <nav className="flex md:flex-row flex-col justify-center items-center gap-4 text-white/50">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/show">Show</Link>
          <Link to="/services">Services</Link>
        </nav>
        <h3 className="text-white/60 w-full flex justify-center mt-4 text-sm">2025 Your company, Inc. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
