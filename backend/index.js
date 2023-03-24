const express = require('express');
const fuelQuoteRouter = require('./routes/fuelQuotes');
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
app.use('/fuelquotehistory', fuelQuoteHistoryRouter)


app.listen(8800, () => {
  console.log('Server started on port 8800!');
});
