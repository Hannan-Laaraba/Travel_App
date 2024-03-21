import React from "react";
import { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";
import image1 from "../assets/heroimg.jpg";
import image2 from "../assets/pic1.jpg";
import image3 from "../assets/pic22.jpg";
import image4 from "../assets/pic3.jpg";
import image5 from "../assets/pic4.jpg";
import image6 from "../assets/pic5.jpg";
import image7 from "../assets/pic66.jpg";


const allImages = [image1,image2,image3,image4,image5,image6,image7];

function Hero() {
  const [images, setImages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevIndex) =>
        prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${allImages[images]})`,backgroundSize: 'cover',
        backgroundPosition: 'center',
                          
      }}
    >
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">JOURNEY WITH PURPOSE, WANDER WITH WONDER </p>
          <div className="flex justify-center items-center pl-2">
            <ReactTyped
              className="md:text-5xl sm:text-6xl text-2xl font-bold md:py-4 "
              strings={["Explore The World"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="text-xl font-bold py-4"> Unveiling Treasures At Every Turn</p>

          
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
