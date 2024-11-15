import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/shared/navbar";
import { ThemeProvider } from "./ui/providers/theme-provider";
import { Sora } from "next/font/google";

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
      <body className={`${sora.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
