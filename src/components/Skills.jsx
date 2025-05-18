import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { FaJava, FaAngular, FaBootstrap, FaCuttlefish, FaMicrosoft, FaGithub, } from 'react-icons/fa'
import { SiSpringboot, SiJupyter, SiHibernate, SiDjango, SiMysql, SiPostman } from 'react-icons/si'

const categories = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="h-10 w-10 text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="h-10 w-10 text-blue-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="h-10 w-10 text-purple-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="h-10 w-10 text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="h-10 w-10 text-cyan-400" /> },
    { name: 'Angular', icon: <FaAngular className="h-10 w-10 text-red-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-10 w-10 text-teal-400" /> },
  ],
  Backend: [
    { name: 'Java/JavaEE', icon: <FaJava className="h-10 w-10 text-red-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="h-10 w-10 text-green-600" /> },
    { name: 'JDBC', icon: <SiJupyter className="h-10 w-10 text-orange-400" /> },
    { name: 'Hibernate', icon: <SiHibernate className="h-10 w-10 text-gray-500" /> },
    { name: 'Django', icon: <SiDjango className="h-10 w-10 text-green-700" /> },
    { name: 'C/C++', icon: <FaCuttlefish className="h-10 w-10 text-gray-500" /> },

  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="h-10 w-10 text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="h-10 w-10 text-blue-700" /> },
  ],
  Others: [
    { name: 'Git', icon: <FaGitAlt className="h-10 w-10 text-orange-600" /> },
    { name: 'Figma', icon: <FaFigma className="h-10 w-10 text-pink-500" /> },
    { name: 'MS Office', icon: <FaMicrosoft className="h-10 w-10 text-blue-600" /> },
    { name: 'GitHub', icon: <FaGithub className="h-10 w-10 text-black dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="h-10 w-10 text-orange-500" /> },
  ],
};

const hoverColors = [
  'hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500',
  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
  'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
  'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500',
]

const Skills = ({ setActiveSection }) => {
  useEffect(() => {
    const skillsSection = document.getElementById('skills')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('skills')
        }
      },
      { threshold: 0.5 }
    )
    if (skillsSection) observer.observe(skillsSection)
    return () => { if (skillsSection) observer.unobserve(skillsSection) }
  }, [setActiveSection])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-indigo-500 dark:text-indigo-400">02.</span> My Tech-Stack
          </h2>
          <div className="w-24 h-1 bg-indigo-500 dark:bg-indigo-400 mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center sm:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-xl bg-white dark:bg-gray-700 shadow-lg transition transform hover:scale-105 ${hoverColors[(catIndex + index) % hoverColors.length]} hover:text-white`}
                  >
                    <div className="mr-4 text-3xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


















