import React from 'react';


const Challenges = () => {
    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-8">Challenges</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-3xl p-8 flex-1 flex flex-col items-center text-center"
                     style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)'}}>

                    {/* Balance Icon */}
                    <div className="mb-6">
                        <img src="/assets/home-images/ecommerce/seesaw1.png" alt="Balance Scale" className="w-24 h-24 object-contain" />
                    </div>

                    {/* Text content */}
                    <p className="text-[#595959] md:text-[24px] text-[18px] font-light">
                        Displaying multiple product variations without overwhelming the user.
                    </p>
                </div>

                {/* Second Challenge Card */}
                <div className="bg-white rounded-3xl p-8 flex-1 flex flex-col items-center text-center"
                     style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)'}}>

                    {/* User Journey Icon */}
                    <div className="mb-6">
                        <img src="/assets/home-images/ecommerce/user1.png" alt="Balance Scale" className="w-24 h-24 object-contain" />
                    </div>

                    {/* Text content */}
                    <p className="text-[#595959] md:text-[24px] text-[18px] font-light">
                        Making the cart and checkout process feel secure and trustworthy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Challenges;