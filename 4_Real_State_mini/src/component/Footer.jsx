import React from "react";
import logo from "../Image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 py-12 text-white" id="footer">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 text-left">
          <a href="/" className="flex items-center mb-6">
            <img
              src={logo}
              className="h-16 w-16"
              alt="RESTATE Logo"
            />
            <span className="text-2xl font-bold pl-4">RESTATE</span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover your dream home with RESTATE. We provide professional services in real estate buying, selling, and consultation to make your journey seamless and enjoyable.
          </p>
        </div>

        {/* Menu Links */}
        <div className="w-full md:w-1/3 text-left">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-gray-300 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition duration-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-300 transition duration-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/3 text-left">
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Subscribe to our newsletter for the latest updates, tips, and insights in the real estate world.
          </p>
          <form className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-auto flex-grow p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider and Footer Note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RESTATE. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Designed with ❤️ by the RESTATE Team.
        </p>
      </div>
    </div>
  );
};

export default Footer;
