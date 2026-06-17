import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://scryon.app"),
  title: {
    default: "Scryon — AI Call Transcription & Analysis",
    template: "%s | Scryon",
  },
  description:
    "Scryon automatically transcribes your phone calls, identifies speakers, and extracts action items, sentiment, and key insights — all on your Android device.",
  keywords: [
    "call transcription",
    "phone call recorder",
    "AI meeting notes",
    "speaker diarization",
    "action items",
    "call analysis",
  ],
  authors: [{ name: "Scryon" }],
  openGraph: {
    type: "website",
    siteName: "Scryon",
    title: "Scryon — AI Call Transcription & Analysis",
    description:
      "Transcribe, analyze, and search your phone calls with AI. Speaker identification, action items, and sentiment — automatically.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scryon — AI Call Transcription & Analysis",
    description: "Transcribe, analyze, and search your phone calls with AI.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
