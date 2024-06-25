import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEA Salon",
  description: "Beauty and Elegance Redefined",
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar/>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
