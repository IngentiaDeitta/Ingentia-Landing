import type { Metadata } from "next";
import { Nunito, Noto_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "IngentIA | Ingeniería de Procesos y Automatización",
  description: "Rediseñamos los procesos operativos del negocio y construimos aplicaciones internas personalizadas impulsadas por IA.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrolling } from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${noto_sans.variable} antialiased selection:bg-[#4D387A] selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
