import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Fitness Trainer",
    description: "Next App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={`${inter.className} bg-slate-900 mx-auto`}>
                <header className="h-24 w-full p-5 border-b-slate-700 border-b "></header>
                {children}
            </body>
        </html>
    );
}
