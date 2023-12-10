import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitness Trainer",
  description: "Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto bg-slate-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
