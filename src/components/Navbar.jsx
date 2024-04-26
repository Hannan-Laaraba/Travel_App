import React from "react"; 


function Navbar() {
    return (
        <div className="bg-[#03161F]">
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]"> WayWander </h1>
                <ul className="flex">
                    <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><a href="#home">Home</a></li>
                    <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><a href="#about">About</a></li>
                    <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><a href="#gallery">Gallery</a></li>
                    <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><a href="#services">Services</a></li>
                    <li  className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><a href="mailto:yourmail@domain.com">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;


 