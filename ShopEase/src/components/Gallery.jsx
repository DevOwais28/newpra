import React, { useState } from 'react'
import { motion } from 'framer-motion'

// More reliable image URLs with better fallbacks
const vector3DImages = [
  'https://cdn-icons-png.flaticon.com/512/3212/3212567.png', // Rocket
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Lightbulb
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Star
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Heart
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Diamond
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Crown
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Bolt
  'https://cdn-icons-png.flaticon.com/512/1828/1828640.png', // Leaf
];

// Fallback images for different categories
const fallbackImages = {
  tech: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
  creative: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
  business: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
  health: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
  default: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png'
};

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
      style: 'minimal',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'CreativeHub',
      description: 'Design agency',
      category: 'creative',
      style: 'bold',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'BusinessPro',
      description: 'Corporate solutions',
      category: 'business',
      style: 'professional',
      icon: '⭐'
    },
    {
      id: 4,
      title: 'HealthCare+',
      description: 'Medical services',
      category: 'health',
      style: 'clean',
      icon: '💚'
    },
    {
      id: 5,
      title: 'DataSync',
      description: 'Data analytics',
      category: 'tech',
      style: 'modern',
      icon: '💎'
    },
    {
      id: 6,
      title: 'ArtStudio',
      description: 'Creative studio',
      category: 'creative',
      style: 'artistic',
      icon: '👑'
    },
    {
      id: 7,
      title: 'FinanceFirst',
      description: 'Financial services',
      category: 'business',
      style: 'trustworthy',
      icon: '⚡'
    },
    {
      id: 8,
      title: 'WellnessPro',
      description: 'Health & wellness',
      category: 'health',
      style: 'organic',
      icon: '🌿'
    },
    {
      id: 9,
      title: 'CloudTech',
      description: 'Cloud solutions',
      category: 'tech',
      style: 'futuristic',
      icon: '☁️'
    },
    {
      id: 10,
      title: 'DesignLab',
      description: 'Creative agency',
      category: 'creative',
      style: 'innovative',
      icon: '🎯'
    },
    {
      id: 11,
      title: 'GlobalCorp',
      description: 'International business',
      category: 'business',
      style: 'corporate',
      icon: '🌍'
    },
    {
      id: 12,
      title: 'MediCare',
      description: 'Healthcare provider',
      category: 'health',
      style: 'caring',
      icon: '🏥'
    },
    {
      id: 13,
      title: 'AI Solutions',
      description: 'Artificial intelligence',
      category: 'tech',
      style: 'smart',
      icon: '🤖'
    },
    {
      id: 14,
      title: 'PixelPerfect',
      description: 'Digital design',
      category: 'creative',
      style: 'precise',
      icon: '🎨'
    },
    {
      id: 15,
      title: 'EnterprisePlus',
      description: 'Enterprise solutions',
      category: 'business',
      style: 'premium',
      icon: '🏢'
    },
    {
      id: 16,
      title: 'VitalHealth',
      description: 'Health services',
      category: 'health',
      style: 'vital',
      icon: '💊'
    },
    {
      id: 17,
      title: 'CyberSec',
      description: 'Cybersecurity',
      category: 'tech',
      style: 'secure',
      icon: '🔒'
    },
    {
      id: 18,
      title: 'InnovateLab',
      description: 'Innovation hub',
      category: 'creative',
      style: 'cutting-edge',
      icon: '🔬'
    },
    {
      id: 19,
      title: 'MarketLeader',
      description: 'Market solutions',
      category: 'business',
      style: 'leading',
      icon: '📈'
    },
    {
      id: 20,
      title: 'LifeCare',
      description: 'Life sciences',
      category: 'health',
      style: 'life-giving',
      icon: '🧬'
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl border border-neutral-200 dark:border-neutral-700 text-3xl sm:text-4xl">
                {logo.icon}
              </div>
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