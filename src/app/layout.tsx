import type { Metadata } from "next";
import "./globals.css";
import './fonts.css';

export const metadata: Metadata = {
  title: "Montilivi Tour interactivo",
  description: "Powered by Bstadium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
