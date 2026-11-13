import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 