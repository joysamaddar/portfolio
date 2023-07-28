import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollDown from "@/components/ui/ScrollDown";
import PageScrollProgress from "@/components/ui/PageScrollProgress";
import Socials from "@/components/ui/Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joy's Portfolio",
  description: "Making pixel-perfect UIs and robust backends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PageScrollProgress />
        <Socials/>
        <Navbar />
        {children}
        <ScrollDown />
      </body>
    </html>
  );
}
