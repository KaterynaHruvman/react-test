import React from 'react'

import "./add-form.css";

const AddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Ad file</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="please upload file here"
        />

        <button type="submit" className="btn btn-outline-light">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddForm;
