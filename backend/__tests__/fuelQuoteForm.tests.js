const request = require('supertest');
const express = require('express');
const fuelQuoteRouter = require('../routes/fuelQuotes');

describe('test', () => {
  let app;
  let testServer;
  let agent;

  beforeAll((done) => {
    app = express();
    app.use(express.json());
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    app.use('/fuelQuotes', fuelQuoteRouter);
    testServer = app.listen(0, () => {
      agent = request.agent(testServer);
      done();
    });
  });

  afterAll((done) => {
    testServer.close(done);
  });

  describe('POST /fuelQuotes', () => {
    it('responds with 400 status when missing required fields', async () => {
      const response = await agent
        .post('/fuelQuotes')
        .send({});
      expect(response.statusCode).toBe(400);
      expect(response.body).toEqual({ error: 'Missing required fields' });
    });

    it('responds with 200 status and JSON when required fields are provided', async () => {
      const response = await agent
        .post('/fuelQuotes')
        .send({
          gallons: 50,
          address: '123 Main St',
          deliveryDate: '2022-03-22',
          pricePerGallon: 2.50,
        });
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: 'recieved userInputs from frontend' });
    });
  });

  describe('GET /fuelQuotes', () => {
    it('responds with 200 status and JSON containing user inputs', async () => {
      const response = await agent
        .get('/fuelQuotes')
        .send({
          gallons: 50,
          address: '123 Main St',
          deliveryDate: '2023-04-01',
          pricePerGallon: 3.50,
        });
      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toEqual({
        gallons: 50,
        address: '123 Main St',
        deliveryDate: '2023-04-01',
        pricePerGallon: 3.50,
      });
    });
  });
});
