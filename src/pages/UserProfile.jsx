import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const UserProfile = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents reloading of page
    }

    return (
            <div className="auth-form-container">
                <h2>User Information</h2>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                    </tr>
                    <td>John</td>
                    <td>Smith</td>
                    <td>312 Calais Way</td>
                    <td>Apt #231</td>
                    <td>Houston</td>
                    <td>TX</td>
                    <td>99507</td>
                </table>
                <Link to="/profilemanagement">
                <button className="link-btn">Edit Profile</button>
                </Link>
                <button className="link-btn" >Go to Fuel Quotes</button>
                <button className="link-btn" >View Past Fuel Quotes</button>
                <Link to="/">
                <button className="link-btn">Log Out</button>
                </Link>
            </div>
    );
}