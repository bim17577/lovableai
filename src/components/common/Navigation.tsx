
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-[rgba(11,53,98,1)] text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TRACE</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
          <Link to="/leaderboard" className="hover:text-gray-300 transition-colors">Leader Board</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link to="/client-form" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link to="/signin" className="hover:text-gray-300 transition-colors">Sign In</Link>
          <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
