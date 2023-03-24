const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('../routes/auth');

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRouter);

describe('authRouter', () => {
    describe('POST /', () => {
      test("should return a response with a message 'valid' when good credentials entered", async () => {
        const res = await request(app)
          .post('/auth')
          .send({
            user: "noah@gmail.com",
            password: "Pass@UH!24"
          });
        
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('valid');
      });

      test("should return a response with a message 'invalid' when bad credentials entered (email)", async () => {
        const res = await request(app)
          .post('/auth')
          .send({
            user: "noah2@gmail.com",
            password: "Pass@UH!24"
          });
        
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('invalid');
      });

      test("should return a response with a message 'invalid' when bad credentials entered (password)", async () => {
        const res = await request(app)
          .post('/auth')
          .send({
            user: "noah@gmail.com",
            password: "Pass@UH!23"
          });

          expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('invalid');
      });
  
      test('should return a 400 response with an error message when a required field is missing', async () => {
        const res = await request(app)
          .post('/auth')
          .send({
            user: "noah2@gmail.com"
          });
  
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
      });
    });
  
    describe('GET /auth', () => {
      test('should return the user inputs as JSON', async () => {
        const res = await request(app)
          .get('/auth')
          .send({
            user: "noah@gmail.com",
            password: "Pass@UH!24"
          });
  
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            user: "noah@gmail.com",
            password: "Pass@UH!24"
        });
      });
    });
});