import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const ProfileManagement = (props) => {
    const [firstname, setFN] = useState("");
    const [lastname, setLN] = useState("");
    const [address1, setAD1] = useState("");
    const [address2, setAD2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZC] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents reloading of page
    }

    return (
        <div className="auth-form-container">
            <h2>Profile Edit</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input value={firstname} onChange={(event) => setFN(event.target.value)} type="firstname" placeholder="Your first name..." id="firstname" name="firstname" />
                <label htmlFor="lastname">Last Name</label>
                <input value={lastname} onChange={(event) => setLN(event.target.value)} type="lastname" placeholder="Your last name..." id="lastname" name="lastname" />
                <label htmlFor="address1">Address 1</label>
                <input value={address1} onChange={(event) => setAD1(event.target.value)} type="address1" placeholder="Your address.." id="address1" name="address1" />
                <label htmlFor="address2">Address 2</label>
                <input value={address2} onChange={(event) => setAD2(event.target.value)} type="address2" placeholder="Your apartment #..." id="address2" name="address2" />
                <label htmlFor="city">City</label>
                <input value={city} onChange={(event) => setCity(event.target.value)} type="city" placeholder="Your city..." id="city" name="city" />
                <div>
        <label htmlFor="email">
       State
       <div>
       <select>
         <option value="AL">AL</option> <option value="AK">AK</option> <option value="AZ">AZ</option>
         <option value="AR">AR</option>
         <option value="CA">CA</option>
         <option value="CO">CO</option>
         <option value="CT">CT</option>
         <option value="DE">DE</option>
         <option value="DC">DC</option>
         <option value="FL">FL</option>
         <option value="GA">GA</option>
         <option value="HI">HI</option>
         <option value="ID">ID</option>
         <option value="IL">IL</option>
         <option value="IN">IN</option>
         <option value="IA">IA</option>
         <option value="KS">KS</option>
         <option value="KY">KY</option>
         <option value="LA">LA</option>
         <option value="ME">ME</option>
         <option value="MD">MD</option>
         <option value="MA">MA</option>
         <option value="MI">MI</option>
         <option value="MN">MS</option>
         <option value="MO">MO</option>
         <option value="MT">MT</option>
         <option value="NE">NE</option>
         <option value="NV">NV</option>
         <option value="NH">NH</option>
         <option value="NJ">NJ</option>
         <option value="NM">NM</option>
         <option value="NY">NY</option>
         <option value="NC">NC</option>
         <option value="ND">ND</option>
         <option value="OH">OH</option>
         <option value="OK">OK</option>
         <option value="OR">OR</option>
         <option value="PA">PA</option>
         <option value="RI">RI</option>
         <option value="SC">SC</option>
         <option value="SD">SD</option>
         <option value="TN">TN</option>
         <option value="TX">TX</option>
         <option value="UT">UT</option>
         <option value="VT">VT</option>
         <option value="VA">VA</option>
         <option value="WA">WA</option>
         <option value="WV">WV</option>
         <option value="WI">WI</option>
         <option value="WY">WY</option>
       </select>
       </div>
     </label>
   </div>
   <label htmlFor="zipcode">ZIP Code</label>
                <input value={zipcode} onChange={(event) => setZC(event.target.value)} type="zipcode" placeholder="Your zip code..." id="zipcode" name="zipcode" />
            <Link to="/userprofile">
                <button type="submit">Confirm</button>
                </Link>
            </form>
        </div>
    )
}