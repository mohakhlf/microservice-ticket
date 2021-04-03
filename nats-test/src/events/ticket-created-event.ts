import { Subjects } from './subjects';

export interface TicketCtreatedEvent {
  subject: Subjects.TicketCreated;

  data: {
    id: string;
    title: string;
    price: number;
  }
}