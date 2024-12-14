import React from "react";

const services = [
  {
    id: 1,
    title: "Engraving on Metals",
    description: "Detailed engraving on various metals like steel and iron.",
    icon: "🔧",
  },
  {
    id: 2,
    title: "Gold Engravings",
    description: "Elegant and precise engravings on gold jewelry.",
    icon: "✨",
  },
  {
    id: 3,
    title: "Silver Markings",
    description: "Beautiful designs engraved on silver products.",
    icon: "💍",
  },
  {
    id: 4,
    title: "Custom USB Engravings",
    description: "Personalized USB designs for gifts and branding.",
    icon: "📀",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#2e2f33] text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FFA500] mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
