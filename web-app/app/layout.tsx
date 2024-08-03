import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluewater Interiors",
  description: "Boutique websites for Yacht Interior Designers",
  icons: {
    icon: "/favicon_v3.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <header className="z-30 p-4 w-full fixed top-0 flex justify-between items-center px-8 h-40 ">
        <figure className="w-fit h-full p-1 flex flex-col items-center justify-center align-baseline">
          <Image src="/bluewater-interiors-logo.png" height={64} width={64} alt="Blue Interiors Logo"/>
          <p className="text-[#FDEBBD] text-center font-serif leading-4 p-2">BlueWater<br/> <span className="text-[#FDEBBD]/80 leading-3">Interiors</span></p>
        </figure>
        <nav className="w-1/2">
          <ul className="flex font-serif active:underline items-center justify-around align-baseline text-[#FDEBBD]  ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className=" ">
        {children}
      </main>
    </body>
    </html>
  );
}
