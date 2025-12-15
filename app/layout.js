import "./globals.css";

export const metadata = {
  title: "Invoice Making App",
  description: "Create invoices online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
