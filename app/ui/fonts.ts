import { Inter, Lusitana, Public_Sans, Outfit, Ovo } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
});
export const public_sans = Public_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-public_sans",
});
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});
