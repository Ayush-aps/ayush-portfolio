// src/components/Providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ErrorBoundary } from './error-boundary'

export function Providers({ children }) {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  )
}
