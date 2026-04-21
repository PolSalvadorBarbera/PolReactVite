import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { images } from '../../assets/images.js';

//npm i --save react-lazy-load-image-component

export default function LazyImage({ src, alt, placeholder = '/assets/images/placeholders/blur.jpg', className, ...props }) {
  return (
    <LazyLoadImage
      src={images[src]}
      placeholderSrc={placeholder}
      effect="blur" //Desenfoc
      alt={alt}
      wrapperClassName="w-full h-full block"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }} //Img ocupa full container
      {...props}
    />
  );
}

