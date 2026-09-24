# Ticket Print Demo

A Vercel-ready Next.js ticket-style print template.

## Dynamic route

- `/CBW3S7ZG`
- `/YOUR_TICKET_ID`

The final URL segment is read as the Ticket ID.

## Change ticket information

Edit `lib/tickets.ts` and add another record:

```ts
ABC12345: {
  ticketId: "ABC12345",
  orderId: "ORDER01",
  name: "Guest Name",
  phone: "01700000000",
  gate: "Gate No 1",
  date: "05th Dec, 25",
  gateOpens: "Gate Opens @15:00",
  venue: "Courtside, Madani Avenue, Dhaka-1212",
  passLabel: "VIP SEATING - ENTRY PASS"
}
```

## Important

The QR graphic is deliberately a non-scannable visual placeholder so this template cannot be mistaken for a real event credential. Replace it with an authorized event-system QR only when the integration is for your own ticketing system.

The page supports browser **Print / Save as PDF** and hides the toolbar when printing.
