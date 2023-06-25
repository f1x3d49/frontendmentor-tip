import React from "react";
import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import TipButton from "./TipButton";

const FormComponent = () => {
  return (
    <form className="flex flex-col gap-8">
      {/* Bill */}
      <div>
        <label htmlFor="price" className="block text-dgcyan">
          Bill
        </label>
        <div className="relative flex items-center">
          <Dollar className="absolute w-5 h-5 ml-2 mt-3" />
          <input
            type="number"
            placeholder="0"
            name="price"
            className="w-full h-full p-2 text-right appearance-none text-xl text-vdcyan bg-vlgcyan shadow-sm mt-2 rounded-sm focus-within:border-2 focus-within:rounded-sm focus:border-scyan focus:ring-scyan"
          />
        </div>
      </div>
      {/* Tip */}
      <div>
        <label htmlFor="tip" className="block text-dgcyan">
          Select Tip %
        </label>
        <div className="w-full grid grid-cols-2 gap-4 mt-2">
          <TipButton percentage="5%" />
          <TipButton percentage="10%" />
          <TipButton percentage="15%" />
          <TipButton percentage="25%" />
          <TipButton percentage="50%" />
          <input
            type="text"
            placeholder="Custom"
            className="text-right bg-vlgcyan"
          />
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
