import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akshtt | QR Generator",
  description: "Create custom QR codes in seconds with our easy-to-use QR code generator. Whether you need a QR code for a website, contact info, WiFi access, or anything else, our tool makes it fast and hassle-free. No sign-up required—just enter your data and get your QR code instantly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
