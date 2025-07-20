import React from 'react';

const logoWallImages = [
  'https://img.icons8.com/color/96/000000/apple-logo.png',
  'https://img.icons8.com/color/96/000000/microsoft.png',
  'https://img.icons8.com/color/96/000000/adobe-creative-suite.png',
  'https://img.icons8.com/color/96/000000/nike.png',
  'https://img.icons8.com/color/96/000000/coca-cola.png',
  'https://img.icons8.com/color/96/000000/mcdonalds.png',
  'https://img.icons8.com/color/96/000000/starbucks.png',
  'https://img.icons8.com/color/96/000000/pepsi.png',
  'https://img.icons8.com/color/96/000000/bmw.png',
  'https://img.icons8.com/color/96/000000/mercedes-benz.png',
  'https://img.icons8.com/color/96/000000/volkswagen.png',
  'https://img.icons8.com/color/96/000000/toyota.png',
];

const fallbackLogo = 'https://img.icons8.com/color/96/000000/robot-3d.png';

const LogoWall = () => (
  <section className="bg-neutral-100 dark:bg-neutral-900 py-20">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Not just a logo design tool!</h2>
      <p className="max-w-xl mx-auto text-neutral-900 dark:text-neutral-100">
        Unleash your creativity and explore a gallery of unique, AI-generated logos.
      </p>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {logoWallImages.map((src, i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-white dark:bg-neutral-800 flex items-center justify-center aspect-square p-2">
          <img
            src={src}
            alt={`Logo ${i + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={e => { e.target.onerror = null; e.target.src = fallbackLogo; }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default LogoWall; 