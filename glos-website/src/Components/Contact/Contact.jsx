import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="topic">CONTACT US</h1>
      <div className="contact-secs">
        <div className="contact-sec1">
          <h4>GLOS JEWELERS COLOMBO</h4>
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
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </div>
        </div>

        <div className="contact-sec2">
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="   Enter your name" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="   Enter your email" />
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="   Enter your phone number" />
            <label htmlFor="">Message</label>
            <textarea placeholder="  Enter your message" rows={6}></textarea>
            <div className="button">
              <button className="form-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
