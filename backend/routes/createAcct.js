const express = require('express');
const router = express.Router();
const connection = require('../connection')

router.post('/', (req, res) => {
    // console.log('Inside the register post request handler');
    const { user, password } = req.body;

    // console.log('User inputs:', req.body);

    if (!user || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    } else {
        connection.getConnection( (err, connection)=> {
            if (err) throw (err)
            console.log ("DB connection successful!")
         })
        connection.query('SELECT * FROM accounts WHERE email = ?', [user], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
                res.json({message: 'invalid'});
                console.log('email already in use');
			} else {
                connection.query('INSERT INTO accounts (email, password) VALUES (?, ?)', [user, password], function(error, results, fields) {
                    if (error) throw error;
                    res.json({message: 'valid'});
                    console.log('new user inserted into database');
                })
            }
		});
    }
})

router.get('/', (req, res) => {
    // Return the user inputs in the request body as JSON
    res.json(req.body);
  });


module.exports = router;