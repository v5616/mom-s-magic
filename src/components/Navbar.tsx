import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {FaIcons.FaUtensils({ size: 24, className: "text-primary" })}
               <span className="ml-2 text-xl font-display font-bold text-primary">Dabbzo</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 ${location.pathname === '/' ? 'border-primary' : 'border-transparent'} ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/meal-plans" className={`inline-flex items-center px-1 pt-1 border-b-2 ${location.pathname === '/meal-plans' ? 'border-primary' : 'border-transparent'} ${isActive('/meal-plans')}`}>
                Meal Plans
              </Link>
              <Link to="/vendors" className={`inline-flex items-center px-1 pt-1 border-b-2 ${location.pathname === '/vendors' ? 'border-primary' : 'border-transparent'} ${isActive('/vendors')}`}>
                Vendors
              </Link>
              <Link to="/about" className={`inline-flex items-center px-1 pt-1 border-b-2 ${location.pathname === '/about' ? 'border-primary' : 'border-transparent'} ${isActive('/about')}`}>
                About Us
              </Link>
              <Link to="/contact" className={`inline-flex items-center px-1 pt-1 border-b-2 ${location.pathname === '/contact' ? 'border-primary' : 'border-transparent'} ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login" className="btn btn-outline mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 ${location.pathname === '/' ? 'border-primary bg-primary-light/10 text-primary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
            >
              Home
            </Link>
            <Link
              to="/meal-plans"
              className={`block pl-3 pr-4 py-2 border-l-4 ${location.pathname === '/meal-plans' ? 'border-primary bg-primary-light/10 text-primary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
            >
              Meal Plans
            </Link>
            <Link
              to="/vendors"
              className={`block pl-3 pr-4 py-2 border-l-4 ${location.pathname === '/vendors' ? 'border-primary bg-primary-light/10 text-primary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
            >
              Vendors
            </Link>
            <Link
              to="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 ${location.pathname === '/about' ? 'border-primary bg-primary-light/10 text-primary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 ${location.pathname === '/contact' ? 'border-primary bg-primary-light/10 text-primary' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link to="/login" className="btn btn-outline mr-2 w-full text-center">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary w-full text-center">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;