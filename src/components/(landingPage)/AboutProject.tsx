import React from 'react';
import Image from 'next/image';

export default function AboutProject() {
    return (
        <section id="projects" className="w-full px-2 sm:px-4 py-6 sm:py-12 bg-white relative z-40">
            <div className="max-w-7xl mx-auto">
                {/* Web View Section */}
                <div className="mb-16">
                    {/* Web View Header */}
                    <div className="flex justify-center items-center my-6 sm:my-12">
                        <div className="h-[3px] sm:h-[4px] rounded bg-[#FF7C2B] w-16 sm:w-32 md:w-64"></div>
                        <span className="mx-2 sm:mx-4 text-[#FF7C2B] text-xl sm:text-2xl md:text-[28px] font-[300px]">Web View</span>
                        <div className="h-[3px] sm:h-[4px] rounded bg-[#FF7C2B] w-16 sm:w-32 md:w-64"></div>
                    </div>

                    {/* Web View Image Container */}
                    <div className="w-full flex justify-center mt-4 sm:mt-8">
                        <div className="w-full max-w-full sm:max-w-5xl px-1 sm:px-4">
                            <Image
                                src="/assets/home-images/landingPage/webview.png"
                                alt="Web view example"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}

                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile View Section */}
                <div>
                    {/* Mobile View Header */}
                    <div className="flex justify-center items-center my-6 sm:my-12">
                        <div className="h-[3px] sm:h-[4px] rounded bg-[#FF7C2B] w-16 sm:w-32 md:w-64"></div>
                        <span className="mx-2 sm:mx-4 text-[#FF7C2B] text-xl sm:text-2xl md:text-[28px] font-[300px]">Mobile View</span>
                        <div className="h-[3px] sm:h-[4px] rounded bg-[#FF7C2B] w-16 sm:w-32 md:w-64"></div>
                    </div>

                    {/* Mobile View Image Container - Mobile-Optimized Display */}
                    <div className="w-full flex justify-center mt-4 sm:mt-8">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md px-1 sm:px-4">
                            {/* Mobile device frame effect */}
                            <div>
                                <div>
                                    <Image
                                        src="/assets/home-images/landingPage/mobileview.png"
                                        alt="Mobile view example"
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        style={{ width: '100%', height: 'auto' }}
                                         className="object-cover w-full  "
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}