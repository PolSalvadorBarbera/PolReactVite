import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

  const navItems = [
    { name: "DJI", path: "/dji" },
    { name: "Ready to fly", path: "/ready-to-fly" },
    { name: "Configurator", path: "/configurator" },
    { name: "Frames", path: "/frames" },         
    { name: "Electronic", path: "/electronic" },
    { name: "FPV", path: "/fpv" },
    { name: "Batteries", path: "/batteries" },
    { name: "Radio", path: "/radio" },
    { name: "Props", path: "/props" },
  ];

  return (
    <nav className="bg-black px-10 py-3 border-t border-gray-700 shadow-md">
      
      <ul className="flex justify-center p-0 m-0 list-none">
        <li className='mr-8'>
          
          {/* Pàgina principal "/" */}

          <NavLink to = "/" className={ ({ isActive }) =>
            `text-white font-bold text-base hover:text-red-600 transition-colors duration-300
              ${isActive ? 'text-red-600 border-b-2 border-red-600 pb-2' : ''}`
            } 
            end // Perquè sols s'apliqui quan estem a "/"
          >
          </NavLink>

        </li>
        
        {/* Navegació array navItems */}
        {navItems.map((item, index) => (

          <li key={index} className="mr-8">

            <NavLink to = {item.path} className={({ isActive }) =>
              `text-white font-bold text-base hover:text-red-600 transition-colors duration-300
                ${isActive ? 'text-red-600 border-b-2 border-red-600 pb-2' : ''}`
            }
            > 
            {item.name}
            </NavLink>

          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Navigation;