import React from "react";
import Navbar from "./Navbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <h1>This is footer</h1> */}
    </div>
  );
};

export default Base;
