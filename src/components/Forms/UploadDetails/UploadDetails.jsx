import React, { useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { Card, CardContent } from '@mui/material';
import * as yup from "yup";
import styles from './UploadDetails.module.css'

import {FormContext} from "../../FormikStepper/FormikStepper";

const Input = styled('input')({
  display: 'none',
});

const UploadDetails = () => {
  const { step, setStep, selectedFile, setSelectedFile } = useContext(FormContext);

  const ValidationSchema = yup.object().shape({
    host_name: yup.string()
      .max(20, 'Too Long!')
      .required('Required'),
    username: yup.string()
      .max(20, 'Too Long!')
      .required('Required'),
    password: yup.string()
      .max(20, 'Too Long!'),
    upload_path: yup.string()
      .max(100, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      host_name: '198.19.243.251',
      port: 2222,
      username: 'tester',
      password: '',
      key: null,
      upload_path: '/inbox/'
    }
  });
 
  return (          
    <Card>
    <CardContent>
          <div label="Upload details">
            <div className={styles.inputWrapper}>
              <label htmlFor='hostName' >SFTP host name</label>
              <input name='host_name' id='hostName' value={formik.values.host_name} onChange={formik.handleChange} />
              {formik.errors && formik.touched ? (
               <div className={styles.errorMessage}>{formik.errors.host_name}</div>) : null}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor='port' >SFTP port</label>
              <input name='port' id='port' value={formik.values.port} onChange={formik.handleChange}  />
              {formik.errors && formik.touched ? (
               <div className={styles.errorMessage}>{formik.errors.host_port}</div>) : null}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor='username' >SFTP username</label>
              <input name='username' id='username' value={formik.values.username} onChange={formik.handleChange}  />
              {formik.errors && formik.touched ? (
               <div className={styles.errorMessage}>{formik.errors.username}</div>) : null}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor='password' >Private SSH key password</label>
              <input name='password' id='password' value={formik.values.password} onChange={formik.handleChange} />
              {formik.errors && formik.touched ? (
               <div className={styles.errorMessage}>{formik.errors.password}</div>) : null}
            </div>
           
            <div className={styles.inputWrapper}> 
              <label  htmlFor="key" >Private SSH file, please use only OpenSSH keys </label>
              <input 
                type="file"         
                id="key"
                name="key" 
                className={styles.keyUpload}          
                onChange={(e) => formik.setFieldValue('file', e.currentTarget.files[0])}
              />
              <div>           
                <button type="submit" >Browse</button> 
                {!formik.key? <span>file is not selected</span> : <span>key selected</span>}                               
              </div> 
            </div>      

            <div className={styles.inputWrapper}>
              <label htmlFor='upload_path' >Private SSH key password</label>
              <input name='upload_path' id='upload_path' value={formik.values.upload_path} onChange={formik.handleChange} />
              {formik.errors && formik.touched ? (
               <div className={styles.errorMessage}>{formik.errors.upload_path}</div>) : null}
            </div>
          </div>   
          </CardContent>
   </Card>            
  )
};

export default UploadDetails;