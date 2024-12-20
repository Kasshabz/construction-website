import React from "react";
import { Link } from "react-router-dom"; // React Router Link
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-center text-white px-4">
        {/* Company Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gold">Armstrong Buildings</h2>
          <p className="text-gray-400">
            Building Your Future, One Project at a Time
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <p>
            Email:{" "}
            <a
              href="mailto:joe@armstrongbuildings.co.uk"
              className="text-gold hover:text-white">
              info@armstrongbuildings.co.uk
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+44 7387 500116"
              className="text-gold hover:text-white">
              +44 7387 500116
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/armstrong_building/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/armstrong-buildings/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <Link to="/" className="text-gold hover:text-white px-2">
            Home
          </Link>
          <Link to="/about" className="text-gold hover:text-white px-2">
            About Us
          </Link>
          <Link to="/services" className="text-gold hover:text-white px-2">
            Services
          </Link>
          <Link to="/contact" className="text-gold hover:text-white px-2">
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2024 Armstrong Buildings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
