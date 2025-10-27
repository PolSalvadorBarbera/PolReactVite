import React from 'react';

const FeaturedProduct = ({ title, subtitle, isNew, backgroundImage }) => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center text-white text-center p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa de superposición para oscurecer la imagen de fondo y asegurar contraste del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center">
        {isNew && (
          <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase">
            Nuevo
          </span>
        )}
        <h1 className="text-6xl font-extrabold text-white mb-2 leading-tight">
          <span className="text-orange-500">DJI</span> {title.split(' ')[1]} <span className="text-orange-500">{title.split(' ')[2]}</span>
        </h1>
        <p className="text-2xl text-gray-300">{subtitle}</p>
        {/* botón "Ver más" */}
        {/* <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
          Ver Más
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedProduct;