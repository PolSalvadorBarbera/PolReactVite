import React from 'react';

const ProductCard = ({ product }) => { // Componente Tarjeta individual de producto
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="w-48 h-48 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      {/*afegir el preu*/}
      {/* <p className="text-gray-400 text-lg">$precio</p> */}
    </div>
  );
};

export default ProductCard;