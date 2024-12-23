"use client";

import React, { useEffect, useState } from "react";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./Testimonials";
import ReactLenis from "@studio-freight/react-lenis";
import Preloader from "./Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? ( // Show preloader while loading
        <Preloader />
      ) : (
        <ReactLenis root>
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </ReactLenis>
      )}
    </>
  );
}
