import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import axios from 'axios';
import * as yup from "yup";
import { FormContext } from "../MultiStepForm/MultiStepForm";

const UploadKey = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);
  // const [hostName, setHostName] = React.useState("198.19.243.251");
  // const [portValue, setPortValue] = React.useState(2222);
  // const [userName, setUserName] = React.useState("tester");   

  // const ValidationSchema = yup.object().shape({
  //   file: yup.mixed().required('File is required'),
  // })
  
  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

// const formik = useFormik({
//   // validationSchema: ValidationSchema,
//   initialValues: {
//       host_name: "198.19.243.251",
//       port: 2222,
//       username: "tester",
//       password: "",
//       key: "tester",
//       upload_path: "/inbox/",
//   },
//   onSubmit: async (values) => {
//     console.log(values);
//     // const data = { ...formData, ...values };
//     //     setFormData(data);
//     //     console.log(data);
//         // setActiveStepIndex(activeStepIndex + 1);
   
//   },
// });
  return (
    <Formik
      initialValues={{
        host_name: "198.19.243.251",
        port: 2222,
        username: "tester",
        password: "",
        key: "tester",
        upload_path: "/inbox/",
      }}
      onSubmit={async (values) => {
        console.log(values);
        // const data = { ...formData, ...values };
        //     setFormData(data);
        //     console.log(data);
            // setActiveStepIndex(activeStepIndex + 1);
       
      }}    
    >
    <Form className="flex flex-col justify-center items-center" encType="multipart/form-data">
      <div className="text-2xl font-medium self-center mb-2">Select Upload Type</div>
      <div className="flex flex-col items-start mb-2">
        <label className="font-medium text-gray-900">Sftp type</label>
        <Field as="select" name="sftpType">
             <option value="sshKey">Upload using OpenSSH key</option>
             <option value="encryption">Upload using file encryption</option>
        </Field>
        {/* <Field
          type="file"         
          id="file"
          name="file"
          // accept='image/*'
          onChange={(e) => formik.setFieldValue('file', e.currentTarget.files[0])}
        /> */}
      </div>
      {/* <ErrorMessage name="sftpType" render={renderError} /> */}
       
      <button
        className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
        type="submit"
      >
        next
      </button>
    </Form>
    </Formik>
  );
};

export default UploadKey;