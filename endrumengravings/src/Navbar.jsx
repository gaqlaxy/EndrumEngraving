import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import GradientButton from "./GradientButton";

const Navbar = () => {
  const menuRef = useRef(null);

  // useEffect(() => {
  //   const navAnimation = gsap.context(() => {
  //     gsap.from(menuRef.current, {
  //       y: -50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   });

  //   return () => navAnimation.revert();
  // }, []);
  return (
    <>
      <header>
        <nav
          ref={menuRef}
          className="flex items-center justify-between mx-4 mt-4 pb-4  "
        >
          <div className="logo">
            {/* <img src="logo.png" alt="" className="w-20" /> */}
            <h1>Endrum Engravings</h1>
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
            <button
              className="quote-button"
              // Match GSAP initial state
            >
              Get Quote
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
