import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


function Gallery() {
  return (
  <>
  <Navbar/>
  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/564x/24/78/61/2478615ef04be45f3a39618198c3f9a9.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/736x/38/e5/c7/38e5c784036d0d789c37a50e3e634432.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/564x/23/42/28/234228b63d194c5ef728f9ad78fc258c.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/564x/82/b9/de/82b9de9d76c9ea36a4e56c30ae45b5ec.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.pinimg.com/564x/c5/2d/6b/c52d6b052e405eafd84d8876c044eb56.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </>
   
  );
}

export default Gallery;
