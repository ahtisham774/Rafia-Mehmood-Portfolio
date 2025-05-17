import React from 'react';

const AboutProject = () => {
    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-8">About</h1>

            <div className="bg-white rounded-3xl p-8 mb-24" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Problem Statement</h2>
                <p className="text-[#595959] md:text-[24px] text-[18px] font-light text-center leading-relaxed">
                    A modern mobile application designed to enhance the food ordering experience with an intuitive and visually appealing interface. The app allows users to browse meals, add items to their cart, and complete their order seamlessly
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Target Audience</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Busy professionals who want a quick and hassle-free ordering process.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Food lovers looking for a visually engaging way to browse meals.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Restaurant customers who need an easy way to select and customize their meals.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">User Research</h2>
                    <ul className="space-y-4 list-disc">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Conducted surveys & competitor analysis to identify key pain points.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Found that users preferred minimalist designs, clear CTAs, and smooth payment options.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;