import React, { useState } from "react";
import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import { ReactComponent as Person } from "../images/icon-person.svg";
import TipButton from "./TipButton";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const [ctip, setCTip] = useState();

  const tipPercents = [5, 10, 15, 25, 50];

  const handlePercentClick = () => {};

  // Formik Logics
  const formik = useFormik({
    initialValues: {
      price: "",
      tip: "",
      people: "",
    },
    //Validate Form
    validationSchema: Yup.object({}),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      id="money-form"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-8"
    >
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
            value={formik.values.price}
            onChange={formik.handleChange}
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
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          <TipButton percentage="5%" />
          <TipButton percentage="10%" />
          <TipButton percentage="15%" />
          <TipButton percentage="25%" />
          <TipButton percentage="50%" />
          <input
            type="number"
            name="tip"
            value={formik.values.tip}
            onChange={formik.handleChange}
            placeholder="Custom"
            className="text-right pr-4 rounded-md placeholder:text-2xl placeholder:text-dgcyan text-2xl text-vdcyan bg-vlgcyan focus-within:border-2 focus-within:rounded-sm focus:border-scyan focus:ring-scyan"
          />
        </div>
      </div>
      {/* People */}
      <div>
        <label htmlFor="people" className="block text-dgcyan">
          Number of People
        </label>
        <div className="relative flex items-center">
          <Person className="absolute w-5 h-5 ml-2 mt-3" />
          <input
            type="number"
            value={formik.values.people}
            onChange={formik.handleChange}
            placeholder="0"
            name="people"
            className="w-full h-full p-2 text-right appearance-none text-xl text-vdcyan bg-vlgcyan shadow-sm mt-2 rounded-sm focus-within:border-2 focus-within:rounded-sm focus:border-scyan focus:ring-scyan"
          />
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
