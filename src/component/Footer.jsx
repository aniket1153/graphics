import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import img1 from "../assets/11Sunirman Logo_.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <img src={img1} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm">
            Building modern, user-friendly web solutions to empower your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white">Cloud Solutions</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect with Us</h3>
          <div className="flex space-x-4 mb-4 text-lg">
            <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-400" /></a>
          </div>
          <p className="text-sm">Email: support@yourcompany.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
