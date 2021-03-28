import request from 'supertest';
import { app } from '../../app';

it('it fails when it dose not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('it fails when an inccorect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'azerty123'
    })
    .expect(400);
});

it('it response with a cookie when given vaild credentials', async () => {

  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201);
  
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
});