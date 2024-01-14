const InfoText = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <p className="opacity-75 text-[15px] font-medium leading-[25px] text-start lg:max-w-lg">
        {text}
      </p>
    </div>
  );
};

export default InfoText;
