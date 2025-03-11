import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  const addproducthandler = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form
        onSubmit={addproducthandler}
        className="h-screen w-screen p-[5%] flex flex-col items-center"
        action=""
      >
        <h1 className="text-2xl font-medium text-blue-400 mb-5">
          Explain Your Project Here
        </h1>

        <input
          type="text"
          placeholder="Title"
          className="text-xl w-full bg-zinc-100 rounded px-3 py-2 mb-3"
        />

        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="category"
            className="text-xl bg-zinc-100 rounded px-3  py-2  mb-3"
          />
          <input
            type="number"
            placeholder="Price"
            className="text-xl bg-zinc-100 rounded px-3  py-2  mb-3"
          />
        </div>
        <textarea
          placeholder="Enter Product Description Here"
          name=""
          rows={10}
          className="text-lg bg-zinc-100 rounded px-3 w-full py-2  mb-3"
        ></textarea>

        <span className="w-full">
          <Link to={"/submitted"}>
            <button className="px-4 py-2 bg-black/80 text-white font-semibold rounded-md w-full">
              Submit{" "}
            </button>
          </Link>
        </span>
      </form>
    </section>
  );
};

export default Description;
