import bestgearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import bestgearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestgearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import Context from "../../context/Context";
import { useContext, useEffect, useState } from "react";

const BringingYouTheBest = () => {
  const [image, setImage] = useState("");
  const { screenType } = useContext(Context);

  useEffect(() => {
    if (screenType === "desktop") {
      setImage(bestgearMobile);
    } else if (screenType === "mobile") {
      setImage(bestgearTablet);
    } else {
      setImage(bestgearDesktop);
    }
  }, [screenType]);

  return (
    <section className="speaker pt-40 mt-96 mb-96 flex justify-center items-center h-96 md:h-120">
      <div className="container music_container flex">
        <div className="music_content w-1/2 flex flex-col justify-center pr-16">
          <h1 className="music_title text-4xl text-left font-bold mb-4">
            BRINGING YOU THE <br /> 
            <span style={{ color: 'orange' }}>BEST</span> AUDIO GEAR
          </h1>
          <p className="music_text text-left mb-8">
            Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-1/2">
          <img src={image} alt="guy listening to music" className="object-cover w-full h-full rounded-lg ml-auto" /> {/* Added ml-auto for margin */}
        </div>
      </div>
    </section>
  );
};

export default BringingYouTheBest;


