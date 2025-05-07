import { motion } from 'framer-motion'
import { useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'RealEstate Website',
    description: 'A full-featured real estate platform with user authentication, property listings, advanced search filters, virtual tours, and secure options to buy, rent, or sell all types of properties.',
    tags: ['React','Tailwin CSS', 'MongoDB', 'Django'],
    image:'/image/houzaa.png',
    link: 'http://customer.houzza.in/',
    github: '#'
  },
  {
    id: 2,
    title: 'Solarplate installation website',
    description: 'A professional website for showcasing solar plate installation services, including project galleries, customer testimonials, and online inquiries.',    tags: ['Bootstrap', 'Tailwind CSS'],
    image: '/image/solareach.png',
    link: 'https://solareachsolutions.com/',
    github: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts using data from a weather API.',
    tags: ['JavaScript', 'API', 'CSS', 'Geolocation'],
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#'
  }
]

const Projects = ({ setActiveSection }) => {
  useEffect(() => {
    const projectsSection = document.getElementById('projects')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('projects')
        }
      },
      { threshold: 0.5 }
    )

    if (projectsSection) {
      observer.observe(projectsSection)
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection)
      }
    }
  }, [setActiveSection])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-500 dark:text-blue-400">03.</span> Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mb-8"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
                  <div className="flex space-x-4">
                    <a
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                    >
                      Live Demo
                    </a>

                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                    >
                      View Code
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects