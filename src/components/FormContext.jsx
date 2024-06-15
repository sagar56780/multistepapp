import React, { createContext } from "react";
import FormTwo from "./FormTwo";
export let MyContext = createContext();
const FormContext = () => {
  let student = {
    name:'sagar',
    age:'23',
    skills:'java'

  };

  return (
    <>
      <MyContext.Provider value={student}>
        <FormTwo></FormTwo>

      </MyContext.Provider>
    </>
  );
};

export default FormContext;
