import { useEffect, useState } from "react";
import { TipContext } from "./context/TipContext";
import { TotalContext } from "./context/TotalContext";
import { ButtonContext } from "./context/ButtonContext";
import FormComponent from "./components/FormComponent";
import ShowComponent from "./components/ShowComponent";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const [tip, setTip] = useState(null);
  const [total, setTotal] = useState(null);
  const [active, setActive] = useState(false);
  const [TipChange, setTipChange] = useState(0);

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      price: "",
      tip: "",
      people: "",
    },
    enableReinitialize: true,
    //Validate Form
    validationSchema: Yup.object({
      price: Yup.number("Price must be a number")
        .min(1, "Must be a valid price")
        .required("Price is required"),
      tip: Yup.number("Tip must be a number").min(0),
      people: Yup.number("Must be a number")
        .min(1, "Can't be zero")
        .required("People are required"),
    }),
  });

  // UseEffect Method for active button and calculating price
  useEffect(() => {
    if (
      formik.values.price !== null &&
      (formik.values.tip !== null || TipChange !== null) &&
      formik.values.people !== null
    ) {
      setTip(formik.values.price * (formik.values.tip / 100));
      setTotal((tip + formik.values.price) / formik.values.people);
      setActive(true);
    } else {
      setActive(false);
    }
  }, [
    formik.values.people,
    formik.values.tip,
    formik.values.price,
    TipChange,
    tip,
  ]);

  return (
    <div className="min-w-full h-screen flex flex-col gap-12 items-center pt-12 bg-lgcyan font-spacemono font-bold">
      <section className="flex flex-col gap-1 text-3xl md:text-5xl tracking-[0.5rem] text-vdcyan opacity-80">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </section>
      <section className="w-full h-full flex flex-col md:flex-row gap-8 rounded-t-3xl md:w-2/3 md:h-4/6 p-8 hover:cursor-pointer md:rounded-3xl md:shadow-sm shadow-lg shadow-gcyan bg-white">
        <ButtonContext.Provider value={{ active, setActive }}>
          <TipContext.Provider value={{ tip, setTip }}>
            <TotalContext.Provider value={{ total, setTotal }}>
              <FormComponent
                formik={formik}
                TipChange={TipChange}
                setTipChange={setTipChange}
              />
              <ShowComponent />
            </TotalContext.Provider>
          </TipContext.Provider>
        </ButtonContext.Provider>
      </section>
    </div>
  );
}

export default App;
