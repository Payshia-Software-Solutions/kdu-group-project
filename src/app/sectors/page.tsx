import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SectorTree from '@/components/sections/sector-tree';
import './sector-tree.css';

export default function SectorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SectorTree />
      </main>
      <Footer />
    </div>
  );
}
