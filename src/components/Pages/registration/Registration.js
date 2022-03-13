import React, { useState } from 'react'
import "../style.css";

function Registration() {
    const [values, setValues] = useState({ firstName: "", lastName: "", email: "" });

    const handleTheFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }
    const handleTheLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }
    const handleTheEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const [submit, setSubmitMessage] = useState(false);
    const handleSubmitButton = (event) => {
        event.preventDefault()
        setSubmitMessage(true);
    }

    return (
        <div className="container">

            <h1>Registration</h1>

            <center><form className="register-form" onSubmit={handleSubmitButton}>
                {submit ? <div className="confirm-message">Thanks for registering!</div> : null}
                <input className="form-field" placeholder="FirstName" name="firstName" value={values.firstName} onChange={handleTheFirstNameInputChange} /> <br />
                {submit && !values.firstName ? <p>Please enter your first name</p> : null}
                <input className="form-field" placeholder="LastName" name="lastName" value={values.lastName} onChange={handleTheLastNameInputChange} /> <br />
                {submit && !values.lastName ? <p>Please enter your last name</p> : null}
                <input className="form-field" placeholder="Email" name="email" value={values.email} onChange={handleTheEmailInputChange} /> <br />
                {submit && !values.email ? <p>Please enter your email</p> : null}
                <button className="form-field" type="submit">Register</button>
            </form></center>
        </div>
    )
}

export default Registration;