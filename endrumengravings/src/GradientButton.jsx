import React, { useRef } from "react";
import { gsap } from "gsap";

const GradientButton = () => {
  const buttonRef = useRef(null);

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      backgroundPosition: "200% 0%",
      duration: 1,
      ease: "power1.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      backgroundPosition: "0% 0%",
      duration: 1,
      ease: "power1.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      className="relative bg-gradient-to-r from-[#C2C3C7] to-[#FFA500] text-white font-bold py-2 px-4 rounded overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundSize: "200% 200%",
        backgroundImage: "linear-gradient(to right, #C2C3C7, #FFA500)",
      }}
    >
      Get Quote
    </button>
  );
};

export default GradientButton;
