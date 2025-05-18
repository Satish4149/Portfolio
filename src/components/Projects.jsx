import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { toast, ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const projects = [
  {
    id: 1,
    title: 'RealEstate Website',
    description: 'A full-featured real estate platform with user authentication, property listings, advanced search filters, virtual tours, and secure options to buy, rent, or sell all types of properties.',
    tags: ['React', 'Tailwin CSS', 'MongoDB', 'Django'],
    image: '/image/houzaa.png',
    link: 'http://customer.houzza.in/',
    github: '#'
  },
  {
    id: 2,
    title: 'Solarplate installation website',
    description: 'A professional website for showcasing solar plate installation services, including project galleries, customer testimonials, and online inquiries.', tags: ['Bootstrap', 'Tailwind CSS'],
    image: '/image/solareach.png',
    link: 'https://solareachsolutions.com/',
    github: '#'
  },

  {
    id: 3,
    title: 'Book Management System',
    description: 'A Book Management System enabling easy handling of a library\'s book inventory through features like adding, viewing, updating, and removing books. It includes a user-friendly interface with search and filtering capabilities, streamlining library tasks and ensuring precise data management.',
    tags: ['Core java', 'JavaScript', 'CRUD', 'LocalStorage', 'HTML', 'CSS'],
    image: '/image/book.JPG',
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

  const handleLinkClick = (link) => {
    if (!link || link === '#' || link === '') {
      toast.info('Live demo not available. This project is only available locally.', {
        autoClose: 5000,
        position: 'top-center',
        theme: 'colored',
        transition: Slide,
        className: 'text-center font-medium text-lg'
      })
    } else {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-20 px-6">
      {/* Toast container with full control */}
      <ToastContainer
        limit={1}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

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
                    <button
                      type="button"
                      onClick={() => handleLinkClick(project.link)}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                    >
                      Live Demo
                    </button>
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
                  <button
                    type="button"
                    onClick={() => handleLinkClick(project.link)}
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
                  </button>


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