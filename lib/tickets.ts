export type TicketData = {
  ticketId: string;
  orderId: string;
  name: string;
  phone: string;
  gate: string;
  date: string;
  gateOpens: string;
  venue: string;
  passLabel: string;
  page: number;
};

export const tickets: Record<string, TicketData> = {
  CBW3S7ZG: {
    ticketId: "CBW3S7ZG",
    orderId: "M5ILPK",
    name: "Tahmid Rahman",
    phone: "01776770124",
    gate: "Gate No 1",
    date: "05th Dec, 25",
    gateOpens: "Gate Opens @15:00",
    venue: "Courtside, Madani Avenue, Dhaka-1212",
    passLabel: "VIP SEATING - ENTRY PASS",
    page: 1,
  },
  J7K4N2Q9: {
    ticketId: "J7K4N2Q9",
    orderId: "M5ILPK",
    name: "Jannat Khanam",
    phone: "01571567890",
    gate: "Gate No 1",
    date: "05th Dec, 25",
    gateOpens: "Gate Opens @15:00",
    venue: "Courtside, Madani Avenue, Dhaka-1212",
    passLabel: "VIP SEATING - ENTRY PASS",
    page: 2,
  },
  R8M2K6P4: {
    ticketId: "R8M2K6P4",
    orderId: "M5ILPK",
    name: "Sample Guest 03",
    phone: "01XXXXXXXXX",
    gate: "Gate No 1",
    date: "05th Dec, 25",
    gateOpens: "Gate Opens @15:00",
    venue: "Courtside, Madani Avenue, Dhaka-1212",
    passLabel: "VIP SEATING - ENTRY PASS",
    page: 3,
  },
  T5Q9V3L7: {
    ticketId: "T5Q9V3L7",
    orderId: "M5ILPK",
    name: "Sample Guest 04",
    phone: "01XXXXXXXXX",
    gate: "Gate No 1",
    date: "05th Dec, 25",
    gateOpens: "Gate Opens @15:00",
    venue: "Courtside, Madani Avenue, Dhaka-1212",
    passLabel: "VIP SEATING - ENTRY PASS",
    page: 4,
  },
};

export function getTicket(ticketId: string): TicketData {
  const normalized = ticketId.trim().toUpperCase();
  return (
    tickets[normalized] ?? {
      ticketId: normalized,
      orderId: "M5ILPK",
      name: "Sample Guest",
      phone: "01XXXXXXXXX",
      gate: "Gate No 1",
      date: "05th Dec, 25",
      gateOpens: "Gate Opens @15:00",
      venue: "Courtside, Madani Avenue, Dhaka-1212",
      passLabel: "VIP SEATING - ENTRY PASS",
      page: 1,
    }
  );
}
