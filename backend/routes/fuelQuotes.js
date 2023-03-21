const express = require('express');
const router = express.Router();

router.post('/fuelQuote', (req, res) => {
  console.log('Inside fuelQuote post request handler');
  const { gallons, address, deliveryDate, pricePerGallon } = req.body;

  console.log('Request body:', req.body);
  
  // Do something with the data, e.g. calculate the fuel quote
  
  // Send the response back to the frontend
  res.json({ /* your response data */ });
});


module.exports = router;
