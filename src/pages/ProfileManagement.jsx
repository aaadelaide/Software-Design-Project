import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useFormik} from "formik";

const validateData = cusData =>{
    const errors = {};
    if(!cusData.FName){
        errors.FName = "Please enter your first name."
    } else if (cusData.FName.length > 50){
        errors.FName = "Name cannot go over 50 characters."
    }

    if(!cusData.LName){
        errors.LName = "Please enter your last name."
    } else if (cusData.LName.length > 50){
        errors.LName = "Name cannot go over 50 characters."
    }

    if(!cusData.address1){
        errors.address1 = "Please enter your primary address."
    } else if (cusData.address1.length > 100){
        errors.address1 = "Address cannot go over 100 characters."
    }

    if(!cusData.city){
        errors.city = "Please enter a city."
    } else if (cusData.city.length > 100){
        errors.city = "City cannot go over 100 characters."
    }

    if(!cusData.zipcode){
        errors.zipcode = "Please enter a zipcode."
    } else if (cusData.zipcode.length > 9){
        errors.zipcode = "Zip code cannot go over 9 characters."
    }
    else if (cusData.zipcode.length < 5){
        errors.zipcode = "Zip code cannot be under 5 characters."
    }

    if(!cusData.state){
        errors.state = "Please select a state."
    }     else if (cusData.state == ""){
        errors.zipcode = "Please choose a state."
    }

    return errors;
};


export const ProfileManagement = (props) => {
    const formik = useFormik({
        initialValues:{
            FName:'',
            LName:'',
            address1:'',
            address2:'',
            city:'',
            zipcode:'',
            state:''
        },
        validate:validateData,
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    });
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
        <div className="profile-form-container">
            <h2>Profile Edit</h2>
            <label htmlFor="FName">First Name: </label>
           <input type="text" name="FName" id="FName" value={formik.values.FName}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.FName && formik.errors.FName ? <span style={{color:'red'}}>{formik.errors.FName}</span> : null}

                  <label htmlFor="LName">Last Name: </label>
           <input type="text" name="LName" id="LName" value={formik.values.LName}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.LName && formik.errors.LName ? <span style={{color:'red'}}>{formik.errors.LName}</span> : null}

                  <label htmlFor="address1">Address Line 1: </label>
           <input type="text" name="address1" id="address1" value={formik.values.address1}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.address1 && formik.errors.address1 ? <span style={{color:'red'}}>{formik.errors.address1}</span> : null}

                  <label htmlFor="address2">Address Line 2 (Optional): </label>
           <input type="text" name="address2" id="address2" value={formik.values.address2}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>

                   <label htmlFor="city">City: </label>
           <input type="text" name="city" id="city" value={formik.values.city}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.city && formik.errors.city ? <span style={{color:'red'}}>{formik.errors.city}</span> : null}

               
        <label htmlFor="state">
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


   <label htmlFor="zipcode">Zipcode: </label>
           <input type="text" name="zipcode" id="zipcode" value={formik.values.zipcode}
                  onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  {formik.touched.zipcode && formik.errors.zipcode ? <span style={{color:'red'}}>{formik.errors.zipcode}</span> : null}

                <button type="submit">Confirm</button>
                <Link to="/userprofile">
                <button type="submit">Go Back</button>
                </Link>
        </div>
    )
}