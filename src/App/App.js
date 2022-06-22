import React from "react";
import Header from "../components/Header";
import AddForm from "../components/AddForm";

import "./App.css";
import Form from "../Form";

function App() {
  return (
    <div className="app">
      <Header />
      <AddForm />
      <Form />
    </div>
  );
}

export default App;
