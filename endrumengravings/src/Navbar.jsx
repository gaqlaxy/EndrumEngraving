import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    
    const navAnimation = gsap.context(() => {
    
      gsap.from(menuRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => navAnimation.revert();
  }, []); 
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
              className="bg-[#FFA500] text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-[#C2C3C7]"
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
