import React from "react";
import ServicesC from "../components/ServicesC"; // Adjust the path based on your ServicesC component location
import {
  FaHammer,
  FaHome,
  FaHardHat,
  FaTools,
  FaPaintRoller,
  FaBuilding,
} from "react-icons/fa";
import QuoteButton from "../components/QuoteButton";

export default function Services() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Enhanced Services Introduction */}
        <h1 className="text-3xl md:text-4xl font-bold text-gold text-center mb-8">
          What We Do
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
          Armstrong Buildings is a trusted family-run construction business with
          over <span className="font-bold text-gold">25 years</span> of
          experience. We specialize in delivering{" "}
          <span className="font-bold text-gold">high-quality</span> construction
          services across the{" "}
          <span className="font-bold text-gold">North West of England</span>.
          Our tailored solutions include{" "}
          <span className="font-bold text-gold">
            brickwork, groundwork, roofing, joinery, and plastering
          </span>
          , ensuring exceptional craftsmanship for every project.
          <br />
          <br />
          All our projects comply with{" "}
          <span className="font-bold text-gold">UK Building Regulations</span>,
          including essential safety standards such as{" "}
          <span className="font-bold text-gold">BS 5534</span> (roofing) and{" "}
          <span className="font-bold text-gold">Part L</span> (conservation of
          fuel and power). Whether it's small renovations or large-scale
          commercial projects, Armstrong Buildings ensures timely delivery,
          sustainability, and the best value for money.
        </p>

        {/* Icon-Based Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaHammer className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">Brickwork</h3>
            <p className="text-gray-400 text-sm">
              Expert masonry for durable and lasting structures.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaHardHat className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">Groundwork</h3>
            <p className="text-gray-400 text-sm">
              Solid foundations for every project.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaHome className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">Joinery</h3>
            <p className="text-gray-400 text-sm">
              Custom woodwork for functional and aesthetic appeal.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaTools className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">Roofing</h3>
            <p className="text-gray-400 text-sm">
              Reliable roofing solutions for every season.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaPaintRoller className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">Plastering</h3>
            <p className="text-gray-400 text-sm">
              Perfectly smooth finishes for walls and ceilings.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-md shadow-md text-center border border-gold">
            <FaBuilding className="text-gold text-4xl mb-2" />
            <h3 className="text-lg font-bold text-white">
              Commercial Fit-outs
            </h3>
            <p className="text-gray-400 text-sm">
              Tailored interior solutions for your business.
            </p>
          </div>
        </div>

        {/* Render the ServicesC Component */}
        <ServicesC />

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <QuoteButton />
        </div>
      </div>
    </section>
  );
}
