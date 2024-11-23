import React from "react";
import heroImage from "../assets/hero-image.JPG";
import { FaTools, FaCheckCircle, FaUserTie } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Full-width Hero Image */}
        <div className="relative w-full max-h-[650px] mb-8">
          <img
            src={heroImage}
            alt="Armstrong Buildings Team"
            className="w-full h-auto max-h-[650px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* About the family-run business */}
        <div className="p-4 mb-6 border border-green-500 rounded-md shadow-md bg-gray-800 animate-fadeIn">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            About Armstrong Buildings
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Armstrong Buildings is a family-run construction business with over
            25 years of industry experience. Based in the United Kingdom, we
            specialize in delivering high-quality construction services that
            adhere to all relevant UK building regulations, ensuring that every
            project is safe, compliant, and built to last. Our expertise covers
            residential and commercial projects throughout the North West, and
            we pride ourselves on offering tailored solutions to meet our
            clients' specific needs.
          </p>
        </div>

        {/* Section Divider */}
        <hr className="my-8 border-green-500 opacity-50" />

        {/* Icon-Based Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center animate-slideUp">
            <FaTools className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">
              Expert Craftsmanship
            </h3>
            <p className="text-gray-300">
              Over 25 years of delivering top-quality construction projects.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center animate-slideUp">
            <FaCheckCircle className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">
              Regulatory Compliance
            </h3>
            <p className="text-gray-300">
              All work adheres to UK building regulations for safety and
              quality.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-md shadow-md text-center animate-slideUp">
            <FaUserTie className="text-green-500 text-4xl mb-2" />
            <h3 className="text-xl font-bold text-white">Tailored Solutions</h3>
            <p className="text-gray-300">
              Customized services to meet the unique needs of every client.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <hr className="my-8 border-green-500 opacity-50" />

        {/* Regulatory Compliance */}
        <div className="p-4 mb-6 border border-green-500 rounded-md shadow-md bg-gray-800 animate-fadeIn">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Regulatory Compliance & Quality Assurance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Armstrong Buildings, we take UK construction regulations
            seriously. Our work complies with the latest standards, including{" "}
            <strong className="font-bold text-green-500">BS 5534</strong>{" "}
            (roofing) and{" "}
            <strong className="font-bold text-green-500">BS 5268</strong>{" "}
            (timber structures), ensuring that every project meets the highest
            safety and performance requirements.
          </p>
        </div>

        {/* Section Divider */}
        <hr className="my-8 border-green-500 opacity-50" />

        {/* Mission Statement */}
        <div className="p-4 mb-6 border border-green-500 rounded-md shadow-md bg-gray-800 animate-fadeIn">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission at Armstrong Buildings is simple: to provide the highest
            level of construction services at competitive prices without
            sacrificing quality. We believe in building lasting relationships
            with our clients by exceeding expectations on every project.
          </p>
        </div>
      </div>
    </section>
  );
}
