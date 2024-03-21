import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Gallery from "../src/pages/gallery";
import Home from "./pages/home";
import ServiceCards from "./components/servicecards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/servicecards" element={<ServiceCards />} />
      </Routes>
    </Router>
  );
}

export default App;
