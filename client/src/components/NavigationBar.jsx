import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { NavLink } from "react-router-dom";
import useClickOutSideToggle from "../hooks/useClickOutSideToggle";

function NavigationBar() {
  const { expanded, setExpanded, ref } = useClickOutSideToggle();

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-bg text-text"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <h1 className="text-xl text-brand font-qs font-bold">GoWithSoph</h1>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          className="focus:outline-none focus:ring-0 border-0 text-brand"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="bg-bg">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              className=" text-xl my-4 lg:py-2 lg:rounded-lg lg:px-6 lg:mr-4 lg:flex lg:justify-center lg:bg-slate-200 text-brand hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out"
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className="text-xl my-4 lg:py-2 lg:rounded-lg lg:px-6 lg:mr-4 lg:flex lg:justify-center lg:bg-slate-200 text-brand hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out"
            >
              Blog
            </NavLink>
            <NavLink
              to="/register"
              className="text-xl my-4 lg:py-2 lg:px-6 lg:rounded-lg lg:mr-4 lg:flex lg:justify-center  lg:bg-slate-200 text-brand hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="text-xl my-4 lg:py-2 lg:rounded-lg lg:px-6  lg:mr-4 lg:flex lg:justify-center  lg:bg-slate-200 text-brand hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out"
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
