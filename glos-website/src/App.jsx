import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Collection from "./Components/Collection/Collection";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Collection />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default App;
