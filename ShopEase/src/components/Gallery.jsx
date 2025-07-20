import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Demo local SVGs/PNGs (replace with your own in src/assets/ for production)

const vector3DImages = [
  'https://img.icons8.com/color/100/000000/rocket.png',
  'https://img.icons8.com/color/100/000000/lightbulb.png',
  'https://img.icons8.com/color/100/000000/star.png',
  'https://img.icons8.com/color/100/000000/heart.png',
  'https://img.icons8.com/color/100/000000/diamond.png',
  'https://img.icons8.com/color/100/000000/crown.png',
  'https://img.icons8.com/color/100/000000/bolt.png',
  'https://img.icons8.com/color/100/000000/leaf.png',
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tech', name: 'Technology' },
    { id: 'creative', name: 'Creative' },
    { id: 'business', name: 'Business' },
    { id: 'health', name: 'Healthcare' }
  ]

  const logos = [
    {
      id: 1,
      title: 'TechFlow',
      description: 'Modern tech startup',
      category: 'tech',
      style: 'minimal'
    },
    {
      id: 2,
      title: 'CreativeHub',
      description: 'Design agency',
      category: 'creative',
      style: 'bold'
    },
    {
      id: 3,
      title: 'BusinessPro',
      description: 'Corporate solutions',
      category: 'business',
      style: 'professional'
    },
    {
      id: 4,
      title: 'HealthCare+',
      description: 'Medical services',
      category: 'health',
      style: 'clean'
    },
    {
      id: 5,
      title: 'DataSync',
      description: 'Data analytics',
      category: 'tech',
      style: 'modern'
    },
    {
      id: 6,
      title: 'ArtStudio',
      description: 'Creative studio',
      category: 'creative',
      style: 'artistic'
    },
    {
      id: 7,
      title: 'FinanceFirst',
      description: 'Financial services',
      category: 'business',
      style: 'trustworthy'
    },
    {
      id: 8,
      title: 'WellnessPro',
      description: 'Health & wellness',
      category: 'health',
      style: 'organic'
    },
    {
      id: 9,
      title: 'CloudTech',
      description: 'Cloud solutions',
      category: 'tech',
      style: 'futuristic'
    },
    {
      id: 10,
      title: 'DesignLab',
      description: 'Creative agency',
      category: 'creative',
      style: 'innovative'
    },
    {
      id: 11,
      title: 'GlobalCorp',
      description: 'International business',
      category: 'business',
      style: 'corporate'
    },
    {
      id: 12,
      title: 'MediCare',
      description: 'Healthcare provider',
      category: 'health',
      style: 'caring'
    },
    {
      id: 13,
      title: 'AI Solutions',
      description: 'Artificial intelligence',
      category: 'tech',
      style: 'smart'
    },
    {
      id: 14,
      title: 'PixelPerfect',
      description: 'Digital design',
      category: 'creative',
      style: 'precise'
    },
    {
      id: 15,
      title: 'EnterprisePlus',
      description: 'Enterprise solutions',
      category: 'business',
      style: 'premium'
    },
    {
      id: 16,
      title: 'VitalHealth',
      description: 'Health services',
      category: 'health',
      style: 'vital'
    },
    {
      id: 17,
      title: 'CyberSec',
      description: 'Cybersecurity',
      category: 'tech',
      style: 'secure'
    },
    {
      id: 18,
      title: 'InnovateLab',
      description: 'Innovation hub',
      category: 'creative',
      style: 'cutting-edge'
    },
    {
      id: 19,
      title: 'MarketLeader',
      description: 'Market solutions',
      category: 'business',
      style: 'leading'
    },
    {
      id: 20,
      title: 'LifeCare',
      description: 'Life sciences',
      category: 'health',
      style: 'life-giving'
    }
  ]

  const filteredLogos = activeCategory === 'all' 
    ? logos 
    : logos.filter(logo => logo.category === activeCategory)

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-2 sm:mb-4">
            <img 
              src="https://img.icons8.com/color/96/000000/palette.png" 
              alt="OrchidLogos" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-white dark:bg-neutral-900 p-1 shadow"
              onError={e => { 
                e.target.onerror = null; 
                e.target.src = 'https://img.icons8.com/color/96/000000/robot-3d.png'; 
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-neutral-900 dark:text-neutral-100">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 text-neutral-900 dark:text-neutral-100">
            Explore our collection of AI-generated logos across different industries and styles
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-purple-300 dark:hover:border-purple-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredLogos.map((logo, i) => (
            <motion.div
              key={logo.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700 shadow-lg p-3 sm:p-4 flex flex-col items-center transition-all duration-300 min-h-[200px] sm:min-h-[240px] hover:shadow-xl"
            >
              <img
                src={vector3DImages[i % vector3DImages.length]}
                alt={logo.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4 drop-shadow-xl bg-white dark:bg-neutral-900 rounded-xl p-2 border border-neutral-200 dark:border-neutral-700"
                loading="lazy"
                onError={e => { 
                  e.target.onerror = null; 
                  e.target.src = 'https://img.icons8.com/color/96/000000/robot-3d.png'; 
                }}
              />
              <h3 className="font-semibold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 mb-1 text-center">
                {logo.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 text-center">
                {logo.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg mt-12 sm:mt-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100">
              Ready to Create Your Logo?
            </h3>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8">
              Join thousands of businesses who have created their perfect logo with our AI technology
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-base sm:text-lg shadow-lg transition-transform duration-300"
            >
              Start Creating Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery