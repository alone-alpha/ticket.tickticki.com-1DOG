import DemoQr from "../../components/DemoQr";
import { getTicket } from "../../lib/tickets";

export default function TicketPage({
  params,
}: {
  params: { ticketId: string };
}) {
  const ticket = getTicket(params.ticketId);

  return (
    <main className="page-shell">
      <div className="toolbar no-print">
        <a className="back-btn" href="/">&lt; Go Back</a>
        <button className="print-btn" onClick={() => window.print()}>
          Print / Save
        </button>
      </div>

      <section className="ticket">
        <div className="demo-watermark">DEMO / SAMPLE</div>

        <img
          className="hero"
          src="https://print.tickticki.com/images/kaavish26/ticket_1400px560px.jpg"
          alt="Event banner"
        />

        <div className="pass-title">{ticket.passLabel}</div>

        <div className="details-grid">
          <div className="details-column">
            <div className="label">TICKET ID</div>
            <div className="big-value">{ticket.ticketId}</div>

            <div className="label">ORDER ID</div>
            <div className="big-value">{ticket.orderId}</div>

            <div className="person">
              {ticket.name}
              <br />
              {ticket.phone}
            </div>
          </div>

          <div className="details-column right">
            <div className="label">GATE</div>
            <div className="big-value">{ticket.gate}</div>

            <div className="label">DATE &amp; VENUE</div>
            <div className="big-value">{ticket.date}</div>

            <div className="person">
              {ticket.gateOpens}
              <br />
              {ticket.venue}
            </div>
          </div>
        </div>

        <div className="content-row">
          <div className="terms">
            <p>
              The entry pass is a sample/demo document for UI testing. It is not
              an official ticket and does not grant event access.
            </p>

            <strong>Terms &amp; Conditions</strong>
            <ul>
              <li>One ticket admits one person only.</li>
              <li>Valid ticket and photo ID may be required at entry.</li>
              <li>Tickets may be subject to event-specific rules.</li>
              <li>Security checks may be conducted at entry.</li>
              <li>Outside food and prohibited items may not be allowed.</li>
              <li>Event management controls final entry decisions.</li>
            </ul>
          </div>

          <div className="qr-wrap">
            <DemoQr value={ticket.ticketId} />
            <small>QR-style visual placeholder</small>
          </div>
        </div>

        <img
          className="footer-banner"
          src="https://print.tickticki.com/images/kaavish26/footer_1400px_100px.jpg"
          alt=""
        />

        <div className="partner">Software Development Partner</div>
      </section>
    </main>
  );
}
