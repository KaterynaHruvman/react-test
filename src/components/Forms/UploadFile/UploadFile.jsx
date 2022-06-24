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

const [dragActive, setDragActive] = React.useState(false);
  
  // handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.type);
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <form className={styles.dragNdropForm} onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
      <div className={dragActive ? styles.dragNdropWrapperActive : styles.dragNdropWrapper}  onDragEnter={handleDrag} onDragLeave={handleDrag}>
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
            <button className={styles.uploadButton}>Upload a file</button>
          </div> 
        </label>
      </div>
   
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          type="submit"          
        >
          back
        </button>
        <button
          className={styles.button}
          type="submit"          
        >
          next
        </button>
      </div> 
    </form>
   
  );
};

export default UploadFile;