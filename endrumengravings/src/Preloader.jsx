// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// const Preloader = () => {
//   useEffect(() => {
//     // Reset all properties to ensure a clean start
//     gsap.set(".lightGold-slider", { x: "-100%" });
//     gsap.set(".lightGrey-slider", { x: "-100%" });
//     gsap.set(".white-slider", { x: "-100%" });
//     gsap.set(".hide", { opacity: 0, x: "-100%" });
//     gsap.set(".preloader", { x: "0%" });

//     // Animation timeline
//     const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

//     // Opening animations
//     tl.to(".lightGold-slider", { x: "-10%", duration: 1 });
//     tl.to(".lightGrey-slider", { x: "-20%", duration: 1.5 }, "-=1");
//     tl.to(".white-slider", { x: "-30%", duration: 1.5 }, "-=1");
//     tl.to(".hide", { x: "0%", duration: 2, opacity: 1 });

//     // Closing animation
//     tl.to(".preloader", {
//       x: "200%",
//       duration: 2.5,
//       onComplete: () => {
//         // Optionally remove the preloader from DOM for cleanup
//         const preloaderElement = document.querySelector(".preloader");
//         if (preloaderElement) {
//           preloaderElement.style.display = "none";
//         }
//       },
//     });
//   }, []);

//   return (
//     <div className="preloader">
//       <div className="prl-logo">
//         <h1 className="hide">Crafting Precision</h1>
//       </div>
//       <div className="lightGold-slider"></div>
//       <div className="lightGrey-slider"></div>
//       <div className="white-slider"></div>
//     </div>
//   );
// };

// export default Preloader;

import React, { useEffect } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  useEffect(() => {
    // Reset all properties to ensure a clean start
    gsap.set(".lightGold-slider", { x: "-100%" });
    gsap.set(".lightGrey-slider", { x: "-100%" });
    gsap.set(".white-slider", { x: "-100%" });
    gsap.set(".hide", { opacity: 0, x: "-100%" });
    gsap.set(".preloader", { x: "0%", opacity: 1 });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Opening animations
    tl.to(".lightGold-slider", { x: "-10%", duration: 1 });
    tl.to(".lightGrey-slider", { x: "-20%", duration: 1.5 }, "-=1");
    tl.to(".white-slider", { x: "-30%", duration: 1.5 }, "-=1");
    tl.to(".hide", { x: "0%", duration: 2, opacity: 1 });

    // Closing animation with opacity fade
    tl.to(".preloader", {
      x: "200%",
      duration: 2.5,
      opacity: 0, // Gradually fade out
      onComplete: () => {
        // Optionally remove the preloader from DOM for cleanup
        const preloaderElement = document.querySelector(".preloader");
        if (preloaderElement) {
          preloaderElement.style.display = "none";
        }
      },
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
