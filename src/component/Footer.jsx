import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/mylogo.png'; // Update the path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Company Logo" className="w-36 mb-4" />
          <p className="text-sm leading-relaxed">
            Empowering brands with modern web solutions, intuitive design, and scalable digital services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Personalized Gifts</a></li>
            <li><a href="#" className="hover:text-white transition">Printing</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Gadgets</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-blue-500 transition" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-sky-400 transition" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-500 transition" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-blue-400 transition" /></a>
          </div>
          <p className="text-sm">📧 support@yourcompany.com</p>
          <p className="text-sm">📞 +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
