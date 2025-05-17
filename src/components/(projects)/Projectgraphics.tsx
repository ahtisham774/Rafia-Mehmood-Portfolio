import Image from 'next/image';
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: 'Posters',
        description:
            'A collection of visually engaging posters created for events, promotions, and social media. Each design focuses on strong layout, impactful typography, and brand consistency to effectively communicate messages and capture audience attention.',
        imageSrc: '/assets/home-images/Graphics1.png',
        imageAlt: 'Grocery App Screens',
        url: '/posters'
    },
    {
        id: 2,
        title: 'Logos',
        description:
            'A showcase of unique and memorable logo designs crafted for brands, events, and businesses. Each logo reflects a clear visual identity, combining simplicity, symbolism, and versatility to leave a lasting impression.',
        imageSrc: '/assets/home-images/Graphics2.png',
        imageAlt: 'Food Menu App Screens',
        url: '/logos'
    },
];

export default function ProjectgraphicsSection() {
    return (
        <section id="projects" className="w-full px-4 py-12 bg-white relative z-40">
            <div className="max-w-7xl mx-auto">
                {/* Category Filter */}
                <div className="flex justify-center items-center my-12">
                    <div className="h-[4px] rounded bg-[#FF7C2B] w-64"></div>
                    <span className="mx-4 text-[#FF7C2B] text-[28px] font-[300px] ">Graphics</span>
                    <div className="h-[4px] rounded bg-[#FF7C2B] w-64"></div>
                </div>

                <div className="flex flex-col space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 md:space-y-0`}
                        >
                            <div className="w-full lg:w-1/2 flex-shrink-0 rounded-xl overflow-hidden">
                                <Image
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    width={600}
                                    height={350}
                                    className="object-cover w-full h-full lg:ml-0 md:ml-1"
                                />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h3 className="font-semibold text-[#FE8E48] mb-4 md:text-end text-center text-[34px] lg:mt-0 mt-10">
                                    {project.title}
                                </h3>
                                <div className="bg-gradient-to-l from-[#EB6C00]/10 via-purple-[#FF7C2B66]/15 to-[#FDB300]/25 p-6 rounded-xl lg:-ml-[85px] ml-0 backdrop-blur-[80px]">
                                    <p className="text-[#595959] leading-relaxed mb-4 text-[18px] font-medium">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.url}
                                        className="inline-block text-[#FF7C2B] font-medium hover:underline text-[18px]"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*<div className='flex justify-center mt-[80px]'>*/}
                {/*    <button className='px-[50px] py-[15px] rounded-[50px] bg-[#FF7C2B] md:text-[25px] text-[20px] text-black text-semibold cursor-pointer hover:bg-transparent transition-all duration-500 border-2 border-[#FF7C2B] hover:text-[#FF7C2B]'>See All</button>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}