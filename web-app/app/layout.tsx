import type { Metadata } from "next";
import "./globals.css";
import HeaderBar from "@/app/components/LayoutComponents/HeaderBar/HeaderBar";
import Footer from "@/app/components/LayoutComponents/Footer";
import ContactSection from "@/app/contact/ContactSection";
import Hero from "@/app/components/LayoutComponents/Hero/Hero";

export const metadata: Metadata = {
  title: "BlueWater Interiors",
  description: "Boutique websites for Yacht Interior Designers",
  icons: {
    icon: "/favicons/favicon_v3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <HeaderBar />
        {/* <Hero /> */}
        <main className="">{children}</main>
        {/* <ContactSection /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
