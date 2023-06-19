import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="logo" onClick={() => navigate("/")}>
        <h1>GIGANOTO</h1>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Navbar;
