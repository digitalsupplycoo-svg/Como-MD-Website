import { ChevronRight } from 'lucide-react';
import { Link } from '../router';

/** Breadcrumb trail; the last item is the current page. */
export default function Breadcrumbs({ items, label }: { items: { name: string; to?: string }[]; label: string }) {
  return (
    <nav aria-label={label} className="text-sm text-[#191919]/60">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-[#191919]/30 rtl:rotate-180" />}
            {item.to ? (
              <Link to={item.to} className="hover:text-[#191919] transition-colors duration-200">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#191919]">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
