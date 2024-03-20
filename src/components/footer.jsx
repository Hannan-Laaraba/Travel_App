import React from "react";


function Footer(){

    return(
        <div  className=" bg-[#03161F] w-full py-10 text-white">
            <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">WayWander</h1>
                <p className="py-4"> Discover the World, One Journey at a Time. </p>
                <div className="flex justify-between md:wd-[75%] my-3">
                <a href="#"><i class="fa-brands fa-facebook text-4xl"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter text-4xl"></i></a>
                <a href="#"><i class="fa-brands fa-instagram text-4xl"></i></a>
                <a href="#"><i class="fa-brands fa-youtube text-4xl"></i></a>
                </div>
            </div>
            <div className="lg:col-span-3 flex justify-between">
                <div>
                    <h6 className="font-medium text-white">Home</h6>
                    <ul>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-white">Home</h6>
                    <ul>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-white">Home</h6>
                    <ul>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-white">Home</h6>
                    <ul>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">Home</li>
                    </ul>
                </div>
                <div className="font-medium text-white">
            <p>Copyright &copy;2024; Designed by <span className="text-[#00df9a] font-bold"> Hannan</span></p>
        </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;