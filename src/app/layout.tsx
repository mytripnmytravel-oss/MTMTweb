import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, ORGANIZATION } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#organization`,
        name: ORGANIZATION.name,
        legalName: ORGANIZATION.legalName,
        url: SITE_URL,
        logo: ORGANIZATION.logo,
        image: ORGANIZATION.logo,
        description: ORGANIZATION.description,
        telephone: ORGANIZATION.telephone,
        email: ORGANIZATION.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORGANIZATION.address.street,
          addressLocality: ORGANIZATION.address.locality,
          addressRegion: ORGANIZATION.address.region,
          postalCode: ORGANIZATION.address.postalCode,
          addressCountry: ORGANIZATION.address.country,
        },
        areaServed: "IN",
        sameAs: ORGANIZATION.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/destinations?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-sunset-orange selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
