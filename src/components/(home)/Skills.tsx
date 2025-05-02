import Image from 'next/image'
import React from 'react'

// Define your skills array
const skills = [
  { title: 'Wireframes', description: 'From low-fidelity sketches to structured layouts.' },
  { title: 'Prototyping', description: 'Interactive high-fidelity prototypes for user testing.' },
  { title: 'User Research', description: 'Surveys, user interviews, and usability testing.' },
  { title: 'Visual Design', description: 'Typography, color theory, branding, and layout design.' },
  { title: 'Responsive Design', description: 'Designing for both mobile and web platforms.' },
]

export default function SkillsSection() {
  return (
    <section className="py-16 bg-white overflow-visible relative z-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center overflow-visible">
        {/* Left side: single image with background accent */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0 overflow-visible">
          {/* Image container */}
          <div className="relative z-10 flex justify-end">
            {/* Background accent shape */}
          <div className="absolute inset-0 bg-[#F1F1F1] transform top-[51px] md:left-0 -left-[10px] w-[73%] md:m-auto -bottom-[30px] rounded-[2px]"></div>
            <Image
              src="/assets/home-images/skills.png" // update with your image path
              alt="Illustration of design skills"
              width={600}
              height={400}
              className="object-cover h-[824px] w-fit relative z-30"
            />
          </div>
        </div>

        {/* Right side: skills list */}
        <div className="w-full md:w-1/2 md:pl-12 md:mt-0 mt-16">
          <h2 className="md:text-[54px] text-[45px] font-normal text-black mb-6">Skills</h2>
          <ul className="space-y-6">
            {skills.map((skill) => (
              <li key={skill.title} className="flex items-start">
                <span className="mt-3 mr-4 text-orange-500 text-xl rounded-full h-[13px] w-[13px] border-2 border-[#FF7C2B]"></span>
                <div>
                  <h3 className="text-[24px] font-light">{skill.title}</h3>
                  <p className="mt-1 text-black text-[18px] font-extralight">{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
