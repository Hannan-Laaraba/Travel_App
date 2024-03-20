import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
 import Newsletter from "./components/newsletter";
 import Services from "./components/services";
 import Footer from "./components/footer";
// import Gallery from "../src/pages/gallery";
// import Services from "./components/services";
// import { createBrowserRouter } from "react-router-dom";


// const router = createBrowserRouter ([
//   {path:'/', element: <Hero />},
//   {path:'/about', element: < About/>},
//   {path:'/gallery', element: <Gallery/>},
//   {path:'/services', element: <Services/>}
// ])


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Newsletter/>
     <Services/>
     <Footer/>
    </>
  );
}

export default App;
