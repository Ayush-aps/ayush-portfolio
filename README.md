# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features include 3D animations with Three.js, dark/light mode, contact forms with EmailJS, and a fully responsive design.

## ✨ Features

- **Modern Design**: Clean, professional layout inspired by award-winning websites
- **3D Animations**: Interactive Three.js background with animated particles and geometry
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Contact Form**: Functional contact form with React Hook Form and EmailJS integration
- **Blog Ready**: Blog section with syntax highlighting and dynamic routing
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images, code splitting, and best practices
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Icons**: Lucide React
- **Theme**: Next Themes

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section with 3D background
│   ├── about.tsx           # About me section
│   ├── projects.tsx        # Projects showcase
│   ├── blog.tsx            # Blog posts section
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Site footer
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── theme-provider.tsx  # Theme context provider
│   └── three-background.tsx # 3D animated background
├── data/
│   └── index.ts            # Site content and data
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Customize Content

Edit `src/data/index.ts` to update:
- Personal information
- Skills and experience
- Project showcases
- Blog posts
- Contact details

### 4. Add Your Images

Replace placeholder images in:
- `public/images/avatar.jpg` - Your profile photo
- `public/images/projects/` - Project screenshots
- `public/images/blog/` - Blog post featured images
- `public/resume.pdf` - Your resume/CV

### 5. EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Update the contact form in `src/components/contact.tsx`

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder and dependencies to your hosting provider
3. Configure environment variables
4. Start the application: `npm start`

## 🎨 Customization

### Colors and Themes

Update colors in `tailwind.config.ts` and CSS variables in `globals.css`.

### Animations

Modify animations in components using Framer Motion variants or add custom CSS animations.

### Content Sections

Add or remove sections by editing the main page components and updating the navigation.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS optimization with Tailwind CSS purging
- Font optimization with Next.js font loading
- Lazy loading for components and images

## 📞 Support

For questions or issues, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and modern web technologies.
