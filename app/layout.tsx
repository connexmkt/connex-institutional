import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connex | Sua marca conectada ao que importa",
  description:
    "Agência de marketing digital em Natal, RN. Criação de marca, presença digital e campanhas de captação para conectar sua empresa ao crescimento.",
  generator: "v0.app",
  keywords: [
    "marketing digital",
    "agência",
    "Natal",
    "RN",
    "branding",
    "social media",
    "campanhas",
  ],
  authors: [{ name: "Connex" }],
  openGraph: {
    title: "Connex | Sua marca conectada ao que importa",
    description:
      "Agência de marketing digital em Natal, RN. Conectamos sua marca ao crescimento.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#161622",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
