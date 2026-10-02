import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const googleSansFlex = localFont({
  src: [
    { path: "./fonts/google-sans-flex-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/google-sans-flex-medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/google-sans-flex-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/google-sans-flex-bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-google-sans-flex",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scryon.app"),
  title: {
    default: "Scryon — Call notes for Android",
    template: "%s | Scryon",
  },
  description:
    "Choose a saved recording and turn it into a clear summary, speaker-separated transcript, and action items.",
  authors: [{ name: "Scryon" }],
  openGraph: {
    type: "website",
    siteName: "Scryon",
    title: "Scryon — Call notes for Android",
    description:
      "Turn saved call recordings into summaries, speaker-separated transcripts, and action items.",
  },
  twitter: {
    card: "summary",
    title: "Scryon — Call notes for Android",
    description: "Turn saved call recordings into summaries, transcripts, and action items.",
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
    <html lang="en" className={`${googleSansFlex.variable} h-full antialiased`}>
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
