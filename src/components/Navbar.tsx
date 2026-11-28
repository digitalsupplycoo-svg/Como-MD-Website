import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { localePath, ui } from '../i18n';
import { basePath, Link, useRoute } from '../router';

export default function Navbar() {
  const route = useRoute();
  const lang = route.lang;
  const overHero = route.page === 'home';

  // Transparent over the home video; solid on other pages and once the home page scrolls past the video.
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  useEffect(() => setOpen(false), [route.path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = !overHero || scrolled || open;
  const inMaterials = route.page === 'materials' || route.page === 'product';
  const links = [
    { label: ui.nav.materials[lang], to: localePath('/building-materials', lang), current: inMaterials },
    { label: ui.nav.projects[lang], to: localePath('/#projects', lang), current: false },
    { label: ui.nav.contact[lang], to: localePath('/#contact', lang), current: false },
  ];
  const otherLang = lang === 'en' ? 'ar' : 'en';
  const switchTo = localePath(basePath(route), otherLang);
  const quoteTo = localePath('/#contact', lang);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        solid ? 'bg-white/90 backdrop-blur-sm border-gray-200' : 'bg-transparent border-transparent'
      }`}
    >
      <nav aria-label="Main" className="flex items-center justify-between gap-3 px-6 sm:px-10 md:px-14 py-4 sm:py-5">
        <Link to={localePath('/', lang)} className="flex flex-1 items-center" aria-label={ui.nav.homeLabel[lang]}>
          <span className="whitespace-nowrap font-semibold text-base tracking-tight text-[#191919]">COMO MD</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                aria-current={link.current ? 'page' : undefined}
                className={`text-sm transition-colors duration-200 hover:text-[#191919] ${
                  link.current ? 'text-[#191919] font-medium' : 'text-[#191919]/70'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <Link
            to={switchTo}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={ui.nav.switchLabel[lang]}
            className="rounded-lg px-2.5 py-2 text-sm font-medium text-[#191919]/80 hover:bg-black/5 hover:text-[#191919] transition-colors duration-200"
          >
            <span className="sm:hidden">{ui.nav.switchToShort[lang]}</span>
            <span className="hidden sm:inline">{ui.nav.switchTo[lang]}</span>
          </Link>
          <Link
            to={quoteTo}
            className="hidden sm:inline-block whitespace-nowrap px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
          >
            {ui.nav.quote[lang]}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.nav.closeMenu[lang] : ui.nav.menu[lang]}
            className="lg:hidden -me-2 grid h-10 w-10 place-items-center rounded-lg text-[#191919] hover:bg-black/5"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white px-6 sm:px-10 pb-6">
          <ul className="divide-y divide-gray-200">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  aria-current={link.current ? 'page' : undefined}
                  className="block py-4 text-base font-medium text-[#191919]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={quoteTo}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-[#191919] px-5 py-3 text-center text-sm font-medium text-white"
          >
            {ui.nav.quote[lang]}
          </Link>
        </div>
      )}
    </header>
  );
}
