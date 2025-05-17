'use client'

import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaAngular,
  FaVuejs,
  FaSass,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaAws,
  FaSlack,
  FaLinux
} from 'react-icons/fa'

const experiences = [
  {
    company: 'Self-Employed, Giftech',
    role: 'CEO of Giftech',
    duration: 'January 2025 - Present',
    description:
      'Visual designer creating designs for a variety of platforms using Figma, Adobe Illustrator, and InDesign. Also worked with cross-functional teams.',
  },
  {
    company: 'AGM TechPluse NG',
    role: 'Web Developer / Designer Intern',
    duration: 'Dec 2023 - June 2024',
    description:
      'Our interface designer is our interface engineering in the design of user interfaces for mobile, web software, such as smartphone apps, websites, dashboards, and more.',
  },
  {
    company: 'Jobeny Tech NG',
    role: 'Web Developer and P.A.',
    duration: 'June 2024 - Sept 2024',
    description:
      'Lead Product Photography, Creative Layouts, Animation, Stock Images, Product Shots, Brand Usage, Concept, Digital Strategy, Video & Photo, Corporate Strategy.',
  },
]

const techIcons = [
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaAngular,
  FaVuejs,
  FaSass,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaAws,
  FaSlack,
  FaLinux,
]

export default function Experience() {
  return (
    <section
      className="px-6 md:px-16 py-20 max-w-full mx-auto flex flex-col md:flex-row gap-12 text-white"
      style={{
        backgroundImage: "url('/images/galaxy.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left Side - Tech Stacks */}
      <div className="w-full md:w-1/3 p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 bg-black bg-opacity-50 px-4 py-2 rounded">
          Tech Stacks
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techIcons.map((Icon, idx) => (
            <div
              key={idx}
              className="bg-black bg-opacity-60 p-3 rounded-full flex items-center justify-center text-orange-500 hover:text-white transition"
              style={{ width: '50px', height: '50px' }}
            >
              <Icon size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Work Experience */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold text-white mb-12">My Work Experience</h2>
        <div className="space-y-8">
          {experiences.map(({ company, role, duration, description }, idx) => (
            <div key={idx} className="border-l-4 border-orange-500 pl-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{company}</h3>
                <span className="text-sm text-gray-300">{duration}</span>
              </div>
              <p className="text-orange-400 font-medium mb-2">{role}</p>
              <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
