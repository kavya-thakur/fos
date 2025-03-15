import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Submit from "./components/Submit";
import About from "./components/About";
// import useLenis from "../src/useLenis";
import LoginPage from "./components/LoginPage";
import useLenis from "./hooks/useLenis";

// import Description from "./components/Description";

const App = () => {
  useLenis(); // Hook to programmatically navigate
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/description" element={<Description />} />
        <Route path="/submitted" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* <Description /> */}
    </div>
  );
};

export default App;
