import React from 'react';
import img1 from "../../../public/assets/home-images/ecommerce/Home1.png";
import img2 from "../../../public/assets/home-images/ecommerce/Home2.png";
import img3 from "../../../public/assets/home-images/ecommerce/Home3.png";

import Image from "next/image";

const UserInterface = () => {
    // Array of screen data
    const screens = [
        {
            image: img1,
            title: "Home Page"
        },
        {
            image: img2,
            title: "Home Page 2"
        },
        {
            image: img3,
            title: "Home Page 3"
        },


    ];

    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-10">User Interface</h1>

            <div className="bg-white rounded-3xl p-6 md:p-10" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
                    {screens.map((screen, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full aspect-[9/19] mb-2 rounded-lg overflow-hidden">
                                <Image src={screen.image} alt={screen.title} layout="fill" objectFit="cover" />
                            </div>
                            <p className="md:text-[22px] text-center text-base text-[#595959] font-light">{screen.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserInterface;