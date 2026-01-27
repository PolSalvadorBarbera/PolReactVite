import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { images } from '../assets/images.js';

//npm i --save react-lazy-load-image-component

export default function LazyImage({ src, alt, placeholder = '/assets/images/placeholders/blur.jpg', ...props }) {
  return (
    <LazyLoadImage
      src={images[src]}
      placeholderSrc={placeholder}
      effect="blur" // blur || black-and-white || opacity
      alt={alt}
      width="100%"
      {...props}
    />
  );
}

