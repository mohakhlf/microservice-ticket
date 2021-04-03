import { Request, Response } from 'express';
import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';

it('fetch the order', async () => {
  // Create a ticket
  const ticket = Ticket.build({
    title: 'Kendrick Lamar',
    price: 20
  });
  await ticket.save();

  const user = global.signin();
  // make a request to build an order with this ticket
  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201)
  // make request to fetch the order

  const { body: fetchedOrder } = await request(app)
    .get(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(200);

  expect(order).toEqual(fetchedOrder);
});

it('returns an error one user try to fetch another users order', async () => {
    // Create a ticket
    const ticket = Ticket.build({
      title: 'Kendrick Lamar',
      price: 20
    });
    await ticket.save();
  
    const user = global.signin();
    const userTwo = global.signin();
    // make a request to build an order with this ticket
    const { body: order } = await request(app)
      .post('/api/orders')
      .set('Cookie', user)
      .send({ ticketId: ticket.id })
      .expect(201)
    // make request to fetch the order
  
    const { body: fetchedOrder } = await request(app)
      .get(`/api/orders/${order.id}`)
      .set('Cookie', userTwo)
      .send()
      .expect(401);
})