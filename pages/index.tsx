import Image from "next/image";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Hero } from "@/components/layout/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`${poppins.className}  `}>
      <Hero />
    </div>
  );
}
