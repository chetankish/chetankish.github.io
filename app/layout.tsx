import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
