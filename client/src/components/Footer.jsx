import React from "react";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

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
          <ul className="flex justify-between items-center">
            <li className="py-1 px-1">
              <CiFacebook size={35} />
            </li>
            <li className="py-1 px-1">
              <CiInstagram size={35} />
            </li>
            <li className="py-1 px-1">
              <AiOutlineTikTok size={35} />
            </li>
            <li className="py-1 px-1">
              <FaPinterest size={35} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
