import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Newsletter from "../components/about";
import Services from "../components/about";
import Footer from "../components/about";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Services />
      <Footer />
    </>
  );
}

export default Home;