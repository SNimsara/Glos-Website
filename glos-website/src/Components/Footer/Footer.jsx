import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-secs">
        <div className="f-sec1">
          <img src={logo} alt="" />
          <h4>GLOS Jewelers</h4>
          <div className="icons">
            <FontAwesomeIcon className="f-icon" icon={faFacebookF} />
            <FontAwesomeIcon className="f-icon" icon={faInstagram} />
            <FontAwesomeIcon className="f-icon" icon={faYoutube} />
          </div>
        </div>

        <div className="f-sec2">
          <ul className="footer-nav">
            <h4>Navigation</h4>
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

        <div className="f-sec3">
          <h4>Contact us</h4>
          <div className="c-row">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>No. 850, Galle Road, Colombo</p>
          </div>
          <div className="c-row">
            <FontAwesomeIcon icon={faPhone} />
            <p>0567829540</p>
          </div>
          <div className="c-row">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>glosjewelers@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="cr">
        © 2025 GLOS Jewelers By Nimsara Gunasekara. | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
