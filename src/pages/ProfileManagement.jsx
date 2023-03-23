import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useFormik} from "formik";


export const ProfileManagement = (props) => {

    const [firstname, FName] = useState("");
    const [lastname, LName] = useState("");
    const [address1, Address1] = useState("");
    const [address2, Address2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZip] = useState("");
    const [state, setSt] = useState("");
    const [submitting, setSubmitting] = useState(false);
    let formIsValid_FName = false;
    let formIsValid=false;
    let formIsValid_LName = false;
    let formIsValid_Addr1 = false;
    let formIsValid_Addr2 = false;
    let formIsValid_City= false;
    let formIsValid_ZC = false;
    let formIsValid_State = false;

    let ValidateCheck = false;

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents reloading of page
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
        },3000)
    }

    const handleFNameChange = (event) => {
        formIsValid_FName = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid_FName = false;
          FName(value);
        } else {
          FName(value);
        }
      };

      const handleLNameChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid = false;
          LName(value);
        } else {
          LName(value);
        }
        return formIsValid;
      };

      const handleAddressChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid = false;
          Address1(value);
        } else {
          Address1(value);
        }
        return formIsValid;
      };
      const handleAddress2Change = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value >= 100) {
          formIsValid = false;
          Address2(value);
        } else {
          Address2(value);
        }
        return formIsValid;
      };

      const handleCityChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 100) {
          formIsValid = false;
          setCity(value);
        } else {
          setCity(value);
        }
        return formIsValid;
      };

      const handleStateChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0) {
          formIsValid = false;
          setSt(value);
        } else {
          setSt(value);
        }
        return formIsValid;
      };

      const handleZipChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value < 5 || value > 9) {
          formIsValid = false;
          setZip(value);
        } else {
          setZip(value);
        }
        return formIsValid;
      };


    return (
        <div className="profile-form-container">
            <form onSubmit={handleSubmit} className="profile-form-container">
            <h2>Profile Edit</h2>
            <label htmlFor="FName">First Name: </label>
           <input type="text" name="FName" id="FName" value={firstname}
                  onChange={handleFNameChange}></input>
                  {firstname.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : null}
                  {firstname.length >= 50 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {firstname.length > 0 && firstname.length < 50 ? formIsValid_FName = true : formIsValid_FName = false}

                  <label htmlFor="LName">Last Name: </label>
           <input type="text" name="LName" id="LName" value={lastname}
                  onChange={handleLNameChange}></input>
                  {lastname.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : null}
                  {lastname.length >= 50 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {lastname.length > 0 && lastname.length < 50 ? formIsValid_LName = true : formIsValid_LName = false}

                   <label htmlFor="address1">Address Line 1: </label>
           <input type="text" name="address1" id="address1" value={address1}
                  onChange={handleAddressChange}></input>
                  {address1.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : null}
                  {address1.length >= 50 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {address1.length > 0 && address1.length < 50 ? formIsValid_Addr1 = true : formIsValid_Addr1 = false}

                 <label htmlFor="address2">Address Line 2 (Optional): </label>
           <input type="text" name="address2" id="address2" value={address2}
                  onChange={handleAddress2Change}></input>
                  {address2.length >= 100 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : formIsValid_Addr2=true}
                  

                    <label htmlFor="city">City: </label>
           <input type="text" name="city" id="city" value={city}
                  onChange={handleCityChange}></input>
                  {city.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : null}
                  {city.length >= 100 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {city.length > 0 && city.length < 100 ? formIsValid_City = true : formIsValid_City = false}
             
        <label htmlFor="state">
       State
      <div>
       <select name = "state" id="state" value={state} onChange = {handleStateChange}>
        <option value =""></option>
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
       {state.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : formIsValid_State=true}

     </label>



   <label htmlFor="zipcode">Zipcode: </label>
           <input type="text" name="zipcode" id="zipcode" value={zipcode}
                  onChange={handleZipChange}></input>
                  {zipcode.length <= 0 ? <span style={{color:'red'}}>{"* This is a required field."}</span> : null}
                  {zipcode.length > 0 && zipcode.length < 5 ? <span style={{color:'red'}}>{"* The zipcode must be at least five characters."}</span> : null}
                  {zipcode.length >9 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {zipcode.length > 4 && zipcode.length < 9 ? formIsValid_ZC = true : formIsValid_ZC = false}

                  {ValidateCheck = true ? formIsValid_LName && formIsValid_FName && formIsValid_Addr1 && formIsValid_Addr2 && formIsValid_City && formIsValid_State && formIsValid_ZC : false}

                <Link to="/userprofile">
                <button type="submit" disabled={!ValidateCheck}>Confirm</button>
                </Link>
                <Link to="/userprofile">
                <button type="submit" >Go Back</button>
                </Link> 
                </form>
        </div>
    )
}