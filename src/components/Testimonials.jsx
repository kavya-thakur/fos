import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonials = [
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc: avatar1,
      name: "Jamie Rivera",
      username: "@jamietechguru00",
    },
    {
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      imageSrc: avatar2,
      name: "Josh Smith",
      username: "@jjsmith",
    },
    {
      text: "This app has completely transformed how I manage my projects and deadlines.",
      imageSrc: avatar3,
      name: "Morgan Lee",
      username: "@morganleewhiz",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc: avatar4,
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc: avatar5,
      name: "Taylor Kim",
      username: "@taylorkimm",
    },
    {
      text: "The customizability and integration capabilities of this app are top-notch.",
      imageSrc: avatar6,
      name: "Riley Smith",
      username: "@rileysmith1",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      imageSrc: avatar7,
      name: "Jordan Patels",
      username: "@jpatelsdesign",
    },
    {
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc: avatar8,
      name: "Sam Dawson",
      username: "@dawsontechtips",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9,
      name: "Casey Harper",
      username: "@casey09",
    },
  ];

  const firstCol = testimonials.slice(0, 3);
  const secCol = testimonials.slice(3, 6);
  const thirdCol = testimonials.slice(6, 9);

  const TestimonialCol = ({ className, testimonials, duration }) => (
    <div className={("", className)}>
      <motion.div
        // animate={{
        //   translateY: "-50%",
        // }}
        // transition={{
        //   repeat: Infinity,
        //   duration: duration || 10,
        //   ease: "linear",
        //   repeatType: "loop",
        // }}
        className={twMerge("flex flex-col gap-6 ")}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username, i }) => (
              <div
                key={name}
                className="p-10 border border-white/20 shadow-2xl rounded-3xl  max-w-sm w-full"
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    src={imageSrc}
                    width={40}
                    height={40}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />

                  <div className="flex flex-col">
                    <div className="font-bold tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="tracking-tight leading-5">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section 
    
    className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mt-10 mb-4">
          <div className=" text-sm inline-flex border border-white/70 px-3 py-1 rounded-lg tracking-tight ">
            Testimonials
          </div>
        </div>
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-7xl tracking-tight text-white/90 capitalize font-['Aboreto'] my-5">
          What our  users say
        </h2>
        <div className="lg:flex lg:justify-center lg:w-[37%] mx-auto mt-2">
          <p className="text-center text-md mt-3 mb-3">
            from intuitive design to powerful features, our web has become an
            essential platform for users around the world
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[768px] overflow-hidden">
          <TestimonialCol testimonials={firstCol} className="" duration={15} />
          <TestimonialCol testimonials={secCol} className={`hidden md:block`} />
          <TestimonialCol
            duration={20}
            testimonials={thirdCol}
            className={"hidden lg:block"}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
