import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Description = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate(); // Hook to programmatically navigate

  const addproducthandler = (e) => {
    e.preventDefault();

    // Example of form data logging, you can replace it with your API call or any logic
    console.log(formData);

    // Navigate to the login page after form submission
    navigate("/login");
  };

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="mt-10 overflow-hidden">
      <form
        onSubmit={addproducthandler}
        className="outline-none h-screen w-screen p-[5%] md:px-[10%] lg:px-[15vw] flex gap-2 flex-col items-center"
      >
        <div className="my-5 md:mb-10 md:mt-0">
          <h1 className="text-4xl text-center font-extrabold text-white/80 md:text-3xl lg:text-5xl">
            Explain Your <span className="text-purple-500">Project</span> Here
          </h1>
        </div>
        <input
          required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="outline-none text-md w-full md:w-[70%] border border-gray-500 text-white rounded px-3 py-2 mb-3"
        />

        <input
          required
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="outline-none text-md w-full md:w-[70%] border border-gray-500 text-white rounded px-3 py-2 mb-3"
        />
        <input
          required
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="outline-none text-md w-full md:w-[70%] border border-gray-500 text-white rounded px-3 py-2 mb-3"
        />
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Product Description Here"
          rows={10}
          className="outline-none text-md w-full md:w-[70%] border border-gray-500 text-white rounded px-3 py-2 mb-3"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2 md:w-[70%]  bg-gradient-to-r from-[#a044ff] to-[#6a3093] text-white font-extrabold rounded-md w-full"
        >
          Submit
        </button>
        <button
          type="submit"
          className="px-4 py-2 md:w-[70%]  bg-white text-black font-extrabold rounded-md w-full"
        >
          <Link to={"/"}> Back</Link>
        </button>
      </form>
    </section>
  );
};

export default Description;
