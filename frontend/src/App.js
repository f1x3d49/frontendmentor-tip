import { useState } from "react";
import { TipContext } from "./context/TipContext";
import { TotalContext } from "./context/TotalContext";
import FormComponent from "./components/FormComponent";
import ShowComponent from "./components/ShowComponent";

function App() {
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  return (
    <div className="min-w-full h-screen flex flex-col gap-12 items-center pt-12 bg-lgcyan font-spacemono font-bold">
      <section className="flex flex-col gap-1 text-3xl md:text-5xl tracking-[0.5rem] text-vdcyan opacity-80">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </section>
      <section className="w-full h-full flex flex-col md:flex-row gap-8 rounded-t-3xl md:w-2/3 md:h-4/6 p-8 hover:cursor-pointer md:rounded-3xl md:shadow-sm shadow-lg shadow-gcyan bg-white">
        <TipContext.Provider value={{ tip, setTip }}>
          <TotalContext.Provider value={{ total, setTotal }}>
            <FormComponent />
            <ShowComponent />
          </TotalContext.Provider>
        </TipContext.Provider>
      </section>
    </div>
  );
}

export default App;
