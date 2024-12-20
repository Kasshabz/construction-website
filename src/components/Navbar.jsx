import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Transparent Logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-black text-white p-6 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Armstrong Buildings Logo"
              className="h-16 w-auto transition-transform duration-300 hover:scale-110" // Increased height
            />
          </Link>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-300 flex items-center space-x-2">
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Menu for Larger Screens */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Dropdown for Mobile */}
        {dropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg z-50 md:hidden">
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-gold"
              onClick={() => setDropdownOpen(false)}>
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-gold"
              onClick={() => setDropdownOpen(false)}>
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-gold"
              onClick={() => setDropdownOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Phone */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <FaPhoneAlt className="text-gold" />
            <a href="tel:+447387500116" className="hover:text-gold transition">
              +44 7387 500116
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <FaEnvelope className="text-gold" />
            <a
              href="mailto:info@armstrongbuildings.co.uk"
              className="hover:text-gold transition">
              info@armstrongbuildings.co.uk
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/armstrong_building/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold">
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold">
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
