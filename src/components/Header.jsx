import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <header className="backdrop-blur-sm sticky z-20 top-0">
      <div className="container mx-auto px-4 lg:px-20 flex justify-between itmes-center py-4 ">
        <span>
          <Link to={"/"}>
            <h1>Fosnix</h1>
          </Link>
        </span>
        <div className="md:hidden">
          <RxHamburgerMenu className="h-5 w-5" />
        </div>
        <nav className="hidden  md:flex md:gap-4 lg:gap-12 items-center text-black/60">
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
    </header>
  );
};

export default Header;
