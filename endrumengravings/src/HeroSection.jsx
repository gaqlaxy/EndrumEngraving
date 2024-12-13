import React, { useEffect } from "react";
import gsap from "gsap";
import GradientButton from "./GradientButton"; // Ensure the path is correct

const HeroSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // GSAP Animations for Heading
      const headingAnimation = gsap.fromTo(
        ".hero-heading",
        { opacity: 0, y: -100 }, // Starting state
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Final state
      );

      // GSAP Animation for Description
      const descriptionAnimation = gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // GSAP Animation for Button (directly target GradientButton)
      const buttonAnimation = gsap.fromTo(
        ".explore-button",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Cleanup GSAP animations on unmount
      return () => {
        headingAnimation.kill();
        descriptionAnimation.kill();
        buttonAnimation.kill();
      };
    }, 500); // Delay the animation trigger by 500ms

    return () => clearTimeout(timer);
  }, []);

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
          <h1
            className="hero-heading text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
            style={{ opacity: 0, transform: "translateY(-100px)" }} // Match GSAP initial state
          >
            Precision <span className="text-[#FFA500]">Meets</span> Artistry
          </h1>
          <p
            className="hero-description mt-4 text-lg md:text-xl text-gray-300"
            style={{ opacity: 0, transform: "translateY(50px)" }} // Match GSAP initial state
          >
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
