import React from "react";
// import './TestimonialStyles.css'; // Import the CSS file for styles

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Company X",
    text: "This company exceeded our expectations! The engraving quality is top-notch.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director, Brand Y",
    text: "An amazing experience! The attention to detail was exceptional.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Product Manager, Tech Z",
    text: "Highly recommend! The custom engraving service is perfect for our needs.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bob Martin",
    title: "Founder, Studio A",
    text: "Incredible work! Our product looks amazing, and the service was fast and efficient.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "Designer, Design Co.",
    text: "Exceptional craftsmanship and attention to detail. Highly recommend this team.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Michael Lee",
    title: "Engineer, TechCorp",
    text: "We have worked with many engraving companies, but this one stands out for its quality and precision.",
    photo: "https://via.placeholder.com/150",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">
        What Our <span className="text-[#FFA500]">Clients</span> Say
      </h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              className="testimonial-img"
              src={testimonial.photo}
              alt={testimonial.name}
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
