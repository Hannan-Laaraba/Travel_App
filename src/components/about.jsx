import React from "react";
import Pic from "../assets/pic.jpg";


function About (){
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Pic} alt="/"/>
            </div>
            <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">What We Do</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"></h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum deserunt est magnam eaque, mollitia similique sit deleniti quod id assumenda dicta distinctio! Similique commodi error culpa accusantium eum sed.</p>
            <button className="bg-[#00df9a] w-[200] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black"> Explore</button>
            </div>
        </div>
    )
}

export default About;