export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'fullstack' | 'tool'
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: number
  tags: string[]
  featured: boolean
  image?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  location: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
