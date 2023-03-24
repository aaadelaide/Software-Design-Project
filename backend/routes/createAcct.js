const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the register post request handler');
    const { user, password } = req.body;

    console.log('User inputs:', req.body);


    if (!user || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    //check for unique email and write to db
    let msg = 'invalid';
    if (user != "noah@gmail.com") {
        msg = 'valid';
    }
    //send response back to frontend
    res.json({message: msg});
})

router.get('/', (req, res) => {
    // Return the user inputs in the request body as JSON
    res.json(req.body);
  });


module.exports = router;