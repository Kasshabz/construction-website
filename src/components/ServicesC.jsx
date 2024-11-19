import React, { useState } from "react";
import QuoteButton from "./QuoteButton";
import brickworkImage from "../assets/brick-work1.JPG";
import joineryImage from "../assets/joinery-roofing.JPG";
import landscapingImage from "../assets/front-door.jpg";
import plasteringImage from "../assets/plastering-rendering.jpg";
import plumbingImage from "../assets/arm-plumbing.jpg";
import commercialImage from "../assets/commercial-image.jpg";

export default function ServicesC() {
  const services = [
    {
      title: "Brickwork & Groundwork",
      image: brickworkImage,
      description: "Top-quality bricklaying and groundwork.",
      moreInfo:
        "Every brick and groundwork project complies with UK building regulations, ensuring safety and durability. We offer bespoke solutions for your specific needs, using high-quality materials to deliver lasting results.",
    },
    {
      title: "Joinery & Roofing",
      image: joineryImage,
      description: "Expert joinery and roofing services.",
      moreInfo:
        "Adhering to British Standards (BS 5534 for roofs and BS 5268 for timber structures), we offer tailored joinery and roofing services. Whether it’s a minor repair or a complete installation, our use of premium materials ensures a durable finish.",
    },
    {
      title: "Landscaping & Driveways",
      image: landscapingImage,
      description: "Professional landscaping and driveway services.",
      moreInfo:
        "All landscaping and driveway installations are fully compliant with UK planning regulations. We design and build outdoor spaces that are both beautiful and practical, using top-tier materials to enhance your property’s value.",
    },
    {
      title: "Plastering & Rendering",
      image: plasteringImage,
      description: "High-quality plastering and rendering services.",
      moreInfo:
        "Our plastering and rendering work adheres to UK building standards, providing both aesthetic appeal and protection. We deliver tailored finishes that ensure long-lasting, smooth surfaces for both interior and exterior applications.",
    },
    {
      title: "Plumbing",
      image: plumbingImage,
      description: "Reliable and efficient plumbing services.",
      moreInfo:
        "Meeting all British plumbing regulations, we provide expert plumbing solutions for repairs, installations, and maintenance. We ensure that water systems are safe, efficient, and tailored to the needs of each project.",
    },
    {
      title: "Commercial Fit-outs",
      image: commercialImage,
      description: "Custom commercial fit-out services.",
      moreInfo:
        "Fully compliant with UK building and safety regulations, we offer tailored commercial fit-out services that balance functionality and design. From offices to retail spaces, we ensure quality craftsmanship in every project.",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FlipCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""} transform transition-transform duration-500 hover:scale-105`}
      onClick={() => setFlipped(!flipped)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: "300px",
        maxHeight: "400px",
        margin: "auto",
      }}>
      {/* Front of the card */}
      <div className="flip-card-front relative p-6 border rounded-lg shadow-lg bg-white overflow-hidden h-full">
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover rounded-lg mb-4"
        />
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
        <button
          className="mt-4 rounded bg-green-600 py-2 px-4 text-white hover:bg-green-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent flipping the card when clicking the button
            setFlipped(true);
          }}>
          Find Out More
        </button>
      </div>

      {/* Back of the card */}
      <div className="flip-card-back p-6 border rounded-lg shadow-lg bg-white flex flex-col items-start space-y-4 h-full">
        <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
        <p className="text-gray-800">{service.moreInfo}</p>

        {/* Quote Button - Primary CTA */}
        <QuoteButton />

        {/* Close Button - Secondary Action */}
        <button
          className="rounded bg-red-600 py-2 px-4 text-white hover:bg-red-700 w-25"
          onClick={(e) => {
            e.stopPropagation(); // Prevent flipping the card when clicking the button
            setFlipped(false);
          }}>
          Close
        </button>
      </div>
    </div>
  );
}
