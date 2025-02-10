import React from "react";
import "./Home.css";
import bghome from "../../assets/bghome.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import homebg2 from "../../assets/homebg2.png";

const Home = () => {
  return (
    <div id="home" className="home">
      <div
        className="section1"
        style={{
          backgroundImage: `url(${bghome})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          width: "100%",
        }}
      >
        <h1 className="line1">Where Luxury Meets Radiance,</h1>
        <h1 className="line2">Every Piece a Masterpiece.</h1>

        <div className="buttons">
          <button className="h-button">Shop Now</button>
        </div>
      </div>

      <div className="best-selling">
        <h1 className="topic">BEST SELLING</h1>

        <div className="items">
          <div className="item-1">
            <h3 className="item-name">Sparkling Diamond Necklace</h3>
            <p className="item-p">
              This stunning diamond necklace captures the essence of
              sophistication and grace. Its brilliant sparkle is perfect for
              adding a touch of luxury to any occasion, making it the ideal
              choice for those who appreciate timeless beauty
            </p>
            <img src={img1} alt="" />
          </div>

          <div className="item-2">
            <img src={img2} alt="" />
            <h3 className="item-name">Gold Engagement Ring</h3>
            <p className="item-p">
              Crafted with precision, this gold engagement ring symbolizes
              everlasting love. The elegant design features a radiant center
              stone, capturing the heart’s deepest emotions and promising a
              future full of devotion
            </p>
          </div>
        </div>

        <div className="button">
          <button className="all-button">Discover More</button>
        </div>
      </div>

      <div
        className="section3"
        style={{
          backgroundImage: `url(${homebg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "450px",
          width: "100%",
        }}
      >
        <h1 className="line3">
          Create a Custom Jewelry That’s Uniquely Yours!
        </h1>
        <p className="line3-p">
          Your Style, Your Story – Let’s Create Jewelry as Unique as You!
        </p>

        <div className="buttons">
          <button className="line3-button">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
