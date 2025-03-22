// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// // import Lottie from "react-lottie";
// import support from "../assets/support.json";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const Step2 = () => {
//   // const defaultOptions = {
//   //   loop: true,
//   //   autoplay: true, // Animation will autoplay
//   //   animationData: support, // JSON file imported from LottieFiles
//   //   rendererSettings: {
//   //     preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
//   //   },
//   // };
//   const step2 = useRef()
//   useGSAP(() => {
//     let step2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".head2",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 2, // Slower scrub for smoother animation
//       },
//     });
//     step2
//       .from(".step2h", {
//         y: -100,
//         opacity: 0,
//         duration: 1.3, // Increased time to feel smoother
//         ease: "power1.inOut",
//         stagger: 0.2,
//       })
//       .from(".step2subheading", {
//         y: 100,
//         opacity: 0,
//         duration: 1.3, // Increased time to feel smoother
//         ease: "power1.inOut",
//       });
//   } , {scope: step2});
//   return (
//     <motion.section ref={step2} className="sticky top-0 bg-[#522258] h-screen md:max-h-[1300px] w-full rounded-t-4xl overflow-hidden">
//       {/* shape animation */}
//       <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[50vw] lg:top-[20vw]">
//         {/* Jelly Shape 1 */}
//         <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-white/50 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
//         {/* Jelly Shape 2 */}
//         <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-[#d21bdcbd] rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
//       </div>
//       {/* shape aniamtion ends */}
//       <div className="container mx-auto px-4 pt-20 md:pt-0 mt-14  ">
//         <div className="text-white capitalize flex flex-col md:flex-row md:gap-[20vw] overflow-hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ">
//           <div className="text-black capitalize">
//             <div className="head2">
//               <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
//                 {"Step-Two".split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block step2h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text "
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </h1>
//             </div>
//             <div className="step2subheading overflow-hidden mt-5 mb-10 ">
//               <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl  tracking-tight">
//                 Dedicated Support
//               </h2>
//             </div>
//             <p className=" text-white/60 text-lg lg:text-[1.6vw] md:w-[70%]">
//               You will be assigned a dedicated point of contact to discuss the
//               details of your project, ensuring all aspects and requirements are
//               fully understood and addressed.
//             </p>
//           </div>
//           {/* <div className="md:w-[40vw] md:h-[30vw]">
//             <Lottie options={defaultOptions} />
//           </div> */}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Step2;
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Step2 = () => {
  const step2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let step2 = gsap.timeline({
        scrollTrigger: {
          trigger: step2Ref.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none", // No re-renders
        },
      });

      step2.fromTo(
        [".step2h", ".step2subheading"],
        { opacity: 0, y: 50, willChange: "transform, opacity" },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      );
    }, step2Ref);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <motion.section
      ref={step2Ref}
      className="sticky top-0 bg-[#522258] h-screen md:max-h-[1300px] w-full rounded-t-4xl overflow-hidden"
    >
      {/* Optimized Shape Animation */}
      <div className="absolute flex justify-center items-center w-[40vw] h-[40vw] top-[50%] right-0 md:top-[40%] lg:top-[30%]">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-36 w-36 absolute bg-white/50 rounded-full blur-[10px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-36 w-36 absolute bg-[#d21bdcbd] rounded-full blur-[20px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0 mt-14">
        <div className="text-white capitalize flex flex-col md:flex-row md:gap-[15vw] overflow-hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="text-black capitalize">
            <div className="head2">
              <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
                {"Step-Two".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block step2h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text"
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="step2subheading overflow-hidden mt-5 mb-10">
              <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight">
                Dedicated Support
              </h2>
            </div>
            <p className="text-white/60 text-lg lg:text-[1.6vw] md:w-[70%]">
              You will be assigned a dedicated point of contact to discuss the
              details of your project, ensuring all aspects and requirements are
              fully understood and addressed.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Step2;
