const request = require('supertest');
const app = require('../index');


afterAll(done => {
  app.close(done);
});

describe('POST /fuelQuotes', () => {
  it('should respond with status 200 and JSON data', async () => {
    const res = await request(app)
      .post('/fuelQuotes')
      .send({
        gallons: 100,
        address: '123 Main St.',
        deliveryDate: '2023-04-01',
        pricePerGallon: 2.5,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'recieved userInputs from frontend');
  });

  it('should return an error message when the request body is missing data', async () => {
    const res = await request(app)
      .post('/fuelQuotes')
      .send({
        gallons: 100,
        address: '123 Main St.',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Missing required fields');
  });
});

