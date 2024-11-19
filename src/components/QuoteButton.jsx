import { Link } from "react-router-dom";

export default function QuoteButton() {
  return (
    <>
      <Link to="/contact">
        <button className="rounded bg-green-600 py-2 px-6 font-bold text-white hover:bg-green-700">
          Get a Quote
        </button>
      </Link>
    </>
  );
}
