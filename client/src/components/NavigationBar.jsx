import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { NavLink } from "react-router-dom";
import useClickOutSideToggle from "../hooks/useClickOutSideToggle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdSearch } from "react-icons/io";

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
          <h1 className="text-2xl text-brand font-qs font-bold tracking-wider">
            GoWithSoph
          </h1>
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
          <Nav className="mx-auto font-qs">
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
          <Nav>
            <Form inline className="flex justify-start items-center">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="py-2 px-6 border-1 border-border focus:outline-none focus:ring-0 focus:shadow-none focus:border-border"
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    type="submit"
                    className="bg-slate-200 text-brand border-0 outline-none py-2 px-6  hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out "
                  >
                    <IoMdSearch size={25} />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
