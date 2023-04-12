const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../connection')

const CURRENT_PRICE_PER_GALLON = 1.5;
const LOCATION_FACTOR_TX = 0.02;
const LOCATION_FACTOR_OTHER = 0.04;
const RATE_HISTORY_FACTOR = 0.01;
const GALLONS_REQUESTED_FACTOR_MORE_THAN_1000 = 0.02;
const GALLONS_REQUESTED_FACTOR_LESS_THAN_1000 = 0.03;
const COMPANY_PROFIT_FACTOR = 0.1;

router.post('/', (req, res) => {

    const {email } = req.body;
  
    if (!email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    console.log(email);

    connection.query(`Select state From ClientInformation  WHERE email = '${email}'`, function(error, results){
        if (error) throw error;
        if (results.length == 0) {
            res.json({message: 'invalid'});
            console.log('no user found');
        }else{
            console.log(results);
        }
    })

    connection.query(`Select * From FuelQuotes  WHERE email = '${email}'`, function(error, results){
        if (error) throw error;
        if (results.length == 0) {
            res.json({message: 'invalid'});
            console.log('no user found');
        }else{
            console.log(results);
        }
    })

});

module.exports = router;