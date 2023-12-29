import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MediumButton from "../../Components/Shared/ui/MediumButton";
import LargeHeading from "../../components/shared/ui/LargeHeading"
import InfoText from "../../Components/Shared/Ui/InfoText";
import Context from "../../context/Context";
import data from "../../data/data.json";

const NewProductInfoXX99 = () => {
  const { setProductOnClick } = useContext(Context);

  const navigate = useNavigate();

  const handleClick = () => {
    setProductOnClick(data.find(object => object.name === "XX99 Mark II Headphones"))
    window.scrollTo(0, 0)
    navigate("/product")
  };

  return (
    <div className={`w-auto h-[290px]   text-start xl:text-start top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0 flex flex-col justify-between relative xl:static z-20 text-[white]`}>
        <h2 className={`uppercase font-normal tracking-[10px] text-[14px] opacity-50`}>New Product</h2>
        <LargeHeading 
          text={"XX99 MARK II HEADPHONES"}
        />
        <InfoText 
          text={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."} 
        />
        <MediumButton 
          text={"see product"}
          onClick={handleClick}
        />
    </div>
  )
}

export default NewProductInfoXX99