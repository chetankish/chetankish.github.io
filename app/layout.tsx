import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Chetan Kishnani — Data Portfolio",
  description: "Data projects, SMU analytics modules and certifications by Chetan Kishnani.",
  openGraph: {
    title: "Chetan Kishnani — Data Portfolio",
    description: "Projects · SMU Modules · Certifications",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Kishnani — Data Portfolio",
    description: "Projects · SMU Modules · Certifications",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${geistSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
