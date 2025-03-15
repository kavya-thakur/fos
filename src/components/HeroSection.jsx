import Logoticker from "./Logoticker";
import Productshowcase from "./Productshowcase";
import Testimonials from "./Testimonials";
import Calltoaction from "./Calltoaction";
import Footer from "./Footer";
import starbg from "../assets/stars.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const constraintsRef = useRef(null);
  return (
    <>
      <section
        className="h-[712px]  md:h-[880px] flex items-center bg-black relative pt-28 overflow-hidden"
        style={{
          backgroundImage: `url(${starbg})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

        {/* {start planet } */}
        <div className="absolute bg-purple-500 rounded-full h-74 w-74 md:h-96 md:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
          {/* ring one  */}
          <motion.div
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
            className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-20"
          >
            <div className="h-2 w-2 bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-2 w-2 bg-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-5 w-5 bg-white absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </motion.div>
          {/* ring 2 */}
          <motion.div
            animate={{
              rotate: "-1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 90,
            }}
            className="rounded-full h-[444px] w-[444px] md:h-[780px] md:w-[780px] absolute border-dashed border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          ></motion.div>
          {/* ring 3 */}
          <motion.div
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
            className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          >
            <div className="h-2 w-2 bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-2 w-2 bg-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="h-5 w-5 bg-white absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </motion.div>
          {/* rings end  */}
          {/* wraper div  */}
          <div className="container mx-auto text-white h-screen w-full relative">
            <h2 className="rounded-full px-4 py-2 bg-white/60 text-black font-semibold w-fit absolute -top-13 text-sm -left-6">
              Version 2.0{" "}
            </h2>
            <div className="flex justify-center">
              <h1 className="text-[20vw] md:text-[16vw] lg:text-[13vw]  font-semibold tracking-tighter text-white/80 text-center">
                Fosnix
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-md text-white/70 mt-5 lg:-mt-10 text-center text-sm "
            >
              We offer expert frontend, backend, and DevOps services Simply
              submit your project details to get started and we'll connect with
              you to discuss how we can help.
            </motion.p>
            <motion.div
              ref={constraintsRef}
              className="mt-30 flex justify-center"
            >
              <Link to={'/description'}>
                <motion.button
                  dragConstraints={constraintsRef}
                  drag
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  className="px-4 py-2 bg-black/70 text-white/70 rounded-full "
                >
                  Create a project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <Map />
      <Logoticker />
      <Productshowcase />
      <Testimonials />
      {/* <ServicesSection /> */}
      <Calltoaction />
      <Footer />
    </>
  );
};

export default HeroSection;
