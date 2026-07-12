import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/ui/Starfield";
import { profile } from "@/lib/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `Rafael Rossel (${profile.name}) · ${profile.role}`;
const description = `${profile.tagline} Portafolio de ${profile.name}, también conocido como ${profile.alias}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.alias}`,
  },
  description,
  keywords: [
    "Backend Engineer",
    "Node.js",
    "NestJS",
    "AWS",
    profile.name,
    ...profile.alternateNames,
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: title,
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.alternateNames,
  url: profile.siteUrl,
  jobTitle: profile.role,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  sameAs: Object.values(profile.links),
  knowsAbout: profile.mainRoles,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Starfield />
        {children}
      </body>
    </html>
  );
}
