import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import { ReactNode } from "react";
import NavBar from "./nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
    <div className="pattern-cross bg-slate-700 pattern-slate-600 pattern-bg-slate-700 pattern-opacity-100 pattern-size-8">
      {children}
    </div>
  );
}
