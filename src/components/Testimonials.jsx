import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Asif Khan",
      feedback:
        "Armstrong Buildings exceeded our expectations with their attention to detail and craftsmanship. Our new extension is perfect!",
    },
    {
      name: "Jonathan Davies",
      feedback:
        "Professional and reliable. Armstrong Buildings delivered everything on time and within budget. Highly recommend!",
    },
    {
      name: "Samantha Powell",
      feedback:
        "The team was fantastic, and they went above and beyond to make sure our house renovation was flawless.",
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gold rounded-lg shadow-lg bg-gray-900">
              <p className="italic text-gray-300 mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="font-bold text-gold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
