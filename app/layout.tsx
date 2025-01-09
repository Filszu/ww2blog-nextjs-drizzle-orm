import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "WW2 Military Machines Blog",
  description:
    "Explore the history of World War II machines - tanks, planes, ships, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50`}
      >
        <Navigation />
        {children}
        <Footer />
        <Toaster />

        <Script
          // strategy='lazyOnload'
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
