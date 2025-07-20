import React from 'react';

const FeatureSection = ({ title, description, image, icon, reverse, buttonText, buttonLink }) => (
  <section className={`w-full py-8 sm:py-12 md:py-16 ${reverse ? 'bg-neutral-100 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950'}`}>
    <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 flex justify-center md:justify-start">
        {icon ? (
          <span className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-xl shadow-lg bg-white dark:bg-neutral-900 p-2 sm:p-3 md:p-4">
            {icon}
          </span>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-xl shadow-lg bg-white dark:bg-neutral-900 p-2 sm:p-3 md:p-4"
            loading="lazy"
            onError={e => { 
              e.target.onerror = null; 
              e.target.src = 'https://img.icons8.com/color/48/000000/robot-3d.png'; 
            }}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <span className="mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-bold uppercase tracking-widest shadow">
          Feature
        </span>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 text-neutral-900 dark:text-neutral-100 leading-tight">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 text-neutral-700 dark:text-neutral-300">{description}</p>
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm sm:text-base shadow hover:scale-105 transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default FeatureSection; 