import React from "react";

const TipButton = ({ percentage }) => {
  return (
    <input
      type="button"
      value={percentage}
      className="w-full text-white text-center rounded-md text-2xl py-2 bg-vdcyan active:bg-scyan active:text-vdcyan"
    ></input>
  );
};

export default TipButton;
