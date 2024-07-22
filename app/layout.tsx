import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";

const mono = IBM_Plex_Mono({
  weight: ["100", "200", "300", '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-IBM_Plex_Mono",
});

export const metadata: Metadata = {
  title: "Rodrigo Santos's Portfolio",
  description: "Minimal portfolio website for Rodrigo Santos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.variable}>
        <Header/>
        {children}</body>
    </html>
  );
}
