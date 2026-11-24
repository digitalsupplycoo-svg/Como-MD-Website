import { ArrowRight } from 'lucide-react';
import { company } from '../company';

export default function Location() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-gray-200 bg-[#F4F3F3]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Location</p>
        <h2
          id="contact-title"
          className="mt-3 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]"
        >
          Visit our store in Musaffah
        </h2>

        <div className="mt-10 md:mt-14 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col bg-white border border-gray-200 p-6 sm:p-8">
            <dl className="divide-y divide-gray-200 text-sm text-[#191919]">
              <div className="pb-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Company</dt>
                <dd className="mt-2 font-medium">{company.legalName}</dd>
                <dd className="text-[#191919]/60">{company.category}</dd>
              </div>

              <div className="py-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Address</dt>
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

              <div className="py-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Phone</dt>
                <dd className="mt-2">
                  <a
                    href={company.phoneHref}
                    className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-[#191919] transition-colors duration-200"
                  >
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div className="pt-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Opening hours</dt>
                <dd className="mt-2">
                  <table className="w-full">
                    <tbody>
                      {company.hours.map((row) => (
                        <tr key={row.days}>
                          <th scope="row" className="py-1 pr-4 text-left font-normal text-[#191919]/70">
                            {row.days}
                          </th>
                          <td className="py-1 text-right tabular-nums">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 lg:mt-auto lg:pt-8">
              <a
                href={company.phoneHref}
                className="flex-1 text-center px-5 py-3 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
              >
                Call us
              </a>
              <a
                href={company.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-2 px-5 py-3 border border-gray-300 text-[#191919] text-sm font-medium rounded-lg hover:bg-[#F4F3F3] transition-colors duration-200"
              >
                Get directions
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-gray-700 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0 border border-gray-200 bg-white">
            <iframe
              title={`Map showing ${company.legalName} in Musaffah, Abu Dhabi`}
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
