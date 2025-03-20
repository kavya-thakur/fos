

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Footer = () => {
//   const [inView, setInView] = useState(false);
//   const footerRef = useRef(null);

//   // Intersection Observer setup
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setInView(true); // Set state to true when the footer comes into view
//         } else {
//           setInView(false); // Set state to false when the footer goes out of view
//         }
//       },
//       {
//         threshold: 0.4, // Trigger when 50% of the footer is in view
//       }
//     );

//     if (footerRef.current) {
//       observer.observe(footerRef.current); // Observe the footer element
//     }

//     // Cleanup the observer on component unmount
//     return () => {
//       if (footerRef.current) {
//         observer.unobserve(footerRef.current);
//       }
//     };
//   }, []);

//   // Split text into letters for animation
//   const splitText = (text) => {
//     return text.split("").map((char, index) => (
//       <motion.span
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{
//           opacity: inView ? 1 : 0,
//           y: inView ? 0 : 20,
//         }}
//         transition={{
//           delay: index * 0.1, // Stagger the animations
//           duration: 0.5,
//           ease: "easeOut",
//         }}
//       >
//         {char}
//       </motion.span>
//     ));
//   };

//   return (
//     <footer
//       ref={footerRef}
//       className="h-[80vh] md:h-[60vh] w-full relative mx-auto"
//       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
//     >
//       <motion.div
//         className="fixed bottom-0 w-full h-[80vh] md:h-[60vh] bg-white/90 pt-20"
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: inView ? 1 : 0,
//         }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <div className="container mx-auto px-4 bottom-0">
//           {/* Footer Content with Text Animation */}
//           <div className="footer-text text-black/90 pb-7">
//             <h3 className="text-5xl md:text-7xl">
//               {splitText("Fosnix")} {/* Split and animate each letter */}
//             </h3>
//             <p className="font-extralight md:text-3xl mt-4">
//               {splitText("We Provide Best Services")}{" "}
//               {/* Split and animate each letter */}
//             </p>
//           </div>

//           {/* Footer Links */}
//           <div className="footer-links flex items-center gap-10 pb-10">
//             <div className="flex flex-col font-extralight text-black/70 gap-5  md:text-3xl mt-12">
//               <Link className="">Home</Link>
//               <Link className="">About</Link>
//               <Link className="">Services</Link>
//               <Link className="">Show</Link>
//             </div>
//             <div className="flex flex-col font-extralight text-black/70 gap-5 underline md:text-3xl mt-12">
//               <Link className="">Instagram</Link>
//               <Link className="">Twitter</Link>
//               <Link className="">Facebook</Link>
//               <Link className="">LinkedIn</Link>
//             </div>
//           </div>

//           {/* Footer Bottom Text */}
//           <div className="absolute bottom-0">
//             <h1 className=" border-t-1 leading-none pt-5 border-black/50 text-black/80 w-full text-[34vw] md:text-[15vw]">
//               {splitText("Fosnix")} {/* Animate the footer text */}
//             </h1>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Set state to true when the footer comes into view
        } else {
          setInView(false); // Set state to false when the footer goes out of view
        }
      },
      {
        threshold: 0.4, // Trigger when 40% of the footer is in view
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Observe the footer element
    }

    // Cleanup the observer on component unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Split text into letters for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
        }}
        transition={{
          delay: index * 0.1, // Stagger the animations
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <footer
      ref={footerRef}
      className="h-[80vh] md:h-[60vh] w-full relative mx-auto"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div
        className="fixed bottom-0 w-full h-[80vh] md:h-[60vh] bg-white/90 pt-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 bottom-0">
          {/* Footer Content with Text Animation */}
          <div className="footer-text text-black/90 pb-7">
            <h3 className="text-5xl md:text-7xl">
              {splitText("Fosnix")} {/* Split and animate each letter */}
            </h3>
            <p className="font-extralight md:text-3xl mt-4">
              {splitText("We Provide Best Services")}{" "}
              {/* Split and animate each letter */}
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links flex items-center gap-10 pb-10">
            <div className="flex flex-col font-extralight text-black/70 gap-5 md:text-3xl mt-12">
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                }}
                transition={{
                  delay: 0.5, // Add a delay to start the link animation after text
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Link className="">{splitText("Home", 0)}</Link>
                <Link className="">{splitText("About", 0.3)}</Link>
                <Link className="">{splitText("Services", 0.6)}</Link>
                <Link className="">{splitText("Show", 0.9)}</Link>
              </motion.div>
            </div>

            <div className="flex flex-col font-extralight text-black/70 gap-5 underline md:text-3xl mt-12">
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                }}
                transition={{
                  delay: 0.5, // Add a delay to start the link animation after text
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Link className="">{splitText("Instagram", 1.2)}</Link>
                <Link className="">{splitText("Twitter", 1.5)}</Link>
                <Link className="">{splitText("Facebook", 1.8)}</Link>
                <Link className="">{splitText("LinkedIn", 2.1)}</Link>
              </motion.div>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="absolute bottom-0">
            <h1 className=" border-t-1 leading-none pt-5 border-black/50 text-black/80 w-full text-[34vw] md:text-[15vw]">
              {splitText("Fosnix")} {/* Animate the footer text */}
            </h1>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
