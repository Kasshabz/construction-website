import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    postcode: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    const { name, email, mobile, postcode, message } = formData;
    if (!name || !email || !mobile || !postcode || !message) {
      setStatusMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post(
        "https://construction-website-backend.onrender.com/send",
        formData
      );
      setStatusMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <section className="bg-black py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gold">
          Get In Touch With Us
        </h1>
        <p className="text-gray-300 text-lg mt-2">
          Have any questions? We’d love to hear from you.
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your mobile number"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your postcode"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your message"
                rows="4"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded">
              Submit
            </button>
          </form>
          {statusMessage && (
            <p
              className={`mt-4 font-bold ${
                statusMessage.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}>
              {statusMessage}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/armstrong_building/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition">
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition">
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
