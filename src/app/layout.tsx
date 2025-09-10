import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uber - Move the way you want",
  description: "Request a ride, hop in, and go. Choose from a range of ride options and find one that fits your budget and schedule.",
  keywords: "ride sharing, taxi, transportation, uber, ride booking",
  authors: [{ name: "Uber Technologies" }],
  openGraph: {
    title: "Uber - Move the way you want",
    description: "Request a ride, hop in, and go. Choose from a range of ride options and find one that fits your budget and schedule.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}