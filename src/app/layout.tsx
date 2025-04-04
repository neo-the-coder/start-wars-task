import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="hidden sm:block my-5">
            <Image
              src="/images/Star_Wars_Yellow_Logo.svg"
              alt="Star Wars Logo"
              width={250}
              height={100}
              className="block mx-auto"
            />
          </div>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
