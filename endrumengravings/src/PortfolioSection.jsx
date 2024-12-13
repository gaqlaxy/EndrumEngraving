import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

const projects = [
  {
    id: 1,
    title: "Gold Ring Engraving",
    image: "img1.jpg",
    description: "Intricate patterns on gold rings.",
  },
  {
    id: 2,
    title: "Silver Bracelet Design",
    image: "img2.jpg",
    description: "Elegant engravings on bracelets.",
  },
  {
    id: 3,
    title: "Metal Tool Markings",
    image: "img3.jpg",
    description: "Professional branding on tools.",
  },
  {
    id: 4,
    title: "Custom USB Engravings",
    image: "img4.jpg",
    description: "Personalized designs on pendrives.",
  },
  {
    id: 5,
    title: "Name Board Engravings",
    image: "img5.jpg",
    description: "Personalized designs on nameboards.",
  },
];

const PortfolioSection = () => {
  return (
    <div className="bg-[#2e2f33] py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12 portfolio-title">
        Our <span className="text-[#FFA500]">Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card group relative rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col justify-center items-center h-full text-white px-4 text-center">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform">
          View All Work
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
