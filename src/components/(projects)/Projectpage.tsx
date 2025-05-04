import Image from 'next/image';
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: 'Food Menu App',
    description:
        'A modern mobile application designed to enhance the food ordering experience with an intuitive and visually appealing interface. The app allows users to browse meals, add items to their cart, and complete their order seamlessly.',
    imageSrc: '/assets/home-images/Portfolio2.png',
    imageAlt: 'Food Menu App Screens',
    url: '#'
  },

  {
    id: 2,
    title: 'Ecommerce',
    description:
        'Furniture E-Commerce App is a mobile and web-based shopping platform for browsing, customizing, and ordering furniture. It allows users to explore a wide variety of home furniture, read product details, and place orders with flexible delivery and payment options',
    imageSrc: '/assets/home-images/Portfolio4.png',
    imageAlt: 'Food Menu App Screens',
    url: '#'
  },
  {

    id: 3,
    title: 'Grocery App',
    description:
      'Grocery at Home is a mobile application designed to simplify online grocery shopping. It enables users to easily browse, select, and order fresh groceries delivered to their doorstep, offering a smooth and intuitive experience from login to checkout.',
    imageSrc: '/assets/home-images/Portfolio.png',
    imageAlt: 'Grocery App Screens',
    url: '/projectview'
  },

  {
    id: 4,
    title: 'Landing Page',
    description:
        'This is a workflow and automation solutions provider dedicated to helping businesses automate, optimize, and scale. Our mission is to eliminate operational complexity and create a stable foundation for growth. We specialize in consultation, workflow mapping.',
    imageSrc: '/assets/home-images/Portfolio3.png',
    imageAlt: 'Grocery App Screens',
    url: '#'
  },
];

export default function ProjectpagesSection() {
  return (
    <section id="projects" className="w-full px-4 py-12 bg-white relative z-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[54px] font-normal text-black  md:text-left text-center">Projects</h2>
        {/* Category Filter */}
        <div className="flex justify-center items-center my-12">
          <div className="h-[4px] rounded bg-[#FF7C2B] w-64"></div>
          <span className="mx-4 text-[#FF7C2B] text-[28px] font-[300px] ">UI/UX</span>
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
        {/*  <div className='flex justify-center mt-[80px]'>*/}
        {/*<button className='px-[50px] py-[15px] rounded-[50px] bg-[#FF7C2B] md:text-[25px] text-[20px] text-black text-semibold cursor-pointer hover:bg-transparent transition-all duration-500 border-2 border-[#FF7C2B] hover:text-[#FF7C2B]'>See All</button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}