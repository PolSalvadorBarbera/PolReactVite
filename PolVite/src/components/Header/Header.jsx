import React from 'react';
import logo from '../../assets/Img/logo.svg';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-black text-white w-full box-border">
      <div className="logo">
        <img src={logo} alt="Drone Racing League Logo" className="h-10" />
      </div>
      <div className="flex bg-gray-800 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="border-none px-4 py-2 bg-transparent text-white outline-none w-[300px]"
        />
        <button type="submit" className="bg-gray-700 border-none text-white px-3 py-2 cursor-pointer hover:bg-gray-600 transition-colors">
          <FaSearch className="h-5 w-5" />
        </button>
      </div>
      <div className="flex space-x-6 text-xl">
        
        <button className="cursor-pointer hover:text-red-500 transition-colors relative">
          <FaShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
        </button>
        <button className="cursor-pointer hover:text-red-500 transition-colors">
          <FaUser className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;