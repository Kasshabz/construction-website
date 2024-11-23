import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import tilingImage from "../assets/tiling-image.JPG";
import backGarden from "../assets/back-garden.JPG";

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

    const { name, email, message } = formData;
    if (!name || !email || !message) {
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
    <section className="bg-black">
      {/* Hero Section */}

      <div className="relative h-40 md:h-48 lg:h-56">
        {/* Centered Text */}
        <div className="relative flex items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-500">
            Get In Touch With Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        {/* Contact Info */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            Have any questions? We’d love to hear from you.
          </p>
          <p className="text-lg text-gray-300">
            Email:{" "}
            <a
              href="mailto:joseph@armstrongbuildings.co.uk"
              className="text-green-500 hover:underline">
              joseph@armstrongbuildings.co.uk
            </a>
          </p>
          <p className="text-lg text-gray-300">
            Phone:{" "}
            <a
              href="tel:+44 7387 500116"
              className="text-green-500 hover:underline">
              07387 500116
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2 text-left">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message"
                rows="4"></textarea>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
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
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/armstrong_building/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition">
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition">
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
