import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KDU Group Sri Lanka. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <p>Powered by Payshia software solutions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Facebook page">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-accent-foreground" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter profile">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent-foreground" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn profile">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-accent-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
