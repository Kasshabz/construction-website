import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/images/hero-image.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Add a darker overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Center the text and button */}
      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Armstrong Buildings</h1>
        <p className="text-lg leading-relaxed text-gray-200 mb-6">
          With over 25 years of experience in the construction industry, we are
          a trusted family-run business committed to delivering high-quality
          craftsmanship. As proud members of the Federation of Master Builders,
          we aim to set the standard for excellence in the North West. Our focus
          is on providing personalised service, ensuring that every project is
          completed to the highest standards and at a fair price.
        </p>

        {/* Green button linking to the Contact page */}
        <Link to="/contact">
          <button className="rounded bg-green-600 py-2 px-6 font-bold text-white hover:bg-green-700">
            Get a Quote
          </button>
        </Link>
      </div>
    </section>
  );
}
