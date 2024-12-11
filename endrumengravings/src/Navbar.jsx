import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context for better React integration
    const ctx = gsap.context(() => {
      // Animation logic
      gsap.from(menuRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // Cleanup animation on unmount
    return () => ctx.revert();
  }, []); // No dependencies to ensure it runs once when the component mounts
  return (
    <>
      <header>
        <nav
          ref={menuRef}
          className="flex items-center justify-between mx-4 mt-4 "
        >
          <div className="logo">
            <img src="logo.png" alt="" className="w-20" />
          </div>
          <div className="menu_items">
            <ul className="flex gap-8 space-x-6">
              <li className="hover:text-[#FFA500] cursor-pointer">Home</li>
              <li className="hover:text-[#FFA500] cursor-pointer">Services</li>
              <li className="hover:text-[#FFA500] cursor-pointer">Portfolio</li>
              <li className="hover:text-[#FFA500] cursor-pointer">About</li>
              <li className="hover:text-[#FFA500] cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="cta_nav">
            <a
              href=""
              className="bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#C2C3C7]"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
