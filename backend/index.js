const express = require('express');
const fuelQuoteRouter = require('./routes/fuelQuotes');
const authRouter = require('./routes/auth');
const createAcctRouter = require('./routes/createAcct');
const editAcctRouter = require('./routes/ProfileManagement');
const fuelQuoteHistoryRouter = require('./routes/fuelQuoteHistory')

const app = express();

// include the middleware function before defining any routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.use('/fuelQuotes', fuelQuoteRouter);
app.use('/auth', authRouter);
app.use('/createAcct', createAcctRouter);
app.use('/ProfileManagement',editAcctRouter);
app.use('/fuelquotehistory', fuelQuoteHistoryRouter)
app.get('/auth', (req, res) => {
  res.sendStatus(200);
});
app.get('/createAcct', (req, res) => {
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.json({ history: [3, 'Address', '02/24/2023', 4, '$12'] });
});


const port = 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



module.exports = app;
