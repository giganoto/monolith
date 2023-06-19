import React from "react";
import watari from "../../assets/watari.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col my-10 md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl mb-5 text-left mx-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Igniting your coding journey to unlock a limitless future of
            possibilities
          </h1>
          <p className="text-stone-400 mx-6 text-left mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            consequatur soluta, assumenda repellendus omnis voluptas
            reprehenderit recusandae maxime in eum placeat corrupti earum
            tempore. Distinctio dicta cumque architecto nobis maiores.
          </p>
        </div>
        <div className="flex w-full     justify-center md:justify-end md:mx-6">
          <img src={watari} alt="watari" className="" />
        </div>
      </div>
    </>
  );
};

export default Home;
