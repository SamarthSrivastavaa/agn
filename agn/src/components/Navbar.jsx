import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex-1 flex items-center">
        <span className="font-bold text-3xl tracking-tight">Code</span>
      </div>
      <div className="flex-1 flex justify-center space-x-8">
        <a href="#about" className="text-gray-700 font-medium text-xl hover:text-black transition-colors duration-200">About Us</a>
        <a href="#team" className="text-gray-700 font-medium text-xl hover:text-black transition-colors duration-200">Our Team</a>
      </div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        <button className="px-6 py-3 border border-black text-black bg-white rounded-full font-semibold text-xl hover:bg-gray-100 transition-colors duration-200">Socials</button>
        <button className="px-6 py-3 bg-black text-white rounded-full font-semibold text-xl hover:bg-gray-900 transition-colors duration-200">Reach Out</button>
      </div>
    </div>
  );
};

export default Navbar;
