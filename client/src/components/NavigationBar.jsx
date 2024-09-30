import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { NavLink, useNavigate } from "react-router-dom";
import useClickOutSideToggle from "../hooks/useClickOutSideToggle";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { toast } from "react-hot-toast";

function NavigationBar() {
  // * Accessing the user.
  const { user, setUser } = useContext(UserContext);
  const { expanded, setExpanded, ref } = useClickOutSideToggle();
  // * navigate the user to home page after logout.
  const navigate = useNavigate();

  // Function to get class names for NavLink
  const getNavLinkClass = ({ isActive }) =>
    `text-xl my-4 py-2 lg:rounded-lg rounded-md px-6 lg:mr-4 lg:flex lg:justify-center lg:bg-slate-200  hover:bg-gradient-to-r from-brand to-accentPrimary hover:text-bg transition-all duration-500 ease-in-out ${
      isActive
        ? "bg-gradient-to-r from-brand to-accentPrimary text-bg"
        : "text-text"
    }`;

  const LoggedOutLinks = () => {
    return (
      <>
        <NavLink className={getNavLinkClass} to="/create">
          Create post{" "}
        </NavLink>
        <NavLink to="/register" className={getNavLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={getNavLinkClass}>
          Login
        </NavLink>
      </>
    );
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/logout",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Goodbye! ");
        setUser(null);
        navigate("/login");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      toast.error("Logout failed. Please try again."); // Error toast
      console.error("Logout failed:", error);
    }
  };

  const LoggedInLinks = () => {
    const { role } = user;

    // TODO add create post back to

    return (
      <>
        {user.role === "author" && (
          <NavLink className={getNavLinkClass} to="/create">
            Create post
          </NavLink>
        )}
        <button className={getNavLinkClass} onClick={handleLogout}>
          Log out
        </button>
      </>
    );
  };
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-bg text-text py-6 py-lg-0"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <h1 className="text-2xl text-brand font-qs font-bold tracking-wider">
            GoWithSoph
          </h1>
          {user ? <p>Hey there, {user.name}!</p> : <p>Welcome back!</p>}
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          className="focus:outline-none focus:ring-0 border-0 text-brand"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bg-bg mt-6 px-4 pb-4 rounded-md px-lg-0 pb-lg-0 mt-lg-0"
        >
          <Nav className="ml-auto font-qs">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/blog" className={getNavLinkClass}>
              Blog
            </NavLink>
            {user ? <LoggedInLinks /> : <LoggedOutLinks />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
