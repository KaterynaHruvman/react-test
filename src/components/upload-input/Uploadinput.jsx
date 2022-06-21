import React from "react";
// import {input } from 'react-bootstrap';

const UploadInput = () => {
  return (
    <div class="mb-3">
      <label for="formFileMultiple" class="form-label">
        Multiple files input example
      </label>
      <input class="form-control" type="file" id="formFileMultiple" multiple>
        /input
      </input>
    </div>
  );
};

export default UploadInput;
