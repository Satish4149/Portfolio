import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const About = ({ setActiveSection }) => {
  const [showSection, setShowSection] = useState('education') // default to education

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
          className="mb-8"
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
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am <span className="text-blue-500 font-semibold">Satish Yadav</span>, a dynamic and ambitious individual who recently graduated with a
              <span className="text-green-500 font-semibold"> Bachelor</span> degree in
              <span className="text-purple-500 font-semibold"> Computer Science</span> from Savitribai Phule Pune University.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I have hands-on experience working in both frontend and backend development within the
              <span className="text-red-500 font-semibold"> Full Stack</span> domain. 
              I am comfortable working with technologies like Spring Boot, Django, Angular, React, MySQL and MongoDB to build responsive,user-friendly applications. I am passionate about delivering seamless solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I have collaborated closely with teams to deliver projects based on <span className="text-green-500 font-semibold">client requirements</span>, which has helped me develop strong <span className="text-yellow-500 font-semibold">communication</span> and <span className="text-yellow-500 font-semibold">teamwork</span> skills. I am <span className="text-purple-500 font-semibold">dedicated</span>, <span className="text-purple-500 font-semibold">adaptable</span>, and thrive in group settings, continuously focused on producing quality work and innovative solutions.
            </p>

            {/* Buttons for toggle */}
            <div className="mb-6 flex space-x-4">
              <button
                onClick={() => setShowSection('education')}
                className={`px-4 py-2 rounded font-semibold border ${showSection === 'education'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  } transition-colors duration-200`}
              >
                Education
              </button>
              <button
                onClick={() => setShowSection('experience')}
                className={`px-4 py-2 rounded font-semibold border ${showSection === 'experience'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  } transition-colors duration-200`}
              >
                Experience
              </button>
            </div>

            {/* Conditional content */}
            {showSection === 'education' && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Education
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <span className="text-red-400 font-semibold block">2024-2026:</span>
                    Master of Computer Science From Savitribai Phule Pune University
                    <span className="block font-semibold">CGPA: pursuing</span>
                  </li>
                  <li>
                    <span className="text-green-500 font-semibold block">2020-2023:</span>
                    Bachelor of Computer Science From D.Y. Patil College Of Arts Commerce & Science, Pimpri
                    <span className="block font-semibold">CGPA: 8.63</span>
                  </li>
                  <li>
                    <span className="text-blue-500 font-semibold block">2016-2018:</span>
                    12th from RamLakhan Singh Yadav College
                    <span className="block font-semibold">Percentage: 61%</span>
                  </li>
                  <li>
                    <span className="text-purple-500 font-semibold block">2016</span>
                    10th from CH +2 High School Jhumri Telaiya
                    <span className="block font-semibold">Percentage: 73%</span>
                  </li>
                </ul>
              </>
            )}

            {showSection === 'experience' && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Experience
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
                  <li>
                    <span className="font-semibold text-blue-500">Full Stack Developer, (Geobull Innovation PVT LLP). Sep 2024 - May 2025</span>
                    <p className="mt-2">
                      Proficient in frontend and backend development, including designing website layouts and interfaces, creating and integrating RESTful APIs, fetching data from the backend, testing APIs with Postman, and setting up database modules.
                      Skilled in implementing MVC architecture for seamless functionality and user-friendly designs.
                    </p>
                  </li>

                  <li>
                    <span className="font-semibold text-blue-500">Freelance Developer</span>
                    <p>
                      Worked on small business websites to improve their online presence through responsive and optimized web applications tailored to client needs.
                    </p>
                  </li>
                </ul>
              </>
            )}
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
