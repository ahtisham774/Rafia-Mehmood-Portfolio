'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <div onClick={scrollToTop} className="block group cursor-pointer fixed z-50 md:bottom-6 bottom-2 md:right-16 right-5 md:h-[100px] w-[50px] h-[50px] md:w-[100px] bg-[#FF7C2B]">
            <div className="relative">
                <div className="absolute md:-top-[11px] md:left-[10px] -top-[7px] left-[5px] group-hover:top-0 group-hover:left-0 transition-all duration-400 inset-0 flex items-center justify-center md:border-4 border-2 border-black group-hover:border-[#FF7C2B] group-hover:border-5 md:h-[100px] w-[50px] h-[50px] md:w-[100px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 md:w-8 w-6 h-6 rotate-180 text-black group-hover:animate-bounce transition-all duration-300 absolute left-[7px] bottom-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
