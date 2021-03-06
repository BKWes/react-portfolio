import React, { useState } from "react";
import './Contact.css';

import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log("Form", formState)
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("The email is invalid.")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${capitalizeFirstLetter(e.target.name)} is required`);
            } else {
                setErrorMessage("")
            }
        }
    };

    return(
        <section className="d-flex align-items-center flex-column">
            <h2 className="sectionTitle">Contact Me</h2>
            <form
                id="contact-form"
                className="d-flex flex-column border border-dark m-3 p-3"
                onSubmit={handleSubmit}
            >
                <div className="d-flex justify-content-between">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="d-flex justify-content-between">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="d-flex justify-content-between">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="errorMsg">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
                </form>
                <div className="m-3">
                    <p>Email me: barnesweston@gmail.com</p>
                </div>
        </section>
    )
}

export default Contact;