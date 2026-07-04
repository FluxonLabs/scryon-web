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
    "Scryon finds the call recordings already on your Android phone and transcribes them, identifies speakers, and extracts action items, sentiment, and key insights.",
  keywords: [
    "call transcription",
    "call recording transcription",
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
      "Transcribe, analyze, and search the call recordings already on your phone with AI. Speaker identification, action items, and sentiment.",
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

// Inline script prevents flash of wrong theme before React hydrates.
const themeScript = `(function(){var m=localStorage.getItem('scryon-web-theme')||'light';if(m==='dark'){document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
