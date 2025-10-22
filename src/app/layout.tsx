import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/layout/header";
import { Providers } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";

// Настраиваем шрифты
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Метаданные страницы
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

// Настройка themeColor
export const generateViewport = () => ({
  themeColor: "#221e1eff",
});

// Корневой компонент
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        antialiased 
        bg-black
        text-black-800 
        min-h-screen 
        font-sans
       
      `}
      >
        <Providers>
          <SessionProvider session={session}>
            <Header />
            <main className="flex flex-col h-[calc(100vh-${layoutConfig.footerHeight}-${layoutConfig.headerHeight})] w-full justify-start items-center">
              {children}
            </main>
            <footer className="flex h-{`h-[${layoutConfig.footerHeight}]`} justify-center items-center">
              <p>{siteConfig.description}</p>
            </footer>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
