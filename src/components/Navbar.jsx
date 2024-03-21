import React from "react"; 
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <div className="bg-[#03161F]">
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]"> WayWander </h1>
            <ul className="flex">
                <li className=" hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><Link to={'/'}>Home</Link></li>
                <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><Link to={'/about'}>About</Link></li>
                <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><Link to={'/gallery'}>Gallery</Link></li>
                <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]"><Link to={'/servicecards'}>Services</Link></li>
                <li><button onClick={() => window.location = 'mailto:yourmail@domain.com'} className="hover:underline hover:underline-offset-8 hover:cursor-pointer p-4 hover:text-[#00df9a]">Contact</button></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;

 