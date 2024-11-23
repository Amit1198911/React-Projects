import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <button onClick={(e) => logout()}>Logout</button>
          ) : (
            <button onClick={(e) => loginWithRedirect()}>Login</button>
          )}
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Signup
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 mt-4 text-center">
            <li>
              <a href="#home" className="block hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={(e) => logout()}>Logout</button>
              ) : (
                <button onClick={(e) => loginWithRedirect()}>Login</button>
              )}
            </li>
            <li>
              <Link
                to="/signup"
                className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mx-4"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
