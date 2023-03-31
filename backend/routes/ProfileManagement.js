const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const myconnection = require('../connection');

router.post('/', (req, res) => {
    console.log('Inside the profile edit post request handler');
    const { firstname, lastname, address1, address2, city, zipcode, state, ValidateCheck, email } = req.body;
    let innerValidation = true;
    console.log('User inputs:', req.body);
    console.log(email);

    if(firstname.length > 50 || firstname.length <= 0){
        innerValidation = false;
        console.log("invalid firstname length");
    }

    if(lastname.length > 50 || lastname.length <= 0){
        innerValidation = false;
        console.log("invalid lastname length");
    }

    if(address1.length > 100 || address1.length <= 0){
        innerValidation = false;
        console.log("invalid address1 length");
    }

    if(address2.length > 100){
        innerValidation = false;
        console.log("invalid address2 length");
    }

    if(city.length > 100 || city.length <= 0){
        innerValidation = false;
        console.log("invalid city length");
    }

    if(state.length <= 0){
        innerValidation = false;
        console.log("invalid state length");
    }

    if(zipcode.length > 4 && zipcode.length < 9){
        innerValidation=true;
    }else{
        innerValidation=false;
    }


    let msg = 'invalid';
    if (ValidateCheck == true && innerValidation == true) {
        msg = 'valid';
        console.log(msg);

        // Here we will execute the insert statement to add user info to the database
        const query = `UPDATE accounts SET firstname = ?, lastname = ?, address1 = ?, address2 = ?, city = ?, state = ?, zipcode = ? WHERE email = ?`;
        const values = [firstname, lastname, address1, address2, city, state, zipcode, email];

        myconnection.query(query, values, (err, result) => {
            if (err) throw err;
            console.log('User info added to database:', result);
        });
    } else {
        msg = 'no good'
        console.log(msg);
    }
    res.json({message: msg});
});

router.get('/', (req, res) => {
    const email = req.query.email;
    myconnection.query(`SELECT * FROM accounts WHERE email = '${email}'`, function(error, results, fields) {
      if (error) throw error;
      const { firstname, lastname, address1, address2, city, state, zipcode } = results[0];
      console.log(results[0]);
      res.json({ firstname, lastname, address1, address2, city, state, zipcode });
    });
  });
  
  

module.exports = router;
