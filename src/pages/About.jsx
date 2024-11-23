import React from "react";
import { Link } from "react-router-dom";
import ServicesC from "../components/ServicesC"; // Adjust the path based on where your ServicesC component is
import {
  FaHammer,
  FaHome,
  FaHardHat,
  FaTools,
  FaPaintRoller,
  FaBuilding,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Enhanced Services Introduction */}
        <h1 className="text-4xl font-bold text-green-500 mb-8">What We Do</h1>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          At Armstrong Buildings, we offer a comprehensive range of construction
          services to suit both residential and commercial clients. With over 25
          years of experience in the industry, we understand that each project
          is unique and requires a tailored approach.
          <br />
          <br />
          Our services cover everything from{" "}
          <span className="font-bold text-green-500">
            brickwork and groundwork
          </span>{" "}
          to{" "}
          <span className="font-bold text-green-500">
            roofing, joinery, and plastering
          </span>
          . Whether you're looking for small renovations or large-scale
          commercial projects, our skilled team is equipped to handle it all.
          <br />
          <br />
          We ensure that all projects comply with the latest{" "}
          <span className="font-bold text-green-500">
            UK Building Regulations
          </span>
          , including safety standards such as{" "}
          <span className="font-bold text-green-500">BS 5534</span> (roofing)
          and <span className="font-bold text-green-500">Part L</span>{" "}
          (conservation of fuel and power). Our goal is to deliver exceptional
          craftsmanship, on time, and within budget, while adhering to
          sustainability practices and offering the best value for money.
        </p>

        {/* Icon-Based Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaHammer className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Brickwork</h3>
            <p className="text-gray-300">
              Expert masonry for durable structures.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaHardHat className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Groundwork</h3>
            <p className="text-gray-300">Foundation and earthwork services.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaHome className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Joinery</h3>
            <p className="text-gray-300">
              Custom woodwork for interiors and exteriors.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaTools className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Roofing</h3>
            <p className="text-gray-300">
              Durable and stylish roofing solutions.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaPaintRoller className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Plastering</h3>
            <p className="text-gray-300">
              Smooth and durable finishes for walls.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center">
            <FaBuilding className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">
              Commercial Fit-outs
            </h3>
            <p className="text-gray-300">Tailored solutions for businesses.</p>
          </div>
        </div>

        {/* Render the ServicesC Component */}
        <ServicesC />

        {/* Call-to-Action */}
        <div className="mt-12">
          <Link to="/contact">
            <button className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
