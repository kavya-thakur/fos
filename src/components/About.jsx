import React from "react";
import Calltoaction from "./Calltoaction";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center px-4 mt-23">
        <h1 className="text-4xl text-center md:text-7xl lg:text-[110px] md:w-[52%] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 mb-4">About Fosnix</h1>
        {/* <p className=" text-[#010D3E] text-center mb-8 md:w-1/2">
          {" "}
          we offer expert frontend, backend, and DevOps services. Simply submit
          your project details to get started and we'll connect with you to
          discuss how we can help
        </p> */}
        
        <p className=" text-[#010D3E] text-center mb-8 md:w-1/2">Let Fosnix help you unlock your business’s full potential. With our cutting-edge DevOps strategies and AWS cloud expertise, we design solutions that streamline operations, boost performance, and fuel innovation. From tailored automation to scalable infrastructure, we deliver everything you need to thrive in today’s competitive market. Partner with us and see the Fosnix advantage in action!</p>
      </div>
      <Calltoaction />
      <Footer />
    </div>
  );
};

export default About;
