const express = require('express');
const fuelQuoteRouter = require('./routes/fuelQuotes');

const app = express();

// include the middleware function before defining any routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.use('/fuelQuotes', fuelQuoteRouter);

app.get('/fuelQuotes', (req, res) => {
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.json({ history: [3, 'Address', '02/24/2023', 4, '$12'] });
});

app.listen(8800, () => {
  console.log('Server started on port 8800!');
});
