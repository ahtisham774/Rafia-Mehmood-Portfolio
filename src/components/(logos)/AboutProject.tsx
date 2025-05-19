import React from 'react';
import Image from 'next/image';

export default function AboutProject() {
    return (
        <section className="min-h-screen w-full bg-white flex flex-col items-center justify-center py-12 px-4">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10 md:mb-16">
                {/* Image 1 */}
                <div className="w-[202px] h-[202px] rounded-full overflow-hidden border-2 border-yellow-500 bg-black">
                    <Image
                        src="/assets/home-images/logos/Ellipse8.png"
                        alt="Logo 1"
                        width={202}
                        height={202}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Image 2 */}
                <div className="w-[202px] h-[202px] rounded-full overflow-hidden border-2 border-yellow-500 bg-black">
                    <Image
                        src="/assets/home-images/logos/Ellipse7.png"
                        alt="Logo 2"
                        width={202}
                        height={202}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Middle Row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10 md:mb-16">
                {/* Image 3 */}
                <div className="w-[202px] h-[202px] rounded-full overflow-hidden border-2 border-yellow-500 bg-black">
                    <Image
                        src="/assets/home-images/logos/Ellipse4.png"
                        alt="Logo 3"
                        width={202}
                        height={202}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Image 4 */}
                <div className="w-[202px] h-[202px] rounded-full overflow-hidden border-2 border-yellow-500 bg-black">
                    <Image
                        src="/assets/home-images/logos/Ellipse6.png"
                        alt="Logo 4"
                        width={202}
                        height={202}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Bottom Center (Image 5) */}
            <div className="w-[202px] h-[202px] rounded-full overflow-hidden border-2 border-yellow-500 bg-black">
                <Image
                    src="/assets/home-images/logos/Ellipse3.png"
                    alt="Logo 5"
                    width={202}
                    height={202}
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
}
