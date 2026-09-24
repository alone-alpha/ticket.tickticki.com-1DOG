import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="home-card">
        <span className="eyebrow">PRINT TEMPLATE</span>
        <h1>Ticket Print Demo</h1>
        <p>
          Dynamic ticket-style route. The final URL segment becomes the Ticket ID.
        </p>
        <Link className="open-btn" href="/CBW3S7ZG">
          Open CBW3S7ZG
        </Link>
      </div>
    </main>
  );
}
