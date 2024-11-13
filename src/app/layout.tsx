import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "./components/shared/navbar";

export const metadata: Metadata = {
  title: "Fantastic Store",
  description: "Mini tienda usando la API de Platzi",
};

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className}  antialiased bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
