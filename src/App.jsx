import React from "react";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Card from "./Cold/Caard";
import Achivments from "./components/Achivments";
import Catalog from "./components/Catalog";
import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Achivments />
      <Catalog />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
