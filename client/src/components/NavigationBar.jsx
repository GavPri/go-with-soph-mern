import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="bg-brand text-text" fixed="top">
      <Container>
        <Link to="/">
          <h1>GoWithSoph</h1>
        </Link>
        <Navbar.Toggle
          className="focus:outline-none focus:ring-0 border-0 text-text"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="lg:mr-4 lg:flex lg:justify-center lg:pb-0">
              Home
            </Link>
            <Link
              to="/blog"
              className="lg:mr-4 lg:flex lg:justify-center lg:pb-0"
            >
              Blog
            </Link>
            <Link
              to="/register"
              className="lg:mr-4 lg:flex lg:justify-center lg:pb-0"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="lg:mr-4 lg:flex lg:justify-center lg:pb-0"
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
