'use client'

import { Briefcase, Smartphone, Palette } from 'lucide-react'

export default function About() {
  return (
    <section className="bg-white px-6 md:px-16 py-20" id="services">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What do I help?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I help businesses find creative solutions by designing impactful digital products.
            My process integrates design strategy with your business goals to ensure meaningful outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you need a new website, a mobile application, or a full brand identity,
            I’m here to help build it with clarity and quality.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-orange-600">15+</h3>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-600">10+</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-6">
          <ServiceCard
            icon={<Briefcase className="text-white" size={20} />}
            title="Website Design"
            count="76 Projects"
            bg="bg-teal-600"
          />
          <ServiceCard
            icon={<Smartphone className="text-white" size={20} />}
            title="UI UX Design"
            count="63 Projects"
            bg="bg-yellow-500"
          />
          <ServiceCard
            icon={<Palette className="text-white" size={20} />}
            title="Brand Identity"
            count="47 Projects"
            bg="bg-red-500"
          />
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = {
  icon: React.ReactNode
  title: string
  count: string
  bg: string
}

function ServiceCard({ icon, title, count, bg }: ServiceCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{count}</p>
      </div>
    </div>
  )
}
