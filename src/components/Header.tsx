import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Medec <span className="text-orange-500">Nepal</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <a href="#courses" className="text-gray-300 hover:text-orange-500 transition-colors">
              Courses
            </a>
            <a href="#notes" className="text-gray-300 hover:text-orange-500 transition-colors">
              Notes
            </a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="https://facebook.com/groups/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Join our FB Group
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="#courses"
                className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Courses
              </a>
              <a
                href="#notes"
                className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Notes
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="https://facebook.com/groups/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                onClick={toggleMenu}
              >
                Join our FB Group
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;