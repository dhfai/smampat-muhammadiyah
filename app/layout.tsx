import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMAMPAT-MUHAMMADIYAH",
  description: "SMA 4 MUHAMMADIYAH MAKASSAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={`${geistMono} min-h-screen bg-background text-foreground`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
  );
}
