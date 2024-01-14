import ImageGallery3 from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

const LargeGalleryImage = ({ imagePath, alt }) => {
  return (
    <img
      src={imagePath || ImageGallery3}
      alt={alt}
      className="rounded-lg w-full md:w-[395px] xl:w-[635px] h-[368px] xl:h-[592px] mx-auto"
    />
  );
};

export default LargeGalleryImage;
