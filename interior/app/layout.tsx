import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AURA Interiors — Redefine Your Space",
  description: "AURA Interiors is a luxury interior design studio crafting spaces that transcend aesthetics. Every project, a masterpiece. Every space, a story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-body bg-warm-white text-dark overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
