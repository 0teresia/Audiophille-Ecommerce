import { useContext, useEffect, useState } from "react"
import MediumButton from "../../Components/Shared/ui/MediumButton";
import Context from "../../context/Context";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import XX99MARKI from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import XX59 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import ZX9SPEAKER from "../../assets/product-zx9-speaker/desktop/image-product.jpg"


const AlsoLikeProduct = ( {otherProduct} ) => {
    const { screenType, setProductOnClick, setNumber } = useContext(Context);
    const [image, setImage] = useState("");
    const {name} = otherProduct;

    const navigate = useNavigate();
    

    useEffect(() => {
      if (screenType === "desktop") {
        setImage(XX99MARKI,XX59,ZX9SPEAKER );
      } else if (screenType === "mobile") {
        setImage(XX99MARKI);
      } 
    }, [screenType]);
    
    const handleClick = () => {
      setNumber(1)
      const product = data.find(object => object.slug === otherProduct.slug)
      setProductOnClick(product)
      window.scrollTo(0, 0)
      navigate("/product")
    };
    console.log(image);

  return (
    <div className="w-full h-[265px] md:w-[223px] md:h-full xl:w-[350px] flex flex-col items-center">
      <img src={image} alt={name} className="rounded-lg"/>
        <h1 className="text-center font-bold text-[24px] uppercase tracking-[1.714px] mb-[32px] mt-[32px] md:mt-[40px]">{name}</h1>
        <MediumButton text={"See Product"} onClick={handleClick}/>
    </div>
  )
}

export default AlsoLikeProduct