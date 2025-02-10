import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anc-link" offset={70} href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anc-link" offset={70} href="#collection">
            Collection
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anc-link" offset={70} href="#about">
            About Us
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anc-link" offset={70} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
