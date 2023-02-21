import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents reloading of page
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(event) => setPass(event.target.value)} type="password" placeholder="********" id="password" name="password" />
                <Link to ="/userprofile">
                <button type="submit">Login</button>
                </Link>
            </form>
            <Link to="/register">
            <button className="link-btn">Don't have an account? Register here.</button>
            </Link>
        </div>
    )
}