
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Description = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate();

  const addproducthandler = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="min-h-screen flex justify-center items-center ">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={addproducthandler}
        className="w-[90%] md:w-[60%] lg:w-[40%] p-6 rounded-xl  shadow-2xl hover:shadow-purple-500 transition-all duration-300"
      >
        <h1 className="text-3xl text-center font-extrabold text-white mb-6">
          Explain Your <span className="text-purple-500">Project</span> Here
        </h1>
        <div className="space-y-9">
          {[
            { name: "title", placeholder: "Title" },
            { name: "category", placeholder: "Category" },
            { name: "price", placeholder: "Price", type: "number" },
          ].map(({ name, placeholder, type = "text" }) => (
            <motion.input
              key={name}
              required
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              placeholder={placeholder}
              whileFocus={{ borderColor: "#a044ff", boxShadow: "0px 0px 15px #a044ff" }}
              className="w-full px-4 py-2  text-white border-b-1 border-b-gray-400  rounded-lg focus:outline-none transition-all duration-300 "
            />
          ))}
          <motion.textarea
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter Product Description Here"
            rows={5}
            whileFocus={{ borderColor: "#a044ff", boxShadow: "0px 0px 15px #a044ff" }}
            className="w-full px-4 py-2  text-white border-b-gray-400  rounded-lg focus:outline-none transition-all duration-300 "
          ></motion.textarea>
        </div>
        <motion.button
          
          type="submit"
          className="w-full px-4 py-2 mt-4 bg-gradient-to-r from-[#a044ff] to-[#6a3093] text-white font-extrabold rounded-md transition-transform"
        >
          Submit
        </motion.button>
        <motion.button
          
          className="w-full px-4 py-2 mt-2 bg-white text-black font-extrabold rounded-md transition-transform"
        >
          <Link to={"/"}>Back</Link>
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Description;
