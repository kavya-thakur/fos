import React from "react";
import acmelogo from "../assets/logo-acme.png";
import quantumlog from "../assets/logo-quantum.png";
import echologo from "../assets/logo-echo.png";
import celestiallogo from "../assets/logo-celestial.png";
import pulselogo from "../assets/logo-pulse.png";
import apexlogo from "../assets/logo-apex.png";

const Logoticker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <img src={acmelogo} className="h-8 w-auto " alt="acmelogo" />
            <img src={quantumlog} className="h-8 w-auto " alt="quantumlog" />
            <img src={echologo} className="h-8 w-auto " alt="echologo" />
            <img
              src={celestiallogo}
              className="h-8 w-auto "
              alt="celestiallogo"
            />
            <img src={pulselogo} className="h-8 w-auto " alt="pulselogo" />
            <img src={apexlogo} className="h-8 w-auto " alt="apexlogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logoticker;
