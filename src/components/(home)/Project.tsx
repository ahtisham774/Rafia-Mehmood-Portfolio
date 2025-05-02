import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Grocery App',
    description:
      'Grocery at Home is a mobile application designed to simplify online grocery shopping. It enables users to easily browse, select, and order fresh groceries delivered to their doorstep, offering a smooth and intuitive experience from login to checkout.',
    imageSrc: '/assets/home-images/Portfolio.png',
    imageAlt: 'Grocery App Screens',
  },
  {
    id: 2,
    title: 'Food Menu App',
    description:
      'A modern mobile application designed to enhance the food ordering experience with an intuitive and visually appealing interface. The app allows users to browse meals, add items to their cart, and complete their order seamlessly.',
    imageSrc: '/assets/home-images/Portfolio2.png',
    imageAlt: 'Food Menu App Screens',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 py-12 bg-white relative z-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[54px] font-normal text-black mb-8 md:text-left text-center">Projects</h2>

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
                <a
                  href="#"
                  className="inline-block text-[#FF7C2B] font-medium hover:underline text-[18px]"
                >
                  View More
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
          <div className='flex justify-center mt-[80px]'>
        <button className='px-[50px] py-[15px] rounded-[50px] bg-[#FF7C2B] md:text-[25px] text-[20px] text-black text-semibold cursor-pointer hover:bg-transparent transition-all duration-500 border-2 border-[#FF7C2B] hover:text-[#FF7C2B]'>See All</button>
        </div>
      </div>
    </section>
  );
}