import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Per defecte del Estat, la ptrimera pestanya està activa

  return (
    <div className="flex space-x-6 mb-8 border-b border-gray-700">
      {tabs.map((tab) => ( // Itera sobre les pestanyes rebudes com a props
        <button
          key={tab} // Clau única per a cada pestanya perquè no doni errors

          className={`pb-3 text-lg font-semibold transition-colors duration-300
            ${activeTab === tab // Es comprova si la pestanya està activa per aplicar els colors corresponents
              ? 'text-red-600 border-b-2 border-red-600'
              : 'text-gray-400 hover:text-white'
            }`}

          onClick={() => setActiveTab(tab)} // Actualitza l'estat quan es fa clic en una pestanya
        >
          {tab}
        </button> // Botó per a cada pestanya
      ))}
    </div>
  );
};

export default Tabs;