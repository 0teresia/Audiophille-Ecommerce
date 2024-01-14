import logoCart from "../../assets/shared/desktop/icon-cart.svg";
import logoAudiophile from "../../assets/shared/desktop/logo.svg";
import Context from "../../context/Context";
import NavItem from "./NavItem";
import { useContext } from "react";

const Header = () => {
  const {  toggleModal } = useContext(Context);

  return (
    <div className="h-[100px] xl:h-[97px] w-full bg-[#000] flex justify-center absolute top-0 z-50">
    <div className="w-full lg:w-[1100px] xl:w-[1110px] border-b border-[white] border-opacity-10 flex items-center h-full justify-between relative">
      <img src={logoAudiophile} alt="audiophile logo" className="mr-auto " />
      <div className="flex justify-center flex-grow">
        <NavItem text={"home"} />
        <NavItem text={"headphones"} />
        <NavItem text={"speakers"} />
        <NavItem text={"earphones"} />
      </div>
      <img
        src={logoCart}
        onClick={() => {
          toggleModal("cart");
        }}
        alt="logo cart"
        className="cursor-pointer ml-auto"
      />
    </div>
  </div>
  );
};

export default Header;

