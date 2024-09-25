export default function Services() {
  const services = [
    "Brickwork and Groundwork",
    "Joinery and Roofing",
    "Landscaping and Driveways",
    "Plastering and Rendering",
    "Plumbing",
    "Roofing",
    "Electrician",
    "Commercial Fit-outs",
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-green-100 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold">{service}</h3>
            <p className="mt-2">
              Professional {service.toLowerCase()} services to meet your needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
