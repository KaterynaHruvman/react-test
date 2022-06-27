import React, { useContext, createContext, useState,  useEffect } from "react";
// import Step from "../Step/Step";
// import Stepper from "../Stepper";

export const FormContext = createContext();


const MultiStepForm = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
     {/* <Stepper /> */}
     {/* <Step /> */}
    </FormContext.Provider>
   
  )
};

export default MultiStepForm;