import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { ThreeBackground } from "@/components/three-background"; // 3D background component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Professional portfolio of a full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["portfolio", "web developer", "full-stack", "React", "Next.js", "Node.js", "JavaScript", "TypeScript"],
  authors: [{ name: "Ayush Pratap Singh" }],
  creator: "Ayush Pratap Singh",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills.",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills.",
    images: ["/og-image.jpg"],
    creator: "@ayush_aps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased relative`}>
        {/* 3D animated background behind all content */}
        <ThreeBackground />
         {/* Providers is a pure client component */}
      <Providers>
        {children}
       </Providers>
      </body>
    </html>
  );
}
