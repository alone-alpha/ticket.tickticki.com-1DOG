export default function DemoQr({ value }: { value: string }) {
  // Deterministic QR-looking pattern for visual UI testing only.
  // This is intentionally NOT a standards-compliant/scannable QR code.
  const seed = Array.from(value).reduce(
    (n, c) => (n * 31 + c.charCodeAt(0)) >>> 0,
    7
  );
  const size = 21;
  const grid = Array.from({ length: size * size }, (_, i) => {
    let x = (seed + i * 1103515245 + 12345) >>> 0;
    x ^= x >>> 16;
    return (x & 7) < 3;
  });

  const finder = (ox: number, oy: number) => {
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 7; x++) {
        const edge = x === 0 || x === 6 || y === 0 || y === 6;
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        grid[(oy + y) * size + (ox + x)] = edge || core;
      }
    }
  };

  finder(0, 0);
  finder(14, 0);
  finder(0, 14);

  return (
    <svg
      className="demo-qr"
      viewBox="0 0 210 210"
      role="img"
      aria-label="Ticket QR-style placeholder"
    >
      <rect width="210" height="210" fill="#fff" />
      {grid.map((on, i) =>
        on ? (
          <rect
            key={i}
            x={(i % size) * 10}
            y={Math.floor(i / size) * 10}
            width="10"
            height="10"
            fill="#000"
          />
        ) : null
      )}
    </svg>
  );
}
