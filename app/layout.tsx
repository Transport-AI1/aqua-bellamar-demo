
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQUA Apartments Bellamar | Tu refugio junto al Mediterráneo",
  description:
    "Descubre AQUA Apartments Bellamar. Una experiencia mediterránea de descanso, diseño y mar.",
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
      <body>
        {children}

        <Script
          id="voiceflow-chat"
          strategy="afterInteractive"
          src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
          onLoad={() => {
            window.voiceflow?.chat?.load({
              verify: {
                projectID: "6ae1e2332e2bb7bb800781b7"
              },
              url: "https://general-runtime.voiceflow.com",
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }}
        />
      </body>
    </html>
  );
}
