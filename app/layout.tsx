import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageScrollProgress from "@/components/ui/PageScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joy's Portfolio",
  description: "Making pixel-perfect UIs and robust backends.",
  openGraph: {
    type: "website",
    siteName: "Joy's Portfolio",
    title: "Joy's Portfolio",
    description: "Making pixel-perfect UIs and robust backends.",
    images: [
      {
        url: "https://0xjoy.tech/logo.png",
      },
    ],
  },
  keywords: [
    "portfolio",
    "joy",
    "samaddar",
    "joy samaddar",
    "frontend",
    "react",
    "nextjs",
    "developer",
    "backend",
  ],
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CustomCursor />
        <PageScrollProgress />
        {children}
      </body>
    </html>
  );
}
