import Header from "../header/header";

import AddForm from "../add-form/add-form";
import MultiStepForm from "../multiStepForm";


import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <AddForm />
      <MultiStepForm />
    </div>
  );
}

export default App;
