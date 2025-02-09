import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Collection from "./Components/Collection/Collection";
import AboutUs from "./Components/AboutUs/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Collection />
      <AboutUs />
    </div>
  );
};

export default App;
