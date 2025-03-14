import React from "react";
import acmelogo from "../assets/logo-acme.png";
import quantumlog from "../assets/logo-quantum.png";
import echologo from "../assets/logo-echo.png";
import celestiallogo from "../assets/logo-celestial.png";
import pulselogo from "../assets/logo-pulse.png";
import apexlogo from "../assets/logo-apex.png";
import { motion } from "framer-motion";

const Logoticker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
          animate={{
            translateX:'-50%'
          }}
          transition={{
            duration:15,
            repeat:Infinity,
            ease:"linear",
            repeatType:"loop"
          }}
          className="flex gap-14 pr-14">
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

            {/* second set of images */}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Logoticker;
