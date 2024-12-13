import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // To track submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // To track submitting state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (e.g., API request)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false); // Hide success message after resetting
      }, 2000);
    }, 1500); // Simulating API request delay
  };

  return (
    <div className="py-16 px-6 bg-[#2e2f33]">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Contact Us
      </h2>
      {isSubmitted ? (
        <div className="text-center text-white">
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-gray-700 text-white rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 bg-gray-700 text-white rounded-lg"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 mt-6 bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white font-semibold rounded-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactSection;
