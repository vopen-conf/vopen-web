export interface IConference {
  id: string;
  name: string;
  editions: IEdition[];
}

export interface IEdition {
  id: string;
  name: string;
  description: string;
  location: {
    fullAddress: string;
    venueName: string;
    description: string;
  };
  date: string;
  ticketsInfo: {
    ticketsType: string;
    isTicketSaleOpen: boolean;
  };
}