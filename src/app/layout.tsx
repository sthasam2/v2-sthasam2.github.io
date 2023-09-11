import "@/styles/globals.css";

import { Outfit } from "next/font/google";

import type { Metadata } from "next";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stha Sambeg",
  description: "Welcome to my humble abode on the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
