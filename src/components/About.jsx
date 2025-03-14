import React from "react";
import Calltoaction from "./Calltoaction";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mt-23">
        <h1 className="text-4xl text-center md:text-7xl lg:text-[110px] md:w-[52%] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 mb-4">Welcome to Fosnix</h1>
        <p className=" text-[#010D3E] text-center mb-8 md:w-1/2">
          {" "}
          we offer expert frontend, backend, and DevOps services. Simply submit
          your project details to get started and we'll connect with you to
          discuss how we can help
        </p>
      </div>
      <Calltoaction />
      <Footer />
    </div>
  );
};

export default About;
