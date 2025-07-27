export const personalInfo = {
  name: 'Ayush Pratap Singh',
  title: 'Full-Stack Web Developer',
  email: 'ausingh2020@gmail.com',
  phone: '+91 8840214524',
  location: 'Gorakhpur, India',
  bio: 'Passionate full-stack developer with expertise in modern web technologies. I create scalable, user-friendly applications that solve real-world problems.',
  avatar: '/images/avatar.jpg',
  resume: '/resume.pdf',
  social: {
    github: 'https://github.com/Ayush-aps',
    linkedin: 'https://linkedin.com/in/ayush-singh-546901285',
    twitter: 'https://twitter.com/yourusername',
    portfolio: 'https://yourportfolio.com'
  }
}

export const skills = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'PostgreSQL', level: 82, category: 'database' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  //   { name: "AWS", level: 70, category: "tools" },
  { name: 'Python', level: 75, category: 'other' }
]

export const experiences = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    position: 'Senior Full-Stack Developer',
    startDate: '2022-01',
    description: [
      'Led development of a customer portal using React and Node.js, serving 10k+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
      'Architected microservices infrastructure using Docker and AWS'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    location: 'Remote'
  },
  {
    id: '2',
    company: 'Startup Solutions',
    position: 'Full-Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Built responsive web applications using React and Express.js',
      'Designed and implemented RESTful APIs',
      'Optimized database queries improving performance by 40%',
      'Collaborated with design team to implement pixel-perfect UIs'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    location: 'New York, NY'
  }
]

export const projects = [
  {
    id: '1',
    title: 'Bookish – E‑Commerce Book Platform',
    description: 'Buy & sell new & second‑hand books with personalized dashboards',
    longDescription:
      'Bookish is a full‑stack e‑commerce site where users can browse, list, and purchase new or used books. It features role‑based dashboards (buyer/seller), dynamic review feeds, secure checkout, and an admin panel. Built with a Node.js/Express backend, MongoDB & PostgreSQL databases, and a responsive EJS/Tailwind CSS frontend.',
    image: '/images/projects/bookish.jpg',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'EJS',
      'Tailwind CSS'
    ],
    liveUrl: 'https://books-fd4v.onrender.com/',
    githubUrl: 'https://github.com/Ayush-aps/books',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'EventSphere – Event Management Platform',
    description: 'Create, manage & track college events in one place',
    longDescription:
      'EventSphere helps student organizations plan and run events smoothly. Users can create event pages, manage registrations, send notifications, and view analytics. I built the responsive frontend with React and Tailwind CSS, and a RESTful Node.js/Express backend with MongoDB for data storage.',
    image: '/images/projects/eventsphere.jpg',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://event-sphere-cyan.vercel.app/',
    githubUrl:
      'https://github.com/epochiiits/Epoch-Projects/tree/main/EventSphere',
    featured: true,
    category: 'web'
  },
  {
    id: '4',
    title: 'Labour Chauraha – Urban Mobility Platform [Coming Soon]',
    description: 'real-time job marketplace for daily wage workers',
    longDescription:
      'An upcoming platform aimed at streamlining the hiring process for daily wage laborers, inspired by the bustling Labour Chauraha in Allahabad. The application will feature real-time job postings, geolocation-based worker discovery, secure authentication, and a user-friendly interface to bridge the gap between employers and laborers.',
    image: '/images/projects/labourchauraha.jpg',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Socket.io',
      'JWT Auth'
    ],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    category: 'fullstack',
    status: 'Coming Soon'
  }
]

export const blogPosts = [
  {
    id: 'bookish-journey',
    title: 'How I Built Bookish: From Idea to Deployment',
    excerpt:
      'A behind‑the‑scenes look at my end‑to‑end process for creating Bookish, the second‑hand book e‑commerce platform.',
    content: `# How I Built Bookish: From Idea to Deployment

When I first sketched out Bookish, my goal was simple: **make buying and selling books effortless**. Over the next few weeks, I:

1. **Designed the data model** in MongoDB and PostgreSQL, balancing flexibility for user‑generated listings with real‑time inventory tracking.
2. **Created RESTful APIs** in Node.js/Express, adding JWT authentication, role‑based routes for buyers, sellers, and admins.
3. **Styled the frontend** with EJS templates and Tailwind CSS, ensuring a responsive layout that looks great on mobile and desktop.
4. **Integrated Stripe** for secure, one‑click payments and automated email receipts with EmailJS.
5. **Deployed on Render**, troubleshooting 502 errors and setting up CI/CD to auto-deploy on every push.

The result? A fully featured marketplace live at \`https://books-fd4v.onrender.com\`. Check out the code on [GitHub](https://github.com/Ayush-aps/books) and let me know your thoughts!
`,
    publishedAt: '2025-03-20',
    readTime: 7,
    tags: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
    featured: true,
    image: '/images/blog/bookish-journey.jpg'
  },
  {
    id: 'themes-and-threejs',
    title: 'Animating Your Portfolio with Three.js & Themes',
    excerpt:
      'How I added dynamic Three.js backgrounds and seamless light/dark themes to my Next.js portfolio.',
    content: `# Animating Your Portfolio with Three.js & Themes

An interactive background can make or break your site’s first impression. In this post, I walk through:

- **Dynamic starfields** using @react-three/fiber and @react-three/drei, with a fallback for non‑WebGL browsers.
- **Dual Three.js scenes**: one bright, pastel theme for “light mode,” one deep‑space vibe for “dark mode.”
- **Next.js App Router** and the \`"use client"\` directive to ensure the canvas only renders on the client.
- **Smooth theme toggling** with \`next-themes\`, Framer Motion for icon rotation, and Tailwind’s \`dark:\` variants.

By the end, you’ll have a fully animated, theme‑aware background that enhances engagement without overwhelming content.
`,
    publishedAt: '2025-05-10',
    readTime: 5,
    tags: ['Three.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    image: '/images/blog/themes-and-threejs.jpg'
  },
  {
    id: 'deploying-with-ci-cd',
    title: 'Deploying Full‑Stack Apps: Vercel vs. Render',
    excerpt:
      'A comparison of my experiences hosting Node/Next apps on Vercel and Render, plus CI/CD tips I learned along the way.',
    content: `# Deploying Full‑Stack Apps: Vercel vs. Render

During my recent Bookish deployment, I experimented with both platforms:

1. **Vercel**:  
   - **Pros**: Instant Next.js support, zero‑config serverless functions.  
   - **Cons**: Cold starts on free tier, limited long‑running processes.

2. **Render**:  
   - **Pros**: Always-on services, easy Postgres add-ons, Docker support.  
   - **Cons**: Slightly more manual setup, occasional 502s under heavy load.

I also set up **GitHub Actions** to run lint/tests and auto-deploy on merges to 'main'. See the full pipeline YAML and sample workflows [here](https://github.com/Ayush-aps/books/actions).
`,
    publishedAt: '2025-07-01',
    readTime: 6,
    tags: ['Deployment', 'CI/CD', 'Render', 'Vercel'],
    featured: false,
    image: '/images/blog/deploying-with-ci-cd.jpg'
  }
]
