"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Menu from "@/app/components/Never/Menu";
import ThemeButton from "@/app/components/Theme/ThemeButton";

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
        <ThemeProvider attribute="class">
          <Menu />
          <div className="container mx-auto flex justify-end">
            <ThemeButton />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
