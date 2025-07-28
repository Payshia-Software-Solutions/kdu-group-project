import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={cn('text-sm', className)}>
      <ol className="flex items-center space-x-2 text-white">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            <Link href={item.href}>
              <span className={cn(
                  "hover:underline", 
                  index === items.length - 1 ? 'font-semibold' : 'opacity-80'
              )}>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
