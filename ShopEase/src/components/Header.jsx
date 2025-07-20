import React, { useState, useEffect } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`relative z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    } font-sans`}>
      <nav className="container mx-auto max-w-7xl h-10 sm:h-12 md:h-16 lg:h-20 px-2 sm:px-3 md:px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-0">
          <a href="#" className="flex items-center gap-1 sm:gap-1.5 md:gap-3 min-w-max">
            <img 
              src="https://img.icons8.com/color/48/000000/paint-palette.png" 
              alt="OrchidLogos" 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 rounded-lg bg-white dark:bg-neutral-900 p-0.5"
              onError={e => { 
                e.target.onerror = null; 
                e.target.src = 'https://img.icons8.com/color/48/000000/robot-3d.png'; 
              }}
            />
            <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight whitespace-nowrap text-neutral-900 dark:text-white">
              Orchid<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Logos</span>
            </span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="transition font-medium text-sm lg:text-base xl:text-lg text-neutral-900 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Right side buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1 sm:p-1.5 md:p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {/* Sign In/Sign Up - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1.5 md:gap-2 lg:gap-3">
            <button className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium text-xs sm:text-sm md:text-base transition-colors duration-200">
              Sign In
            </button>
            <button className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium text-xs sm:text-sm md:text-base hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
              Sign Up
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-1 sm:p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-64 sm:w-72 bg-white dark:bg-neutral-950 shadow-2xl transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-3 sm:p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Mobile Navigation */}
              <nav className="flex-1 px-3 sm:px-4">
                <div className="space-y-1 sm:space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left py-2.5 sm:py-3 text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>
              {/* Mobile Sign In/Sign Up */}
              <div className="p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="space-y-2 sm:space-y-3">
                  <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium text-sm sm:text-base transition-colors duration-200 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900">
                    Sign In
                  </button>
                  <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium text-sm sm:text-base hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header