import React, { useEffect } from "react";

import { gsap } from "gsap";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".lightGold-slider", {
      x: "-10%",
      duration: 1,
    });

    tl.to(
      ".lightGrey-slider",
      {
        x: "-20%",
        duration: 1.5,
      },
      "-=1"
    );

    tl.to(
      ".white-slider",
      {
        x: "-30%",
        duration: 1.5,
      },
      "-=1"
    );

    tl.to(".hide", {
      x: "0%",
      duration: 2,
      opacity: 1,
    });

    tl.to(".preloader", {
      x: "200%",
      duration: 3,
    });
  }, []);

  return (
    <div className="preloader">
      <div className="prl-logo">
        <h1 className="hide">Crafting Precision</h1>
      </div>
      <div className="lightGold-slider"></div>
      <div className="lightGrey-slider"></div>
      <div className="white-slider"></div>
    </div>
  );
};

export default Preloader;
