import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); //prevents reloading of page
        console.log('User inputs:', {email, pass});
        try {
            //do not need to validate inputs because they won't be in db if invalid
            const response = await fetch('http://localhost:8800/auth', {
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
                navigate(`/userprofile?email=${email}`);
            } else {
                throw "Incorrect email or password";
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(error);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="********" id="password" name="password" />
                {errorMessage && (
                    <p className="errorMSG"> {errorMessage} </p>
                )}
                <button type="submit">Login</button>
            </form>
            <Link to="/register">
            <button className="link-btn">Don't have an account? Register here.</button>
            </Link>
        </div>
    )
}