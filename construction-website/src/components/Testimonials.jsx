import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Asif Khan",
      feedback:
        "Armstrong Buildings exceeded our expectations with their attention to detail and craftsmanship. Our new extension is perfect!",
    },
    {
      name: "Kaswara Shabuo",
      feedback:
        "Professional and reliable. Armstrong Buildings delivered everything on time and within budget. Highly recommend!",
    },
    {
      name: "Malachi Liburd",
      feedback:
        "The team was fantastic, and they went above and beyond to make sure our house renovation was flawless.",
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-gray-800">
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-bold text-green-500">
                {testimonial.name}
              </h3>{" "}
              {/* Green text for names */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
