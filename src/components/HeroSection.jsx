import React from "react";
import { Link } from "react-router-dom";
import cylinderimage from "../assets/cylinder.png";
import noodleimage from "../assets/noodle.png";
import heroimage from "../assets/cog.png";
import Logoticker from "./Logoticker";
import Productshowcase from "./Productshowcase";
import Testimonials from "./Testimonials";
import Calltoaction from "./Calltoaction";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <>
      <section className=" overflow-hidden pt-2 pb-20 md:mt-5 md:pb-10 lg:pb-10 lg:py-0 lg:mt-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_103%)] overflow-x-clip rounded-b-3xl">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center">
            <div className=" text-center md:text-left lg:px-10">
              <h1 className="text-6xl md:text-7xl lg:text-[110px] md:w-[52%] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 mb-4">
                Pathway to productivity
              </h1>
              <p className=" text-[#010D3E] mb-8 md:w-1/2">
                {" "}
                we offer expert frontend, backend, and DevOps services. Simply
                submit your project details to get started and we'll connect
                with you to discuss how we can help
              </p>
              <div className="md:w-1/2">
                <input
                  type="text"
                  placeholder="Write the Requirement"
                  className="w-full px-4 py-2 border border-[#010D3E]/60 rounded mb-5"
                />
                <span>
                  <Link to={"/description"}>
                    <button className="w-full px-4 py-2 rounded-md bg-black text-white text-sm">
                      Submit
                    </button>
                  </Link>
                </span>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:h-[648px] md:flex-1 relative ">
              <img
                className="md:absolute  md:h-full md:w-auto md:max-w-none md:-left-80 lg:-left-120 "
                src={heroimage}
                alt="cogimage"
              />
              <img
                src={cylinderimage}
                width={220}
                height={220}
                className="hidden md:block md:-left-134 -top-8 lg:-top-5 -left-32 md:absolute"
                alt=""
              />
              <img
                src={noodleimage}
                width={220}
                className="hidden lg:block top-[400px] md:block md:-left-0  left-[448px] md:absolute rotate-[30deg]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Logoticker />
      <Productshowcase />
      <Testimonials />
      <Calltoaction />
      <Footer />
    </>
  );
};

export default HeroSection;
