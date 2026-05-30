import type { Metadata } from "next";
import "@fontsource-variable/mona-sans";

import "./globals.css";

import Footer from "@/components/layout/footer";

import { ReduxProvider } from "@/providers/reduxProvider";
import Navbar from "@/components/layout/navbar";

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
      className="h-full antialiased font-sans"
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