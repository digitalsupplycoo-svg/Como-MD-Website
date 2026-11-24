import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' },
];

export default function Navbar() {
  // Transparent over the hero video; solid once the page scrolls past it.
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const update = () => setSolid(window.scrollY > window.innerHeight - 80);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        solid ? 'bg-white/90 backdrop-blur-sm border-gray-200' : 'bg-transparent border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 sm:px-10 md:px-14 py-4 sm:py-5"
      >
        <a href="/" className="flex flex-1 items-center gap-2.5" aria-label="COMO MD home">
          <Logo className="w-6 h-6 text-[#191919]" />
          <span className="whitespace-nowrap font-semibold text-base tracking-tight text-[#191919]">COMO MD</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 justify-end">
          <a
            href="#demo"
            className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
          >
            Book A Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
