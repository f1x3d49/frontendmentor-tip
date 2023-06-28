import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import { ReactComponent as Person } from "../images/icon-person.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonContext } from "../context/ButtonContext";

const FormComponent = ({ formik, TipChange, setTipChange }) => {
  const { active, setActive } = useContext(ButtonContext);

  const tipPercents = [5, 10, 15, 25, 50];

  const handlePercentClick = (percent) => {
    if (TipChange === percent) setTipChange(0);
    else {
      formik.setFieldValue("tip", percent);
      setTipChange(percent);
    }
  };

  return (
    <form id="money-form" className="flex flex-col gap-8">
      {/* Bill */}
      <div>
        <label htmlFor="price" className="flex justify-between text-dgcyan">
          <h1>Bill</h1>
          <h1 className="text-red-500">
            {formik.errors.price ? formik.errors.price : ""}
          </h1>
        </label>
        <div className="relative flex items-center">
          <Dollar className="absolute w-5 h-5 ml-2 mt-3" />
          <input
            type="number"
            placeholder="0"
            value={formik.values.price}
            onChange={formik.handleChange}
            name="price"
            className={`w-full h-full p-2 text-right appearance-none text-xl text-vdcyan bg-vlgcyan shadow-sm mt-2 rounded-sm focus-within:border-2 focus-within:rounded-sm ${
              formik.errors.price
                ? "border-red-500 border-2"
                : "focus-within:border-scyan"
            } focus:ring-scyan`}
          />
        </div>
      </div>
      {/* Tip */}
      <div>
        <label htmlFor="tip" className="block text-dgcyan">
          Select Tip %
        </label>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          {tipPercents.map((percent, index) => (
            <button
              type="button"
              key={index}
              className={`w-full text-white text-center rounded-md hover:cursor-pointer ${
                TipChange === percent && "bg-scyan"
              } bg-vdcyan hover:bg-lgcyan hover:text-vdcyan text-2xl py-2 
                `}
              onClick={() => handlePercentClick(percent)}
            >
              {percent}%
            </button>
          ))}
          <input
            type="number"
            name="tip"
            value={formik.values.tip}
            onChange={formik.handleChange}
            disabled={TipChange !== 0 && true}
            placeholder="Custom"
            className="text-right pr-4 rounded-md placeholder:text-2xl placeholder:text-dgcyan text-2xl text-vdcyan bg-vlgcyan focus-within:border-2 focus-within:rounded-sm focus:border-scyan focus:ring-scyan"
          />
        </div>
      </div>
      {/* People */}
      <div>
        <label htmlFor="people" className="flex justify-between text-dgcyan">
          <h1>Number of People</h1>
          <h1 className="text-red-500">
            {formik.errors.people ? formik.errors.people : ""}
          </h1>
        </label>
        <div className="relative flex items-center">
          <Person className="absolute w-5 h-5 ml-2 mt-3" />
          <input
            type="number"
            value={formik.values.people}
            onChange={formik.handleChange}
            placeholder="0"
            name="people"
            className={`w-full h-full p-2 text-right appearance-none text-xl text-vdcyan bg-vlgcyan shadow-sm mt-2 rounded-sm focus-within:border-2 focus-within:rounded-sm ${
              formik.errors.people
                ? "border-red-500 border-2"
                : "focus-within:border-scyan"
            } focus:ring-scyan`}
          />
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
