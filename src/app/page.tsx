import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div id="about" />
        <About />
        <div id="services" />
        <Services />
        <div id="projects" />
        <Projects />
        <div id="contact" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
