import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col md:flex-row justify-center items-center text-center md:text-left py-8 sm:py-12 md:py-16 font-sans relative overflow-hidden transition-all duration-700 ease-in-out px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"></div>
      
      {/* Single Floating Element */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-xl"></div>

      {/* Content - Left Side */}
      <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700 mb-6">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI-Powered Logo Generation</span>
        </div>

        {/* Responsive Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight break-words max-w-xs sm:max-w-md md:max-w-2xl mx-auto md:mx-0">
          Turn Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 dark:from-purple-400 dark:via-blue-400 dark:to-green-400 whitespace-nowrap">Idea</span><br />
          Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 whitespace-nowrap">Professional Logo</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto md:mx-0 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Create high-quality logos fast with generative AI. 45+ styles. Vector output. No design skills needed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Generate My Logo
          </motion.button>
          <button className="px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 font-bold text-base sm:text-lg transition-all duration-200">
            View Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 sm:mt-10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">10K+</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Logos Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">45+</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Design Styles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">5min</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Average Time</div>
          </div>
        </div>
      </div>

      {/* Lottie Animation - Right Side */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <dotlottie-wc 
            src="https://lottie.host/9c4e460e-7193-4a51-9307-ae6734e3f8a4/xsrq8vCzZD.lottie" 
            style={{ width: '350px', height: '350px' }} 
            speed="0.7" 
            autoplay 
            loop
          ></dotlottie-wc>
        </div>
      </div>
    </section>
  )
}

export default Hero