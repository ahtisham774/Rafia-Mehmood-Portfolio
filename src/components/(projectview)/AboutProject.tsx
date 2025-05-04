import React from 'react';

const AboutProject = () => {
    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-8">About</h1>

            <div className="bg-white rounded-3xl p-8 mb-24" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Problem Statement</h2>
                <p className="text-[#595959] md:text-[24px] text-[18px] font-light text-center leading-relaxed">
                    In busy urban lifestyles, users struggle with time-consuming grocery store visits and poorly
                    designed online platforms. This app was created to streamline the grocery ordering process,
                    ensuring ease of use, product visibility, and secure checkout—all from a mobile device.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">Target Audience</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Working professionals with limited time for grocery shopping.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Homemakers who prefer ordering groceries online.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Students or individuals living independently in urban areas.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-3xl p-8 flex-1" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                    <h2 className="md:text-[36px] text-[25px] font-medium text-[#FE8E48] text-center mb-6">User Research</h2>
                    <ul className="space-y-4 list-disc">
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Conducted surveys and informal interviews to identify user expectations.</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">Found that users valued clean layouts, clear pricing, and simple location selection</span>
                        </li>
                        <li className="flex items-start gap-x-3">
                            <span className="text-black text-[40px] font-light mt-4 h-[10px] leading-0">•</span>
                            <span className="text-[#595959] md:text-[24px] text-[18px] font-light">A key insight was the demand for product details and nutritional info within the app.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;