import React, { useState } from 'react';
import logo from '../Image/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent absolute dark:bg-gray-900 w-full z-20 custom-class">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 custom-class">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse custom-class">
          <img src={logo} className="h-20 custom-class w-20" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white custom-class">
            RESTATE
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse custom-class">
          <button
            type="button"
            className="text-black bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 custom-class"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only custom-class">Open main menu</span>
            <svg
              className="w-5 h-5 custom-class"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 custom-class ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 custom-class">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white text-xl bg-blue-400 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-blue-500 custom-class"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white text-xl rounded bg-gray-500 hover:bg-gray-700 md:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white-700 md:dark:hover:bg-transparent dark:border-gray-700 custom-class"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-white text-xl rounded bg-gray-500 hover:bg-gray-700 md:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white-700 md:dark:hover:bg-transparent dark:border-gray-700 custom-class"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 px-3 text-white text-xl rounded  bg-gray-500 hover:bg-gray-700 md:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white-700 md:dark:hover:bg-transparent dark:border-gray-700 custom-class"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
