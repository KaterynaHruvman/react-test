import React, { useContext } from "react";
import { FormContext } from "../MultiStepForm/MultiStepForm";
import UploadFile from "../Forms";


function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <UploadFile />;
      break;
    case 1:
      // stepContent = <Workspace />;
      break;
    case 2:
      // stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;