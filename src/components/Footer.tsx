import { company } from '../company';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="whitespace-nowrap font-semibold text-base tracking-tight text-[#191919]">
              {company.shortName}
            </span>
          </div>
          <p className="mt-3 text-sm text-[#191919]/60 leading-relaxed">
            {company.legalName}
            <br />
            {company.addressLines.join(', ')}
          </p>
        </div>
        <div className="text-sm text-[#191919]/60 md:text-right">
          <a href={company.phoneHref} className="text-[#191919] hover:underline underline-offset-4">
            {company.phoneDisplay}
          </a>
          <p className="mt-1">
            © {new Date().getFullYear()} {company.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
