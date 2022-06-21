import StepZilla from "react-stepzilla";
import Step1 from "./Step1";

import './MultiStepForm.css';
import Step2 from "./Step2";

const MultiStepForm = () => {
  const steps =
    [
      {name: 'Select file', component: <Step1 />},
      {name: 'Select upload type', component: <Step2 />},
      // {name: 'Step 3', component: <Step3 />},
      // {name: 'Step 4', component: <Step4 />},
      // {name: 'Step 5', component: <Step5 />}
    ]
  return (
    <div className='step-progress'>
        <StepZilla steps={steps}/>
    </div>
   
  )
}

export default MultiStepForm