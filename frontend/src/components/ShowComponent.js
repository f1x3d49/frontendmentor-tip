import React from "react";

const ShowComponent = () => {
  return (
    <div className="flex flex-col md:justify-between gap-8 w-full h-full bg-vdcyan rounded-2xl py-6 px-4 md:py-12 md:px-10">
      <div className="flex flex-col gap-4">
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base">Tip Amount</h1>
            <p className="text-gcyan text-sm">/ person</p>
          </div>
          <h1 className="text-3xl text-scyan">$4.27</h1>
        </section>
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-base">Total</h1>
            <p className="text-gcyan text-sm">/ person</p>
          </div>
          <h1 className="text-3xl text-scyan">$32.79</h1>
        </section>
      </div>
      <button className="w-full h-full md:h-auto bg-scyan rounded-md text-lg active:bg-lgcyan text-vdcyan py-2">
        RESET
      </button>
    </div>
  );
};

export default ShowComponent;
