const InfoText = ({ text }) => {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="opacity-75 text-[15px] font-medium leading-[25px] text-center max-w-md">
          {text}
        </p>
      </div>
    );
  };
  
  export default InfoText;
  