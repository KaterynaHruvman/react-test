import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fullName, setFullName] = React.useState("");
  const [enteredNumber, setEnteredNumber] = React.useState("");
  const [uploadTry, setUploadTry] = React.useState(false);
  const [uploadMesssage, setUploadMesssage] = React.useState("");
  
  const formik = useFormik({
    enableReinitialize: true,
    // validationSchema: validate,
    initialValues: {
        name: fullName,
        number: enteredNumber,
        file: selectedFile,
    },
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);        
      }
      axios.post("http://127.0.0.1:8000/api/test_app/", formData).then((res) => {
        setUploadTry(true)
        console.log(res.status);
        if (res.status === 201) {          
          setUploadMesssage("File was successfully uploaded!")
        }
      
      }).catch((error) => {
        console.log(error.response.statusText);
        if (error.response.status === 422) {          
          setUploadMesssage(error.response.statusText) 
        }
      });
      

    //   try {
    //     const response = await axios({
    //       method: "post",
    //       url: "http://127.0.0.1:8000/api/test_app/",
    //       data: {
    //         name: formik.values.name,
    //         number: formik.values.number,
    //         file: formik.values.file
    //       }
    //     });
    //     console.log(response);
    //   } catch(error) {
    //      console.log(error)
    //     }
      
  },
});


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  
  }

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <input 
        type="file"         
        id="file"
        name="file"
        accept='image/*'
        onChange={(e) => formik.setFieldValue('file', e.currentTarget.files[0])}
      />

      <input 
        id="name"
        name="name"
        type="text" 
        placeholder="Enter your name" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.name}
      />

      <input 
        id="number"
        name="number"
        type="text" 
        placeholder="Enter number"
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.number}
        
      />

      <input type="submit" value="Upload File" />
      {uploadTry? <span>{uploadMesssage}</span> : null}
    </form>
  )
};

export default Form;