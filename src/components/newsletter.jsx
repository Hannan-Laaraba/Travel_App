import React from "react";


function Newsletter(){
    return(
        <div className=" bg-[#03161F] w-full py-10 text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                <h1 className="md:text-2xl sm:text-2xl text-xl  py-2">Want tips on how to make your adventure memorable?</h1>
                <p>Sign up to our newsletter and keep travelling</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex row items-center jusify-between  w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email"/>
                        <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">Notify Me</button>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;