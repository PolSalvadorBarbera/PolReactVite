import React from 'react';

const Navigation = () => {
  const navItems = ["DJI", "Ready to fly", "Configurator", "Frames", "Electronic", "FPV", "Batteries", "Radio", "Props"];

  return (
    <nav className="bg-black px-10 py-3 border-t border-gray-700 shadow-md">
      
      <ul className="flex justify-center p-0 m-0 list-none">
        
        {navItems.map((item, index) => (

          <li key={index} className="mr-8">

            <a href="#" className="text-white font-bold text-base hover:text-red-600 transition-colors duration-300">
              {item}
            </a>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Navigation;