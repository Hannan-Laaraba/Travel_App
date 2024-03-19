import React from "react";
import { Typed } from "react-typed";
import Heroimg from "../assets/heroimg.jpg";

function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Heroimg})`,
      }}
    >
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">JOURNEY WITH PURPOSE, WANDER WITH WONDER </p>
          <h1 className="md:text-5xl sm:text-6xl text-2xl font-bold md:py-4">
            Explore The World
          </h1>
          <div className="flex justify-center items-center pl-2">
            <p className="text-xl font-bold py-4"> Unveiling Treasures </p>
            {/* <Typed
              className="text-xl font-bold "
              strings={["AT, EVERY, TURN"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
          </div>
          <p className="text-xl font-bold text-gray-500"></p>
          <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
