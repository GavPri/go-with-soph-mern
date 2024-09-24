import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="bg-bg text-text" fixed="top">
      <Container>
        <Link to="/">
          <h1 className="text-xl text-brand">GoWithSoph</h1>
        </Link>
        <Navbar.Toggle
          className="focus:outline-none focus:ring-0 border-0 text-brand"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="bg-bg">
          <Nav className="ml-auto">
            <Link
              to="/"
              className=" text-xl py-4 lg:mr-4 lg:flex lg:justify-center lg:pb-0 "
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-xl py-4 lg:mr-4 lg:flex lg:justify-center lg:pb-0"
            >
              Blog
            </Link>
            <Link
              to="/register"
              className="text-xl py-4 lg:mr-4 lg:flex lg:justify-center lg:pb-0"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-xl py-4 lg:mr-4 lg:flex lg:justify-center lg:py-0"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
