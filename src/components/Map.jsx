// import { motion } from "framer-motion";
// import React, { useRef } from "react";

// const Map = () => {
//   const constraintsRef = useRef(null);

//   return (
//     <section className="py-20 h-[1700px] md:h-[1200px] bg-black">
//       <div
//         ref={constraintsRef}
//         className="max-w-7xl lg:h-screen container px-4 mx-auto "
//       >
//         <h1 className="text-white text-4xl text-center mb-10 font-bold tracking-widest md:text-6xl">
//           STEPS→
//         </h1>
//         <div className="flex justify-center flex-col gap-6 items-center md:flex-row flex-wrap relative">
//           {/* first step  */}
//           <motion.div
//             dragConstraints={constraintsRef}
//             drag
//             whileDrag={{ scale: 0.9, rotate: 10 }}
//             className="md:absolute md:left-3 md:top-0 h-[350px] md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl  p-6 relative bg-gradient-to-r from-stone-500 to-stone-700 "
//           >
//             <h1 className="text-center text-4xl text-white/90 font-semibold mt-5 mb-5">
//               Create and Submit Project
//             </h1>
//             <p className="text-white/60 text-center lg:mt-13">
//               Click on the 'Create Project' button, fill out the necessary
//               details of your project, and submit the form for review.
//             </p>
//             <button className=" absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
//               Step 1{" "}
//             </button>
//           </motion.div>
//           {/* secound step  */}
//           <motion.div
//             dragConstraints={constraintsRef}
//             drag
//             whileDrag={{ scale: 0.9, rotate: 10 }}
//             className="md:absolute md:top-25 md:right-3 h-[350px] md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl  p-6 relative bg-gradient-to-r from-purple-500 to-purple-900"
//           >
//             <h1 className="text-center text-4xl text-white/90 font-semibold mt-5 mb-5 ">
//               Client Discussion
//             </h1>
//             <p className="text-white/60 text-center lg:mt-13 ">
//               Once submitted, within a few minutes, a client will connect with
//               you to discuss your project and the pricing details.
//             </p>
//             <button className=" absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
//               Step 2{" "}
//             </button>
//           </motion.div>
//           {/* step-3  */}
//           <motion.div
//             dragConstraints={constraintsRef}
//             drag
//             whileDrag={{ scale: 0.9, rotate: 10 }}
//             className="md:absolute md:top-100 lg:top-120 md:left-3 h-[350px] lg:left-10 md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl  p-6 relative bg-gradient-to-r from-stone-500 to-stone-700   "
//           >
//             <h1 className="text-center text-white/90 text-4xl font-semibold mt-5 mb-5">
//               Developer Assignment
//             </h1>
//             <p className="text-white/60 text-center lg:mt-13">
//               A qualified developer will be assigned to your project to begin
//               work on it based on the agreed-upon terms.
//             </p>
//             <button className=" absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
//               Step 3{" "}
//             </button>
//           </motion.div>
//           {/* step 4 */}
//           <motion.div
//             drag
//             dragConstraints={constraintsRef}
//             whileDrag={{ scale: 0.9, rotate: 10 }}
//             className="md:absolute md:top-140 md:right-15 h-[350px] md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl  p-6 relative bg-gradient-to-r from-purple-500 to-purple-900 "
//           >
//             <h1 className="text-center text-4xl text-white/90 font-semibold mt-5 mb-5 ">
//               Project Completion
//             </h1>
//             <p className="text-white/60 text-center lg:mt-13">
//               The assigned developer will complete your project and notify you
//               once the work is done, ready for delivery.
//             </p>
//             <button className=" absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
//               Final Step{" "}
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Map;
import { motion } from "framer-motion";
import React, { useRef } from "react";

// Array of steps to avoid code repetition
const steps = [
  {
    title: "Create and Submit Project",
    description:
      "Click on the 'Create Project' button, fill out the necessary details of your project, and submit the form for review.",
    buttonText: "Step 1",
    bgColor: "from-stone-500 to-stone-700",
  },
  {
    title: "Client Discussion",
    description:
      "Once submitted, within a few minutes, a client will connect with you to discuss your project and the pricing details.",
    buttonText: "Step 2",
    bgColor: "from-purple-500 to-purple-900",
  },
  {
    title: "Developer Assignment",
    description:
      "A qualified developer will be assigned to your project to begin work on it based on the agreed-upon terms.",
    buttonText: "Step 3",
    bgColor: "from-stone-500 to-stone-700",
  },
  {
    title: "Project Completion",
    description:
      "The assigned developer will complete your project and notify you once the work is done, ready for delivery.",
    buttonText: "Final Step",
    bgColor: "from-purple-500 to-purple-900",
  },
];

const Map = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="py-20 h-[1700px] md:h-[1200px] bg-black">
      <div
        ref={constraintsRef}
        className="max-w-7xl lg:h-screen container px-4 mx-auto"
      >
        <h1 className="text-white text-4xl text-center mb-10 font-bold tracking-widest md:text-6xl">
          STEPS→
        </h1>
        <div className="flex justify-center flex-col gap-6 lg:gap-20 mt-10 items-center md:flex-row flex-wrap ">
          {steps.map((step, index) =>
            // Use motion.div on md and above screens
            window.innerWidth >= 768 ? (
              <motion.div
                key={index}
                dragConstraints={constraintsRef}
                drag
                whileDrag={{ scale: 0.9, rotate: 10 }}
                className={` h-[350px] md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl p-6 relative bg-gradient-to-r ${step.bgColor}`}
              >
                <h1 className="text-center text-4xl text-white/90 font-semibold mt-5 mb-5">
                  {step.title}
                </h1>
                <p className="text-white/60 text-center lg:mt-20">
                  {step.description}
                </p>
                <button className="absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
                  {step.buttonText}
                </button>
              </motion.div>
            ) : (
              // Fallback to a normal div for mobile without animation
              <div
                key={index}
                className={` h-[350px] md:h-80 md:w-80 lg:h-[400px] lg:w-[450px] rounded-4xl p-6 relative bg-gradient-to-r ${step.bgColor}`}
              >
                <h1 className="text-center text-4xl text-white/90 font-semibold mt-5 mb-5">
                  {step.title}
                </h1>
                <p className="text-white/60 text-center lg:mt-13">
                  {step.description}
                </p>
                <button className="absolute bottom-5 px-6 py-2 rounded-full bg-white/90 tracking-tight font-semibold lg:px-12 lg:py-3">
                  {step.buttonText}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;
