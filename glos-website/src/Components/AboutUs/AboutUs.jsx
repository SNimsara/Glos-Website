import React from "react";
import "./AboutUs.css";
import about from "../../assets/about.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="topic">ABOUT US</h1>

      <div className="about-sec">
        <div className="a-img">
          <img src={about} alt="" />
        </div>

        <div className="a-para">
          <h5>About GLOS Jewelers</h5>
          <p>
            At GLOS Jewelers, we believe that jewelry is more than an accessory
            – it’s an expression of love, individuality, and timeless elegance.
            Founded to bring brilliance into every moment, our collections
            showcase exceptional craftsmanship and innovative designs. From
            radiant diamonds to exquisite custom creations, each piece is
            crafted to perfection, reflecting our commitment to quality and
            style. Our mission is to create jewelry that resonates with your
            unique story, whether it’s a symbol of love, a milestone
            celebration, or a cherished gift. With personalized service and
            unmatched attention to detail, we aim to make every visit a
            memorable experience. Discover the artistry of fine jewelry at GLOS
            Jewelers – where your dreams take shape in gold, silver, and
            precious stones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
