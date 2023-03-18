import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbarUser.css";
const NavbarUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
       {/* <img className="image"  src={logo}  alt="logo" /> */}
      <span className="nav-logo">DevLHB</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link  className="a"
        to="/home">Home</Link>
        <Link className="a"
        to="/about">About</Link>
        <Link className="a"
        to="/service">Service</Link>
        <Link className="a"
        to="/contact">Contact</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavbarUser;