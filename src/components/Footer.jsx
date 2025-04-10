import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Satish4149',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: ' https://www.linkedin.com/in/satish-yadav-367376229',
      icon: <FaLinkedin className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:yadavsatish1609@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />
    }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Satish Yadav
            </a>
            <p className="mt-2 text-gray-400">
              Full Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ y: -3 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer