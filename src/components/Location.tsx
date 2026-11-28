import { ArrowRight } from 'lucide-react';
import { company, whatsappLink } from '../company';
import { ui } from '../copy';
import WhatsAppIcon from './WhatsAppIcon';

export default function Location() {
  const c = ui.contact;
  const dt = 'text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium';

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 md:scroll-mt-20 border-t border-gray-200 bg-[#F4F3F3]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-14 sm:py-20 md:py-28">
        <p className={dt}>{c.eyebrow}</p>
        <h2
          id="contact-title"
          className="mt-3 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]"
        >
          {c.title}
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col rounded-xl bg-white border border-gray-200 p-5 sm:p-8">
            <dl className="divide-y divide-gray-200 text-sm text-[#191919]">
              <div className="pb-5">
                <dt className={dt}>{c.company}</dt>
                <dd className="mt-2 font-medium">{company.legalName}</dd>
                <dd className="text-[#191919]/60">{company.category}</dd>
              </div>

              <div className="py-5">
                <dt className={dt}>{c.address}</dt>
                <dd className="mt-2 leading-relaxed">
                  <address className="not-italic">
                    {company.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>

              <div className="py-5 grid grid-cols-2 gap-4">
                <div>
                  <dt className={dt}>{c.phone}</dt>
                  <dd className="mt-2">
                    <a
                      href={company.phoneHref}
                      className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-[#191919] transition-colors duration-200"
                    >
                      {company.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className={dt}>{c.whatsapp}</dt>
                  <dd className="mt-2">
                    <a
                      href={whatsappLink(ui.whatsapp.hello)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-[#191919] transition-colors duration-200"
                    >
                      {company.whatsappDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="pt-5">
                <dt className={dt}>{c.hours}</dt>
                <dd className="mt-2">
                  <table className="w-full">
                    <tbody>
                      {company.hours.map((row) => (
                        <tr key={row.days}>
                          <th scope="row" className="py-1 pe-4 text-start font-normal text-[#191919]/70">
                            {row.days}
                          </th>
                          <td className="py-1 text-end tabular-nums whitespace-nowrap">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-auto lg:pt-8">
              <a
                href={company.phoneHref}
                className="text-center px-4 py-3 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
              >
                {c.call}
              </a>
              <a
                href={whatsappLink(ui.whatsapp.hello)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-[#0b3d1f] text-sm font-medium rounded-lg hover:bg-[#1fbe5b] transition-colors duration-200"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {c.whatsapp}
              </a>
              <a
                href={company.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-[#191919] text-sm font-medium rounded-lg hover:bg-[#F4F3F3] transition-colors duration-200"
              >
                {c.directions}
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-gray-700 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <iframe
              title={c.mapTitle}
              src={company.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
