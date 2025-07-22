import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/data'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id
  }))
}

export async function generateMetadata({
  params
}) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Ayush Pratap Singh'],
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title
            }
          ]
        : []
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : []
    }
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          {post.image && (
            <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400">
              Thanks for reading! Feel free to share this post if you found it helpful.
            </div>
            <Link
              href="/#contact"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}
