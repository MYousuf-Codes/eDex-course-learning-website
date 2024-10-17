import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-20">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">eDex</h2>
          <p className="text-gray-400 mb-2">Contact Us</p>
          <p className="text-gray-500">Call: +123 400 123</p>
          <p className="text-gray-500">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          </p>
          <p className="text-gray-500 mt-2">Email: example@mail.com</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-700 bg-white rounded-full p-2 hover:text-white hover:bg-blue-700 ">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-700 bg-white rounded-full p-2 hover:text-white hover:bg-blue-700 ">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 bg-white rounded-full p-2 hover:text-white hover:bg-blue-700 ">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-blue-700 bg-white rounded-full p-2 hover:text-white hover:bg-blue-700 ">
              <FaDribbble />
            </a>
            <a href="#" className="text-blue-700 bg-white rounded-full p-2 hover:text-white hover:bg-blue-700 ">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Course
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Category</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Photography
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Music
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum has been them an industry printer took a galley make book.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email here"
              className="w-full px-4 py-3 text-gray-800 bg-white rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 w-36 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
