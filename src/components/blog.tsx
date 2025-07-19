"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts } from '@/data'
import { formatDate } from '@/lib/utils'

function BlogCard({ post, index }: { 
  post: { 
    id: string; 
    title: string; 
    excerpt: string; 
    publishedAt: string; 
    readTime: number; 
    image?: string; 
    tags: string[]; 
    featured: boolean;
  }, 
  index: number 
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Featured Image */}
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <div class="text-white text-4xl font-bold">${post.title.charAt(0)}</div>
                  </div>
                `
              }
            }}
          />
          
          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Information */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <div className="pt-2">
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors group/link"
          >
            Read More
            <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export function Blog({ hideViewAll = false, searchQuery = "" }: { hideViewAll?: boolean; searchQuery?: string }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => {
    if (!searchQuery.trim()) return true
    
    const query = searchQuery.toLowerCase()
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const recentPosts = filteredPosts.slice(0, 6)

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Latest Blog Posts
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-semibold text-gray-900 dark:text-white"
              >
                {searchQuery ? 'Featured Results' : 'Featured Posts'}
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recent Posts or Search Results */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white"
            >
              {searchQuery ? `Search Results${filteredPosts.length > 0 ? ` (${filteredPosts.length})` : ''}` : 'Recent Posts'}
            </motion.h3>
            
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index + featuredPosts.length}
                  />
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No posts found matching "{searchQuery}"
                </div>
                <p className="text-gray-400 dark:text-gray-500 mt-2">
                  Try searching with different keywords or browse all posts.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index + featuredPosts.length}
                  />
                ))}
              </div>
            )}
          </div>

{/* View All Posts Button */}
{!hideViewAll && (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="text-center"
>
  <Link href="./blog">
   <motion.div
      className="inline-flex items-center px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 font-medium rounded-full hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <BookOpen className="mr-2 h-5 w-5" />
      View All Posts
    </motion.div>
  </Link>
</motion.div>
)}

          {/* Blog Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {searchQuery ? filteredPosts.length : blogPosts.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{searchQuery ? 'Matching Posts' : 'Total Posts'}</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {searchQuery ? filteredPosts.reduce((acc, post) => acc + post.readTime, 0) : blogPosts.reduce((acc, post) => acc + post.readTime, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Minutes</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {searchQuery ? Array.from(new Set(filteredPosts.flatMap(post => post.tags))).length : Array.from(new Set(blogPosts.flatMap(post => post.tags))).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Topics Covered</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {featuredPosts.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Featured Posts</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
