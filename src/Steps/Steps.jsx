import React, { useState } from "react";
import firstvid from "../assets/firststep.mp4";
import secvid from "../assets/secoundstep.mp4";
import threevid from "../assets/threestep.mp4";
import fourvid from "../assets/complete.mp4";
import { FaArrowRight } from "react-icons/fa";

const Steps = () => {
  const backgrounds = [
    "bg-gradient-to-r from-[#3e187a] to-[#994ecc]", // Step 1
    "bg-[#522258]", // Step 2
    "bg-[#1A3636]", // Step 3
    "bg-[#750E21]", // Step 4
    "bg-[#48A6A7]",
  ];

  const [data, setdata] = useState([
    {
      heading: "Create and submit project",
      points: [
        "➕ Click 'Create Ticket' and fill in the details (Issue Type, Description, Costing Plan).",
        "🖋 Submit the form to receive a unique Ticket ID.",
        "🖋 An email confirmation will be sent with tracking details.",
      ],
      vid: firstvid,
    },
    {
      heading: "Dedicated Support",
      points: [
        "A Helping Buddy will be assigned to assist you.",
        "They’ll guide you, answer your questions, and provide an estimated resolution time.",
      ],
      vid: secvid,
    },
    {
      heading: "Developer Assignment",
      points: [
        "Based on your support plan, a skilled developer or support engineer will be assigned.",
        "Work will begin based on your requirements and urgency.",
        "Track real-time progress on your ticket.",
      ],
      vid: threevid,
    },
    {
      heading: "Track Your Ticket Progress",
      points: [
        "Enter your Ticket ID on our website to check status updates.",
        "Monitor your request as it moves from Pending → Assigned → In Progress → Resolved.",
        "Receive email notifications on every update.",
      ],
      vid: fourvid,
    },
    {
      heading: "Resolution & Feedback",
      points: [
        "Get notified once your issue is resolved.",
        "Review and confirm the solution works for you.",
        "Share your feedback to help us improve our service.",
      ],
      vid: fourvid,
    },
  ]);
  return (
    <section className="sticky bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="pt-20 px-2 mb-10">
          <h1 className="font-extrabold text-5xl tracking-tight text-center text-[#E3DAC9] md:text-[8rem]">
            Steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e187a] to-[#994ecc]">
              follow
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-12 lg:gap-20 relative mx-auto">
          {data.map((step, i) => (
            <div
              key={i}
              className={`sticky top-30 md:top-30 px-5 flex flex-col md:flex-row md:items-center md:justify-between py-8 h-72 md:w-[80%] md:h-[40rem] md:gap-[4vw] lg:h-[45rem] rounded-2xl mx-auto ${backgrounds[i]}`}
            >
              <div className="flex flex-col gap-2 justify-start">
                <h2 className="font-semibold text-xl lg:text-5xl mb-5">
                  {step.heading}
                </h2>
                <ol className="flex flex-col gap-4 font-light text-start lg:text-lg">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-5">
                      {" "}
                      {/* <div className="bg-purple-300 px-3 py-3 lg:px-2 lg:py-2  rounded-full w-fit">
                        <FaArrowRight />
                      </div>{" "} */}
                      {point}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="hidden lg:block rounded-xl overflow-hidden">
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className=""
                  width={700}
                  src={step.vid}
                ></video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
