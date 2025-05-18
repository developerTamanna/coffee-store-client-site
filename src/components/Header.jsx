import React, { useState } from 'react';
import { Link, useLocation } from 'react-router'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'text-yellow-300 font-bold underline underline-offset-4'
      : 'hover:text-yellow-300';

  return (
    <header className="bg-[#372116] text-white px-4 md:px-8 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <img
            src="https://i.postimg.cc/4KJvh9Rf/logo1.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span>Espresso Emporium</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/addCoffee" className={getLinkClass('/addCoffee')}>Add Coffee</Link>
          <Link to="/signin" className={getLinkClass('/signin')}>Sign In</Link>
          <Link to="/signup" className={getLinkClass('/signup')}>Sign Up</Link>
          <Link to="/users" className={getLinkClass('/users')}>Users</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-lg flex flex-col items-start">
          <Link to="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/addCoffee" className={getLinkClass('/addCoffee')} onClick={() => setIsOpen(false)}>
            Add Coffee
          </Link>
          <Link to="/signin" className={getLinkClass('/signin')} onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
          <Link to="/signup" className={getLinkClass('/signup')} onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
          <Link to="/users" className={getLinkClass('/users')} onClick={() => setIsOpen(false)}>
            Users
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
