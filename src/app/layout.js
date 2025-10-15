import { Suspense } from "react";
import { inter } from "./fonts";
import "./globals.css";
import Script from "next/script";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import AnimatedBackground from "./components/AnimatedBackground";
import GAListener from "./components/GAListener";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  metadataBase: new URL("https://maycondev.com.br"),
  title: "Maycon Dev — Front-end React",
  description: "Portfólio de Maycon Silva Rodrigues, desenvolvedor front-end focado em React, Next.js e performance.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maycon Dev — Front-end React",
    description: "Portfólio de Maycon Silva Rodrigues.",
    url: "https://maycondev.com.br",
    siteName: "Maycon Dev",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // defina na Vercel

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        {/* GA4 */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}</Script>
          </>
        )}

        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 px-3 py-2 rounded bg-black/80 text-white">
          Pular para o conteúdo
        </a>

        <ThemeProvider>
          <AnimatedBackground />
          <Header />
          <main id="conteudo" className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}</Script>
          <Suspense fallback={null}>
          <GAListener />
          </Suspense>
        </>
      )}
    </html>
  );
}
