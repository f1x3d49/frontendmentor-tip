import React from "react";

const TipButton = ({ percentage, active }) => {
  return (
    <input
      type="button"
      value={percentage}
      className={`w-full text-white text-center rounded-md hover:cursor-pointer bg-vdcyan hover:bg-lgcyan hover:text-vdcyan text-2xl py-2 
      active:bg-scyan active:text-vdcyan`}
    ></input>
  );
};

export default TipButton;
