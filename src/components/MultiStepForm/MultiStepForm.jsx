import StepZilla from "react-stepzilla";

const MultiStepForm = () => {
  const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />},
      {name: 'Step 3', component: <Step3 />},
      {name: 'Step 4', component: <Step4 />},
      {name: 'Step 5', component: <Step5 />}
    ]
  return (
    <div className='step-progress'>
        <StepZilla steps={steps}/>
    </div>
   
  )
}

export default MultiStepForm