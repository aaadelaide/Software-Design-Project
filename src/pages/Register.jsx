import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const handleSubmit = async (event) => {
        event.preventDefault(); //prevents reloading of page
        console.log('User inputs:', {email, pass});
        try {
            if (!pass.match(passPattern) || !email.match(emaiPattern)) {
                let error = "Invalid inputs";
                throw error;
                //I need to add HTML/CSS error code 
            }
            const response = await fetch('http://localhost:8800/createAcct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: email,
                    password: pass,
                }),
            });
            console.log('Response:', response);
            const data = await response.json();
            console.log('Data:', data); // do something with the response data
            if (data.message == 'valid') {
                navigate('/');
            } else {
                throw "Email already in use";
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(error);
        }
    }
// "Please enter at least 8 characters containing a number, special symbol, uppercase and lowercase letter"
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Full name</label> */}
                {/* <input value={name} onChange={(event) => setName(event.target.value)} name="name" id="name" placeholder="Jane Apple"/> */}
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="********" id="password" name="password" />
                <p className="pswd-help-text">Please enter at least 8 characters containing a number,<br></br>special symbol, uppercase and lowercase letter</p>
                {errorMessage && (
                    <p className="errorMSG"> {errorMessage} </p>
                )}
                <button type="submit">Register</button>
            </form>
            <Link to="/">
            <button className="link-btn" >Already have an account? Login here.</button>
            </Link>
        </div>
    )
}