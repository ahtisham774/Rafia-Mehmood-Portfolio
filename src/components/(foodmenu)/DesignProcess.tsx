import React from 'react';

const DesignProcess = () => {
    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] md:mb-10 mb-3">Design Process</h1>

            <div className="relative flex justify-between items-center mx-auto">
                {/* Connecting dashed line */}
                <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-[#FF8A3D] z-0"></div>
                {/* Final dot */}
                <div className="flex flex-col items-center z-10 mt-[9px] -mr-[4px]">
                    <div className="w-3 h-3 bg-[#FF8A3D] rounded-full mb-2"></div>
                </div>
                {/* Process step 1 - Research */}
                <div className="flex flex-col items-center z-10 justify-center">
                    <div className="rounded w-12 h-12 mt-[44px] rotate-45 border-2 border-[#FF8A3D] bg-[#FFE5D4] flex items-center justify-center mb-4"></div>
                    <p className="text-[#595959] font-medium md:text-[18px] text-[14px] ">Brainstorming</p>
                </div>

                {/* Process step 2 - Wireframes */}
                <div className="flex flex-col items-center z-10">
                    <div className="rounded w-12 h-12 mt-[50px] rotate-45 bg-[#FF8A3D] mb-6"></div>
                    <p className="text-[#595959] font-medium md:text-[18px] text-[14px] ">Sketching</p>
                </div>

                {/* Process step 3 - Structure */}
                <div className="flex flex-col items-center z-10">
                    <div className="rounded w-12 h-12 mt-[44px] rotate-45 border-2 border-[#FF8A3D] bg-[#FFE5D4] flex items-center justify-center mb-4"></div>
                    <p className="text-[#595959] font-medium md:text-[18px] text-[14px] ">Wireframing</p>
                </div>

                {/* Process step 4 - Iteration */}
                <div className="flex flex-col items-center z-10">
                    <div className="rounded w-12 h-12 mt-[50px] rotate-45 bg-[#FF8A3D] mb-6"></div>
                    <p className="text-[#595959] font-medium md:text-[18px] text-[14px] ">Prototyping</p>
                </div>

                {/* Final dot */}
                <div className="flex flex-col items-center z-10 mt-[9px] -mr-[4px]">
                    <div className="w-3 h-3 bg-[#FF8A3D] rounded-full mb-2"></div>
                </div>
            </div>
        </div>
    );
};

export default DesignProcess;