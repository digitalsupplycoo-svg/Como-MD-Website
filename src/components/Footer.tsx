import { company } from '../company';
import { ui } from '../copy';
import { Link } from '../router';
import { LogoLockup } from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] grid gap-8 md:grid-cols-[1fr_auto_auto] md:gap-16">
        <div>
          <LogoLockup tagline />
          <p className="mt-5 text-sm text-[#191919]/60 leading-relaxed">
            {company.legalName}
            <br />
            {company.addressLines.join(', ')}
          </p>
        </div>

        <nav aria-label={ui.nav.materials}>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={'/building-materials'} className="text-[#191919] hover:underline underline-offset-4">
                {ui.nav.materials}
              </Link>
            </li>
            <li>
              <Link to={'/#projects'} className="text-[#191919]/70 hover:text-[#191919]">
                {ui.nav.projects}
              </Link>
            </li>
            <li>
              <Link to={'/#contact'} className="text-[#191919]/70 hover:text-[#191919]">
                {ui.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm text-[#191919]/60 space-y-2">
          <p>
            {ui.contact.phone}:{' '}
            <a href={company.phoneHref} className="text-[#191919] hover:underline underline-offset-4">
              {company.phoneDisplay}
            </a>
          </p>
          <p>
            {ui.contact.whatsapp}:{' '}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191919] hover:underline underline-offset-4"
            >
              {company.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <p className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-5 text-xs text-[#191919]/50">
          © {new Date().getFullYear()} {company.legalName}. {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
}
