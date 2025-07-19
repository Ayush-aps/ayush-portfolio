import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ThreeBackground } from "@/components/three-background";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 3D background behind everything */}
      <ThreeBackground />

      {/* Your page content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
