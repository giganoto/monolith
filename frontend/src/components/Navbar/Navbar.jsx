import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gigalogo from "../../assets/giga-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="navbar flex flex-row justify-between text-yellow-50 font-bold items-center relative">
      <div
        className="logo cursor-pointer mx-2 p-4 text-gigaRed flex flex-row items-center gap-2"
        onClick={() => navigate("/")}
      >
        <img src={gigalogo} alt="giganoto" />
        <h1 className="text-3xl">GIGANOTO</h1>
      </div>
      <div
        className={`bg-slate-600 absolute min-h-[30vh] w-full z-50 ${
          isOpen
            ? "opacity-100 top-[75px] duration-500"
            : "opacity-0 top-[-300%] duration-500"
        } md:max-w-xs md:relative md:min-h-[24px] lg:max-w-sm md:opacity-100 md:bg-transparent`}
      >
        <ul className="flex mx-7 my-3 flex-col gap-6 text-yellow-50 md:flex-row md:space-x-3 md:justify-between md:mx-0 md:my-0">
          <li
            onClick={() => handleMenuClick("/")}
            className="cursor-pointer hover:text-btnOrange"
          >
            Home
          </li>
          <li
            onClick={() => handleMenuClick("/blogs")}
            className="cursor-pointer hover:text-btnOrange"
          >
            Blogs
          </li>
          <li
            onClick={() => handleMenuClick("/dsa-sheet")}
            className="cursor-pointer hover:text-btnOrange"
          >
            DSA Sheet
          </li>
          <li
            onClick={() => handleMenuClick("/signin")}
            className="cursor-pointer hover:text-btnOrange md:hidden"
          >
            Sign In
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center items-center mx-2 p-4 md:mx-7">
        <button
          onClick={() => handleMenuClick("signin")}
          className="hidden md:inline-block px-5 py-2 bg-btnOrange rounded-full text-yellow-50"
        >
          Sign In
        </button>
        <div
          className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer md:hidden"
          onClick={handleClick}
        >
          <span
            className={`w-5 h-1 bg-yellow-50 mb-1 transition-all transform ${
              isOpen ? "-rotate-45 translate-y-2 w-6" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-1 bg-yellow-50 mb-1 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 h-1  bg-yellow-50 mb-1 transition-all ${
              isOpen ? "rotate-45 -translate-y-2 w-6" : ""
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
