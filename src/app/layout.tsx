import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";

const distantGalaxy = localFont({
  src: '../../public/fonts/SFDistantGalaxy.ttf',
  variable: '--font-distant-galaxy'
})

const sterilict = localFont({
  src: '../../public/fonts/Sterilict.ttf',
  variable: '--font-sterilict'
})

const starJediOut = localFont({
  src: '../../public/fonts/Starjout.ttf',
  variable: '--font-star-jedi-outline'
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
        className={`${distantGalaxy.variable} ${sterilict.variable} ${starJediOut.variable} antialiased bg-[url(/images/bg.webp)]`}
      >
        <Navbar />
        <main>{children}</main>
        <footer>Made with love by neo-the-coder</footer>
      </body>
    </html>
  );
}
