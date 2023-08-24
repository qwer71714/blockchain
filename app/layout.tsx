import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/app/components/Never/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlcokChain Talk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <section className="container m-auto w-11/12">
        {children}
        </section>
      </body>
    </html>
  );
}
