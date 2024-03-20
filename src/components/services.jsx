import React from "react";


function Services() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Recommendations
          </h2>
          <i class="fa-solid fa-hotel  h-[20px] w-50 mx-auto"></i>
          <p className="text-center  text-4xl font-bold"></p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Tourist Sites</p>
            <p className="py-2 border-b mx-8 mt-8">Hotels & Lodgings</p>
            <p className="py-2 border-b mx-8 mt-8">Restaurants & Eateries</p>
          </div>
          <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">
            Explore
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Travel Itineries
          </h2>
          <i class="fa-solid fa-plane h-[20px] w-50 mx-auto "></i>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Couples</p>
            <p className="py-2 border-b mx-8 mt-8">Families</p>
            <p className="py-2 border-b mx-8 mt-8">Groups</p>
          </div>
          <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">
            Explore
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
           Info On Discounts
          </h2>
          <i class="fa-solid fa-tags h-[20px] w-50 mx-auto"></i>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Airplane Tickets</p>
            <p className="py-2 border-b mx-8 mt-8">Hotels & Lodgings</p>
            <p className="py-2 border-b mx-8 mt-8">Hotels</p>
          </div>
          <button className="bg-[#00df9a] w-[200] rounded-md font-bold my-6 mx-auto py-3 text-black pl-2 pr-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
