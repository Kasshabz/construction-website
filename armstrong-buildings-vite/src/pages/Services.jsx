import React from "react";
import ServicesC from "../components/ServicesC"; // Adjust the path based on where your ServicesC component is

export default function Services() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Enhanced Services Introduction */}
        <h1 className="text-4xl font-bold text-white mb-8">What We Do</h1>
        <p className="text-lg text-white mb-12 leading-relaxed">
          At Armstrong Buildings, we offer a comprehensive range of construction
          services to suit both residential and commercial clients. With over 25
          years of experience in the industry, we understand that each project
          is unique and requires a tailored approach.
          <br />
          <br />
          Our services cover everything from{" "}
          <strong>brickwork and groundwork</strong> to{" "}
          <strong>roofing, joinery, and plastering</strong>. Whether you're
          looking for small renovations or large-scale commercial projects, our
          skilled team is equipped to handle it all.
          <br />
          <br />
          We ensure that all projects comply with the latest{" "}
          <strong>UK Building Regulations</strong>, including safety standards
          such as <strong>BS 5534</strong> (roofing) and <strong>Part L</strong>{" "}
          (conservation of fuel and power). Our goal is to deliver exceptional
          craftsmanship, on time, and within budget, while adhering to
          sustainability practices and offering the best value for money.
        </p>

        {/* Render the ServicesC Component */}
        <ServicesC />
      </div>
    </section>
  );
}
