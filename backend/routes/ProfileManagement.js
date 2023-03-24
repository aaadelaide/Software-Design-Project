
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the profile edit post request handler');
    const { firstname, lastname, address1, address2, city, zipcode, state, ValidateCheck } = req.body;

    console.log('User inputs:', req.body);


    let msg = 'invalid';
    if (ValidateCheck == true) {
        msg = 'valid';
        console.log(msg);
    } else {
        msg = 'no good'
        console.log(msg);
    }
    res.json({message: msg, firstname: firstname});
})

    router.get('/', (req, res) => {
        //Return the user inputs in the request body as JSON
        console.log("Sending client data.")
       res.json({firstname: "Maria", lastname:"Smith", address1: "628 Blueberry Way", address2: "", city: "Anchorage", state: "AK", zipcode: "99005"});
      });


module.exports = router;