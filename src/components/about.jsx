import React from "react";
import Pic from "../assets/pic.png";

function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-[50%] lg:w-[40%]">
          <img className="w-full mx-auto my-4 pr-5" src={Pic} alt="About Us" />
        </div>
        <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
          <p className="text-[#00df9a] font-bold">What We Do</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            deserunt est magnam eaque, mollitia similique sit deleniti quod id
            assumenda dicta distinctio! Similique commodi error culpa accusantium
            eum sed.
          </p>
          <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
