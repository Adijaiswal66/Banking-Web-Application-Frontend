import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../img/bgImage.jpg";
import bgImage1 from "../img/bgImage1.jpg";

function Home() {
  const style = {
    backgroundImage: `url(${bgImage1})`,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundRepeat: "no-repeat", // Prevents repeating the image
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Full viewport height
    width: "100%", // Full viewport width
  };
  return (
    <div style={style}>
      <Navbar />
    </div>
  );
}

export default Home;
