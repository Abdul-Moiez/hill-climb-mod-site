import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-[var(--color-bg-dark)] text-[var(--color-text-primary)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
