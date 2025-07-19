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
  
  export const configs = {
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
    <div className="relative group" style={{ perspective: '200px' }}>
      <motion.div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          transformStyle: 'preserve-3d',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0, y: 20, rotateY: -180 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          opacity: { duration: 0.4, delay: index * 0.05 },
          y: { duration: 0.4, delay: index * 0.05 },
          rotateX: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.1
          },
          rotateY: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.15
          }
        }}
        className="hover:scale-110 transition-transform"
      >
        {/* Cube faces */}
        {[
          { transform: 'rotateY(0deg) translateZ(40px)' },    // Front
          { transform: 'rotateY(90deg) translateZ(40px)' },   // Right
          { transform: 'rotateY(180deg) translateZ(40px)' },  // Back
          { transform: 'rotateY(270deg) translateZ(40px)' },  // Left
          { transform: 'rotateX(90deg) translateZ(40px)' },   // Top
          { transform: 'rotateX(-90deg) translateZ(40px)' },  // Bottom
        ].map((face, faceIndex) => (
          <div
            key={faceIndex}
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              backgroundColor: config.bg,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              transform: face.transform,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: config.symbolColor,
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            {config.symbol}
          </div>
        ))}
      </motion.div>
      
      {/* Skill name */}
      <div className="text-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {skill.name}
      </div>
    </div>
  );
}

export default function TechStack3D({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-x-10 gap-y-8 justify-items-center">
      {skills.map((skill, index) => (
        <TechSymbol key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
}
