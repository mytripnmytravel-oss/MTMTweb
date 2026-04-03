import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mytripmytravel.com'),
  title: "MyTripMyTravel | Luxury Golden Triangle Tours & Premium India Car Rental",
  description: "Experience the ultimate luxury travel in India. We offer premium Golden Triangle tours, private guided experiences, and elite car rental services in Delhi, Agra, and Jaipur.",
  keywords: ["Luxury Golden Triangle Tours", "Premium India Car Rental", "Chauffeur Driven Cars India", "Luxury Travel Agra", "Private Tours India", "India Private Tours"],
  openGraph: {
    title: "MyTripMyTravel | Premium India Travel Services",
    description: "Bespoke luxury tours and premium car rentals across India's Golden Triangle.",
    images: ["/hero-taj.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-sunset-orange selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
