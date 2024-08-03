import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "@/app/LayoutComponents/HeaderBar/HeaderBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueWater Interiors",
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
      <HeaderBar/>
      <main className=" ">
        {children}
      </main>
    </body>
    </html>
);
}
