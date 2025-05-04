import React from 'react';
import img1 from "../../../public/assets/home-images/img1 (1).png";
import img2 from "../../../public/assets/home-images/img1 (2).png";
import img3 from "../../../public/assets/home-images/img1 (3).png";
import img4 from "../../../public/assets/home-images/img1 (4).png";
import img5 from "../../../public/assets/home-images/img1 (5).png";
import img6 from "../../../public/assets/home-images/img1 (6).png";
import img7 from "../../../public/assets/home-images/img1 (7).png";
import img8 from "../../../public/assets/home-images/img1 (8).png";
import img10 from "../../../public/assets/home-images/img1 (10).png";
import img11 from "../../../public/assets/home-images/img1 (11).png";
import Image from "next/image";

const UserInterface = () => {
    // Array of screen data
    const screens = [
        {
            image: img11,
            title: "Splash Screen"
        },
        {
            image: img10,
            title: "Login Screen"
        },
        {
            image: img8,
            title: "Signup Screen"
        },
        {
            image: img7,
            title: "Home Screen"
        },
        {
            image: img6,
            title: "Products Screen"
        },
        {
            image: img5,
            title: "Product Detail Screen"
        },
        {
            image: img4,
            title: "CART"
        },
        {
            image: img3,
            title: "Payment"
        },
        {
            image: img2,
            title: "Order Confirm"
        },
        {
            image: img1,
            title: "Cart"
        },
    ];

    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-10">User Interface</h1>

            <div className="bg-white rounded-3xl p-6 md:p-10" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
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