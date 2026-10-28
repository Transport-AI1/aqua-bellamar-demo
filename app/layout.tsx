import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQUA Apartments Bellamar | Tu refugio junto al Mediterráneo",
  description:
    "Descubre AQUA Apartments Bellamar. Una experiencia mediterránea de descanso, diseño y mar. Explora nuestra demo de atención con inteligencia artificial.",
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
