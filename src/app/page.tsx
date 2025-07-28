import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Resort from '@/components/sections/resort';
import LatestNews from '@/components/sections/latest-news';
import MobileSectors from '@/components/sections/mobile-sectors';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MobileSectors />
        <About />
        <Resort />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
