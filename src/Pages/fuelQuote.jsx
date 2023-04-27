import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pricing from "../modules/pricingModule";

export const FuelQuote = (props) => {
  const [gallons, setGallons] = useState(0);
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  let [pricePerGallon, setPricePerGallon] = useState(0); // default price per gallon
  let [estimatedCost, setEstimatedCost] = useState(0);
  

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
   }, []);

  const handleGallonsChange = (event) => {
    const value = event.target.value;
    if (value < 0) {
      setGallons(0);
    } else {
      setGallons(value);
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value.slice(0, 100)); // truncate address to first 100 characters
  };

  const handleDeliveryDateChange = (date) => {
    setDeliveryDate(date);
  };

  useEffect(() => {
    // simulate a network request to get the actual price per gallon based on the user's location and other factors
    setTimeout(() => {
      setPricePerGallon(pricePerGallon);
      setEstimatedCost(estimatedCost);
    }, 1000);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US');
    console.log('User inputs:', { gallons, address, deliveryDate, pricePerGallon });
    try {
      const response = await fetch('http://localhost:8800/fuelQuotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          gallons: Number(gallons),
          address: names.address1,
          deliveryDate: formattedDeliveryDate,
          pricePerGallon: pricePerGallon,
        }),
      });
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data); // do something with the response data
    } catch (error) {
      console.error('Error:', error);
    }
    alert("You have sucessfully submitted a quote of: " + estimatedCost + ".");
  };

  const handlePrice = async (event) => {
  console.log("in handle price");
    // Send the data to the backend
    const response = await fetch(`http://localhost:8800/pricingModule?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    });
  
    // Handle the response from the backend
    
    const data = await response.json();
    console.log(data);
    if(data === 0){
      const {ppGal, roundedTotal}  = Pricing(gallons, names.state, 0);
      console.log(ppGal);
      console.log(roundedTotal);
      
      
      setPricePerGallon(ppGal);
      setEstimatedCost(roundedTotal)
    }else{
      const {ppGal, roundedTotal}  = Pricing(gallons, data[0].state, data.length);
      console.log(ppGal);
      console.log(roundedTotal);
      
      
      setPricePerGallon(ppGal);
      setEstimatedCost(roundedTotal)
    }
    
    
    //console.log(data);
  }
  

  return (
    <div className="auth-form-container">
      <h1>Fuel Quote Form</h1>
      <form onSubmit={handleSubmit} className="quote-form">
        <label htmlFor="gallons">Gallons Needed:</label>
        <input
          type="number"
          id="gallons"
          name="gallons"
          value={gallons}
          onChange={handleGallonsChange}
          min="0"
        />
        <br />
        <label htmlFor="address">Delivery Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={names.address1 + ", " + names.city + ", " + names.state + ", " + names.zipcode}
          onChange={handleAddressChange}
          maxLength="100"  
        />
        <br />
        <label htmlFor="deliveryDate">Delivery Date:</label>
        <DatePicker
          selected={deliveryDate}
          onChange={handleDeliveryDateChange}
          minDate={new Date()}
        />
        <br />
        <div className="price-per-gallon-container">
          <label>Price per Gallon:</label>
          <label className="price-per-gallon-label">{pricePerGallon}</label>
        </div>
        <br />
        <br />
      <br />
      <div className="price-per-gallon-container">
        <label>Estimated Total:</label>
        <label className="price-per-gallon-label">${estimatedCost}</label>
      </div>
      <br />
      <button type="button" onClick={handlePrice}>Get Quote</button>
      <button type="submit">Submit Quote</button>
      <br />
      <br />
      <Link to={`/userprofile?email=${email}`}>Go Back</Link>
      </form>
    </div>
  );
};

export default FuelQuote;
