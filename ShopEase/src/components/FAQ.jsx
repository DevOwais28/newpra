import React, { useState } from 'react'

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      question: 'How does AI logo generation work?',
      answer: 'Our AI uses advanced machine learning algorithms trained on millions of professional logos to understand design principles, color theory, and brand aesthetics. When you provide your requirements, the AI generates unique logo concepts tailored to your specifications.'
    },
    {
      question: 'Do I own the rights to my generated logo?',
      answer: 'Yes! All our plans include full commercial licensing. Once you download your logo, you own complete rights to use it for your business, marketing materials, products, and any commercial purposes without any restrictions.'
    },
    {
      question: 'Can I modify the generated logos?',
      answer: 'Absolutely! Our platform includes built-in editing tools for colors, fonts, and layouts. For Professional and Enterprise plans, you also get access to vector editing capabilities and can download editable SVG files.'
    },
    {
      question: 'What file formats do you provide?',
      answer: 'Free users get PNG files, while paid plans include PNG, SVG, PDF, and other formats. SVG files are vector-based, meaning they can be scaled to any size without losing quality - perfect for everything from business cards to billboards.'
    },
    {
      question: 'How quickly can I get my logo?',
      answer: 'Logo generation is instant! Our AI creates multiple logo options in seconds. The only time needed is for you to review, customize, and download your chosen design.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with our service, contact us within 30 days for a full refund. Free users can always try our service risk-free.'
    }
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 font-sans">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-2">
            <img 
              src="https://img.icons8.com/color/96/000000/help.png" 
              alt="FAQ" 
              className="w-16 h-16 rounded-lg bg-white dark:bg-neutral-900 p-1 shadow"
              onError={e => { 
                e.target.onerror = null; 
                e.target.src = 'https://img.icons8.com/color/96/000000/robot-3d.png'; 
              }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">Questions</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-neutral-900 dark:text-neutral-100">
            Everything you need to know about our AI logo generation platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItem === index && (
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Still have questions?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-300">
                Contact Support
              </button>
              <button className="px-8 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ