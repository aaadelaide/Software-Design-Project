import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [names, setData] = useState([])
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    

    const getBodyData = async() => {
        const response = await fetch(`http://localhost:8800/ProfileManagement?email=${email}`);
        response.json().then((res) => setData(res));
    };

   useEffect(()=>{
    getBodyData();
    const intervalId = setInterval(getBodyData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId);
  }, [email]);

    if(names.message == "undefined"){
        navigate(`/ProfileManagement?email=${email}`);
    }


    return (
            <div className="profile-container">
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
                    <td>{names.firstname}</td>
                    <td>{names.lastname}</td>
                    <td>{names.address1}</td>
                    <td>{names.address2}</td>
                    <td>{names.city}</td>
                    <td>{names.state}</td>
                    <td>{names.zipcode}</td>
                </table>
                <Link to={`/profilemanagement?email=${email}`}>
  <button className="link-btn">Edit Profile</button>
</Link>

                <Link to={`/fuelquote?email=${email}`}>
                    <button className="link-btn" >Go to Fuel Quotes</button>
                </Link>
                <Link to={`/fuelquotehistory?email=${email}`}>
                    <button className="link-btn" >View Past Fuel Quotes</button>
                </Link>
                <Link to="/">
                <button className="link-btn">Log Out</button>
                </Link>
            </div>
    );
}