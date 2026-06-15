import type { Metadata } from "next";
import { Nunito_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-nunito-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Planetary Impact HUB",
  description: "Mars vastgoed website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${nunitoSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
