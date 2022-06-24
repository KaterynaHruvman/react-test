import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import axios from 'axios';
import * as yup from "yup";
import { FormContext } from "../../MultiStepForm/MultiStepForm";

import styles from "./UploadFile.module.css";

const UploadFile = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadTry, setUploadTry] = React.useState(false);
  const [uploadMesssage, setUploadMesssage] = React.useState("");

  const ValidationSchema = yup.object().shape({
    file: yup.mixed().required('File is required'),
  })
  
  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

const formik = useFormik({
  validationSchema: ValidationSchema,
  initialValues: {
      file: selectedFile,
  },
  onSubmit: async (values) => {
    console.log(values);
    const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
    const file = new FormData();
    for (let value in values) {
      file.append(value, values[value]);        
    }
    axios.post("http://127.0.0.1:8000/file_upload/", file).then((res) => {
      setUploadTry(true)
      console.log(res.status);
      if (res.status === 201) {          
        setUploadMesssage("File was successfully uploaded!")
      }
    
    }).catch((error) => {
      console.log(error);
      if (error.response.status === 422) {          
        setUploadMesssage(error.response.statusText) 
      }
    });
  },
});
  return (
    <form className={styles.dragNdropForm} onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div className={styles.dragNdropWrapper}>
        <input 
          type="file"         
          id="file"
          name="file"
          className={styles.inputFileUpload}
          onChange={(e) => formik.setFieldValue('file', e.currentTarget.files[0])}
        />
        <label id="labelFileUpload" htmlFor="file">
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button">Upload a file</button>
          </div> 
        </label>
      </div>
   
       
      <button
        className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
        type="submit"
      >
        next
      </button>
    </form>
   
  );
};

export default UploadFile;