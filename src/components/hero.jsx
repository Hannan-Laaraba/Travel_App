import React from "react";
import { Typed } from "react-typed";


function Hero (){
    return(
        <div className="bg-cover bg-center bg-fixed bg-hero-image">
            <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className=" text-[#00df9a] font-bold p-2">BE ADVENTUROUS </p>
                <h1 className="md:text-7xl sm:text-6xl text-2xl font-bold md:py-6">Explore Mexico</h1>
                <div className="flex justify-center items-center pl-2">
                    <p className="text-xl font-bold py-4"> Unveiling Treasures </p>
                    <Typed className="text-xl font-bold " strings={[AT, EVERY, TURN]} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className="text-xl font-bold text-gray-500"></p>
                <button className="bg-[#00df9a] w-[200] rounded-md font-medium my-6 mx-auto py-3 text-black"> Book Travel</button>
            </div>
        </div>
        </div>
    )
}

export default Hero;