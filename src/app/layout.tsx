import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Load Lexend as the main font
const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});
const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    variable: "--font-roboto",
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Rafia Mehmood",
    description: "Portfolio of Rafia Mehmood, a software engineer with expertise in web development and machine learning.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${lexend.variable} ${roboto.variable}`}>
        <body className="antialiased relative overflow-x-hidden">
        {children}
        <ScrollToTopButton/>
        </body>
        </html>
    );
}
