import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "@/components/layout/footer";

import { ReduxProvider } from "@/providers/reduxProvider";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoeki Assessment",
  description: "Yoeki Assessment: A simple web application with modern UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white">
        <ReduxProvider>
          <div className="mx-auto w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20 bg-black flex flex-col">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}