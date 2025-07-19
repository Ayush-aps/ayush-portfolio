"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

// Technology brand colors and symbols
const getTechConfig = (name: string) => {
  const lowerName = name.toLowerCase();
  
  const configs = {
    // Frontend Frameworks
    react:      { bg: "#20232A", symbolColor: "#61DAFB", symbol: "⚛" },    // React dark gray bg
    next:       { bg: "#000000", symbolColor: "#FFFFFF", symbol: "⯈" },     // Next.js black bg
    vue:        { bg: "#35495E", symbolColor: "#42B883", symbol: "🟩" },   // Vue dark blue bg
    angular:    { bg: "#DD0031", symbolColor: "#FFFFFF", symbol: "A" },     // Angular red bg

    // Languages
    typescript: { bg: "#3178C6", symbolColor: "#FFFFFF", symbol: "TS" },    // TS blue bg
    javascript: { bg: "#F7DF1E", symbolColor: "#000000", symbol: "JS" },    // JS yellow bg
    python:     { bg: "#3776AB", symbolColor: "#FFE873", symbol: "🐍" },  // Python blue bg
    php:        { bg: "#777BB4", symbolColor: "#FFFFFF", symbol: "PHP" },   // PHP purple bg
    java:       { bg: "#007396", symbolColor: "#FFFFFF", symbol: "☕" },     // Java blue‑teal bg

    // Backend / Runtime
    node:       { bg: "#339933", symbolColor: "#FFFFFF", symbol: "⬢" },     // Node green bg
    express:    { bg: "#000000", symbolColor: "#FFFFFF", symbol: "E" },      // Express black bg
    django:     { bg: "#092E20", symbolColor: "#FFFFFF", symbol: "DJ" },    // Django dark green bg

    // Styling
    css:        { bg: "#1572B6", symbolColor: "#FFFFFF", symbol: "#" },      // CSS blue bg
    tailwind:   { bg: "#06B6D4", symbolColor: "#FFFFFF", symbol: "🌊" },    // Tailwind cyan bg
    sass:       { bg: "#CC6699", symbolColor: "#FFFFFF", symbol: "💎" },    // Sass pink bg
    bootstrap:  { bg: "#7952B3", symbolColor: "#FFFFFF", symbol: "B" },      // Bootstrap purple bg

    // Databases
    mongodb:    { bg: "#47A248", symbolColor: "#FFFFFF", symbol: "🍃" },    // MongoDB green bg
    postgresql: { bg: "#336791", symbolColor: "#FFFFFF", symbol: "🐘" },   // PostgreSQL blue bg
    mysql:      { bg: "#4479A1", symbolColor: "#FFFFFF", symbol: "🐬" },   // MySQL blue bg
    redis:      { bg: "#DC382D", symbolColor: "#FFFFFF", symbol: "🛢️" },  // Redis red bg

    // DevOps & Tools
    docker:     { bg: "#2496ED", symbolColor: "#FFFFFF", symbol: "🐳" },    // Docker blue bg
    git:        { bg: "#F05032", symbolColor: "#FFFFFF", symbol: "🔧" },    // Git orange bg
    aws:        { bg: "#FF9900", symbolColor: "#232F3E", symbol: "☁️" },   // AWS orange bg
    firebase:   { bg: "#FFCA28", symbolColor: "#232F3E", symbol: "🔥" },   // Firebase yellow bg

    // State & APIs
    redux:      { bg: "#764ABC", symbolColor: "#FFFFFF", symbol: "🔄" },    // Redux purple bg
    graphql:    { bg: "#E10098", symbolColor: "#FFFFFF", symbol: "◉" },     // GraphQL pink bg
  };
  
  // Find matching config
  for (const [key, config] of Object.entries(configs)) {
    if (lowerName.includes(key)) {
      return config;
    }
  }
  
  // Default config
  return { bg: '#6B7280', symbolColor: '#fff', symbol: '⚙' };
};

function TechSymbol({ skill, index }: { skill: Skill; index: number }) {
  const config = getTechConfig(skill.name);

  return (
    <div className="relative group" style={{ perspective: '300px', perspectiveOrigin: 'center center' }}>
      <motion.div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          cursor: 'pointer',
          background: `
            radial-gradient(ellipse 25% 40% at 30% 20%, ${config.symbolColor}40, transparent 50%),
            radial-gradient(ellipse 60% 80% at 70% 30%, rgba(255,255,255,0.3), transparent 60%),
            radial-gradient(circle at 50% 50%, ${config.bg}, ${config.bg}cc)
          `,
          boxShadow: `
            inset -15px -15px 30px ${config.bg}80,
            inset 10px 10px 25px ${config.symbolColor}20,
            inset -5px -5px 15px rgba(0,0,0,0.4),
            0 10px 25px ${config.bg}50,
            0 0 0 1px ${config.symbolColor}25
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          color: config.symbolColor,
          textShadow: `2px 2px 4px ${config.bg}80, 0 0 8px ${config.bg}60`,
          overflow: 'hidden',
          transform: 'rotateX(15deg) rotateY(15deg)',
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotateX: [15, 25, 15], // Gentle up-down tilt
          rotateY: [-15, 15, -15], // Limited left-right rotation (30° total range)
        }}
        transition={{
          opacity: { duration: 0.4, delay: index * 0.05 },
          y: { duration: 0.4, delay: index * 0.05 },
          scale: { duration: 0.4, delay: index * 0.05 },
          rotateX: {
            duration: 6, // Same speed for all
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0, // Synchronized start
            repeatType: "reverse"
          },
          rotateY: {
            duration: 4, // Slightly faster horizontal rotation
            repeat: Infinity,
            ease: "easeInOut", 
            delay: 0, // Synchronized start
            repeatType: "reverse"
          }
        }}
        whileHover={{ 
          scale: 1.2,
          rotateX: 25,
          y: -10,
          boxShadow: `
            inset -20px -20px 35px ${config.bg}90,
            inset 15px 15px 30px ${config.symbolColor}30,
            inset -8px -8px 20px rgba(0,0,0,0.5),
            0 15px 35px ${config.bg}70,
            0 0 0 3px ${config.symbolColor}60,
            0 0 20px ${config.symbolColor}40
          `
        }}
      >
        {/* 3D Symbol */}
        <div
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: config.symbolColor,
            textShadow: `
              2px 2px 4px ${config.bg}90, 
              0 0 8px ${config.bg}70,
              1px 1px 2px rgba(0,0,0,0.6)
            `,
            filter: `drop-shadow(0 0 6px ${config.symbolColor}30)`,
            zIndex: 10,
            position: 'relative',
            transform: 'translateZ(2px)', // Slight elevation
          }}
        >
          {config.symbol}
        </div>
      </motion.div>
      
      {/* Skill name */}
      <div className="text-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {skill.name}
      </div>
    </div>
  );
}

// Export TechSymbol for individual skill rendering
export { TechSymbol };

export default function TechStack3D({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-x-10 gap-y-8 justify-items-center">
      {skills.map((skill, index) => (
        <TechSymbol key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
}
