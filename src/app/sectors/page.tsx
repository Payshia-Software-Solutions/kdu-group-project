import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SectorTree from '@/components/sections/sector-tree';
import { MotionDiv } from '@/components/ui/motion';

export default function SectorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
          <MotionDiv direction="left">
            <SectorTree />
          </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
