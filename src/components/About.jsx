import { motion } from 'framer-motion'
import { useEffect } from 'react'

const About = ({ setActiveSection }) => {
  useEffect(() => {
    const aboutSection = document.getElementById('about')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('about')
        }
      },
      { threshold: 0.5 }
    )

    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection)
      }
    }
  }, [setActiveSection])

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-500 dark:text-blue-400">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hello! My name is Satish Yadav and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {[
                'JavaScript (ES6+)',
                'React',
                'Node.js', 
                'TypeScript',
                'Tailwind CSS',
                'MongoDB'
              ].map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 border-2 border-blue-500 dark:border-blue-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 z-10">
                <img
                  src="/image/p1.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About