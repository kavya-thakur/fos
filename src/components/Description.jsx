import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <section className="mt-10">
      <form
        onSubmit={addproducthandler}
        className="h-screen w-screen p-[5%] flex flex-col items-center"
      >
        <h1 className="text-2xl font-medium text-blue-400 mb-5">
          Explain Your Project Here
        </h1>

        <input
          required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="text-xl w-full bg-zinc-100 rounded px-3 py-2 mb-3"
        />

        <div className="w-full flex flex-col">
          <input
            required
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="text-xl bg-zinc-100 rounded px-3 py-2 mb-3"
          />
          <input
            required
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="text-xl bg-zinc-100 rounded px-3 py-2 mb-3"
          />
        </div>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Product Description Here"
          rows={10}
          className="text-lg bg-zinc-100 rounded px-3 w-full py-2 mb-3"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2 bg-black/80 text-white font-semibold rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Description;
