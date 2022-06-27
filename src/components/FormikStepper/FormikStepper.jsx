import { Stepper, Typography, Step, StepLabel, Box } from '@material-ui/core';
import { Form, Formik, useFormik } from 'formik';
import React, { useState, createContext } from 'react';

import styles from './FormikStepper.module.css';

export const FormContext = createContext();

const FormikStepper = ({children, ...props}) => {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [completed, setCompleted] = useState(false)
  const currentChild = childrenArray[step]
  console.log(props);
 
  function isLastStep () {
    return step === childrenArray.length - 1
  }
//   const formik = useFormik({
//  onSubmit:async(values, helpers)=>{
//    console.log("submited");
//   if(step === childrenArray.length - 1) {
//     await props.onSubmit(values, helpers)
//   }else{
//     setStep(s => s+1)
//   }
//  }
//   });
const submitHandler = (e) => {
  e.preventDefault()
  if(step === childrenArray.length - 1) {
        console.log("ok");
        console.log(props.values);
        setCompleted(true)
      }else{
        setStep(s => s+1)
      }
     }

return (
    <FormContext.Provider value={{step, setStep, selectedFile, setSelectedFile}} >
            
      <Formik {...props} onSubmit={async (e, values, helpers)=>{
        e.preventDefault();
        console.log(e);       
        if(step === childrenArray.length - 1) {
          await props.onSubmit(values, helpers)
        }else{
          setStep(s => s+1)
        }
        
      }}>
        <Form className={styles.form} autoComplete='off' onSubmit={(e) => submitHandler(e)}  encType="multipart/form-data">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={step} alternativeLabel>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}  >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>       
        </Box>

           {currentChild}
           
           <div className={styles.buttonsWrapper}>
             <button
                type="button" 
                className={step>0 ? styles.button : styles.buttonInvis}
                onClick={()=>setStep(s=>s-1)}         
              >
               back
              </button>
              <button
                 className={!selectedFile? styles.buttonNotActive : styles.buttonActive}
                //  type="button" 
                 type="submit"
                //  onClick={()=>setStep(s=>s+1)}           
              >
                {isLastStep()? 'submit' : 'next'}
              </button>
            </div> 
        </Form>       
      </Formik>
    </FormContext.Provider>
  )
}
export default FormikStepper