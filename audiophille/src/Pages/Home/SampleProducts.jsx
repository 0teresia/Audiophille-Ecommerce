import ZX9 from "./ZX9Speaker"
import ZX7 from "./ZX7Speaker"
import YX1 from "./YX1Speaker"
import data from "../../data/data.json";

const SampleProducts = () => {

  const setProduct = (productname) => {
    const product = data.find(object => object.name.includes(productname))
    return product;
  };

  return (
    <div className="w-[327px] h-[1392px] md:w-[689px] md:h-[1424px] xl:w-[1110px] xl:h-[1296px] flex flex-col justify-between mt-[120px] md:mt-[96px] xl:mt-[168px]">
        <ZX9 product={setProduct("ZX9")}/>
        <ZX7 product={setProduct("ZX7")}/>
        <YX1 product={setProduct("YX")}/>
    </div>
  )
}

export default SampleProducts