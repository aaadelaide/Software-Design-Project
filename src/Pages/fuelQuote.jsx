import React, { useState } from "react";
import { Link } from 'react-router-dom';


export const FuelQuote = (props) => {

    return(
      <div className="auth-form-container">
          <h1> Fuel Quote Form </h1>
          <Link to="/userProfile">
            <button className="link-btn">Back</button>
          </Link>
      </div>
    )
}


