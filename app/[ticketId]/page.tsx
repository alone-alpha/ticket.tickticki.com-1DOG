import DemoQr from "../../components/DemoQr";
import PrintButton from "../../components/PrintButton";
import { getTicket, tickets } from "../../lib/tickets";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(tickets).map((ticketId) => ({ ticketId }));
}

export default async function TicketPage({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) {
  const { ticketId } = await params;
  const ticket = getTicket(ticketId);

  return (
    <main className="page-shell">
      <div className="toolbar no-print">
        <a className="back-btn" href="/">&lt; Go Back</a>
        <PrintButton />
      </div>

      <section className="ticket">
        <div className="demo-watermark">DEMO / SAMPLE</div>

        <img
          className="hero"
          src="https://print.tickticki.com/images/kaavish26/ticket_1400px560px.jpg"
          alt="Event banner"
        />

        <div className="pass-title">{ticket.passLabel} - 2 of 4</div>

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
              This entry pass is a sample/demo document for UI testing. It is
              not an official ticket and does not grant event access.
            </p>

            <strong>Terms &amp; Conditions</strong>
            <ul>
              <li>One ticket admits one person only.</li>
              <li>Age limit: 16+. Valid ticket and photo ID required.</li>
              <li>Tickets are non-transferable, non-refundable &amp; non-resalable.</li>
              <li>Weapons, alcohol, drugs, tobacco/vapes, outside food &amp; drinks are prohibited.</li>
              <li>Bags, power banks, chargers &amp; Bluetooth speakers are not allowed.</li>
              <li>Security checks may be conducted at entry.</li>
              <li>No refund unless the event is cancelled.</li>
              <li>Management reserves the right to refuse entry or remove anyone causing disturbance.</li>
              <li>CCTV, photography and videography may be in operation at the venue.</li>
              <li>This page is a demo UI for software testing.</li>
            </ul>
          </div>

          <aside className="qr-panel" aria-label="Demo QR area">
            <div className="qr-wrap">
              <DemoQr value={`DEMO-TICKET:${ticket.ticketId}`} />
            </div>
          </aside>
        </div>

        <img
          className="footer-banner"
          src="https://print.tickticki.com/images/kaavish26/footer_1400px_100px.jpg"
          alt=""
        />

        <div className="partner">
          Software Development Partner <strong>LILABALI.COM</strong>
        </div>
      </section>
    </main>
  );
}
