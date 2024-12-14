import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2e2f33] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#FFA500] mb-4">
              EndrumEngravings
            </h2>
            <p className="text-sm">
              Precision engraving services for all your needs. Delivering
              artistry and craftsmanship.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">
              Contact Us
            </h3>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@metalengrave.com"
                className="hover:text-white transition"
              >
                info@metalengrave.com
              </a>
            </p>
            <p className="mt-2">
              <span className="font-semibold">Phone:</span> +123 456 7890
            </p>
            <p className="mt-2">
              <span className="font-semibold">Address:</span> 123 Engrave Lane,
              Craft City
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm">
              &copy; 2024 EndrumEngravings. All Rights Reserved.
            </p>
            <p className="text-sm mt-2">
              Developed by{" "}
              <span className="font-bold text-[#FAA500]">
                <a
                  href="https://www.linkedin.com/in/prakash1k96/"
                  target="_blank"
                >
                  Prakash
                </a>
              </span>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
