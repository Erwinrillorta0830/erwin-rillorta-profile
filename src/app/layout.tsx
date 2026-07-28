import type { Metadata } from "next";
import { Geist_Mono, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-title",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

import { PortfolioProvider } from '@/context/PortfolioContext';

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio showcasing my work experiences, projects, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
