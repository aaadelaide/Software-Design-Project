const request = require('supertest');
const express = require('express');

const app = express();
const router = require('../routes/ProfileManagement');

app.use(express.json());
app.use('/', router);

describe('POST /', () => {
  it('should return a 200 status code and a message saying valid when ValidateCheck = true', async () => {
    const res = await request(app)
      .post('/')
      .send({
        firstname: 'Gabriel',
        lastname: 'Gonzales',
        address1: '689 Dream Street',
        address2: '',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '77006',
        ValidateCheck: true,
        email: 'gabrielPagonzalez@gmail.com',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('valid');
  });

  it('should return a 200 statuss code', async () =>{
    const res = await request(app)
    .post('/')
    .send({
      firstname: '',
      lastname: 'Doe',
      address1: '123 Main St',
      address2: '',
      city: 'Anytown',
      state: 'CA',
      zipcode: '123',
      ValidateCheck: true,
      email: 'gabrielLdwLLgonzalez@gmail.com',
    });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('no good');
});

it('should return a 200 statuss code and invalid firstname length', async () =>{
    const res = await request(app)
    .post('/')
    .send({
      firstname: 'Janie',
      lastname: '',
      address1: '123 Main St',
      address2: '',
      city: '',
      state: 'CA',
      zipcode: '123',
      ValidateCheck: true,
      email: 'janieeeeedee@gmail.com',
    });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('no good');
});

it('should return a 200 status code and that it is no good', async () =>{
    const res = await request(app)
    .post('/')
    .send({
      firstname: 'Hannah',
      lastname: 'Doe',
      address1: '',
      address2: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      city: 'Anytown',
      state: '',
      zipcode: '1232332322',
      ValidateCheck: true,
      email: 'gabrielBDwAHDgonzalez@gmail.com',
    });
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('no good');
});


  it('should return a 200 status code and message saying no good/invalid when ValidateCheck is false', async () => {
    const res = await request(app)
      .post('/')
      .send({
        firstname: 'George',
        lastname: 'Davidson',
        address1: '839 Society St',
        address2: '#456',
        city: '',
        state: 'AK',
        zipcode: '99005',
        ValidateCheck: false,
        email: 'gabrielBAddSSADgonzalez@gmail.com',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('no good');
  });
});

describe('GET /', () => {
  it('should return user inputs as JSON + 200 status message + defined message', async () => {
    await request(app)
      .post('/')
      .send({
        firstname: 'Gabriel',
        lastname: 'Gonzales',
        address1: '689 Dream Street',
        address2: '',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '77006',
        ValidateCheck: true,
        email: 'gabrielHAaSSAHgonzalez@gmail.com',
      });
    const res = await request(app).get('/?email=gabrielBgonzalez@gmail.com');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'defined',
      firstname: 'Gabriel',
      lastname: 'Gonzales',
      address1: '689 Dream Street',
      address2: '',
      city: 'San Francisco',
      state: 'CA',
      zipcode: '77006',
    });
  });
});

describe('GET /', () => {
  it('it should return an undefined message', async () => {
    await request(app)
      .post('/')
      .send({
        firstname: 'Gabriel',
        lastname: 'Gonzales',
        address1: '689 Dream Street',
        address2: '',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '77006',
        ValidateCheck: true,
        email: '',
      });
    const res = await request(app).get('/');
    expect(res.body).toEqual({
      message: 'undefined',
    });
  });
});




