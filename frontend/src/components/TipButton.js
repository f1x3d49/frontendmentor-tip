import React from "react";

const TipButton = ({ percentage }) => {
  return (
    <div className="w-full text-white text-center rounded-md text-2xl py-2 bg-vdcyan active:bg-scyan active:text-vdcyan">
      <h1>{percentage}</h1>
    </div>
  );
};

export default TipButton;
