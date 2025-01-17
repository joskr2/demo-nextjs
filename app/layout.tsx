import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NuevoHeader from "@/components/custom/nuevo-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Demo simple de un restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuevoHeader />
        <main className="py-8">{children}</main>
        <footer className=" z-50 bg-white shadow-md">
          {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
