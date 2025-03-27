import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import devops from "../assets/devops.png";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import DotBackground from "../utils/Dots";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Animate the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate each service block
    serviceRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      img: frontend,
      title: "Frontend Development",
      description:
        "Designing dynamic, responsive, and high-performance UI/UX using React, Next.js for seamless digital experiences.",
      points: [
        "Responsive and mobile-friendly designs",
        "Interactive UI/UX with modern frameworks",
        "Cross-browser compatibility for seamless performance",
      ],
    },
    {
      img: backend,
      title: "Backend Development",
      description:
        "Building robust, scalable server-side architectures with Node.js to ensure fast and secure data processing.",
      points: [
        "Secure and scalable server-side solutions",
        "API development and third-party integrations",
        "High-performance database management",
      ],
    },
    {
      img: devops,
      title: "DevOps & Cloud",
      description:
        "Enhancing infrastructure efficiency with automated deployments, scalable cloud solutions, and CI/CD pipelines using AWS, Docker, and Kubernetes.",
      points: [
        "Automated CI/CD pipelines for faster deployment",
        "Scalable cloud hosting and infrastructure management",
        "Real-time monitoring and security enhancements",
      ],
    },
  ];

  return (
    <>
      <section ref={sectionRef} className=" bg-neutral-900">
        <div className="text-[#f4f1de] py-20 bg-gradient-to-br from-[#B3CEE5] to-[#91a3b0]">
          <h1
            ref={headingRef}
            className="text-4xl font-extrabold tracking-widest px-4 text-center"
          >
            Services
          </h1>
        </div>
        <DotBackground>
          <div className="container mx-auto px-4">
            <div className="mt-20 flex flex-col gap-20 md:gap-45 max-w-7xl mx-auto">
              {services.map(({ img, title, description, points }, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  className={`text-white flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse md:text-end" : ""
                  } md:justify-center  gap-10 lg:gap-[5rem] lg:px-20`}
                >
                  <div className="md:w-1/2 lg:w-[35vw] lg:h-[40vh]">
                    <h1 className="text-start text-3xl lg:text-[2.5rem] leading-none tracking-tighter font-semibold bg-gradient-to-br from-white to-[#678dc6] bg-clip-text text-transparent md:w-[90%]">
                      {title}
                    </h1>
                    <p className="text-start text-neutral-400 md:w-[90%] my-5 text-md lg:text-[1.2rem]">
                      {description}
                    </p>
                    <ol className="flex flex-col gap-4 font-light text-start lg:text-[1.2rem]">
                      {points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl overflow-hidden ">
                    <img
                      className="md:w-[25vw] md:h-[50vh] lg:h-[40vh] overflow-hidden bg-cover"
                      src={img}
                      alt={title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DotBackground>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
