import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import img1 from '../assets/mylogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/OurServices' },
    { name: 'Our Work', path: '/Ourwork' },
    { name: 'Our Vision', path: '/ourvision' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full bg-[#0a1f44] border-b-2 border-[#13294b] shadow-md z-50">
      <nav className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={img1} alt="Logo" className="h-12 object-contain" />
          
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="transition-colors duration-300 hover:text-[#ff8c00]"
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff8c00] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="absolute top-[72px] right-6 w-[220px] bg-[#0a1f44] border border-[#1f355f] shadow-lg p-4 space-y-4 rounded-md md:hidden">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-[#ff8c00] transition duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
