import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import dropdownicon from "../assets/dropdown_icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For mobile dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle mobile dropdown

  return (
    <header className="max-w-7xl mx-auto fixed left-0 right-0 z-20 top-0 text-white">
      <div className="backdrop-blur-sm container mx-auto px-4 lg:px-20 flex justify-between items-center py-4">
        <Link to={"/"}>
          <h1>Fosnix</h1>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-4 lg:gap-12 items-center text-white/90 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          {/* Services Dropdown for Desktop */}
          <div className="group relative">
            <button className="btn cursor-pointer flex items-center gap-2">
              Services
              <img src={dropdownicon} className="h-4 cursor-pointer transition-all" alt="Dropdown Icon" />
            </button>

            {/* Desktop Dropdown Menu (Visible on Hover) */}
            <div className="max-w-7xl absolute hidden group-hover:block top-full -right-70 w-[80vw] bg-neutral-900 pt-7 shadow-lg py-4 z-50 rounded-xl h-96 mx-auto">
              <div className="flex justify-around text-white mx-auto items-center">
                {/* Training Column */}
                <div>
                  <Link to={"/category/training"}>
                    <h3 className="font-semibold text-white md:text-xl">Training</h3>
                  </Link>
                  <ul className="mt-4 space-y-7 font-medium text-neutral-400">
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Full Stack Development</li>
                    <li>Mobile App Development</li>
                  </ul>
                </div>

                {/* Development Column */}
                <div>
                  <Link to={"/category/development"}>
                    <h3 className="font-semibold text-white md:text-xl">Development</h3>
                  </Link>
                  <ul className="space-y-7 mt-4 font-medium text-neutral-400">
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>Full Stack</li>
                    <li>DevOps</li>
                  </ul>
                </div>

                {/* UI/UX Column */}
                <div>
                  <Link to={"/category/uiux"}>
                    <h3 className="font-semibold text-white md:text-xl">UI/UX</h3>
                  </Link>
                  <ul className="space-y-7 mt-4 font-medium text-neutral-400">
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Prototyping</li>
                    <li>Wireframing</li>
                  </ul>
                </div>

                {/* DevOps & Cloud Column */}
                <div>
                  <Link to={"/category/devops"}>
                    <h3 className="font-semibold text-white md:text-xl">DevOps & Cloud</h3>
                  </Link>
                  <ul className="space-y-7 mt-4 font-medium text-neutral-400">
                    <li>CI/CD</li>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to="/blog">Blogs</Link>

          <Link to="/login">
            <div className="flex items-center">
              <button className="lg:px-3 lg:py-1 bg-white text-black rounded-full flex items-center gap-3 justify-between text-sm">
                Log in
                <div className="bg-purple-300 px-3 flex justify-end py-3 rounded-full">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
