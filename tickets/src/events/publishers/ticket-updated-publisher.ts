import { Publisher, Subjects, TicketUpdatedEvent } from "@mohakhlf/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
