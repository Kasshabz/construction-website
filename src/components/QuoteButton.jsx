import { Link } from "react-router-dom";

export default function QuoteButton() {
  return (
    <Link to="/contact">
      <button className="rounded bg-gold py-2 px-6 font-bold text-black hover:bg-yellow-600 hover:text-white transition-all duration-300">
        Get a Quote
      </button>
    </Link>
  );
}
