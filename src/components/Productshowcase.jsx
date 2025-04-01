// import React, { useRef } from "react";
// import productimage from "../assets/product-image.png";
// import { GridBackgroundDemo } from "./Background";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const Productshowcase = () => {
//   const containerRef = useRef(null);
//   useGSAP(
//     () => {
//       let phead = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".product",
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 2, // Reduced scrub for better smoothness
//         },
//       });

//       phead
//         .from(".producth", {
//           y: 90,
//           duration: 1,
//           ease: "power1.inout",
//         })
//         .from(".ppara", {
//           y: 100,
//           duration: 1,
//           ease: "power1.inout",
//         });
//     },
//     { scope: containerRef }
//   );
//   return (
//     <>
//       {" "}
//       <section
//         ref={containerRef}
//         className="relative  bg-black py-24 lg:pt-[35vw]"
//       >
//         <GridBackgroundDemo />
//         <div className=" z-10  inset-0 flex items-center justify-center flex-col absolute container mx-auto px-4 gap-4 md:gap-10 overflow-hidden">
//           <div className="flex justify-center mb-4">
//             <div className="text-white/90 inline-flex border border-[#FFFF]/30 px-3 py-1 rounded-lg tracking-tight ">
//               Boost your productivity
//             </div>
//           </div>
//           <div className="product overflow-hidden">
//             <h2 className="producth text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tighter text-white/70 capitalize leading-none will-change-transform">
//               A more effective way
//               <br />
//               <span className="text-purple-500">track</span> progress
//             </h2>
//           </div>
//           <div className="overflow-hidden">
//             <p className="ppara text-center text-xs text-white/80 md:text-lg font-extralight">
//               Effortlessly turn your ideas into a fully functional, responsive,
//               <br />
//               Saas website in minutes with beautiful design.
//             </p>
//           </div>
//           <img
//             src={productimage}
//             className="img lg:w-[85%] lg:mx-auto"
//             alt="Product"
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Productshowcase;
import React, { useRef } from "react";
import productimage from "../assets/product-image.png";
import { GridBackgroundDemo } from "./Background";

const Productshowcase = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-black pt-24 lg:pt-[35vw]"
    >
      <GridBackgroundDemo />
      <div className="z-10 inset-0 flex items-center justify-center flex-col absolute container mx-auto px-4 gap-4 md:gap-10 overflow-hidden">
        {/* Highlight Badge */}
        <div className="flex justify-center mb-4">
          <div className="animate-item text-white/80 inline-flex border border-white/30 px-3 py-1 rounded-lg tracking-tight">
            Boost your productivity
          </div>
        </div>

        {/* Heading */}
        <div className="animate-item text-center font-extrabold text-4xl md:text-4xl lg:text-6xl tracking-tighter text-white/70 capitalize leading-none">
          A more effective way <br />
          <span className="text-purple-500">track</span> progress
        </div>

        {/* Paragraph */}
        <p className="animate-item text-center text-sm text-white/80 md:text-md ">
          Effortlessly turn your ideas into a fully functional, responsive, SaaS
          website in minutes with beautiful design.
        </p>

        {/* Image */}
        <img
          src={productimage}
          className="animate-item lg:w-[85%] lg:mx-auto"
          alt="Product"
        />
      </div>
    </section>
  );
};

export default Productshowcase;
