import React from "react";
import { MdTravelExplore } from "react-icons/md";

const CreatePost = () => {
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
          className="bg-bg w-full mb-6 px-4 py-2 border-2 border-brand rounded-lg"
        />
        {/* Slug */}
        <label htmlFor="slug"></label>
        <input
        placeholder="Slug"
          type="text"
          name="slug"
          className="bg-bg w-full mb-6 px-4 py-2 border-2 border-brand rounded-lg"
        />
        {/* Hero image */}
        <label htmlFor="heroImage"></label>
        <input
        placeholder="Hero image URL"
          type="text"
          name="heroImage"
          className="bg-bg w-full mb-6 px-4 py-2 border-2 border-brand rounded-lg"
        />
      </form>
    </div>
  );
};

export default CreatePost;
