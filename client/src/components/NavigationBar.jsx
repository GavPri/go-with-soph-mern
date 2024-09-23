import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="" fixed="top">
      <Container>
        <Navbar.Brand href="#home">GoWithSoph</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="pb-4 lg:mr-4">
              Home
            </Link>
            <Link to="/blog" className="pb-4 lg:mr-4">
              Blog
            </Link>
            <Link to="/register" className="pb-4 lg:mr-4">
              Register
            </Link>
            <Link to="/login" className="pb-4 lg:mr-4">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
