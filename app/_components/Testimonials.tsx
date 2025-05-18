// components/Testimonials.tsx
'use client'

import Image from 'next/image'

const testimonials = [
  {
    name: 'Jenny Wilson',
    role: 'Product Manager, BRIX Templates',
    image: '/testimonials/person.png', // Place a rounded image in public folder
    text: 'Working with you was a game changer. The intuitive designs significantly boosted our user engagement and client satisfaction!',
  },
  {
    name: 'John Anderson',
    role: 'CEO, Digitron Inc.',
    image: '/testimonials/person2.png',
    text: 'Truly impressive UI/UX delivery. Everything was seamless — from concept to implementation. Can’t wait to work again!',
  },
  {
    name: 'Angela Lee',
    role: 'Design Lead, Creativo Studio',
    image: '/testimonials/person3.png',
    text: 'Your professionalism and creativity made our project shine. You brought clarity and beauty to complex problems.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">People talk about me.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={72}
                height={72}
                className="rounded-full mb-4"
              />
              <p className="text-gray-700 text-sm mb-4">{t.text}</p>
              <h4 className="text-base font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
