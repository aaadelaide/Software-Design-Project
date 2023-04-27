import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const ProfileManagement = (props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
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


    const [names, setData] = useState([]);
    const getBodyData = async() => {
      const response = await fetch(`http://localhost:8800/ProfileManagement?email=${email}`);
      response.json().then((res) => setData(res));
  };

 useEffect(()=>{
  getBodyData();
 }, []);




    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('User inputs:', { firstname, lastname, address1, address2, city, state, zipcode, email });
        try {
          const response = await fetch('http://localhost:8800/ProfileManagement', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: names.firstname,
                lastname: names.lastname,
                address1: names.address1,
                address2: names.address2,
                city: names.city,
                state: names.state,
                zipcode: names.zipcode,
                ValidateCheck: ValidateCheck,
                email: email,
                formIsValid_FName: formIsValid_FName,
                formIsValid_LName: formIsValid_LName,
                formIsValid_Addr1: formIsValid_Addr1,
                formIsValid_Addr2 : formIsValid_Addr2,
                formIsValid_City: formIsValid_City,
                formIsValid_ZC : formIsValid_ZC,
                formIsValid_State : formIsValid_State,
            }),
          });
          console.log('Response:', response);
          const data = await response.json();
          console.log('Data:', data);
          if (data.message == 'valid') {
            console.log(data.firstname)
            navigate(`/userprofile?email=${email}`);
          }// do something with the response data
        } catch (error) {
          console.error('Error:', error);
        }
      };



    const handleFNameChange = (event) => {
        formIsValid_FName = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid_FName = false;
          names.firstname=value;
          FName(value);
        } else {
          names.firstname=value;
          FName(value);
        }
      };
      

      const handleLNameChange = (event) => {
        console.log("please pleaase work");
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid = false;
          names.lastname = value;
          LName(value);
        } else {
          LName(value);
          names.lastname = value;
        }
        return formIsValid;
      };

      const handleAddressChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 50) {
          formIsValid = false;
          names.address1 = value;
          Address1(value);
        } else {
          names.address1 = value;
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
          names.address2 = value;
        } else {
          Address2(value);
          names.address2 = value;
        }
        return formIsValid;
      };

      const handleCityChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value >= 100) {
          formIsValid = false;
          setCity(value);
          names.city = value;
        } else {
          setCity(value);
          names.city = value;
        }
        return formIsValid;
      };

      const handleStateChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0) {
          formIsValid = false;
          setSt(value);
          names.state = value;
        } else {
          setSt(value);
          names.state = value;
        }
        return formIsValid;
      };

      const handleZipChange = (event) => {
        formIsValid = true;
        const value = event.target.value;
        if (value <= 0 || value < 5 || value > 9) {
          formIsValid = false;
          names.zipcode = value;
          setZip(value);
        } else {
          setZip(value);
          names.zipcode = value;
        }
        return formIsValid;
      };

      

    return (
        <div className="profile-form-container">
            <form onSubmit={handleSubmit} className="profile-form-container">
            <h2>Profile Edit</h2>
            <label htmlFor="FName">First Name: </label>
           <input type="text" name="FName" id="FName" value={names.firstname||""}
                  onChange={handleFNameChange} placeholder={'Enter your first name'}></input>
                  {names.firstname ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
                  {names.firstname?.length >= 50 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {names.firstname?.length > 0 && names.firstname?.length < 50 ? formIsValid_FName = true : formIsValid_FName = false}

                  <label htmlFor="LName">Last Name: </label>
           <input type="text" name="LName" id="LName" value={names.lastname||""}
                  onChange={handleLNameChange} placeholder={'Enter your last name'}></input>
                  {names.lastname ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
                  {names.lastname?.length >= 50 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {names.lastname?.length > 0 && names.lastname?.length < 50 ? formIsValid_LName = true : formIsValid_LName = false}

                   <label htmlFor="address1">Address Line 1: </label>
           <input type="text" name="address1" id="address1" value={names.address1||""}
                  onChange={handleAddressChange} placeholder={'Enter your address'}></input>
                  {names.address1 ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
                  {names.address1?.length >= 100 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {names.address1?.length > 0 && names.address1?.length < 100 ? formIsValid_Addr1 = true : formIsValid_Addr1 = false}

                 <label htmlFor="address2">Address Line 2 (Optional): </label>
           <input type="text" name="address2" id="address2" value={names.address2||""}
                  onChange={handleAddress2Change}></input>
                  {names.address2 ? null : names.address2="" }
                  {names.address2?.length >= 100 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : formIsValid_Addr2=true}
                  

                    <label htmlFor="city">City: </label>
           <input type="text" name="city" id="city" value={names.city||""}
                  onChange={handleCityChange} placeholder={'Enter your city'}></input>
                  {names.city ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
                  {names.city?.length >= 100 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {names.city?.length > 0 && names.city?.length < 100 ? formIsValid_City = true : formIsValid_City = false}
             
        <label htmlFor="state">
       State
      <div>
       <select name = "state" id="state" value={names.state||""} onChange = {handleStateChange}>
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
       {names.state ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
       {names.state?.length > 0 ? formIsValid_State = true : formIsValid_State = false}
     </label>



   <label htmlFor="zipcode">Zipcode: </label>
           <input type="text" name="zipcode" id="zipcode" value={names.zipcode||""}
                  onChange={handleZipChange} placeholder={'Enter your zipcode'}></input>
                  {names.zipcode ? null : <span style={{color:'red'}}>{"* This is a required field."}</span> }
                  {names.zipcode?.length> 0 && names.zipcode?.length < 5 ? <span style={{color:'red'}}>{"* The zipcode must be at least five characters."}</span> : null}
                  {names.zipcode?.length >9 ? <span style={{color:'red'}}>{"* This exceeds the character limit."}</span> : null}
                  {names.zipcode?.length > 4 && names.zipcode?.length < 9 ? formIsValid_ZC = true : formIsValid_ZC = false}

                  {ValidateCheck = true ? formIsValid_LName && formIsValid_FName && formIsValid_Addr1 && formIsValid_Addr2 && formIsValid_City && formIsValid_State && formIsValid_ZC : false}

                <button type="submit" >Confirm</button>

                <Link to={`/userprofile?email=${email}`}>
  <button typee="submit">Go Back</button>
</Link>
                </form>
        </div>
    )
}
