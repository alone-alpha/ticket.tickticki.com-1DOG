'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page">
      <div className="error-card">
        <div className="eyebrow">TICKET PRINT DEMO</div>
        <h1>Page could not be rendered</h1>
        <p>The deployment returned a rendering error. Try again or go back to the demo home page.</p>
        <div className="error-actions">
          <button type="button" className="print-btn" onClick={() => reset()}>
            Try Again
          </button>
          <a className="back-btn" href="/">
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
