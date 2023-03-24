const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Inside the login post request handler');
    const { user, password } = req.body;

    console.log('User inputs:', req.body);

    if (!user || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    //check the data in the database to see if its valid
    let msg = 'invalid';
    if (user == "noah@gmail.com" && password == "Pass@UH!24") {
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