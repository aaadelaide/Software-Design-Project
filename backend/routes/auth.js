const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../connection')

router.post('/', (req, res) => {
    // console.log('Inside the login post request handler');
    const { user, password } = req.body;

    if (!user || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    } else {
        connection.getConnection( (err, connection)=> {
            if (err) throw (err)
            console.log ("DB connection successful!");
         })
        connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [user, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
                res.json({message: 'valid'});
                console.log('valid credentials');
			} else {
				res.json({message: 'invalid'});
                console.log('invalid credentials');
			}
		});
    }
})

router.get('/', (req, res) => {
    // Return the user inputs in the request body as JSON
    res.json(req.body);
  });


module.exports = router;