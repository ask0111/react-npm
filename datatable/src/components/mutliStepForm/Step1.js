// src/components/Step1.js
import React, { useRef } from 'react';

function Step1({ values, handleChange, nextStep }) {

    const errorValue1 = useRef();
    const errorValue2 = useRef();
    const errorValue3 = useRef();
    const errorValue4 = useRef();

    const NextHandler = (e) => {
        const inputName = errorValue1.current;
        const inputMobile = errorValue2.current;
        const inputEmail = errorValue3.current;
        const inputDOB = errorValue4.current;
        if (!values.name || !values.mobile || !values.email || !values.dob) {
            if (!values.name) {
                // console.log(values.name, 'name')
                inputName.style.border = '1px solid red';
            } else {
                inputName.style.border = '1px solid gray';
            }
            if (!values.mobile) {
                inputMobile.style.border = '1px solid red';
            } else {
                inputMobile.style.border = '1px solid gray';
            }
            if (!values.email) {
                inputEmail.style.border = '1px solid red';
            } else {
                inputEmail.style.border = '1px solid gray';
            }
            if (!values.dob) {
                inputDOB.style.border = '1px solid red';
            } else {
                inputDOB.style.border = '1px solid gray';
            }
        }
        else {
            nextStep()
        }
    }


    return (
        <div>
            <h2>Step 1: Personal Information</h2>
            <div className="form-group">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="form-control"
                        ref={errorValue1}
                    />

                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input
                        type="number"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                        className="form-control"
                        ref={errorValue2}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="form-control"
                        ref={errorValue3}
                    />
                </div>
                <div className="form-group">
                    <label>DOB:</label>
                    <input
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        className="form-control"
                        ref={errorValue4}
                    />
                </div>
            </div>
            <button className="btn btn-primary" onClick={NextHandler}>
                Next
            </button>
        </div>
    );
}

export default Step1;
