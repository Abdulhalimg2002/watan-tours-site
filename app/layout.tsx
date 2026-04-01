import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata هنا على الـ Server Component
export const metadata = {
  title: "وطن تورز - أفضل الجولات السياحية في تركيا",
  description:
    "احجز جولات سياحية مميزة في إسطنبول مع وطن تورز، واستمتع بخدمة توصيل المطار بسيارات حديثة وسائقين محترفين لضمان رحلة مريحة وآمنة. أفضل العروض وأجمل التجارب السياحية.",
  keywords: ["جولات سياحية", "إسطنبول", "توصيل للمطار", "رحلات تركيا", "وطن تورز"],
  authors: [{ name: "وطن تورز" }],
  robots: "index, follow",
  sameAs: ["https://wa.me/905058995605"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="وطن تورز" />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png" />
        <meta property="og:url" content="https://watan-tours.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "وطن تورز",
              description: metadata.description,
              url: "https://watan-tours.com",
              logo: "/WhatsApp_Image_2026-03-25_at_23.26.46-removebg-preview.png",
              serviceType: "جولات سياحية، خدمة توصيل المطار",
              sameAs: metadata.sameAs,
            }),
          }}
        />
      </Head>
      <body className="min-h-full flex flex-col bg-[#111111] text-white" dir="rtl">
        {children}
      </body>
    </html>
  );
}