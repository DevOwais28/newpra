import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex flex-col justify-center items-center text-center py-4 sm:py-6 md:py-8 font-sans relative overflow-hidden transition-all duration-700 ease-in-out">
      {/* Animated Round Ball */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Main Ball */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 animate-pulse shadow-2xl"></div>
          
          {/* Bouncing Ball */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-bounce"></div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border-2 sm:border-3 md:border-4 border-purple-300/50 animate-spin"></div>
          
          {/* Inner Glow */}
          <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full bg-gradient-to-r from-purple-200/30 via-blue-200/30 to-green-200/30 animate-pulse"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        {/* Responsive Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-3 leading-tight break-words max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          Turn Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 whitespace-nowrap">Idea</span><br />
          Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 whitespace-nowrap">Professional Logo</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
          Create high-quality logos fast with generative AI. 45+ styles. Vector output. No design skills needed.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-base sm:text-lg shadow-lg transition-transform duration-300"
        >
          Generate My Logo
        </motion.button>
      </div>
    </section>
  )
}

export default Hero