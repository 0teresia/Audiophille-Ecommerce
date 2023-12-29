import React, { useState, useEffect } from 'react';
import SmallGalleryImage from './UI/SmallGalleryImage';
import LargeGalleryImage from './UI/LargeGalleryImage';
import PropTypes from 'prop-types';


const Gallery = ({ gallery, screenType }) => {
  const [firstImagePath, setFirstImagePath] = useState('');
  const [secondImagePath, setSecondImagePath] = useState('');
  const [thirdImagePath, setThirdImagePath] = useState('');

  Gallery.propTypes = {
    gallery: PropTypes.shape({
      first: PropTypes.object,
      second: PropTypes.object,
      third: PropTypes.object,
    }),
    screenType: PropTypes.string,
  };

  useEffect(() => {
    if (gallery && gallery !== undefined) {
      const { first, second, third } = gallery;
      setFirstImagePath(first[screenType]);
      setSecondImagePath(second[screenType]);
      setThirdImagePath(third[screenType]);
    }
  }, [gallery, screenType]);

  return (
    <div className="flex flex-col md:flex-row w-full h-[756px] md:h-[368px] xl:h-[592px] justify-between">
      <div className="h-[368px] md:h-full flex flex-col justify-between">
        <SmallGalleryImage imagePath={firstImagePath} alt="first" />
        <SmallGalleryImage imagePath={secondImagePath} alt="second" />
      </div>
      <LargeGalleryImage imagePath={thirdImagePath} alt="third" />
    </div>
  );
};

export default Gallery;

