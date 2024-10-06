import React from "react";

export default function About() {
  return (
    <section className="bg-black py-2">
      {" "}
      {/* Reduced padding further */}
      <div className="container mx-auto px-4 text-center">
        {/* Image of the company or team with full width and controlled height */}
        <div className="relative w-full max-h-[650px] mb-0">
          {" "}
          {/* Set image height to 650px, no margin-bottom */}
          <img
            src="/images/team-pic.jpg" // Replace with your image path
            alt="Armstrong Buildings Team"
            className="w-full h-auto max-h-[650px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* About the family-run business */}
        <h1 className="text-4xl font-bold text-white mt-2 mb-4">
          {" "}
          {/* Removed margin-bottom, added margin-top */}
          About Armstrong Buildings
        </h1>
        <p className="text-lg text-white mb-12 leading-relaxed mb-6">
          Armstrong Buildings is a family-run construction business with over 25
          years of industry experience. Based in the United Kingdom, we
          specialize in delivering high-quality construction services that
          adhere to all relevant UK building regulations, ensuring that every
          project is safe, compliant, and built to last. Our expertise covers
          residential and commercial projects throughout the North West, and we
          pride ourselves on offering tailored solutions to meet our clients'
          specific needs.
        </p>

        {/* UK Regulations Compliance */}
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          {" "}
          {/* Reduced margin */}
          Regulatory Compliance & Quality Assurance
        </h2>
        <p className="text-lg text-white mb-12 leading-relaxed mb-6">
          At Armstrong Buildings, we take UK construction regulations seriously.
          Our work complies with the latest standards, including{" "}
          <strong className="text-white">BS 5534</strong> (roofing) and{" "}
          <strong className="text-white">BS 5268</strong> (timber structures),
          ensuring that every project meets the highest safety and performance
          requirements.
        </p>

        {/* Mission statement */}
        <h2 className="text-3xl font-bold text-green-500 mb-4">Our Mission</h2>
        <p className="text-lg text-white mb-12leading-relaxed mb-6">
          Our mission at Armstrong Buildings is simple: to provide the highest
          level of construction services at competitive prices without
          sacrificing quality. We believe in building lasting relationships with
          our clients by exceeding expectations on every project.
        </p>
      </div>
    </section>
  );
}
