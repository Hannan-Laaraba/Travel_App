import React from "react"; 

function Navbar () {
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]"> WayWander </h1>
            <ul className="flex">
                <li className=" p-4 hover:text-[#00df9a]">Home</li>
                <li className="p-4 hover:text-[#00df9a]">About</li>
                <li className="p-4 hover:text-[#00df9a]">Gallery</li>
                <li className="p-4 hover:text-[#00df9a]">Services</li>
                <li className="p-4 hover:text-[#00df9a]">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;