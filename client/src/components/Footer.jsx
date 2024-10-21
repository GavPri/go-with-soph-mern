import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-brand mt-auto">
      {/* ----- inner wrapping div */}
      <div className="h-full w-full flex flex-col justify-between items-center">
        {/* Logo and nav links */}
        <div className="flex justify-between p-4 w-full">
          <NavLink to="/">GoWithSoph</NavLink>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* Social links */}
        <div className="h-12 w-3/4 bg-teal-500 border-t-2 border-t-bg">
            <ul className="flex justify-evenly items-center">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Tiktok</li>
            <li>Pinterest</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
