import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';

const buildTicket = async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20
  });
  await ticket.save();

  return ticket;
}

it('fetch orders for particular user', async () => {
  // create three ticket
  const ticketOne = await buildTicket();
  const ticketTwo = await buildTicket();
  const ticketThree = await buildTicket();
  
  const userOne = global.signin();
  const userTwo = global.signin();

  // Create one orders as Uer #1

  await request(app)
    .post('/api/orders')
    .set('Cookie', userOne)
    .send({ ticketId: ticketOne.id })
    .expect(201)
  // Create two orders as User #2

  const { body: orderOne } = await request(app)
    .post('/api/orders')
    .set('Cookie', userTwo)
    .send({ ticketId: ticketTwo.id })
    .expect(201)
    const { body: orderTwo } = await request(app)
    .post('/api/orders')
    .set('Cookie', userTwo)
    .send({ ticketId: ticketThree.id })
    .expect(201)

    // Make requesst to get orders for User #2
    const response = await request(app)
      .get('/api/orders')
      .set('Cookie', userTwo)
      .expect(200);

    // Make sure we only got the orders for User #2
    expect(response.body.length).toEqual(2);
    expect(response.body[0]).toEqual(orderOne);
    expect(response.body[1]).toEqual(orderTwo);
    expect(response.body[1]).toEqual(orderTwo);
    expect(response.body[1].ticket.id).toEqual(ticketThree.id);
})