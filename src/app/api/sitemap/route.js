import { NextResponse } from 'next/server'
import { blogPosts } from '@/data'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'

  const staticPages = [
    '',
    '/#about',
    '/#projects',
    '/#blog',
    '/#contact'
  ]

  const blogPages = blogPosts.map(post => `/blog/${post.id}`)

  const allPages = [...staticPages, ...blogPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.includes('blog') ? 'weekly' : 'monthly'}</changefreq>
      <priority>${page === '' ? '1.0' : page.includes('blog') ? '0.7' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
