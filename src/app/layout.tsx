import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/layout/header";
import { Providers } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import FallingLeaves from "@/components/effects/falling-leaves";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export const generateViewport = () => ({
  themeColor: "#221e1eff",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

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
          text-stone-100
          min-h-screen
          font-sans
        `}
      >
        {/* Слой затемнения поверх фона */}
        <div className="fixed inset-0 bg-black/65 -z-10 pointer-events-none" />

        {/* Анимированная листва */}
        <FallingLeaves />

        <Providers>
          <SessionProvider session={session}>
            <Header />
            <main className="w-full">{children}</main>
            <footer className="py-8 text-center text-sm text-stone-500 border-t border-white/5">
              <p>{siteConfig.description}</p>
            </footer>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}