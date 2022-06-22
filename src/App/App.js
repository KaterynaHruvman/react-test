import React from "react";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import MultiStepForm from "../components/MultiStepForm"
import "./App.css";

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
