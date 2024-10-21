import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { handleLogout } from "../utils/handleLogout";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
            {user ? (
              <>
                <NavLink
                  onClick={() => handleLogout(setUser, navigate)}
                  className="lg:mx-2"
                >
                  Log out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/register" className="lg:mx-2">
                  Register
                </NavLink>
                <NavLink to="/login" className="lg:mx-2">
                  Login
                </NavLink>
              </>
            )}
          </ul>
        </nav>
        {/* Social links */}
        <nav className="h-12 w-3/4 border-t-2 border-t-bg mb-6">
          <ul className="flex justify-between lg:justify-evenly items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="py-1 px-1"
            >
              <CiFacebook size={35} />
            </a>
            <a
              href="https://www.instagram.com/gowithsoph"
              target="_blank"
              className="py-1 px-1"
            >
              <CiInstagram size={35} />
            </a>
            <a
              href="https://www.tiktok.com/@gowithsoph"
              target="_blank"
              className="py-1 px-1"
            >
              <AiOutlineTikTok size={35} />
            </a>
            <a
              href="https://www.pinterest.com/gowithsoph"
              target="_blank"
              className="py-1 px-1"
            >
              <FaPinterest size={35} />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
