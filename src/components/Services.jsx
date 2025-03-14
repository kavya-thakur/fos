import React from "react";

const Services = () => {
  const data = [
    {
      title: "DevOps Managed Service",
      description:
        "Successfully initiated our new product development project, setting the stage for innovation and growth. ",
    },
    {
      title: "Web Development",
      description: "Building scalable and responsive web applications.",
      icon: "🖥️",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-centric and visually appealing designs.",
      icon: "🎨",
    },
    {
      title: "Cloud Services",
      description: "Providing reliable cloud hosting and management.",
      icon: "☁️",
    },
    {
      title: "SEO Optimization",
      description: "Enhancing your website’s visibility on search engines.",
      icon: "🔍",
    },
    {
      title: "AWS",
      description: "Enhancing your knowledge of AWS services.",
      icon: "🔍",
    },
  ];
  return (
    <section className="py-20 rounded-t-4xl rounded-b-4xl bg-[#1b263b] ">
      <div className="container mx-auto px-4">
      <h1 className="text-6xl text-center md:text-7xl lg:text-[110px]  font-bold tracking-tight text-white/80 mb-10">
            Services
          </h1>
        <div className="flex md:gap-10 flex-col md:flex-row md:flex-wrap  md:mx-auto lg:w-[80%] gap-10 ">
        
          {data.map((card, i) => (
            <div className="bg-[#edf2f4] hover:bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col  justify-center w-82 h-82 mx-auto bg shadow-lg text-black rounded-xl md:p-10 px-6">
              <h1 className=" text-4xl text-center md:text-4xl lg:text-5xl font-bold tracking-tight text-black/80 mb-4">
                {card.title}
              </h1>
             
              <p className="text-center text-black/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
