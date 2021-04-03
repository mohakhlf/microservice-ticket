import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { TicketCtreatedEvent } from "./ticket-created-event";
import { Subjects } from './subjects';

export class TicketCreatedListener extends Listener<TicketCtreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  onMessage(data: TicketCtreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);
    console.log(data.id);
    console.log(data.title);
    console.log(data.price);
    msg.ack();
  }
}