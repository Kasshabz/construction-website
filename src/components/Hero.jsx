import QuoteButton from "./QuoteButton";
import teamPic from "../assets/team-pic.JPG";

export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${teamPic})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Add a darker overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Center the text and button */}
      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Armstrong Buildings</h1>
        <p className="text-lg leading-relaxed text-gray-200 mb-6">
          With over 25 years of experience in construction, Armstrong Buildings
          is a trusted family-run business specializing in high-quality
          craftsmanship for residential and commercial projects. As proud
          members of the Federation of Master Builders, we are dedicated to
          setting the standard for construction excellence in the North West of
          England. Our focus is on delivering tailored construction services,
          from brickwork and groundwork to roofing and joinery, ensuring every
          project meets the highest standards of quality and compliance with UK
          building regulations. At Armstrong Buildings, we believe in offering
          exceptional value, combining competitive pricing with unparalleled
          customer service to create structures that stand the test of time.
        </p>

        <QuoteButton />
        
      </div>
    </section>
  );
}
