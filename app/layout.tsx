
import type { Metadata } from "next";
import VoiceflowWidget from "./components/VoiceflowWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQUA Apartments Bellamar | Tu refugio junto al Mediterráneo",
  description:
    "Descubre AQUA Apartments Bellamar. Una experiencia mediterránea de descanso, diseño y mar.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <VoiceflowWidget />
      </body>
    </html>
  );
}
