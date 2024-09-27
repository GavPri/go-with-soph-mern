import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const CreatePost = () => {
  const continents = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];
  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <div className="text-center flex flex-col justify-center items-center font-qs font-bold tracking-wider text-2xl mb-6 pt-6">
        <h2 className="flex flex-col items-center text-brand text-xl mb-2">
          {" "}
          <MdTravelExplore size={40} /> GoWithSoph
        </h2>
        <p className="text-lg text-text ">Create a blog post</p>
      </div>
      {/* *Form inputs for form. */}
      <form className="h-fit w-10/12 bg-bg p-4">
        {/* 3 inputs for author. */}
        {/* Title */}
        <label htmlFor="title"></label>
        <input
          placeholder="Title"
          type="text"
          name="title"
          className="bg-bg w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Slug */}
        <label htmlFor="slug"></label>
        <input
          placeholder="Slug"
          type="text"
          name="slug"
          className="bg-bg w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Hero image */}
        <label htmlFor="heroImage"></label>
        <input
          placeholder="Hero image URL"
          type="text"
          name="heroImage"
          className="bg-bg w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Tags */}
        <div className="flex rounded-lg w-full mb-6">
          <input
            type="text"
            className="rounded-l-lg w-10/12 px-4 py-2  border-b-2 border-brand bg-bg"
            placeholder="Tags"
          />
          <button className="bg-brand text-bg rounded-r-lg w-2/12 flex justify-center">
            <IoIosAddCircleOutline size={40} />
          </button>
        </div>
        {/* Continents */}
        <label htmlFor="continent"></label>
        <select
          name="continent"
          id=""
          className="w-full px-4 py-2 mb-6 rounded-lg bg-bg border-b-2 border-brand text-text"
        >
          <option value="Select a continent">Select a continent</option>
          {continents.map((con) => (
            <option key={con} value={con}>
              {con}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default CreatePost;
