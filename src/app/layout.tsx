import type { Metadata } from "next";
import { Caveat, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aneeq Ahmad | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack & Mobile Engineer with 6+ years experience in TypeScript, Next.js, React, React Native, NestJS, and Node.js — shipping SaaS products and mobile games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
