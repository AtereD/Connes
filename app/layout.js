import { Titan_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Titan_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Connes",
  description: "Connes is from the word Icecream cone, it is a mixure of deliciousness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/connes.png" rel="icon" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
