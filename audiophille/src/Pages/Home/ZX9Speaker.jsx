import Context from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoText from "../../Components/Shared/Ui/InfoText";
import LargeHeading from "../../components/shared/ui/LargeHeading";
import MediumButton from "../../Components/Shared/ui/MediumButton";
import imageZX9desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import imageZX9tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import imageZX9mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import PropTypes from 'prop-types';

const ZX9Speaker = ({ product }) => {
  const [image, setImage] = useState("");
  const { screenType, setProductOnClick } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (screenType === "desktop") {
      setImage(imageZX9desktop);
    } else if (screenType === "tablet") {
      setImage(imageZX9tablet);
    } else {
      setImage(imageZX9mobile);
    }
  }, [screenType]);

  const handleClick = () => {
    setProductOnClick(product);
    window.scrollTo(0, 0);
    navigate("/product");
  };

  return (
    <div className="overflow-hidden w-full h-[320px] relative rounded-lg lg:h-[380px] bg-[#D87D4A] text-white py-[64px] px-[23px] bg-pattern-circles bg-no-repeat bg-cover bg-center-center ">
      <div className="flex flex-row justify-between items-center md:flex-col md:items-end md:h-full">
        <div className="lg:absolute lg:left-8 lg:h-[337px] xl:h-[493px]">
          <img src={image} alt="zx9" className="object-contain w-full h-full" />
        </div>
        <div className="lg:w-[280px] xl:w-[343px] text-left lg:text-left xl:absolute xl:right-[120px] xl:top-[75px]">
          <div className="lg:h-[215px] flex flex-col justify-between text-left">
            <LargeHeading text={"ZX9 SPEAKER"} />
            <InfoText text={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."} />
          </div>
          <MediumButton
            text={"see product"}
            color={"bg-[black]  transition-all ease-in duration-150 hover:bg-[#4C4C4C]"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

ZX9Speaker.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ZX9Speaker;
