import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Brickwork & Groundwork",
      image: "/images/ground-work1.jpg",
      description: "Top-quality bricklaying and groundwork.",
      moreInfo:
        "Every brick and groundwork project complies with UK building regulations, ensuring safety and durability. We offer bespoke solutions for your specific needs, using high-quality materials to deliver lasting results.",
    },
    {
      title: "Joinery & Roofing",
      image: "/images/roof.jpg",
      description: "Expert joinery and roofing services.",
      moreInfo:
        "Adhering to British Standards (BS 5534 for roofs and BS 5268 for timber structures), we offer tailored joinery and roofing services. Whether it’s a minor repair or a complete installation, our use of premium materials ensures a durable finish.",
    },
    {
      title: "Landscaping & Driveways",
      image: "/images/front-door.jpg",
      description: "Professional landscaping and driveway services.",
      moreInfo:
        "All landscaping and driveway installations are fully compliant with UK planning regulations. We design and build outdoor spaces that are both beautiful and practical, using top-tier materials to enhance your property’s value.",
    },
    {
      title: "Plastering & Rendering",
      image: "/images/stock-plastering.jpg",
      description: "High-quality plastering and rendering services.",
      moreInfo:
        "Our plastering and rendering work adheres to UK building standards, providing both aesthetic appeal and protection. We deliver tailored finishes that ensure long-lasting, smooth surfaces for both interior and exterior applications.",
    },
    {
      title: "Plumbing",
      image: "/images/plumbing-stock.jpg",
      description: "Reliable and efficient plumbing services.",
      moreInfo:
        "Meeting all British plumbing regulations, we provide expert plumbing solutions for repairs, installations, and maintenance. We ensure that water systems are safe, efficient, and tailored to the needs of each project.",
    },
    {
      title: "Commercial Fit-outs",
      image: "/images/commercial-image.jpg",
      description: "Custom commercial fit-out services.",
      moreInfo:
        "Fully compliant with UK building and safety regulations, we offer tailored commercial fit-out services that balance functionality and design. From offices to retail spaces, we ensure quality craftsmanship in every project.",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}>
      {/* Front of the card */}
      <div className="flip-card-front relative p-6 border rounded-lg shadow-lg bg-white overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-64 w-full object-cover rounded-lg mb-4"
        />
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
        <button className="mt-4 rounded bg-green-600 py-2 px-4 text-white hover:bg-green-700">
          Find Out More
        </button>
      </div>

      {/* Back of the card */}
      <div className="flip-card-back p-6 border rounded-lg shadow-lg bg-white">
        <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
        <p className="text-gray-800">{service.moreInfo}</p>
        <button
          className="mt-4 rounded bg-red-600 py-2 px-4 text-white hover:bg-red-700"
          onClick={() => setFlipped(false)}>
          Close
        </button>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          transition: transform 0.6s;
        }
        .flip-card-front {
          transform: rotateY(0deg);
        }
        .flip-card-back {
          transform: rotateY(180deg);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .flipped .flip-card-front {
          transform: rotateY(-180deg);
        }
        .flipped .flip-card-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}
