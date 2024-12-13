import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#2e2f33] py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-[#FFA500]">Us</span>
          </h2>
          <p className="text-lg mb-4">
            We are a passionate team of engravers dedicated to bringing
            precision and artistry to every project. With years of experience in
            engraving on various materials such as gold, silver, and metal
            tools, we provide a unique touch to each piece, making them truly
            special.
          </p>
          <p className="text-lg">
            Our commitment to quality, craftsmanship, and customer satisfaction
            has made us a trusted name in the engraving industry. Whether it's
            for personal or professional purposes, we bring your vision to life
            with unparalleled skill and attention to detail.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-full">
          <img
            src="aboutimg.jpg"
            alt="About Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
