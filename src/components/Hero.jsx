import React from "react";
import teamPic from "../assets/garden.jpg";
import logo from "../assets/Transparent Logo.png";
import QuoteButton from "./QuoteButton";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${teamPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Armstrong Buildings Logo"
          className="h-32 md:h-40 lg:h-48 w-auto"
        />

        {/* Call to Action */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Building Your Future
          </h1>
          <QuoteButton />
        </div>
      </div>
    </section>
  );
}
