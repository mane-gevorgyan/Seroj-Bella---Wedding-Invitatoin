import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const monserrat = localFont({
  src: "./fonts/Montserratarm-Regular.otf",
  weight: "400",
  variable: "--font-montserrat",
});

const handwritten = localFont({
  src: "./fonts/SHK_Dzeragir.otf",
  weight: "400",
  variable: "--font-dzeragir",
});

const square = localFont({
  src: "./fonts/square.otf",
  weight: "400",
  variable: "--font-qarakusi",
});

const allegro = localFont({
  src: "./fonts/ArmAllegroU.otf",
  weight: "400",
  variable: "--font-allegro",
});

const barak = localFont({
  src: "./fonts/barak.otf",
  weight: "400",
  variable: "--font-barak",
});

export const metadata: Metadata = {
  title: "Seroj & Bella Wedding",
  description: "Wedding invitation site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy" className={`${handwritten.variable} ${square.variable} ${barak.variable} ${monserrat.variable} ${allegro.variable}`}>
      <body
        className={`${barak.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
