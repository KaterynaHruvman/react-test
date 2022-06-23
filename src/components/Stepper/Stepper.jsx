import React,{ useContext, createContext, useState, useEffect } from "react";
import { FormContext } from "../MultiStepForm/MultiStepForm";
import styles from "./Stepper.module.css";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll("#stepperItem");
    console.log(stepperItems);
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.style.color="white";
        step.style.backgroundColor="#2782C1";
        step.style.borderColor="#2782C1";
      } else {
        step.style.color="rgb(184, 184, 184)";
        step.style.backgroundColor="white";
        step.style.borderColor="rgb(184, 184, 184)";
      }
    });
  }, [activeStepIndex]);

  return (
    <div className={styles.stepperWrapper}>
      <div className={styles.stepper}>
        <div id="stepperItem" className={styles.stepperItem}>
          1
        </div>
        <div className={styles.stepperLine}></div>
        <div id="stepperItem" className={styles.stepperItem}>
          2
        </div>
        <div className={styles.stepperLine}></div>
        <div id="stepperItem" className={styles.stepperItem}>
          3
        </div>
        <div className={styles.stepperLine}></div>
        <div id="stepperItem" className={styles.stepperItem}>
          4
        </div>
      </div>
    
    </div>
    
  );
}

export default Stepper;