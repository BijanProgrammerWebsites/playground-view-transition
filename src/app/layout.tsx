import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "View Transition API",
  description: "A demo for View Transition API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
