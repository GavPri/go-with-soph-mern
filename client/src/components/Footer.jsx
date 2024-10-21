import React from "react";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto h-64 border-t-2 border-accentSecondary font-qs text-lg text-text mt-auto">
      {/* ----- inner wrapping div */}
      <div className="h-full w-full flex flex-col justify-between items-center">
        {/* Logo and nav links */}
        <nav className="flex justify-between p-4 w-full">
          <NavLink to="/">GoWithSoph</NavLink>
          <ul className=" flex flex-col lg:flex-row">
            <NavLink to="/" className="lg:mx-2">
              Home
            </NavLink>
            <NavLink to="/blog" className="lg:mx-2">
              Blog
            </NavLink>
            <NavLink to="/register" className="lg:mx-2">
              Register
            </NavLink>
            <NavLink to="/login" className="lg:mx-2">
              Login
            </NavLink>
          </ul>
        </nav>
        {/* Social links */}
        <div className="h-12 w-3/4 border-t-2 border-t-bg lg:mb-6">
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
