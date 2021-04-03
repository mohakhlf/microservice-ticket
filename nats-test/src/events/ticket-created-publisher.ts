import { Publisher } from "./base-publisher"
import { Subjects } from "./subjects"
import { TicketCtreatedEvent } from "./ticket-created-event"

export class TicketCreatedPublisher extends Publisher<TicketCtreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}