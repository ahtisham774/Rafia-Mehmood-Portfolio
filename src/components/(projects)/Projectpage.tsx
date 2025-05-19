import Image from 'next/image';
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: 'Ecommerce',
    description:
        'Furniture E-Commerce App is a mobile and web-based shopping platform for browsing, customizing, and ordering furniture. It allows users to explore a wide variety of home furniture, read product details, and place orders with flexible delivery and payment options',
    imageSrc: '/assets/home-images/Portfolio4.png',
    imageAlt: 'Food Menu App Screens',
    url: '/ecommerce'
  },


  {
    id: 2,
    title: 'Landing Page',
    description:
        'This is a workflow and automation solutions provider dedicated to helping businesses automate, optimize, and scale. Our mission is to eliminate operational complexity and create a stable foundation for growth. We specialize in consultation, workflow mapping.',
    imageSrc: '/assets/home-images/Portfolio3.png',
    imageAlt: 'Grocery App Screens',
    url: 'landingpage'
  },
];

export default function ProjectpagesSection() {
  return (
    <section id="projects" className="w-full px-4  bg-white relative z-40">
      <div className="max-w-7xl mx-auto">
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

      </div>
    </section>
  );
}