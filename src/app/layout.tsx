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

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.headline,
  keywords: ["Backend Engineer", "Node.js", "NestJS", "AWS", profile.name, profile.alias],
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
        <Starfield />
        {children}
      </body>
    </html>
  );
}
