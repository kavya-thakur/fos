import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <header className="fixed left-0 right-0 z-20 top-0 text-white ">
      <div className=" backdrop-blur-sm container mx-auto px-4 lg:px-20 flex justify-between itmes-center py-4">
        <Link to={"/"}>
        <h1>Fosnix</h1>
        </Link>

        <div className="md:hidden">
          <button className="" onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <nav className="hidden md:flex md:gap-4 lg:gap-12 items-center text-white/90 font-extralight">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">
            <button className="px-5 py-2 lg:px-8 text-white/80 font-light border border-white/40 text-sm rounded-full tracking-wider flex itmes-center justify-center items-center">
              Log in
            </button>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/70 border border-black/30 p-4 m-1 rounded-xl mt-2 px-2">
          <div className="flex flex-col gap-2 text-black/70 ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/show">Show</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">
              <button className="px-5 py-2 lg:px-8 text-white text-sm bg-black/70 rounded-lg flex itmes-center justify-center items-center tracking-tighter w-full">
                Log in
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
