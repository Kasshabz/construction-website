import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons
import axios from "axios"; // Import axios to make the POST request

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
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
            href="mailto:joe@armstrongbuildings.co.uk"
            className="text-green-500">
            Joe@armstrongbuildings.co.uk
          </a>
        </p>
        <p className="text-xl mb-12 text-white">
          Phone:{" "}
          <a href="tel:+441611234567" className="text-green-500">
            0161 123 4567
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
                className="w-full p-2 border border-gray-300 rounded mt-2 text-black"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                className="w-full p-2 border border-gray-300 rounded mt-2 text-black"
                placeholder="Your message"></textarea>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
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
