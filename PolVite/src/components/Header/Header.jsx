import React from 'react';
import logo from '../../assets/Img/logo.svg';

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
        <button type="submit" className="bg-gray-700 border-none text-white px-3 py-2 cursor-pointer">
          🔍
        </button>
      </div>
      <div className="flex space-x-5 text-xl">
        <span className="cursor-pointer">🛒</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </header>
  );
};

export default Header;