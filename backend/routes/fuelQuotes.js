const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../connection')



// POST request handler for fuel quotes
router.post('/', (req, res) => {
  console.log('Inside fuelQuote post request handler');
  const {gallons, address, deliveryDate, pricePerGallon } = req.body;
  const { email } = req.query;

  console.log('User inputs:', req.body);
  
  // Check for missing required fields
  if (!email || !gallons || !address || !deliveryDate || !pricePerGallon) {
    res.status(400).json({ error: 'Missing required fields' });
    console.log('missing a variable');
    return;
  }

  
  connection.query('INSERT INTO fuelQuotes (email, gallons, address, deliveryDate, pricePerGallon) VALUES (?, ?, ?, ?, ?)', [email, gallons, address,deliveryDate, pricePerGallon], function(error, results, fields) {
    if (error) throw error;
    console.log('Fuel quote inserted into database');
    res.json({ message: 'Fuel quote inserted into database' });
  });
});

// New route to display user inputs as JSON
router.get('/', (req, res) => {
  // Return the user inputs in the request body as JSON
  res.json(req.body);
});

module.exports = router;
