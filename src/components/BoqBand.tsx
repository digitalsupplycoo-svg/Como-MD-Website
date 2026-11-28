import { FileSpreadsheet } from 'lucide-react';
import { whatsappLink } from '../company';
import { ui } from '../copy';

/** Bottom call to action on every page: send a full BOQ for pricing. */
export default function BoqBand() {
  return (
    <section aria-labelledby="boq-title" className="bg-[#191919] text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-12 md:py-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
        <div>
          <h2 id="boq-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight">
            {ui.boq.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-[15px] text-white/70 leading-relaxed">{ui.boq.lead}</p>
        </div>
        <a
          href={whatsappLink(ui.boq.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#191919] hover:bg-white/90 transition-colors duration-200"
        >
          <FileSpreadsheet aria-hidden="true" className="h-4 w-4" />
          {ui.boq.button}
        </a>
      </div>
    </section>
  );
}
