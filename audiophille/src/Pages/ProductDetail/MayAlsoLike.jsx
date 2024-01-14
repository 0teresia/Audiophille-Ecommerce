import MediumHeading from "../../components/shared/ui/MediumHeading";
import AlsoLikeProduct from "./AlsoLikeProduct";

const MayAlsoLike = ({ others }) => {
  return (
    <div className="flex flex-col items-center mr-60">
      <MediumHeading text={"You may also like"} />
      <div className="flex flex-col md:flex-row justify-center gap-[20px] md:gap-[40px] mt-[10px] md:mt-[40px] xl:mt-[60px]">
        {others !== undefined
          ? others.map((otherObject, index) => {
              return <AlsoLikeProduct key={index} otherProduct={otherObject} />;
            })
          : null}
      </div>
    </div>
  );
};

export default MayAlsoLike;
