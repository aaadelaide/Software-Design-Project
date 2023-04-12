const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../connection')

const basePrice = 1.5;
const inState = 0.02;
const outOfState = 0.04;
const historyFactor = 0.01;
const underThousand = 0.03;
const overThousand = 0.02;
let companyFactor = 0.1;

let pricingHistory;
let pricingResults = {};
let costAdditions = 0
let margin = 0;

router.post('/', (req, res) => {

    const {email, gallons} = req.body;

    console.log(gallons);
  
    if (!email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }


    if(gallons < 1000){
        costAdditions += underThousand;
    }else{
        costAdditions += overThousand;
    }
    
    costAdditions += companyFactor;


    connection.query(`Select state From ClientInformation  WHERE email = '${email}'`, function(error, results){
        if (error) throw error;
        if (results.length == 0) {
            res.json({message: 'invalid'});
            console.log('no user found');
        }else{
            if( results[0].state == 'TX')
                pricingResults = inState;
            else{
                pricingResults = outOfState
            }
        }
    })

    connection.query(`Select * From fuelQuotes  WHERE email = '${email}'`, function(error, history){
        if (error) throw error;
        if (history.length == 0) {
            pricingHistory = 0;
        }else{
            pricingHistory = historyFactor;
        }
    })
    

    costAdditions += pricingHistory + pricingResults;
    console.log(costAdditions);
    margin = costAdditions * basePrice;
    
    console.log(margin);
    
    costAdditions = 0;



});


module.exports = router;