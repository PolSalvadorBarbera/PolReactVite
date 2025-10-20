import React from 'react';


const HeroSection = () => {
  return (
    <section className="relative h-[50vw] flex justify-center items-center text-white text-center">

    {/* Video de fondo YouTube */}
        <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/6YH3OOIwHHs?start=2&autoplay=1&mute=1&loop=1&playlist=6YH3OOIwHHs"
        title="YouTube video background"
        
        allow="autoplay; encrypted-media"
        allowFullScreen
        ></iframe>


      {/* Capa de superposició per fer més fosc el video de fons */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-6xl mb-2 text-white-600">Ready for race</h1>
        <p className="text-2xl mb-10">Description</p>

        <button className="bg-black text-white px-10 py-4 rounded-md text-xl cursor-pointer transition-colors duration-300 hover:bg-red-600 hover:text-black">
          Store
        </button>

      </div>
    </section>
  );
};

export default HeroSection;