const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the register post request handler');
    const { user, password } = req.body;

    console.log('User inputs:', req.body);

    //check for unique email and write to db
    let msg = 'invalid';
    if (user != "noah@gmail.com") {
        msg = 'valid';
    }
    //send response back to frontend
    res.json({message: msg});
})


module.exports = router;