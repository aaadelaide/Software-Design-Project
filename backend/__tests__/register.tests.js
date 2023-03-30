const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const createAcctRouter = require('../routes/createAcct');

const app = express();
app.use(bodyParser.json());
app.use('/createAcct', createAcctRouter);

describe('createAcctRouter', () => {
    describe('POST /', () => {
      // test("should return a response with a message 'valid' when good, unique credentials entered", async () => {
      //   const res = await request(app)
      //     .post('/createAcct')
      //     .send({
      //       user: "emailwhichisnotindb@gmail.com",
      //       password: "Pass@UH!24"
      //     });
        
      //   expect(res.body).toHaveProperty('message');
      //   expect(res.body.message).toEqual('valid');
      // });

      test("should return a response with a message 'invalid' when duplicate email entered", async () => {
        const res = await request(app)
          .post('/createAcct')
          .send({
            user: "noah@gmail.com",
            password: "NotPass@UH!22"
          });
        
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('invalid');
      });
  
      test('should return a 400 response with an error message when a required field is missing', async () => {
        const res = await request(app)
          .post('/createAcct')
          .send({
            user: "fakenoah2@gmail.com"
          });
  
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
      });
    });
  
    describe('GET /createAcct', () => {
      test('should return the user inputs as JSON', async () => {
        const res = await request(app)
          .get('/createAcct')
          .send({
            user: "noahnew@gmail.com",
            password: "newPass@UH!24"
          });
  
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            user: "noahnew@gmail.com",
            password: "newPass@UH!24"
        });
      });
    });
});