import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery1 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import ImageGallery2 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';

const SmallGalleryImage = ({ imagePath1, imagePath2, alt }) => {
  return (
    <>
      <img
        src={imagePath1|| ImageGallery1}
        alt={alt}
        className="w-full md:w-[274px] xl:w-[445px] h-[174px] xl:h-[280px] rounded-lg"
      />
      <img
        src={imagePath2 || ImageGallery2 }
        alt={alt}
        className="w-full md:w-[274px] xl:w-[445px] h-[174px] xl:h-[280px] rounded-lg"
      />
    </>
  );
};

SmallGalleryImage.propTypes = {
  imagePath1: PropTypes.string.isRequired,
  imagePath2: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SmallGalleryImage;
