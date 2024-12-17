import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      setSuccessMessage("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    // Clear the form and show success message
    setFormData({ name: "", email: "", message: "" });
    setError("");
    setSuccessMessage("Thank you! Your message has been sent.");
  };

  return (
    <section className="py-16 bg-[#2e2f33] text-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="contact1.jpg"
            alt="Contact us illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold  mb-6 text-center lg:text-left">
            Contact
            <span className="text-[#FFA500]"> Us</span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-2 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-sm mb-4">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-[#C2C3C7] to-[#D4AF37] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
