import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'
//npm install react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">

        {/* Sección del nombre del sitio y redes sociales */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">DroneFPV Shop</h3>
          <div className="flex space-x-4 text-xl">
            {/* Íconos de redes sociales */}
            <a href="#" className="hover:text-red-600 transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Enlaces de navegación del footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 md:w-3/4 justify-around">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Work With Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">Shopping Guide</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">How to Buy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Payment Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shipping & Delivery</a></li>
            </ul>
          </div>
        </div>

      </div>

      
      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} All rights reserved.
      </div> 
    </footer>
  );
};

export default Footer;