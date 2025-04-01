import React from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const categoryData = {
  training: {
    title: "Training",
    description: "Empowering developers with hands-on training in the latest technologies.",
    items: ["Frontend Development", "Backend Development", "Full Stack Development", "Mobile App Development"],
    whyChooseUs: [
      "Industry-leading instructors with real-world experience",
      "Hands-on projects to build practical skills",
      "Comprehensive curriculum covering modern technologies",
      "Certification upon successful completion",
    ],
  },
  development: {
    title: "Development",
    description: "Building scalable, robust, and high-performance solutions.",
    items: ["Frontend", "Backend", "Full Stack", "DevOps"],
    whyChooseUs: [
      "Experienced developers delivering high-quality code",
      "Use of the latest technologies for optimal performance",
      "Client-focused approach to meet business needs",
      "Scalable and maintainable solutions for long-term growth",
    ],
  },
  uiux: {
    title: "UI/UX",
    description: "Designing intuitive and engaging experiences for digital products.",
    items: ["Web Design", "App Design", "Prototyping", "Wireframing"],
    whyChooseUs: [
      "User-centric design approach",
      "Focus on aesthetics and functionality",
      "Prototyping and wireframing for precision",
      "Improved user engagement and retention",
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    description: "Automating workflows and optimizing cloud infrastructure.",
    items: ["CI/CD", "AWS", "Docker", "Kubernetes"],
    whyChooseUs: [
      "Seamless integration and deployment workflows",
      "Expertise in cloud platforms like AWS",
      "Containerization using Docker and Kubernetes",
      "Enhanced security and scalability for modern applications",
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const data = categoryData[category];

  if (!data) {
    return <h2 className="text-center text-white mt-10">Category Not Found</h2>;
  }

  return (
    <div className="flex flex-col  mx-auto md:px-0 max-w-7xl min-h-screen  mt-10">
      <CategoryCard
        title={data.title}
        description={data.description}
        items={data.items}
        whyChooseUs={data.whyChooseUs}
      />
    </div>
  );
};

export default CategoryPage;
