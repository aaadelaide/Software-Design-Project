const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../connection')

router.post('/', (req, res) => {

    const {email} = req.body;

  
    if (!email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }


    connection.query(`Select state From ClientInformation  WHERE email = '${email}'`, function(error, results){
        if (error) throw error;
        if (results.length == 0) {
            res.json({message: 'invalid'});
            console.log('no user found');
        }else{
            res.status(200).json(results);
        }
    })

    connection.query(`Select * From fuelQuotes  WHERE email = '${email}'`, function(error, history){
        if (error) throw error;
        if (history.length == 0) {
            pricingHistory = 0;
        }else{
            res.status(200).json(history);
        }
    })
    

});


module.exports = router;