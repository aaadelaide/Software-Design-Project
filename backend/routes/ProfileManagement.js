
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the profile edit post request handler');
    const { firstname, lastname, address1, address2, city, zipcode, state, ValidateCheck } = req.body;
    let innerValidation = true;
    console.log('User inputs:', req.body);

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
    } else {
        msg = 'no good'
        console.log(msg);
    }
    res.json({message: msg});
})

    router.get('/', (req, res) => {
        //Return the user inputs in the request body as JSON
        // When the data is actually able to be stored, call it to put in here
        console.log("Sending client data.")
       res.json({firstname: "Maria", lastname:"Smith", address1: "628 Blueberry Way", address2: "", city: "Anchorage", state: "AK", zipcode: "99005"});
      });


module.exports = router;