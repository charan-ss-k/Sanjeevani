import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-green-800 border-b-2 border-green-500 px-3 py-2'
      : 'text-green-800 border-b-2 border-transparent hover:bg-amber-50 rounded-md px-3 py-2';
  };

  return (
    <nav className="bg-amber-100 h-20 flex justify-center items-center text-lg fixed top-0 left-0 right-0 w-full z-50">
      <div className="flex items-center">
        <Link to="/" className="text-green-800 text-3xl font-bold">
          Sanjeevani
        </Link>
        <ul className="flex items-center space-x-8 ml-10">
          <li>
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClass('/services')}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;