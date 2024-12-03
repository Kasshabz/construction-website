import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white flex justify-between items-center p-6">
      <Link to="/" className="text-xl font-bold">
        Armstrong Buildings
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
