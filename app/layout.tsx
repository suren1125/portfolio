import type { Metadata } from "next";
import "./globals.css";
import { inter, lusitana, outfit, ovo } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Portfolio - Suren",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${lusitana.variable} ${outfit.variable} ${ovo.variable} ${inter.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
