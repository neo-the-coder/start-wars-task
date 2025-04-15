import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ScrollUp from "@/components/ScrollUp";

const distantGalaxy = localFont({
  src: "../../public/fonts/SFDistantGalaxy.ttf",
  variable: "--font-distant-galaxy",
});

const sterilict = localFont({
  src: "../../public/fonts/Sterilict.ttf",
  variable: "--font-sterilict",
});

const starJediOut = localFont({
  src: "../../public/fonts/Starjout.ttf",
  variable: "--font-star-jedi-outline",
});

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
    <html lang='en'>
      <body
        className={`${distantGalaxy.variable} ${sterilict.variable} ${starJediOut.variable} animate-galaxy bg-[url(/images/bg.webp)] bg-size-[100vw_auto] antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <ScrollUp />
        <footer className='font-sterilict bg-gray-900 p-4 text-center tracking-[3px] capitalize'>
          Made with love by{" "}
          <Link
            href='https://github.com/neo-the-coder'
            rel='noopener noreferrer'
            target='_blank'
            className='hover:text-sw-green transition-colors duration-200 ease-in'
          >
            neo-the-coder
          </Link>
        </footer>
      </body>
    </html>
  );
}
