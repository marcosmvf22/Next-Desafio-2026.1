import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ['200','300', '400', '500', '600', '700', '800'],
  style: "normal",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "BlueStars",
  description: "As melhores camisas do mercado do cabuloso!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
