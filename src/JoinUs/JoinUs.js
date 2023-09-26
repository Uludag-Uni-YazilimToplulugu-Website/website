import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations'
import "./style.css";




function JoinUs() {
const {handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched} = useFormik({
  initialValues:{
    fullName: '',
    number: '',
    message: '',
  },
  onSubmit:async (values, bag) => {
   await new Promise((r) => setTimeout(r, 1000));
   console.log(values);
// resetleme
    bag.resetForm();
  },
  //  validationShema : validationSchema,
   validationSchema,
});
// console.log(touched);

  return (
    <div className='join'>
      
      <h2>Aramıza Katıl</h2>
      

      <form onSubmit={handleSubmit} className='form'>
       <div>
       <label htmlFor="fullName"></label>
        <input 
        id="fullName"
        name="fullName"
        placeholder="İsim, Soyisim"
        value={values.fullName}
        disabled={isSubmitting}
        onChange={handleChange("fullName")}
        onBlur = {handleBlur("fullName")}
         />
         {/* error*/}
    {errors.fullName && touched.fullName && <div className='error'> {errors.fullName}</div>}
       </div>

       <div>
       <label htmlFor="number"></label>
        <input
          id="number"
          name="number"
          placeholder="Okul Numarası"
          value={values.number}
          disabled={isSubmitting}
          onChange={handleChange("number")}
          onBlur = {handleBlur("number")}
            />
             {errors.number && touched.number && <div className='error'> {errors.number}</div>}
       </div>
        
        <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="İlgi Alanların"
          type="message"
          value={values.message}
          disabled={isSubmitting}
          onChange={handleChange("message")}
          onBlur = {handleBlur("message")}
        />
         {errors.message && touched.message && <div className='error'> {errors.message}</div>}
        </div>
        
        <button type="submit" className='btnJoin' disabled={isSubmitting}  >Send Application</button>
      </form>
     
     
    </div>
  )}

export default JoinUs;
