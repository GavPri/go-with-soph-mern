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
    </div>
  );
};

export default CreatePost;
