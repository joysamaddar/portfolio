import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageScrollProgress from "@/components/ui/PageScrollProgress";
import bg from "@/public/bg.webp";
import Image from "next/image";
import GradientBlocker from "@/components/ui/GradientBlocker";

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
        <div className="w-screen h-screen absolute top-0 bottom-0 overflow-clip pointer-events-none select-none">
          <Image
            src={bg}
            className="z-[990] w-full h-full object-cover opacity-60"
            alt="Background image"
            priority
          />
          <GradientBlocker />
        </div>
        <PageScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
