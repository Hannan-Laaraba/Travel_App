import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Newsletter from "./components/newsletter";
import Services from "./components/services";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Newsletter/>
     <Services/>
    </>
  );
}

export default App;
