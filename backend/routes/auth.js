const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the login post request handler');
    const { user, password } = req.body;

    console.log('User inputs:', req.body);

    //check the data in the database to see if its valid
    let msg = 'invalid';
    if (user == "noah@gmail.com" && password == "Pass@UH!24") {
        msg = 'valid';
    }
    //send response back to frontend
    res.json({message: msg});
})


module.exports = router;