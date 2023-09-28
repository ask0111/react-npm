
import React from 'react';

function Step3({ values, prevStep, submitForm }) {
  return (
  
    <div>
      <h2>Step 3: Review and Submit</h2>
      <p>Name: {values.name}</p>
      <p>Mobile: {values.mobile}</p>
      <p>Email: {values.email}</p>
      <p>DOB: {values.dob}</p>
      <p>School Name: {values.school}</p>
      <p>School Code: {values.code}</p>
      <p>Roll Number: {values.rNumber}</p>
      
      <button className="btn btn-secondary" onClick={prevStep}>
        Previous
      </button>
      <button className="btn btn-success" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Step3;
