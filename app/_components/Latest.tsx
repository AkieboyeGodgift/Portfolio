'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestWorks() {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      title: '3D Portfolio',
      image: '/images/img1.png',
      bg: 'bg-orange-100',
      url: 'https://giftech-3d-portfolio.onrender.com/',
    },
    {
      title: 'AI Landing Page',
      image: '/images/img2.png',
      bg: 'bg-teal-100',
      url: 'https://ai-landing-page-1p1r.onrender.com',
    },
    {
      title: 'Giftech Gaming',
      image: '/images/img4.png',
      bg: 'bg-purple-100',
      url: 'https://gitech-gaming.onrender.com/',
    },
    {
      title: 'Nike Animated Slider',
      image: '/images/img5.png',
      bg: 'bg-blue-100',
      url: 'https://shoe-j90c.onrender.com',
    },
    {
      title: 'Twitter Clone',
      image: '/images/img6.png',
      bg: 'bg-red-100',
      url: 'https://github.com/AkieboyeGodgift/twitterclone',
    },
  ]

  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Best Works</h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm font-medium text-orange-600 hover:underline"
          >
            See more
          </button>
        </div>

        {/* Projects Grid (initial 3 shown) */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              className={`${project.bg} rounded-2xl p-6 flex flex-col hover:shadow-lg transition duration-300`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{project.title}</h3>
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={140}
                className="rounded-xl object-contain w-full"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-5xl p-6 rounded-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>

            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">All Projects</h3>

            <div className="flex space-x-6 overflow-x-auto pb-4">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.url}
                  target="_blank"
                  className={`${project.bg} min-w-[250px] rounded-2xl p-4 flex-shrink-0 hover:shadow-lg transition duration-300`}
                >
                  <h4 className="text-md font-semibold text-gray-800 mb-2">{project.title}</h4>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={140}
                    className="rounded-xl object-contain w-full"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
