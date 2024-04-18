import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import { ReactNode } from "react";
import NavBar from "./nav-bar";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DFWKIK",
  description: "Dallas/Fort Worth Kendo & Iaido Kyokai - Martial Arts Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="h-full">
          <TextureBackground>
            <NavBar className="shadow-lg" />
            {children}
          </TextureBackground>{" "}
        </div>
      </body>
    </html>
  );
}

function TextureBackground({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="pattern-cross bg-slate-700 text-white font-sans pattern-slate-600 pattern-bg-slate-700 pattern-opacity-100 pattern-size-8">
      {children}
    </div>
  );
}
