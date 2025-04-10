import { motion } from 'framer-motion'
import { useEffect, Suspense, lazy } from 'react'

// Lazy load the 3D component
const TechSphereBackground = lazy(() => import('./TechSphereBackground'))

const Hero = ({ setActiveSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight - 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-0 flex flex-col md:flex-row items-center w-full">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-500 dark:text-blue-400 font-medium mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Satish Yadav.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-6"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {/* This button downloads the resume */}
      <a
        href="/image/SatishYadav_Resume_ATS00.pdf"
        download
        className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
      >
        Download Resume
      </a>
    </motion.div>

        </motion.div>

        {/* Right Side - 3D Model */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-b from-orange-500/20 to-transparent" />
          }>
            <TechSphereBackground />
          </Suspense>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="block animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600 dark:text-gray-400"
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
