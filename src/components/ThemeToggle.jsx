import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true) // ← default to dark mode

  useEffect(() => {
    // Add/remove the 'dark' class on the <html> element
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
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gray-500 dark:bg-gray-700 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FiSun className="w-5 h-5 text-yellow-400" /> // show sun icon when in dark mode
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700" /> // show moon icon when in light mode
      )}
    </motion.button>
  )
}

export default ThemeToggle
