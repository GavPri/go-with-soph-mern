import React from "react";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="w-3/4 mb-8">
      <h2 className="mt-8 text-xl text-text  w-fit p-x2 polygon uppercase tracking-widest">
        So<span className="text-brand italic">p</span>hie M
        <span className="text-brand italic">a</span>reng
        <span className="text-brand italic">o</span>
      </h2>
      <h3 className="text-sm font-thin tracking-wider text-brand pb-2 border-b-2 border-accentSecondary">
        - About Me
      </h3>
      <div className="flex flex-col justify-start items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="w-full mt-8 h-96 lg:full border-1 border-accentSecondary rounded-md shadow-md overflow-hidden mb-6">
          {/* Image container */}
          <div className="w-full h-full overflow-hidden">
            <img
              src={`./images/nevadaFalls.JPG`}
              alt="Photo of Sophie"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* Text */}
        <div className="w-full font-qs ml-6">
          <p className="my-4 leading-6">
            In September 2021 I moved from the Bay Area, CA to teach English in
            Valencia, Spain. On the weekends and school holidays, my friends and
            I would take every chance we could to go somewhere new. Travel is
            now a very important part of my life. So far, I’ve explored top
            destinations in 15 countries. I hope to continue adding to that
            list.
          </p>
          <p className="mb-4 leading-6">
            My time in Valencia inspired me to start a travel blog. This is my
            collection of curated guides, insider tips, and travel itineraries.
          </p>
          <NavLink
            to="/blog"
            className="py-2 px-4 bg-brand text-bg rounded-md tracking-wide shadow-md"
          >
            Visit The Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
