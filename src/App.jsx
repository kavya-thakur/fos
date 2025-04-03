import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Submit from "./components/Submit";
import About from "./components/About";
import LoginPage from "./components/LoginPage";

import Home from "./components/Home";
import LocomotiveScrollProvider from "./utils/locomotive";

import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="">
      <LocomotiveScrollProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
          <Route path="/submitted" element={<Submit />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />{" "}
          {/* ✅ Dynamic route */}
        </Routes>
        <Testimonials/>
        <Footer />
      </LocomotiveScrollProvider>

      {/* <Description /> */}
    </div>
  );
};

export default App;
