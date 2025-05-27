'use client'

import Image from 'next/image'
import Link from 'next/link'

const Email = 'mailto:akieboyegodgift@gmail.com'

export default function Hero() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/galaxy.jpeg')" }}
    >
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hey There, <br />
          I’m <span className="text-orange-400">Akieboye Godgift</span>
        </h1>

        <p className="text-base md:text-lg mt-4">
          I design beautifully simple things. <br />
          And I love what I do.
        </p>

        <div className="text-sm text-orange-300 mt-4">
          <Link href={Email}>akieboyegodgift@gmail.com</Link>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4">
          <div>
            <p className="text-3xl font-bold">3+</p>
            <p className="text-sm">Years Experience</p>
          </div>

          {/* Certification Badge */}
          <Link href='/Akieboye Godgift - Cerfificate Proffesional Web Developer.png' >
            <div className="text-center border border-orange-300 text-orange-300 rounded-full px-4 py-2 text-xs font-semibold cursor-pointer hover:bg-white">
              IDF CERTIFIED <br />
              PROFESSIONAL <br />
              WEB DESIGNER
            </div>
          </Link>
          
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 z-0 bg-orange-300 rounded-full blur-2xl opacity-30"></div>

          <Image
            src="/profile.png"
            alt="Godgift"
            fill 
            className="relative z-10 rounded-xl h-full w-[80px] object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"

          />
        </div>
      </div>
    </section>
  )
}
