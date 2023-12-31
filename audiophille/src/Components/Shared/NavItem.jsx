import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const NavItem = ({ text }) => {
  const navigate = useNavigate();
  const { setCategoryOnClick } = useContext(Context);

  const handleClick = () => {
    window.scrollTo(0, 0);
    if (text === "home") {
      navigate("/");
    } else {
      navigate("/category");
    }
    setCategoryOnClick(text);
  };

  return (
    <div
      onClick={handleClick}
      className="font-bold text-white text-[13px] uppercase tracking-[2px] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#D87D4A] ml-4" // Changed to ml-4 for left margin
    >
      {text}
    </div>
  );
};

export default NavItem;
