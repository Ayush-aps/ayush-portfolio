'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Only show toggle after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Or return null, but here's a consistent placeholder size
    return (
      <div className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? 'sun' : 'moon'} // force remount for framer
        initial={{ rotate: isDark ? 0 : 180 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark
          ? (
          <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )
          : (
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
      </motion.div>
    </motion.button>
  )
}
