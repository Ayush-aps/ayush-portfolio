'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

// Dynamically import based on theme
export function ThreeBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const CanvasComponent = dynamic(
    () =>
      resolvedTheme === 'dark'
        ? import('./three-canvas-dark')
        : import('./three-canvas-light'),
    { ssr: false, loading: () => null }
  )

  return <CanvasComponent />
}
