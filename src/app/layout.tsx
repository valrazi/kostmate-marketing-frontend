import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KostMate - Cari Kost, Kontrakan, dan Ruko Terbaik dengan Mudah",
  description: "Temukan pilihan kost, kontrakan, dan ruko terbaik dengan fasilitas lengkap dan harga terjangkau di berbagai kota besar di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className={`${plusJakarta.variable} ${outfit.variable} font-sans min-h-full flex flex-col bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
