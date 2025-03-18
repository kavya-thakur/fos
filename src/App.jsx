// import React from "react";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import { Route, Routes } from "react-router-dom";
// import Description from "./components/Description";
// import Submit from "./components/Submit";
// import About from "./components/About";
// import LoginPage from "./components/LoginPage";

// import LocomotiveScroll from "locomotive-scroll";

// const App = () => {
//   const locomotiveScroll = new LocomotiveScroll();
//   console.log(locomotiveScroll)

//   return (
//     <div className="">
//       <Header />
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/description" element={<Description />} />
//         <Route path="/submitted" element={<Submit />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>

//       {/* <Description /> */}
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

// Import components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";
import Submit from "./components/Submit";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll when the component mounts
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container"), // Target your scroll container
      smooth: true, // Smooth scroll effect
    });

    console.log("Locomotive Scroll initialized:", scroll); // You should see this in the console if it works

    // Cleanup when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="scroll-container">
      <Header />
      <Routes>
        {/* <Route path="/" element={<HeroSection />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/submitted" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
