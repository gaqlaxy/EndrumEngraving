import React from "react";
import { useInView } from "react-intersection-observer";
import { FaTools, FaGem } from "react-icons/fa";
import { BsUsbDriveFill } from "react-icons/bs";

const ServicesSection = () => {
  const { ref: serviceRef1, inView: inView1 } = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  const { ref: serviceRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: serviceRef3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-8">
          Our Engraving Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We specialize in high-quality engraving for metal tools, jewelry, and
          more.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div
            ref={serviceRef1}
            className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform ${
              inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} // Applying animation on in-view
          >
            <div className="text-[#D4AF37] text-4xl mb-4">
              <FaTools />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Metal Tool Engraving
            </h3>
            <p className="text-gray-600 mb-4">
              Precision engraving on metal tools, ensuring durability and
              clarity.
            </p>
            <button className="bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div
            ref={serviceRef2}
            className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform ${
              inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-[#D4AF37] text-4xl mb-4">
              <FaGem />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Jewelry Engraving
            </h3>
            <p className="text-gray-600 mb-4">
              Elegant and precise engraving for all types of jewelry, including
              rings and necklaces.
            </p>
            <button className="bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>

          {/* Service 3 */}
          <div
            ref={serviceRef3}
            className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform ${
              inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-[#D4AF37] text-4xl mb-4">
              <BsUsbDriveFill />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              USB Drive Engraving
            </h3>
            <p className="text-gray-600 mb-4">
              Personalize your USB drives with custom engravings for gifts or
              branding.
            </p>
            <button className="bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
