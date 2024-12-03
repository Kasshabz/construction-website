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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section: Phone */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+44 7387 500116"
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
        <div className="flex items-center justify-center space-x-4">
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
            href="https://www.linkedin.com/company/armstrong-buildings/"
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
