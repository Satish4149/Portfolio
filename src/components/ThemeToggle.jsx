import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gray-500 dark:bg-gray-700 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  )
}

export default ThemeToggle