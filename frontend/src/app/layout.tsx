import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TODA Rail Pay",
  description: "A cooperative treasury rail for TODA drivers to collect dues, record savings, and release member payouts on Stellar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
