import React from 'react';
import Image from 'next/image';

export default function AboutProject() {
    return (
        <section id="projects" className="w-full px-2 sm:px-4 py-6 sm:py-12 bg-white relative z-40">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16">
                    <div className="w-full flex justify-center mt-4 sm:mt-8">
                        <div className="w-full max-w-full sm:max-w-5xl px-1 sm:px-4">
                            <Image
                                src="/assets/home-images/posters/posters.png"
                                alt="Web view example"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}

                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-4 sm:mt-8">
                        <div className="w-full max-w-full sm:max-w-5xl px-1 sm:px-4">
                            <Image
                                src="/assets/home-images/posters/posters2.png"
                                alt="Web view example"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-4 sm:mt-8">
                        <div className="w-full max-w-full sm:max-w-5xl px-1 sm:px-4">
                            <Image
                                src="/assets/home-images/posters/poster1.png"
                                alt="Web view example"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}