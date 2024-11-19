import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    // Front-end Validation
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatusMessage("All fields are required.");
      return;
    }

    // Email validation regex
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
      <div className="container mx-auto px-4 text-center">
        {/* Contact Info */}
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

        <p className="text-xl mb-4 text-white">
          Email:{" "}
          <a
            href="mailto:joseph@armstrongbuildings.co.uk"
            className="text-green-500">
            joseph@armstrongbuildings.co.uk
          </a>
        </p>
        <p className="text-xl mb-12 text-white">
          Phone:{" "}
          <a href="tel:+441611234567" className="text-green-500">
            07387 500116
          </a>
        </p>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-black bg-opacity-75 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required // HTML5 validation for required field
                className="w-full p-2 border border-gray-300 rounded mt-2 text-black"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email" // Ensures email format validation
                name="email"
                value={formData.email}
                onChange={handleChange}
                required // HTML5 validation for required field
                className="w-full p-2 border border-gray-300 rounded mt-2 text-black"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required // HTML5 validation for required field
                className="w-full p-2 border border-gray-300 rounded mt-2 text-black"
                placeholder="Your message"></textarea>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
          {/* Status Message */}
          {statusMessage && (
            <p
              className={`mt-4 font-bold ${statusMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
              {statusMessage}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/armstrong_building/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500">
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500">
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
