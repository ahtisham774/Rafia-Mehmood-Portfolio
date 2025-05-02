// File: src/app/layout.tsx

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// 1. Put your downloaded Lexend .woff2 files in:
//    public/fonts/lexend/Lexend-Regular.woff2
//    public/fonts/lexend/Lexend-Bold.woff2

const lexend = localFont({
  src: [
    {
      path: '../public/fonts/lexend/Lexend-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/lexend/Lexend-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created by Habib ur Rehman Zia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="antialiased relative">
        {children}

        {/* Download arrow button */}
        <div className="fixed z-50 bottom-2 right-5 md:bottom-6 md:right-16 w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#FF7C2B] group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-400 border-2 md:border-4 border-black group-hover:border-[#FF7C2B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[5px] bottom-[5px] md:left-[10px] md:bottom-[11px] w-6 h-6 md:w-8 md:h-8 text-black transition-all duration-300 group-hover:animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </body>
    </html>
  );
}
