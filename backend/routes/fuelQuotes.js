const express = require('express');
const router = express.Router();
//const app = require('../index');

// POST request handler for fuel quotes
router.post('/', (req, res) => {
  console.log('Inside fuelQuote post request handler');
  const { gallons, address, deliveryDate, pricePerGallon } = req.body;

  console.log('User inputs:', req.body);
  
  // Check for missing required fields
  if (!gallons || !address || !deliveryDate || !pricePerGallon) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Do something with the data, e.g. calculate the fuel quote
  
  // Send the response back to the frontend
  res.json({ message: 'recieved userInputs from frontend' });
});

// New route to display user inputs as JSON
router.get('/fuelQuotes', (req, res) => {
  // Return the user inputs in the request body as JSON
  res.json(req.body);
});

module.exports = router;
