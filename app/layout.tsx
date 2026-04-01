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
  title: "وطن تورز - أفضل الجولات السياحية في تركيا",
  description:
    "احجز جولات سياحية مميزة في إسطنبول مع وطن تورز، واستمتع بخدمة توصيل المطار بسيارات حديثة وسائقين محترفين لضمان رحلة مريحة وآمنة.",
  keywords: ["جولات سياحية", "إسطنبول", "توصيل للمطار", "رحلات تركيا", "وطن تورز"],
  authors: [{ name: "وطن تورز" }],
  robots: "index, follow",

  openGraph: {
    title: "وطن تورز - أفضل الجولات السياحية في تركيا",
    description:
      "احجز جولات سياحية مميزة في إسطنبول مع وطن تورز...",
    url: "https://watan-tours.vercel.app",
    siteName: "وطن تورز",
    images: [
      {
        url: "/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png",
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
