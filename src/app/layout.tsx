import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";

const anakinMono = localFont({
  src: '../../public/fonts/anakinmono.ttf',
  variable: '--font-anakin-mono'
})

const distantGalaxy = localFont({
  src: '../../public/fonts/SFDistantGalaxy.ttf',
  variable: '--font-distant-galaxy'
})

const sterilict = localFont({
  src: '../../public/fonts/Sterilict.ttf',
  variable: '--font-sterilict'
})

export const metadata: Metadata = {
  title: "Star Wars Explorer",
  description: "Explore Star Wars Universe using SWAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anakinMono.variable} ${distantGalaxy.variable} ${sterilict.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
