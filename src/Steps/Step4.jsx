// import React, { useRef } from "react";
// // import Lottie from "react-lottie";
// import complete from "../assets/complete.json";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const Step4 = () => {
//   // const defaultOptions = {
//   //   loop: true,
//   //   autoplay: true, // Animation will autoplay
//   //   animationData: complete, // JSON file imported from LottieFiles
//   //   rendererSettings: {
//   //     preserveAspectRatio: "xMidYMid slice", // Aspect ratio settings
//   //   },
//   // };
//   const setp4 = useRef()
//   useGSAP(() => {
//     let step4 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".head4",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 2, // Slower scrub for smoother animation
//       },
//     });
//     step4
//       .from(".step4h", {
//         y: -100,
//         opacity: 0,
//         duration: 1.3, // Increased time to feel smoother
//         ease: "power1.inOut",
//         stagger: 0.2,
//       })
//       .from(".step4subheading", {
//         y: 100,
//         opacity: 0,
//         duration: 1.3, // Increased time to feel smoother
//         ease: "power1.inOut",
//       });
//   },{scope : setp4});
//   return (
//     <section ref={setp4} className="sticky top-0 bg-[#750E21]  h-screen w-full md:max-h-[1300px] rounded-t-4xl overflow-hidden">
//       {/* shapes animation start  */}
//       <div className="absolute flex justify-center items-center w-[56vw] h-[56vw] top-[59%] right-0 md:top-[29%] lg:-right-90">
//         {/* Jelly Shape 1 */}
//         <div className="jelly-shape jelly-shape-1 h-64 w-64 absolute bg-white/90 rounded-full blur-[20px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw] "></div>
//         {/* Jelly Shape 2 */}
//         <div className="jelly-shape jelly-shape-2 h-64 w-64 absolute bg-white/40 rounded-full blur-[90px] md:h-[50vw] md:w-[50vw] lg:h-[40vw] lg:w-[40vw]"></div>
//       </div>
//       {/* shapes animation ends  */}
//       <div className="container mx-auto px-4  ">
//         <div className=" text-white capitalize pt-20  flex flex-col md:flex-row md:gap-[20vw] md:absolute md:top-1/2  md:left-1/2 md:-translate-x-1/2  md:-translate-y-1/2 ">
//           <div className="">
//             <div className="head4">
//               <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
//                 {"Step-Three".split("").map((char, index) => (
//                   <span
//                     key={index}
//                     className="inline-block step4h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text "
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </h1>
//             </div>
//             <div className="step4subheading overflow-hidden mt-5 mb-10 ">
//               <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl  tracking-tight">
//                 Project Completion
//               </h2>
//             </div>
//             <p className="  bg-gradient-to-r from-neutral-300 to-stone-400  text-transparent bg-clip-text text-lg md:text-[1.8vw] md:w-[70%]">
//               The assigned developer will complete your project and notify you
//               once the work is done, ready for delivery.
//             </p>
//           </div>
//           {/* <div className="lg:h-[36vw] lg:w-[46vw] md:w-[30vw]">
//             <Lottie options={defaultOptions} />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Step4;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Step4 = () => {
  const step4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let step4 = gsap.timeline({
        scrollTrigger: {
          trigger: step4Ref.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none", // Stops re-rendering
        },
      });

      step4.fromTo(
        [".step4h", ".step4subheading"],
        { opacity: 0, y: 50, willChange: "transform, opacity" }, // Hardware-accelerated
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      );
    }, step4Ref);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <section
      ref={step4Ref}
      className="sticky top-0 bg-[#750E21] h-screen w-full md:max-h-[1300px] rounded-t-4xl overflow-hidden"
    >
      {/* Optimized Shape Animation */}
      <div className="absolute flex justify-center items-center w-[40vw] h-[40vw] top-[60%] right-0 md:top-[30%] lg:-right-80">
        {/* Jelly Shape 1 */}
        <div className="jelly-shape jelly-shape-1 h-36 w-36 absolute bg-white/80 rounded-full blur-[10px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
        {/* Jelly Shape 2 */}
        <div className="jelly-shape jelly-shape-2 h-36 w-36 absolute bg-white/30 rounded-full blur-[20px] md:h-[30vw] md:w-[30vw] lg:h-[25vw] lg:w-[25vw]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-white capitalize pt-20 flex flex-col md:flex-row md:gap-[15vw] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div>
            <div className="head4">
              <h1 className="text-6xl md:text-[7.9vw] tracking-tighter font-light text-black overflow-hidden">
                {"Step-Three".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block step4h bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text"
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="step4subheading overflow-hidden mt-5 mb-10">
              <h2 className="bg-gradient-to-r from-violet-200 to-fuchsia-800 text-transparent bg-clip-text text-6xl tracking-tight">
                Project Completion
              </h2>
            </div>
            <p className="bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text text-lg md:text-[1.8vw] md:w-[70%]">
              The assigned developer will complete your project and notify you
              once the work is done, ready for delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4;

