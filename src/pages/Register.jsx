import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    // const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents reloading of page
        console.log(email);
    }

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
                <Link to="/">
                <button type="submit">Login</button>
                </Link>
            </form>
            <Link to="/">
            <button className="link-btn" >Already have an account? Login here.</button>
            </Link>
        </div>
    )
}