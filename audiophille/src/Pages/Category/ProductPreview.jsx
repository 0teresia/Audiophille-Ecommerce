import React, { useContext, useEffect, useState } from "react";
import MediumButton from "../../Components/Shared/ui/MediumButton";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import xx99MarkIIHeadphonesImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99MarkIHeadphonesImage from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
import xx59HeadphonesImage from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import zx9SpeakerImage from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7SpeakerImage from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import yx1WirelessEarphonesImage from "../../assets/product-yx1-earphones/desktop/image-product.jpg";

const ProductPreview = ({ product, customImage }) => {
  const navigate = useNavigate();
  const { setProductOnClick, setNumber } = useContext(Context);
  const [imagePath, setImagePath] = useState("");
  const { name, description, new: productNew } = product;

  useEffect(() => {
    const imagePaths = {
      "XX99 Mark II Headphones": xx99MarkIIHeadphonesImage,
      "XX99 Mark I Headphones": xx99MarkIHeadphonesImage,
      "XX59 Headphones": xx59HeadphonesImage,
      "ZX9 Speaker": zx9SpeakerImage,
      "ZX7 Speaker": zx7SpeakerImage,
      "YX1 Wireless Earphones": yx1WirelessEarphonesImage,
    };

    setImagePath(customImage || imagePaths[name] || ""); 
  }, [customImage, name]);

  const handleClick = () => {
    setNumber(1);
    setProductOnClick(product);
    window.scrollTo(0, 0);
    navigate("/product");
  };

  return (
    <div className={`${productNew ? "h-[424px] lg:h-[424px]" : "h-[481px] md:h-[471px]"} flex flex-row items-center lg:h-[560px] justify-between w-full lg:w-[1110px] text-center xl:flex-row-reverse xl:text-start`}>
    <div className="w-full h-[320px] xl:h-[560px] xl:w-[540px] rounded-lg">
      <img src={imagePath} alt={name} className="object-contain w-full xl:w-[540px] h-full rounded-lg" />
    </div>
    <div className={`${productNew ? "h-[340px] md:h-[302px] xl:h-[343px]" : "h-[297px] md:h-[267px] xl:h-[308px]"} w-full lg:w-[527px] xl:w-[445px] flex flex-col justify-between items-start xl:items-start`}>
      <div>
        {productNew && <h2 className="uppercase text-[14px] font-normal tracking-[10px] text-start text-[#D87D4A] mb-[16px]">New Product</h2>}
        <h1 className="text-[28px] text-start md:text-[40px] font-bold leading-[44px] tracking-[1.429px] uppercase">{name}</h1>
      </div>
      <p className="opacity-50 text-[15px] font-medium text-start leading-[25px]">{description}</p>
      <MediumButton text={"See product"} onClick={handleClick} />
    </div>
  </div>
  
  );
};

export default ProductPreview;

