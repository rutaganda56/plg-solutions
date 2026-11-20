import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ScrollReveal from "@/app/components/ScrollReveal";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PLG Solutions | Advanced technology, grounded delivery",
    template: "%s | PLG Solutions",
  },
  description:
    "PLG Solutions designs, integrates and delivers technology systems for organisations operating in complex, real-world environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} h-full scroll-smooth antialiased [scroll-padding-top:100px]`}>
      <body className="min-h-full bg-white font-[var(--font-geist)] leading-[1.6] text-[#0f2238]">
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 