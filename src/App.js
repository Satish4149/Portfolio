import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Loader from './components/Loader'
import Chatbot from './components/Chatbot'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }

    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen flex flex-col">
          <Header 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main className="flex-1">
            <AnimatePresence>
              <Hero setActiveSection={setActiveSection} />
              <About setActiveSection={setActiveSection} />
              <Skills setActiveSection={setActiveSection} />
              <Projects setActiveSection={setActiveSection} />
              <Contact setActiveSection={setActiveSection} />
            </AnimatePresence>
          </main>
          
          <Footer />
          
          {/* Add the Chatbot component here */}
          <Chatbot />
        </div>
      )}
    </>
  )
}

export default App