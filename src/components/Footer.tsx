import { company } from '../company';
import { localePath, ui } from '../i18n';
import { Link, useLang } from '../router';

export default function Footer() {
  const lang = useLang();
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] grid gap-8 md:grid-cols-[1fr_auto_auto] md:gap-16">
        <div>
          <span className="whitespace-nowrap font-semibold text-base tracking-tight text-[#191919]">{company.shortName}</span>
          <p className="mt-3 text-sm text-[#191919]/60 leading-relaxed">
            {company.legalName}
            <br />
            {company.addressLines.map((l) => l[lang]).join(lang === 'ar' ? '، ' : ', ')}
          </p>
        </div>

        <nav aria-label={ui.nav.materials[lang]}>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={localePath('/building-materials', lang)} className="text-[#191919] hover:underline underline-offset-4">
                {ui.nav.materials[lang]}
              </Link>
            </li>
            <li>
              <Link to={localePath('/#projects', lang)} className="text-[#191919]/70 hover:text-[#191919]">
                {ui.nav.projects[lang]}
              </Link>
            </li>
            <li>
              <Link to={localePath('/#contact', lang)} className="text-[#191919]/70 hover:text-[#191919]">
                {ui.nav.contact[lang]}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm text-[#191919]/60 space-y-2">
          <p>
            {ui.contact.phone[lang]}:{' '}
            <a href={company.phoneHref} dir="ltr" className="text-[#191919] hover:underline underline-offset-4">
              {company.phoneDisplay}
            </a>
          </p>
          <p>
            {ui.contact.whatsapp[lang]}:{' '}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="text-[#191919] hover:underline underline-offset-4"
            >
              {company.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <p className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-5 text-xs text-[#191919]/50">
          © {new Date().getFullYear()} {company.legalName}. {ui.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
