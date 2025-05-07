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
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am <span className="text-blue-500 font-semibold">Satish Yadav</span>, a dynamic and ambitious individual who recently graduated with a
              <span className="text-green-500 font-semibold"> Bachelor</span> degree in
              <span className="text-purple-500 font-semibold"> Computer Science</span> from Savitribai Phule Pune University.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As a <span className="text-yellow-500 font-semibold">fresher</span> in the industry, I am keen on pursuing a career in the
              <span className="text-red-500 font-semibold"> Java Full Stack</span> domain.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With a solid foundation in <span className="text-indigo-500 font-semibold">software development</span>,
              <span className="text-pink-500 font-semibold"> database management</span>, and
              <span className="text-teal-500 font-semibold"> web technologies</span> acquired through academic projects and coursework,
              I am enthusiastic about applying my skills to real-world challenges in software development projects.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Education
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
                <span className="text-red-400 font-semibold block">2024-2026:</span>
                Master of Computer Science From Pratibha College of Commerce & Computer Studies
                <span className="block text-red-400 font-semibold">CGPA: pursuing</span>
              </li>
              <li>
                <span className="text-green-500 font-semibold block">2020-2023:</span>
                Bachelor of Computer Science  from D.Y. Patil College Of Arts Commerce & Science, Pimpri
                <span className="block text-green-500 font-semibold">CGPA: 8.63</span>
              </li>
              <li>
                <span className="text-blue-500 font-semibold block">2016-2018:</span>
                12th from RamLakhan Singh Yadav College
                <span className="block text-blue-500 font-semibold">Percentage: 61%</span>
              </li>
              <li>
                <span className="text-purple-500 font-semibold block">2016</span>
                10th from CH +2 High School Jhumri Telaiya
                <span className="block text-purple-500 font-semibold">Percentage: 73%</span>
              </li>
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