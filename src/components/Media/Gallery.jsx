import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/src/assets/Img/mini3pro.png', alt: 'DJI Mini 3 Pro drone', webp: '/src/assets/Img/mini3pro.webp' },
    { src: '/src/assets/Img/fpv-combo.png', alt: 'DJI FPV Combo', webp: '/src/assets/Img/fpv-combo.webp' },
    // Add more images, assuming WebP versions exist or use a tool to generate
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Product Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <picture key={index} className="block">
            <source srcSet={img.webp} type="image/webp" />
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg"
            />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default Gallery;