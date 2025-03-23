import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />{" "}
          {/* Replace with actual logo path */}
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>
      </div>
      <ul className="navbar-right">
        <ul className="navbar-links">
          <li>
            <a href="#cart">Cart</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
