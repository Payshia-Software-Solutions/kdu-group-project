import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectorLinks } from "@/lib/sector-data";
import { cn } from "@/lib/utils";

export default function SubNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-px">
          {sectorLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex flex-col items-center justify-center text-center p-3 sm:p-4 hover:bg-primary-foreground/10 transition-colors duration-200",
                  isActive && "bg-primary-foreground/20"
                )}
              >
                <Icon className="w-7 h-7 mb-1.5" />
                <span className="text-xs sm:text-sm font-medium leading-tight">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
