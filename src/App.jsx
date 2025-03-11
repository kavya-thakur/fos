import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Submit from "./components/Submit";
// import Description from "./components/Description";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/description" element={<Description />} />
        <Route path="/submitted" element={<Submit />} />
      </Routes>

      {/* <Description /> */}
    </div>
  );
};

export default App;
