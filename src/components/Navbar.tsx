import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { ui } from '../copy';
import { groups, products } from '../data/products';
import { Link, useRoute } from '../router';
import { LogoLockup } from './Logo';

type Panel = 'products' | 'menu' | null;

export default function Navbar() {
  const route = useRoute();
  const overHero = route.page === 'home';
  const headerRef = useRef<HTMLElement>(null);

  // Transparent over the home video; solid on other pages and once the home page scrolls past the video.
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);

  useEffect(() => {
    if (!overHero) return;
    const update = () => setScrolled(window.scrollY > window.innerHeight - 80);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [overHero]);

  useEffect(() => setPanel(null), [route.path]);

  // Close an open panel with Escape or a click outside the header.
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPanel(null);
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setPanel(null);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [panel]);

  const toggle = (which: Exclude<Panel, null>) => setPanel((p) => (p === which ? null : which));
  const close = () => setPanel(null);

  const solid = !overHero || scrolled || panel !== null;
  const inMaterials = route.page === 'materials' || route.page === 'product';
  const links = [
    { label: ui.nav.projects, to: '/#projects' },
    { label: ui.nav.contact, to: '/#contact' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        solid ? 'bg-white/95 backdrop-blur-sm border-gray-200' : 'bg-transparent border-transparent'
      }`}
    >
      <nav aria-label="Main" className="flex items-center justify-between gap-3 px-6 sm:px-10 md:px-14 py-4 sm:py-5">
        <Link to="/" className="flex flex-1 items-center" aria-label={ui.nav.homeLabel}>
          <LogoLockup />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-3">
          <button
            type="button"
            onClick={() => toggle('products')}
            aria-expanded={panel === 'products'}
            aria-controls="products-menu"
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-black/5 ${
              inMaterials || panel === 'products' ? 'text-[#191919]' : 'text-[#191919]/80'
            }`}
          >
            {ui.nav.products}
            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-200 ${panel === 'products' ? 'rotate-180' : ''}`}
            />
          </button>
          <Link
            to="/#contact"
            className="hidden sm:inline-block whitespace-nowrap px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
          >
            {ui.nav.quote}
          </Link>
          <button
            type="button"
            onClick={() => toggle('menu')}
            aria-expanded={panel === 'menu'}
            aria-controls="mobile-menu"
            aria-label={panel === 'menu' ? ui.nav.closeMenu : ui.nav.menu}
            className="lg:hidden -me-2 grid h-10 w-10 place-items-center rounded-lg text-[#191919] hover:bg-black/5"
          >
            {panel === 'menu' ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {panel === 'products' && (
        <div id="products-menu" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-6 sm:py-8">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
              {groups.map((group) => (
                <div key={group.id}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">{group.name}</p>
                  <ul className="mt-3 space-y-2">
                    {products
                      .filter((p) => p.group === group.id)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            to={`/building-materials/${p.slug}`}
                            onClick={close}
                            aria-current={route.page === 'product' && route.slug === p.slug ? 'page' : undefined}
                            className="text-sm text-[#191919] hover:underline underline-offset-4 decoration-gray-300 aria-[current=page]:font-medium"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/building-materials"
                onClick={close}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#191919]"
              >
                {ui.nav.allProducts}
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/building-materials#quote" onClick={close} className="text-sm text-[#191919]/70 hover:text-[#191919]">
                {ui.nav.quoteForm}
              </Link>
            </div>
          </div>
        </div>
      )}

      {panel === 'menu' && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white px-6 sm:px-10 pb-6">
          <ul className="divide-y divide-gray-200">
            {[{ label: ui.nav.materials, to: '/building-materials' }, ...links].map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={close} className="block py-4 text-base font-medium text-[#191919]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#contact"
            onClick={close}
            className="mt-2 block rounded-lg bg-[#191919] px-5 py-3 text-center text-sm font-medium text-white"
          >
            {ui.nav.quote}
          </Link>
        </div>
      )}
    </header>
  );
}
