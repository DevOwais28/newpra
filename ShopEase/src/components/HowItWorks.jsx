import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Describe Your Vision',
      description: 'Tell us about your brand, industry, and style preferences. Our AI understands your unique requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'AI Generates Options',
      description: 'Our advanced AI creates multiple professional logo variations based on your specifications in seconds.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Customize & Refine',
      description: 'Fine-tune colors, fonts, and layouts with our intuitive editor. Make it perfectly yours.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Download & Use',
      description: 'Get your logo in multiple formats (PNG, SVG, PDF) ready for web, print, and everything in between.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Works</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-900 dark:text-neutral-100">
            Create professional logos in four simple steps with our AI-powered platform
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              {/* Step Number */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg sm:text-xl rounded-full mb-4 sm:mb-6 shadow-md">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg bg-white dark:bg-neutral-900 p-1 shadow mb-4 sm:mb-6">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Start Creating Now
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks