// src/components/Step2.js
import React, { useRef } from 'react';

function Step2({ values, handleChange, prevStep, nextStep }) {

  const errorValue5 = useRef();
    const errorValue6 = useRef();
    const errorValue7 = useRef();
    

    
    
    const NextHandler = () => {
      const inputSchool = errorValue5.current;
      const inputCode = errorValue6.current;
      const inputRNumber = errorValue7.current;
      if (!values.school || !values.code || !values.rNumber) {
          if (!values.school) {
            console.log('ood')
              inputSchool.style.border = '1px solid red';
          } else {
              inputSchool.style.border = '1px solid gray';
          }
          if (!values.code) {
              inputCode.style.border = '1px solid red';
          } else {
              inputCode.style.border = '1px solid gray';
          }
          if (!values.rNumber) {
              inputRNumber.style.border = '1px solid red';
          } else {
              inputRNumber.style.border = '1px solid gray';
          }
      }
      else {
          nextStep()
      }
  }


  return (
    <div>
      <h2>Step 2: School information</h2>
      <div className="form-group">
        <label>School Name:</label>
        <input
          type="text"
          name="school"
          value={values.school}
          onChange={handleChange}
          className="form-control"
          ref={errorValue5}
        />
      </div>
      <div className="form-group">
        <label>School Code:</label>
        <input
          type="text"
          name="code"
          value={values.code}
          onChange={handleChange}
          className="form-control"
          ref={errorValue6}
        />
      </div>
      <div className="form-group">
        <label>Roll Number:</label>
        <input
          type="text"
          name="rNumber"
          value={values.rNumber}
          onChange={handleChange}
          className="form-control"
          ref={errorValue7}
        />
      </div>
      <button className="btn btn-secondary" onClick={prevStep}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={NextHandler}>
        Next
      </button>
    </div>
  );
}

export default Step2;
