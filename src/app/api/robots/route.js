import { NextResponse } from 'next/server'

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin or private pages (if any)
# Disallow: /admin/

# Sitemap
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'}/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}
