import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Newsletter from "../components/newsletter";
import Services from "../components/servicecards";
import Footer from "../components/footer";


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