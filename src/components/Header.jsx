import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo.svg'
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <header className="fixed left-0 right-0 z-20 top-0 text-white ">
      <div className=" backdrop-blur-sm container mx-auto px-4 lg:px-20 flex justify-between itmes-center py-4 border-b-1 border-white/30">
        
         
            <img  width={40} height={40}  src={logo} className="border border-white/30 rounded-xl text-white fill-current" alt="hhehe" />
     
        
        <div className="md:hidden">
          <button className="" onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            {/* <RxHamburgerMenu className="h-5 w-5" /> */}
          </button>
        </div>

        <nav className="hidden  md:flex md:gap-4 lg:gap-12 items-center text-white/60">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/show">Show</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">
            <button className="px-5 py-2 lg:px-8 text-white text-sm bg-black/70 rounded-lg flex itmes-center justify-center items-center tracking-tighter">
              Log in
            </button>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden  backdrop-blur-md border p-4 m-1 rounded-xl mt-2 ">
          <div className="flex flex-col gap-2 text-white/70 ">
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
