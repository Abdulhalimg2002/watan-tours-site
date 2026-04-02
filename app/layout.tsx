import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "وطن تورز | جولات سياحية في إسطنبول + توصيل مطار بأسعار مميزة",
  
  description:
    "أفضل شركة جولات سياحية في إسطنبول وتركيا. نقدم رحلات مميزة، توصيل من وإلى المطار، وسائقين محترفين بأسعار منافسة وخدمة مريحة وآمنة.",

  keywords: [
    "جولات سياحية في إسطنبول",
    "توصيل مطار إسطنبول",
    "رحلات تركيا",
    "شركة سياحة في تركيا",
    "سائق خاص في إسطنبول",
    "جولات سبانجا بورصة طرابزون"
  ],

  authors: [{ name: "وطن تورز" }],
  robots: "index, follow",

  verification: {
    google: "UI078TID0yULvrupDKkXr56MNwldAiWyGHc1Cdy_O-I",
  },

  openGraph: {
    title: "وطن تورز | جولات سياحية في إسطنبول",
    description:
      "احجز أفضل الجولات السياحية في إسطنبول مع خدمة توصيل المطار وسائقين محترفين بأسعار مميزة.",
    url: "https://watan-tours.vercel.app",
    siteName: "وطن تورز",
    images: [
      {
        url: "https://watan-tours.vercel.app/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-white" dir="rtl">
        {children}
      </body>
    </html>
  );
}
