import React from 'react';

const AboutProject = () => {
    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-8">About</h1>

            <div className="bg-white rounded-3xl p-8 mb-24" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Problem Statement</h2>
                <p className="text-[#595959] md:text-[24px] text-[18px] font-light text-center leading-relaxed">
                    Many furniture websites and apps lack a clean interface and intuitive flow, making it difficult for users to visualize product details, compare prices, or complete purchases efficiently. This project aimed to create a platform that’s both visually elegant and functionally robust.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Target Audience</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Homeowners and renters looking for stylish furniture.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Interior designers and decorators.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Customers seeking customizable, high-quality furniture with transparent pricing and delivery options.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">User Research</h2>
                    <ul className="space-y-4 list-disc">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Surveyed users to understand online furniture shopping habits..</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Also found that trust in delivery and secure checkout were critical.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Key findings: users prefer realistic images, simple navigation, clear pricing, and customization options..</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;