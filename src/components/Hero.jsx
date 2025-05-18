import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TechCube from './TechCube'

const keywords = [
  '<Full Stack Developer />',
  '<Tech Enthusiast />',
  '<Passionate Designer & Development />',
]

const TYPING_SPEED = 80
const HOLD_TIME_AFTER_TYPING = 2000

const Hero = ({ setActiveSection }) => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const keyword = keywords[currentKeywordIndex % keywords.length]
    if (currentText.length < keyword.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(keyword.slice(0, currentText.length + 1))
      }, TYPING_SPEED)
      return () => clearTimeout(timeoutId)
    } else {
      const holdTimeout = setTimeout(() => {
        setCurrentText('')
        setCurrentKeywordIndex(prev => (prev + 1) % keywords.length)
      }, HOLD_TIME_AFTER_TYPING)
      return () => clearTimeout(holdTimeout)
    }
  }, [currentText, currentKeywordIndex])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight - 100) {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const handleDownload = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 5000)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-0 flex flex-col md:flex-row items-center w-full gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Hi, I'm <span className="text-green-300">Satish Yadav</span> From India.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 whitespace-nowrap"
            style={{
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {currentText}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-lg text-gray-600 dark:text-gray-400 mb-8 text-base sm:text-lg"
          >
            I'm a full stack developer who enjoys solving real-life problems with practical and creative ideas. I love turning simple thoughts into useful websites and tools that people can actually use. My focus is always on making things easy to use, smooth to run, and meaningful for others.
          </motion.p>

          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/Satish4149"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/satish-yadav-367376229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>



          <div className="relative mt-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="/image/SatishYadav_Resume_ATS00.pdf"
                download="SatishYadav_Resume_ATS00.pdf"
                onClick={handleDownload}
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg transition duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </motion.div>

            {showPopup && (
              <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-bounce text-sm">
                ✅ Download started!
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Side - Tech Cube */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <TechCube />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="block animate-bounce p-2 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>

    </section>
  )
}

export default Hero
