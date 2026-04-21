import React from 'react';
import LazyImage from '../LazyImage/LazyImage.jsx';

const ProductCard = ({ product }) => { // Component Targeta individual del producte
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="max-w-xs w-full bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      
      {/* Imatge Area */}
      <div className="relative h-72 bg-white overflow-hidden"> // Fons blanc per al producte
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
        
        {/* Descompte */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            -{product.discountPercentage}%
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 bg-gray-700 border-t border-gray-600">
        <h3 className="text-gray-100 text-xl font-bold mb-2 tracking-tight">
          {product.name}
        </h3>
        
        {product.discountPercentage > 0 ? ( // Preu descompte i original X 
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-extrabold text-red-500">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${product.price}
            </span>
          </div>
        ) : ( // Sense descompte
          <div className="mb-4">
            <span className="text-2xl font-extrabold text-gray-100">
              ${product.price}
            </span>
          </div>
        )}

        {/* Button */}
        <button className="w-full bg-gray-900 hover:bg-gray-950 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;