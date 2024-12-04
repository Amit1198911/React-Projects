import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HeroContent from "./component/HeroContent";
import About from "./component/About";
import ContactUs from "./component/Contact";
import TestimonialSection from "./component/Testimonials";
import Footer from "./component/Footer";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Navbar/>
            <Hero/>
            <HeroContent/>
            <Footer/>
            </>
          } >
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/testimonials" element={<TestimonialSection/>}>
          </Route>
          <Route path="/contact" element={<ContactUs/>}>
          </Route>

        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Hero />
      <HeroContent />
      <About />
      <TestimonialSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
