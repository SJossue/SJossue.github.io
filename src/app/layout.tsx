import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../fonts/Geist-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Geist-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Geist-600.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Geist-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    { path: "../fonts/GeistMono-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/GeistMono-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/GeistMono-600.ttf", weight: "600", style: "normal" },
    { path: "../fonts/GeistMono-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "../fonts/PlayfairDisplay-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/PlayfairDisplay-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/PlayfairDisplay-600.ttf", weight: "600", style: "normal" },
    {
      path: "../fonts/PlayfairDisplay-400Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/PlayfairDisplay-500Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/PlayfairDisplay-600Italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jossue Sarango | Portfolio",
  description:
    "Mechanical engineering + robotics student blending real-world hardware projects with polished web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
        style={{ backgroundColor: "#050505", color: "#d4d4d4" }}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
