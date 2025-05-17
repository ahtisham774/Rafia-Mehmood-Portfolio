import React from 'react';

const DesignSystem = () => {
    // Color palette with hex codes and labels
    const colors = [
        { hex: '#FE6700', label: '#FE6700' },
        { hex: '#F0F40B', label: '#F0F40B' },
        { hex: '#FF1515', label: '#FF1515' },
        { hex: '#030102', label: '#030102' },
        { hex: '#000000', label: '#000000' },
    ];

    // Font weights to display
    const fontWeights = [

        { weight: 'Semi bold', className: 'italic' },
        { weight: 'Medium', className: 'italic' },
        { weight: 'Light', className: 'italic' },
    ];

    return (
        <div className="w-full px-4 py-12 bg-white max-w-[1440px] mx-auto">
            <h1 className="md:text-[68px] text-[40px] font-bold text-[#FE8E4866] mb-8">Design System</h1>

            <div className="bg-white rounded-3xl p-8" style={{boxShadow: '2px 2px 19px 0px rgba(0, 0, 0, 0.11)',}}>
                <h2 className="text-[30px] font-medium text-[#FE8E48] mb-3">Font and Colors</h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Colors Section */}
                    <div className="flex-1">
                        <h3 className="text-[30px] font-medium text-[#FE8E48] mb-4">Colors</h3>
                        <div className="flex flex-wrap gap-4 justify-between">
                            {colors.map((color, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div
                                        className="w-12 h-12 rounded-full mb-2"
                                        style={{ backgroundColor: color.hex }}
                                    ></div>
                                    <span className="text-xs text-gray-500">{color.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Typography Section */}
                    <div className="flex-1">
                        <h3 className="text-[30px] font-medium text-[#FE8E48] mb-4">Typography</h3>
                        <div className="font-roboto">
                            <p className="text-[30px] uppercase mb-4 font-bold text-[#595959] font-[roboto]">Itim</p>

                            {/* Alphabet showcase */}
                            <div className="mb-6">
                                <div className="flex flex-wrap justify-between gap-3 mb-2">
                                    {['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk'].map((letter, index) => (
                                        <span key={index} className="font-[roboto] md:text-[30px] text-[24px] text-[#595959] font-medium">{letter}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-between gap-3 mb-2">
                                    {['Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww'].map((letter, index) => (
                                        <span key={index} className="font-[roboto] md:text-[30px] text-[24px] text-[#595959] font-medium">{letter}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-between gap-3 mb-6">
                                    {['Xx', 'Yy', 'Zz'].map((letter, index) => (
                                        <span key={index} className="font-[roboto] md:text-[30px] text-[24px] text-[#595959] font-medium">{letter}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Numbers showcase */}
                            <div className="flex flex-wrap justify-between gap-3 mb-6">
                                {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number, index) => (
                                    <span key={index} className="font-[roboto] md:text-[30px] text-[24px] text-[#595959] font-medium">{number}</span>
                                ))}
                            </div>

                            {/* Font weights */}
                            <div className="flex flex-wrap justify-between gap-6">
                                {fontWeights.map((font, index) => (
                                    <span key={index} className={`md:text-[30px] text-[24px] text-[#595959] font-[roboto] ${font.className}`}>{font.weight}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSystem;