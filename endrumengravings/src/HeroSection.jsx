import React, { useEffect } from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-4">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 backdrop-blur-lg"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div>
          <h1 className="hero-heading text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Precision <span className="text-[#FFA500]">Meets</span> Artistry
          </h1>
          <p className="hero-description mt-4 text-lg md:text-xl text-gray-300">
            Expert engraving services for tools, gold, silver, and more.
          </p>
          <div className="mt-8">
            <button
              className="explore-button"
              // Match GSAP initial state
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
