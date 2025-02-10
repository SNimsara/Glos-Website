import React from "react";
import "./Collection.css";
import cimg1 from "../../assets/cimg1.jpeg";
import cimg2 from "../../assets/cimg2.jpeg";
import cimg3 from "../../assets/cimg3.jpeg";
import cimg4 from "../../assets/cimg4.jpeg";
import cimg5 from "../../assets/cimg5.jpeg";
import cimg6 from "../../assets/cimg6.jpeg";
import cimg7 from "../../assets/cimg7.jpeg";
import cimg8 from "../../assets/cimg8.jpeg";

const Collection = () => {
  return (
    <div id="collection" className="collection">
      <h1 className="topic">OUR COLLECTION</h1>

      <div className="c-section">
        <div className="c-sec1">
          <div className="card">
            <img src={cimg1} alt="" />
            <h5>Rose Gold Glow</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg2} alt="" />
            <h5>Flare Earrings</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg3} alt="" />
            <h5>Luna Pendant</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg4} alt="" />
            <h5>Celeste Ring</h5>
            <button>View Details &gt; </button>
          </div>
        </div>

        <div className="c-sec2">
          <div className="card">
            <img src={cimg5} alt="" />
            <h5>Diamond Earring</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg6} alt="" />
            <h5>Aurora Chain</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg7} alt="" />
            <h5>Golden Bloom</h5>
            <button>View Details &gt; </button>
          </div>

          <div className="card">
            <img src={cimg8} alt="" />
            <h5>Solstice Hoops </h5>
            <button>View Details &gt; </button>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="all-button">Discover More</button>
      </div>
    </div>
  );
};

export default Collection;
