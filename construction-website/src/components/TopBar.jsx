import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Phone */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+441611234567"
            className="flex items-center space-x-2 hover:text-green-500">
            <FaPhoneAlt />
            <span>07387 500116</span>
          </a>
        </div>

        {/* Middle Section: Email */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:joseph@armstrongbuildings.co.uk"
            className="flex items-center space-x-2 hover:text-green-500">
            <FaEnvelope />
            <span>joseph@armstrongbuildings.co.uk</span>
          </a>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/armstrong_building/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500">
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
