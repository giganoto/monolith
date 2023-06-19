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
    <div className="flex justify-between text-yellow-50 font-bold items-center">
      <div
        className="cursor-pointer mx-2 p-4 text-gigaRed text-3xl flex items-center space-x-2"
        onClick={() => navigate("/")}
      >
        <img src={gigalogo} alt="giganoto" />
        <h1>GIGANOTO</h1>
      </div>
      <div
        className={`absolute bg-slate-600 min-h-[30vh] w-full  ${
          isOpen
            ? "opacity-100 top-[75px] duration-500"
            : "opacity-0 top-[-100%] duration-500"
        } md:opacity-100 md:top-[1.5rem] md:bg-transparent`}
      >
        <ul className="flex mx-7 my-3 flex-col gap-6 text-yellow-50 md:flex-row md:space-x-3 md:justify-center md:mx-0 md:my-0">
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
          <li className="cursor-pointer hover:text-btnOrange md:hidden">
            Sign Up
          </li>
        </ul>
      </div>
      <div className="flex mx-2 p-4 md:mx-7">
        <button className="hidden md:inline-block px-5 py-2 bg-btnOrange rounded-full text-yellow-50">
          Sign Up
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
