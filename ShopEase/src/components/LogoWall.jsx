import React from 'react';

// More reliable logo URLs with better fallbacks
const logoWallImages = [
  'https://cdn-icons-png.flaticon.com/512/0/747.png', // Apple
  'https://cdn-icons-png.flaticon.com/512/888/888882.png', // Microsoft
  'https://cdn-icons-png.flaticon.com/512/5968/5968706.png', // Adobe
  'https://cdn-icons-png.flaticon.com/512/732/732084.png', // Nike
  'https://cdn-icons-png.flaticon.com/512/240/240195.png', // Coca-Cola
  'https://cdn-icons-png.flaticon.com/512/732/732108.png', // McDonald's
  'https://cdn-icons-png.flaticon.com/512/732/732162.png', // Starbucks
  'https://cdn-icons-png.flaticon.com/512/240/240196.png', // Pepsi
  'https://cdn-icons-png.flaticon.com/512/732/732070.png', // BMW
  'https://cdn-icons-png.flaticon.com/512/732/732089.png', // Mercedes
  'https://cdn-icons-png.flaticon.com/512/732/732162.png', // Volkswagen
  'https://cdn-icons-png.flaticon.com/512/732/732162.png', // Toyota
];

// Alternative approach using emojis and styled containers
const logoData = [
  { name: 'Apple', icon: '🍎', color: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' },
  { name: 'Microsoft', icon: '🪟', color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' },
  { name: 'Adobe', icon: '🎨', color: 'from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' },
  { name: 'Nike', icon: '✓', color: 'from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700' },
  { name: 'Coca-Cola', icon: '🥤', color: 'from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' },
  { name: 'McDonald\'s', icon: '🍟', color: 'from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700' },
  { name: 'Starbucks', icon: '☕', color: 'from-green-100 to-green-200 dark:from-green-800 dark:to-green-700' },
  { name: 'Pepsi', icon: '🥤', color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' },
  { name: 'BMW', icon: '🚗', color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' },
  { name: 'Mercedes', icon: '⭐', color: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700' },
  { name: 'Volkswagen', icon: '🚙', color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700' },
  { name: 'Toyota', icon: '🚘', color: 'from-red-100 to-red-200 dark:from-red-800 dark:to-red-700' },
];

const fallbackLogo = 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png';

const LogoWall = () => (
  <section className="bg-neutral-100 dark:bg-neutral-900 py-20">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Not just a logo design tool!</h2>
      <p className="max-w-xl mx-auto text-neutral-900 dark:text-neutral-100">
        Unleash your creativity and explore a gallery of unique, AI-generated logos.
      </p>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {logoData.map((logo, i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-white dark:bg-neutral-800 flex items-center justify-center aspect-square p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className={`w-full h-full rounded-lg bg-gradient-to-br ${logo.color} flex items-center justify-center text-4xl sm:text-5xl font-bold`}>
            {logo.icon}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LogoWall; 