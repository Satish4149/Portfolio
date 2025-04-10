import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveSection('home')}
          aria-label="Home"
        >
          Satish Yadav
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                  }`}
                  onClick={() => setActiveSection(link.id)}
                  whileHover={{ scale: 1.05 }}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.title}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <FiMenu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4"
            >
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <motion.a
                      href={`#${link.id}`}
                      className={`block px-4 py-2 rounded-md transition-colors ${
                        activeSection === link.id
                          ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => handleMobileNavClick(link.id)}
                      whileHover={{ scale: 1.02 }}
                      aria-current={activeSection === link.id ? 'page' : undefined}
                    >
                      {link.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header