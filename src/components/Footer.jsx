import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-green-600 py-6">
      <div className="container mx-auto text-center text-white">
        {/* Company Info */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Armstrong Buildings</h2>
          <p className="text-gray-200">
            Building Your Future, One Project at a Time
          </p>{" "}
          {/* Adjust text color for better contrast */}
        </div>

        {/* Contact Info */}
        <div className="mb-4">
          <p>
            Email:{" "}
            <a
              href="mailto:joe@armstrongbuildings.co.uk"
              className="text-white hover:text-gray-200">
              Joseph@armstrongbuildings.co.uk
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+44 7387 500116"
              className="text-white hover:text-gray-200">
              07387 500116
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/armstrong_building/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="mb-4">
          <a href="/" className="text-white hover:text-gray-200 px-2">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-200 px-2">
            About Us
          </a>
          <a href="/services" className="text-white hover:text-gray-200 px-2">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-gray-200 px-2">
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-200">
          © 2024 Armstrong Buildings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
