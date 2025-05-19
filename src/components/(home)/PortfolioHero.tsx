import Image from 'next/image';
import img from "../../../public/assets/home-images/image.png";

export default function PortfolioHero() {
    return (
        <div className="w-full bg-white max-w-[1440px] mx-auto">
            <div className="py-10 md:py-24">
                <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
                    {/* Left side - Grid of images */}
                    <div className="relative w-full xl:w-1/2">
                        <div className="grid grid-cols-1">
                            <div className="relative h-full overflow-visible">
                                <div className="relative inset-0">
                                    <Image
                                        src={img.src}
                                        alt="Portfolio person"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-center !relative inset-0 z-10"
                                    />
                                    <h1 className={`xl:block hidden absolute z-20 text-[50px] md:text-[80px] lg:text-[128px] font-normal text-black 
                                    top-0 -right-[190px]`}>Rafia</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Text content */}
                    <div className="w-full xl:w-1/2 flex flex-col lg:items-start xl:pt-44 lg:pt-10 pt-0">
                            <div className="relative z-50">

                                <h1 className="w-full flex flex-wrap gap-x-[16px] xl:justify-start justify-center text-[40px] md:text-[80px] lg:text-[128px] font-normal text-black mb-0 mt-[15px] lg:leading-[163px]">
                                    <span className="xl:hidden block">Rafia</span> Mehmood</h1>

                                <div
                                    className="w-full border-b bordner-black pb-3 mb-8 xl:max-w-[610px] max-w-full xl:ml-0 mx-auto md:mt-[45px] mt-[30px]">
                                    <h2 className="md:text-[40px] text-[25px] font-light text-black text-center">UI/UX
                                        Designer</h2>
                                </div>

                                <a href="/assets/home-images/cv/Rafia_Mehmood_CV.pdf" download>
                                    <button className="bg-[#FF7C2B] md:mt-[50px] mt-[30px] mx-auto group focus-visible:outline-0 border border-[#FF7C2B] cursor-pointer hover:bg-transparent text-black font-rm hover:text-[#FF7C2B]
                                        py-[16px] px-0 max-w-[305px] w-full justify-center md:text-[25px] text-[23px] rounded-full flex items-center transition-all duration-400 gap-x-7">
                                        <svg width="26" height="28"
                                             className="group-hover:text-[#FF7C2B] md:w-[20px] md:h-[28px] w-[20px] h-[24px]"
                                             viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="transition-all duration-75"
                                                  d="M2 20.0882V22.7941C2 23.5118 2.28973 24.2 2.80546 24.7075C3.32118 25.2149 4.02065 25.5 4.75 25.5H21.25C21.9793 25.5 22.6788 25.2149 23.1945 24.7075C23.7103 24.2 24 23.5118 24 22.7941V20.0882M6.125 11.9706L13 18.7353M13 18.7353L19.875 11.9706M13 18.7353V2.5"
                                                  stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Download CV
                                    </button>
                                   </a>

                            </div>

                        {/* Bottom right orange square with arrow */}

                    </div>
                </div>
            </div>
        </div>
    );
}