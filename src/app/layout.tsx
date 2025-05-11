import type { Metadata } from "next";
import { Inter, Outfit } from 'next/font/google';
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Саид — Веб-разработчик, Frontend, UI/UX | Москва",
  description: "Портфолио Саида: современная веб-разработка, UI/UX дизайн, анимации, адаптивность. Москва, Россия.",
  keywords: "веб-разработка, frontend, UI/UX, дизайн, Next.js, Москва, портфолио, Саид",
  authors: [{ name: "Саид" }],
  openGraph: {
    title: "Саид — Веб-разработчик, Frontend, UI/UX | Москва",
    description: "Портфолио Саида: современные сайты, дизайн, анимации, Москва.",
    images: ["https://your-domain.com/avatar-said.jpg"],
    type: "website",
    url: "https://your-domain.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Саид — Веб-разработчик, Frontend, UI/UX | Москва",
    description: "Портфолио Саида: современные сайты, дизайн, анимации, Москва.",
    images: ["https://your-domain.com/avatar-said.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <LanguageProvider>
          <ClientOnly>
            <Navbar />
            {children}
          </ClientOnly>
        </LanguageProvider>
      </body>
    </html>
  );
}
