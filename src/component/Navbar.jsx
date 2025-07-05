import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import img1 from '../assets/final.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mx-[5px] mt-4 bg-white rounded-full shadow-lg px-6 py-3 flex justify-between items-center  border-black border-2">
      {/* Logo */}
      <img src={img1} alt="" className='w-[150px]' />

      {/* Desktop Links */}
    <ul className="hidden md:flex space-x-12 text-gray-700 font-bold text-xl">
  <li className="hover:text-orange-500 hover:underline cursor-pointer">
    <Link to="/">Home</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/about">About</Link>
  </li>
  <li className="hover:text-orange-500 cursor-pointer">
    <Link to="/services">Services</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/our-work">Our Work</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/ourvision">Our Vision</Link>
  </li>
  <li className="hover:text-orange-500 cursor-pointer">
    <Link to="/contact">Contact Us</Link>
  </li>
</ul>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 right-4 bg-white shadow-md rounded-xl p-4 space-y-3 w-48 z-50 md:hidden">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">About</li>
        <li className="hover:text-orange-500 cursor-pointer">Services</li>
        <li className="hover:text-red-500 cursor-pointer">Our Work</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
