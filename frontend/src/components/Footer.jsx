import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between ">
        <div className="sm:flex-col">
        <div className="flex flex-col items-center sm:items-start sm:m-5 ">
          <h1 className=" text-gigaRed font-bold">Giganoto</h1>
          <p className="text-md  text-left text  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Igniting your coding journey to unlock a limitless future of
            possibilities
          </p>
        </div>

        <div className="flex font-semibold flex-col items-center sm:items-start sm:m-5 sm:space-x-2 sm:flex-row ">
          <p className=" text-stone-400 font-bold">Follow Us</p>
          <a
            href="https://www.youtube.com/@KheraShanu"
            target="_blank"
            className="cursor-pointer hover:text-btnOrange  text-stone-400"
          >
            Youtube
          </a>
          <a
            href="https://twitter.com/kherashanu "
            target="_blank"
            className="cursor-pointer hover:text-btnOrange  text-stone-400"
          >
            Twitter
          </a>
          <a
            href="https://discord.gg/6ysMUnW2k3"
            target="_blank"
            className="cursor-pointer hover:text-btnOrange  text-stone-400"
          >
            Discord
          </a>
        </div>

        </div>

        <div className="flex flex-col items-center mt-5  sm:space-x-5 sm:flex-row sm:self-start sm:mr-5  ">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-btnOrange font-semibold"
          >Home
          </p>
          <p
            onClick={() => navigate("/dsa-sheet")}
            className="cursor-pointer hover:text-btnOrange font-semibold"
          >
            DsaSheet
          </p>
          <p
            onClick={() => navigate("/blogs")}
            className="cursor-pointer hover:text-btnOrange font-semibold"
          >
            Blogs
          </p>
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-btnOrange font-semibold"
          >
            Watari
          </p>
        </div>


      </div>
        <div className=" text-xs mt-5 text-stone-400 text-center mb-2">
          Copyright @2023 Giganoto All rights reserverd
        </div>
    </>
  );
}
