'use client'

import { useState } from 'react'
import { Blog } from '@/components/blog'
import { BookOpen } from 'lucide-react'

export default function BlogPage() {
  const [search, setSearch] = useState('')

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors py-20">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Blog & Articles
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Dive into my latest write‑ups on full‑stack web development, deployments,
          Three.js animations, and more.
        </p>
        {/* Search Bar */}
        <div className="mt-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search posts..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <BookOpen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Blog hideViewAll searchQuery={search} />
      </section>
    </main>
  )
}
