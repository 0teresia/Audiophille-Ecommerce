import bestgearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";

const BringingYouTheBest = () => {
  const image = bestgearDesktop;

  return (
    <section className="speaker mt-16 mb-6 flex justify-center items-center h-96">
      <div className="container music_container flex justify-center items-center">
        <div className="music_content w-full flex flex-col justify-center pr-16">
          <h1 className="music_title text-4xl text-left font-bold mb-4">
            BRINGING YOU THE <span style={{ color: 'orange' }}>BEST</span> AUDIO GEAR
          </h1>
          <p className="music_text text-left mb-8">
            Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-3/4">
          <img src={image} alt="guy listening to music" className="object-cover w-full h-full rounded-lg ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default BringingYouTheBest;
