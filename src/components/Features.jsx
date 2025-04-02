import { useState } from "react";
import featureher0 from "../assets/feature-hero-img-2.svg";
import img2 from "../assets/img2.png";
import fixedprice from "../assets/fixed-price.png";

const features = [
  {
    id: 1,
    title: "Hire Dedicated Resource",
    description: `The Hire Dedicated Resource Model is a popular model. In this model, Fosnix provides a dedicated team of professionals to work on the client’s project or services for an agreed-upon period. The client pays for the number of hours worked on the project.

The client can quickly start their project without detailed requirements and can iterate over the requirements in an Agile fashion as time progresses. The client can also maintain full control and oversight as the project progresses and can even combine their onshore team with hired dedicated offshore staff.

`,
    image: featureher0,
    steps: [
      {
        id: 1,
        title: "Requirement Gathering",
        description: "Share your ideal candidate requirements",
      },
      {
        id: 2,
        title: "Talent Match",
        description:
          "We will share a highly experienced pool of talent resumes that matches your requirement",
      },
      {
        id: 3,
        title: "Interview and Hire",
        description:
          "Interview a list of shared candidates and hire the best ones.",
      },
      {
        id: 4,
        title: "Selection and Onboard",
        description: "Onboard the selected candidate and start the innovation",
      },
      {
        id: 5,
        title: "Quality Driven Report",
        description:
          "100% project control for clients and direct communication and transparency from us.",
      },
    ],
  },
  {
    id: 2,
    title: "Discovery Process Model",
    description: `At Fosnix, we understand that successful IT consulting projects start with a thorough understanding of our clients' needs and objectives. That’s why we’ve developed a comprehensive discovery process in the pre-development stage to gather the critical information needed to craft effective solutions.

Our dedicated team of experts collaborates closely with clients, leveraging their industry knowledge and our technical expertise to create innovative and customized solutions that align with their unique business needs.`,
    image: img2,
    steps: [
      {
        id: 1,
        title: "Requirement Gathering",
        description:
          "We collect and analyze information from stakeholders in order to define the scope and objectives of a project to ensure the end product meets their requirements.",
      },
      {
        id: 2,
        title: "UI/UX Design",
        description:
          "We create catchy and charming designs with the latest tools of designing to make it the best user-friendly experience.",
      },
      {
        id: 3,
        title: "Prototype",
        description:
          "We will then create a prototype to demo how different key functionalities will work before we start developing it.",
      },
      {
        id: 4,
        title: "Development",
        description:
          "We will then develop using the latest tools and technologies. We will frequently share our progress and demo features as we complete them.",
      },
      {
        id: 5,
        title: "Quality Assurance",
        description:
          "We will provide QA service to extensively end to end test each feature to deliver 100% bug-free solutions",
      },
      {
        id: 6,
        title: "Deployment",
        description:
          "We can then help the app launch on Web, App store, or Play Store.",
      },
      {
        id: 7,
        title: "Support & Maintenance",
        description:
          "We offer ongoing support to help you continuously scale and improve as well as solve any production issues.",
      },
    ],
  },
  {
    id: 3,
    title: "Fixed Price Model",
    description: `In this model, the client agrees upon a fixed price for a specific project or set of services. The scope of work, timeline, and deliverables are all defined in advance in detail. Any changes or additions to the project scope may result in additional charges or a renegotiation of the fixed price.

This model is ideal for clients who have a clear vision of their requirements and do not anticipate frequent changes throughout the project.`,
    image: fixedprice,
    steps: [
      {
        id: 1,
        title: "Requirement Gathering",
        description:
          "We collect and analyze information from stakeholders in order to define the scope and objectives of a project to ensure the end product meets their requirements.",
      },
      {
        id: 2,
        title: "UI/UX Design",
        description:
          "We create catchy and charming designs with the latest tools of designing to make it the best user-friendly experience.",
      },
      {
        id: 3,
        title: "Prototype",
        description:
          "We will then create a prototype to demo how different key functionalities will work before we start developing it.",
      },
      {
        id: 4,
        title: "Development",
        description:
          "We will then develop using the latest tools and technologies. We will frequently share our progress and demo features as we complete them.",
      },
      {
        id: 5,
        title: "Quality Assurance",
        description:
          "We will provide QA service to extensively end to end test each feature to deliver 100% bug-free solutions",
      },
      {
        id: 6,
        title: "Deployment",
        description:
          "We can then help the app launch on Web, App store, or Play Store.",
      },
      {
        id: 7,
        title: "Support & Maintenance",
        description:
          "We offer ongoing support to help you continuously scale and improve as well as solve any production issues.",
      },
    ],
  },
];

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="max-w-7xl py-20 mx-auto px-4 text-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="text-3xl md:text-5xl border-b-4 border-purple-500 ">
          Features
        </h1>
        <h3 className="text-4xl">Partnership Models</h3>
        <p className="text-neutral-400  md:w-1/2">
          Fosnix is a leading website development company specializing in
          frontend, backend, and DevOps solutions. We provide custom technology
          services tailored to businesses across various industries. Explore our
          partnership models to collaborate and grow with us.
        </p>
      </div>
      {/* Feature Buttons */}
      <div className="flex flex-col md:flex-row space-x-4 mt-6 text-center justify-center">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature)}
            className={`my-2 px-4 py-2 rounded-lg transition font-md outline-none ${
              activeFeature.id === feature.id
                ? "bg-[#3e187a] bg-gradient-to-br from-[#3e187a] to-[#994ecc] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-purple-400"
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Feature Content */}
      <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto mt-20 gap-10">
        <div className="">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-[#f5f5f5] to-[#fffafa] bg-clip-text text-transparent">
            {activeFeature.title}
          </h2>
          <p className="text-gray-400 text-md md:text-lg mb-10">
            {activeFeature.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <img
          src={activeFeature.image}
          alt={activeFeature.title}
          className="rounded-lg shadow-md w-[410px]"
        />
      </div>

      {/* Dynamic Steps Section */}
      {activeFeature.steps && (
        <div className="mt-20 flex flex-wrap justify-center gap-10 items-center">
          {activeFeature.steps.map((step) => (
            <div
              key={step.id}
              className="featurecard h-80 w-80 bg-neutral-900 transition-all duration-300 ease-in-out 
           hover:bg-gradient-to-br from-[#3e187a] to-[#994ecc] 
           hover:scale-105 hover:shadow-lg hover:shadow-purple-700/50 
           text-black px-4 rounded-lg shadow-md text-center flex flex-col items-center justify-center 
           border border-purple-600/20"
            >
              <h1 className="text-black bg-white rounded px-5 py-3 font-extrabold mb-3">
                {step.id}
              </h1>
              <h1 className="font-bold text-2xl text-[#F5F7F8]">
                {step.title}
              </h1>
              <p className=" text-[#F5F7F8]/70 text-md">{step.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
