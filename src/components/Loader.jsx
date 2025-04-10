// components/Loader.jsx
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative w-32 h-32">
        {/* Cube faces */}
        <motion.div
          className="absolute inset-0 bg-blue-500/80 rounded-lg shadow-lg"
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-blue-500/80 rounded-lg" style={{ transform: 'translateZ(30px)' }} />
          <div className="absolute inset-0 bg-purple-500/80 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(30px)' }} />
          <div className="absolute inset-0 bg-pink-500/80 rounded-lg" style={{ transform: 'rotateY(180deg) translateZ(30px)' }} />
          <div className="absolute inset-0 bg-indigo-500/80 rounded-lg" style={{ transform: 'rotateY(-90deg) translateZ(30px)' }} />
          <div className="absolute inset-0 bg-teal-500/80 rounded-lg" style={{ transform: 'rotateX(90deg) translateZ(30px)' }} />
          <div className="absolute inset-0 bg-amber-500/80 rounded-lg" style={{ transform: 'rotateX(-90deg) translateZ(30px)' }} />
        </motion.div>
        
        {/* Text */}
        <motion.div
          className="absolute -bottom-10 left-0 right-0 text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Loading Portfolio
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Loader