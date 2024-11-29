import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;