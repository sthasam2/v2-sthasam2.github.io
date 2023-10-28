import "@/styles/globals.css";

import { dir } from "i18next";
import { Outfit } from "next/font/google";

import { languages } from "@/i18n/settings";
import { ThemeProvider } from "@components/theme-provider";

import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stha Sambeg",
  description: "Welcome to my humble abode on the internet.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lng={lng} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
