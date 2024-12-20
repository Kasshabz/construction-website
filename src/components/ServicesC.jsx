import React, { useState } from "react";
import QuoteButton from "./QuoteButton";
import brickworkImage from "../assets/new-roof.jpg";
import joineryImage from "../assets/venetian.JPG";
import landscapingImage from "../assets/groundwork-new.jpg";
import plumbingImage from "../assets/bathroom.jpg";
import commercialImage from "../assets/commercial-image.JPG";
import roofingImage from "../assets/lux-roofing.jpg"; // Add your roofing image

export default function ServicesC() {
  const services = [
    {
      title: "Building Services",
      image: brickworkImage,
      description: "Expert new builds, renovations, and loft conversions.",
      moreInfo: `
        - New Builds: Modern, energy-efficient designs tailored to your needs.
        - Extensions: Seamless integration with your existing structure.
        - Renovations: Transform your property with bespoke craftsmanship.
        - Loft Conversions: Maximize space with innovative solutions.
        - Brickwork: Durable and aesthetically pleasing bricklaying.
      `,
    },
    {
      title: "Premium Decor",
      image: joineryImage,
      description: "Elegant plastering, Venetian finishes, and more.",
      moreInfo: `
        - Plastering: Smooth, flawless walls for a premium finish.
        - Decorating: Stylish interior and exterior painting solutions.
        - Venetian Plaster: Luxurious, polished surfaces for standout designs.
        - Microcement: Durable, contemporary finishes for any space.
        - Rendering: Weather-resistant, beautiful exterior treatments.
      `,
    },
    {
      title: "Groundworks",
      image: landscapingImage,
      description: "Quality landscaping, driveways, and concrete finishes.",
      moreInfo: `
        - Impressed Concrete: Durable, visually striking surfaces.
        - Block Paving: Classic designs for driveways and patios.
        - Resin Finishes: Low-maintenance, slip-resistant beauty.
        - Astroturf: Perfectly green lawns year-round.
        - Landscaping: Transform your outdoor spaces into an oasis.
        - Driveways: Long-lasting, attractive entrance solutions.
      `,
    },
    {
      title: "Plumbing",
      image: plumbingImage,
      description: "24/7 plumbing and drainage services for your needs.",
      moreInfo: `
        - Boiler Services: Installation and maintenance for all types.
        - First & Second Fix Pipework: Precision for every phase.
        - Drainage: Reliable solutions for clean and functional systems.
        - 24/7 Emergency Service: Rapid response for urgent repairs.
      `,
    },
    {
      title: "Roofing",
      image: roofingImage,
      description: "Reliable and durable roofing solutions for every project.",
      moreInfo: `
        - New Roofs: High-quality materials for long-lasting results.
        - Roof Repairs: Quick and efficient solutions for leaks or damage.
        - Flat Roofs: Expertly installed for durability and function.
        - Slate and Tile: Classic designs with modern durability.
        - Insulation: Energy-efficient solutions for every roof type.
      `,
    },
    {
      title: "Commercial Fit-outs",
      image: commercialImage,
      description: "Tailored solutions for offices, hotels, and restaurants.",
      moreInfo: `
        - Restaurants: Functional, stylish dining spaces.
        - Offices: Custom layouts for productivity and comfort.
        - Flats: Modern interiors designed for practical living.
        - Showrooms: Showcase your products in style.
        - Hotels: Elegant designs for luxurious guest experiences.
      `,
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        maxWidth: "350px", // Adjust width for laptops
        margin: "auto",
      }}>
      {/* Front of the card */}
      <div
        className="flip-card-front relative border rounded-lg shadow-lg overflow-hidden h-full"
        style={{
          backgroundColor: "#000",
          color: "#FFFFFF",
        }}>
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gold">{service.title}</h3>
          <p className="text-white mt-2 text-sm">{service.description}</p>
          <button
            className="mt-4 rounded bg-gold py-2 px-4 text-black hover:bg-yellow-700"
            onClick={(e) => {
              e.stopPropagation(); // Prevent flipping the card when clicking the button
              setFlipped(true);
            }}>
            Find Out More
          </button>
        </div>
      </div>

      {/* Back of the card */}
      <div
        className="flip-card-back p-4 border rounded-lg shadow-lg flex flex-col items-start space-y-4 h-full"
        style={{
          backgroundColor: "#000",
          color: "#FFFFFF",
        }}>
        <h3 className="text-lg font-bold text-gold mb-2">{service.title}</h3>
        <ul className="list-disc pl-5 text-white text-sm">
          {service.moreInfo
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((item, idx) => (
              <li key={idx}>{item.trim()}</li>
            ))}
        </ul>
        <QuoteButton />
        <button
          className="rounded bg-red-600 py-1 px-3 text-white hover:bg-red-700 w-auto"
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
