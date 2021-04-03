import { Publisher, Subjects, TicketCreatedEvent } from "@mohakhlf/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
