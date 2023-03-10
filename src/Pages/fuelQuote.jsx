import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FuelQuote = (props) => {
  const [gallons, setGallons] = useState(0);
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [pricePerGallon, setPricePerGallon] = useState(2.5); // default price per gallon
  const [estimatedCost, setEstimatedCost] = useState(0);

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
      const newPricePerGallon = 2.75; // replace with actual price per gallon
      setPricePerGallon(newPricePerGallon);
    }, 1000);
  }, []);

  useEffect(() => {
    const newEstimatedCost = gallons * pricePerGallon;
    setEstimatedCost(newEstimatedCost);
  }, [gallons, pricePerGallon]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

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
          value={address}
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
        <div className="price-per-gallon-container">
          <label>Estimated Cost:</label>
          <label className="price-per-gallon-label">${estimatedCost.toFixed(2)}</label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Link to="/userProfile">
        <button className="link-btn">Back</button>
      </Link>
    </div>
  )
}