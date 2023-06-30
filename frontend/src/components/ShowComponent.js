import React from "react";
import { useContext } from "react";
import { TipContext } from "../context/TipContext";
import { TotalContext } from "../context/TotalContext";
import { ButtonContext } from "../context/ButtonContext";

const ShowComponent = () => {
  // Data Context
  const { tip, setTip } = useContext(TipContext);
  const { total, setTotal } = useContext(TotalContext);
  const { active, setActive } = useContext(ButtonContext);

  return (
    <div className="flex flex-col md:justify-between gap-8 w-full h-full bg-vdcyan rounded-2xl py-6 px-4 md:py-12 md:px-10">
      <div className="flex flex-col gap-4">
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base">Tip Amount</h1>
            <p className="text-gcyan text-sm">/ person</p>
          </div>
          <h1 className="text-3xl text-scyan">${tip}</h1>
        </section>
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base">Total</h1>
            <p className="text-gcyan text-sm">/ person</p>
          </div>
          <h1 className="text-3xl text-scyan">${total ? total : "0"}</h1>
        </section>
      </div>
      <button
        form="money-form"
        disabled={active ? false : true}
        className="w-full h-full md:h-auto disabled:opacity-20 bg-scyan rounded-md text-lg active:bg-lgcyan text-vdcyan py-2"
      >
        RESET
      </button>
    </div>
  );
};

export default ShowComponent;
