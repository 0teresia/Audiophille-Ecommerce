import React, { useContext, useEffect, useState } from "react";
import MediumButton from "../../Components/Shared/ui/MediumButton";
import PlusMinusButton from "./ui/PlusMinusButton";
import Context from "../../context/Context";
import xx99MarkIIHeadphonesImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99MarkIHeadphonesImage from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx59HeadphonesImage from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import zx9SpeakerImage from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7SpeakerImage from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import yx1WirelessEarphonesImage from "../../assets/product-yx1-earphones/desktop/image-product.jpg";

const Product = ({ product, customImage }) => {
  const { number, setNumber, addProductToCartOnClick } = useContext(Context);
  const [imagePathState, setImagePath] = useState("");
  const { description, name, price, new: productNew } = product;

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

  return (
    <div className="w-full min-h-[720px] xl:w-[1110px] lg:w-[980px] lg:h-[480px] lg:min-h-[480px] xl:min-h-[560px] xl:h-[560px] flex flex-row text-start items-center gap-[32px] md:justify-between">
      <div className="w-full h-[327px] lg:w-[540px] lg:h-[480px] xl:w-[540px] xl:h-[560px] rounded-lg">
        <img src={imagePathState} alt={name} className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="w-[327px] max-h-[396px] md:w-[340px] md:h-[390px] xl:w-[445px] xl:h-[407px]">
        {productNew && <h2 className="uppercase text-[14px] font-normal tracking-[10px] text-[#D87D4A] mb-[16px]">New Product</h2>}
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <h1 className="leading-normal text-[28px] md:text-[28px] md:leading-[32px] font-bold xl:leading-[44px] tracking-[1.429px] uppercase">{name}</h1>
          <p className="opacity-50 text-[15px] font-medium leading-[25px]">{description}</p>
          <p className="text-[18px] font-bold tracking-[1.286px] uppercase">$ {price}</p>
        </div>
        <div className="w-[296px] h-[48px] flex justify-between mt-[31px] xl:mt-[47px]">
          <PlusMinusButton dimensions={"w-[120px] h-full"} number={number} setNumber={setNumber}/>
          <MediumButton text={"add to cart"} onClick={() => {addProductToCartOnClick(number, name, price)}}/>
        </div>
      </div>
    </div>
  );
}

export default Product;
