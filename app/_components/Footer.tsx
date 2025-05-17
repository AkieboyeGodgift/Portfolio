import React from 'react'
import { Mail, Phone, Linkedin, Facebook as FacebookIcon, Github, Twitter } from 'lucide-react'

// Contact Info URLs
const linkedInURL = 'https://www.linkedin.com/in/akieboye-godgift-549064299'
const facebookURL = 'https://www.facebook.com/profile.php?id=61557689291464&mibextid=ZbWKwL'
const githubURL = 'https://github.com/AkieboyeGodgift'
const twitterURL = 'https://x.com/GAkiboye76596'
const emailURL = 'mailto:akieboyegodgift@gmail.com'
const phoneURL = 'tel:+2348122981722'

const Footer = () => {
  return (
    <footer className="bg-black px-6 md:px-16 py-12 mt-20 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-0">
        {/* Left Side - Contact Info */}
        <div className="space-y-2">
          <p className="font-medium">Designed by Akieboye Godgift</p>
          <div className="flex items-center gap-4 text-sm">
            <a href={emailURL} className="flex items-center hover:text-orange-600 transition">
              <Mail size={16} className="mr-1" />
              akieboyegodgift@gmail.com
            </a>
            <a href={phoneURL} className="flex items-center hover:text-orange-600 transition">
              <Phone size={16} className="mr-1" />
              +234 812 298 1722
            </a>
          </div>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center gap-5">
          <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <Linkedin size={20} />
          </a>
          <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <FacebookIcon size={20} />
          </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <Github size={20} />
          </a>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
