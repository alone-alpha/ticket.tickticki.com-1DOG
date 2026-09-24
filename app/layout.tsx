import "./globals.css";

export const metadata = {
  title: "Ticket Print Demo",
  description: "Printable ticket-style demo page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
