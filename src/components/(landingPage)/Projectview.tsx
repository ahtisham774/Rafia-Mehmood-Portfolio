import React from 'react';
import Link from "next/link";



export default function Projectviewsection() {
    return (
        <div className=" relative  bg-white ">
            {/* Orange vector shapes */}
            <img src="/assets/home-images/projectview/vecter.png" alt="Orange Vector"  className="z-0 absolute top-0 left-0 md:w-[35%] h-[95%] lg:block hidden" />
                   <div className="absolute top-10 left-20 w-full h-full lg:block hidden">
                       <img
                           src={'/assets/home-images/landingPage/webview.png'}
                           alt="Food app interface"
                           className="rounded-2xl z-10 absolute object-contain top-0 left-2 h-[70%] lg:block hidden"
                       />

                      
                    </div>
            <img src="/assets/home-images/projectview/vector2.png" alt="Orange Vector" className="absolute top-0 right-0 w-[35%] h-[60%] lg:block hidden" />
            <div className="w-full mx-auto md:py-32 py-10 md:max-w-[900px] max-w-full md:pl-72 pl-0 relative z-[999]">

                <div className="w-full md:px-0 px-5">
                    <Link href="/" className="flex items-center mb-4">
                        <svg width="32" height="26" className="md:w-[32px] md:h-[26px] w-[25px] h-[20px]" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1164 1.1708C13.6899 0.744412 13.1115 0.504883 12.5084 0.504883C11.9053 0.504883 11.3269 0.744412 10.9004 1.1708L0.665577 11.4056C0.239193 11.8321 -0.000337601 12.4105 -0.000337601 13.0136C-0.000337601 13.6167 0.239193 14.1951 0.665577 14.6216L10.9004 24.8564C11.3293 25.2707 11.9039 25.5 12.5002 25.4948C13.0965 25.4896 13.667 25.2504 14.0887 24.8287C14.5104 24.407 14.7496 23.8366 14.7548 23.2402C14.7599 22.6439 14.5307 22.0694 14.1164 21.6404L7.95959 15.288H29.5664C30.1696 15.288 30.7481 15.0484 31.1747 14.6219C31.6012 14.1953 31.8408 13.6168 31.8408 13.0136C31.8408 12.4104 31.6012 11.8319 31.1747 11.4054C30.7481 10.9788 30.1696 10.7392 29.5664 10.7392H7.95959L14.1164 4.3868C14.5428 3.96029 14.7823 3.38189 14.7823 2.7788C14.7823 2.17571 14.5428 1.59731 14.1164 1.1708Z" fill="black"/>
                        </svg>

                        <h2 className="text-xl px-5 text-black md:text-[40px] text-[25px]">Case Study</h2>
                    </Link>

                    <h1 className="md:text-[68px] text-[40px] font-bold text-orange-500 tracking-wide mb-6">Landing Page</h1>
                    <div className="mb-6">
                        <h3 className="text-gray-500 font-medium mb-2">Tool Used</h3>
                        <div className="flex items-center">
                            <img src="/assets/home-images/projectview/figma.png" alt="Figma Logo" className="w-4 h-5 mr-2" />
                            <span className="font-medium text-[20px]">Figma</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}