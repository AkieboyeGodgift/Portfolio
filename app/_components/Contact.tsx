'use client'

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const linkedInURL = 'https://www.linkedin.com/in/akieboye-godgift-549064299'
const githubURL = 'https://github.com/AkieboyeGodgift'
const twitterURL = 'https://x.com/GAkiboye76596'

export default function Contact() {
  return (
    <section className="bg-white px-6 md:px-16 py-24" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s make something amazing together.
          </h2>
          <p className="text-gray-600 text-lg">
            Start by <span className="text-orange-600 font-medium">saying hi</span>
          </p>

          <div className="w-full h-64 rounded-xl overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.983441713826!2d-122.0842496846909!3d37.42199977982564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c45323d11%3A0x5d2c85f90ef1d9a0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613951233137!5m2!1sen!2sus"
            ></iframe>
          </div>

          <div className="space-y-2 text-gray-700 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" /> +234 812 298 1722
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-600" /> akieboyegodgift@gmail.com
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <a href={twitterURL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
              <FaTwitter size={20} />
            </a>
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
              <FaLinkedin size={20} />
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form using Formspree */}
        <form
          action="https://formspree.io/f/mrbqjakd"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
              placeholder="Write your message..."
            />

          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
