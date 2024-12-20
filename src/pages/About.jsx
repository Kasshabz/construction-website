import React from "react";
import heroImage from "../assets/hero-image.JPG";
import { FaTools, FaCheckCircle, FaUserTie } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={heroImage}
              alt="Armstrong Buildings Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section with Gold Border */}
          <div className="w-full lg:w-1/2 border border-gold p-6 rounded-lg bg-gray-800">
            <h2 className="text-3xl font-bold text-gold mb-4">
              About Armstrong Buildings
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Armstrong Buildings is a trusted family-run construction company
              with over 25 years of experience in the construction industry.
              Based in the United Kingdom, we specialize in delivering
              high-quality construction services that meet all UK building
              regulations, ensuring safety, compliance, and durability in every
              project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Armstrong Buildings prides itself on providing tailored
              construction solutions designed to meet the unique needs of our
              clients. Whether it's groundwork, roofing, or custom-fit projects,
              we are committed to delivering exceptional craftsmanship and
              outstanding customer satisfaction.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gold opacity-50" />

        {/* Icon-Based Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expert Craftsmanship */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-gold">
            <FaTools className="text-gold text-4xl mb-2" />
            <h3 className="text-xl font-bold text-gold">
              Expert Craftsmanship
            </h3>
            <p className="text-gray-300">
              Over 25 years of delivering top-quality construction projects.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-gold">
            <FaCheckCircle className="text-gold text-4xl mb-2" />
            <h3 className="text-xl font-bold text-gold">
              Regulatory Compliance
            </h3>
            <p className="text-gray-300">
              All work adheres to UK building regulations for safety and
              quality.
            </p>
          </div>

          {/* Tailored Solutions */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-gold">
            <FaUserTie className="text-gold text-4xl mb-2" />
            <h3 className="text-xl font-bold text-gold">Tailored Solutions</h3>
            <p className="text-gray-300">
              Customized services to meet the unique needs of every client.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gold opacity-50" />

        {/* Regulatory Compliance Section with Gold Border */}
        <div className="p-6 border border-gold rounded-lg bg-gray-800 text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">
            Regulatory Compliance & Quality Assurance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Armstrong Buildings, we take UK construction regulations
            seriously. Our work complies with the latest standards, including{" "}
            <strong className="text-gold">BS 5534</strong> (roofing) and{" "}
            <strong className="text-gold">BS 5268</strong> (timber structures),
            ensuring that every project meets the highest safety and performance
            requirements.
          </p>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gold opacity-50" />

        {/* Mission Statement with Gold Border */}
        <div className="p-6 border border-gold rounded-lg bg-gray-800 text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Our Mission</h2>
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
