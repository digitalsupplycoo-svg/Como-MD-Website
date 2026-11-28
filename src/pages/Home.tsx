import BoomerangVideoBg from '../components/BoomerangVideoBg';
import Location from '../components/Location';
import Projects from '../components/Projects';
import { localePath, ui } from '../i18n';
import { Link, useLang } from '../router';

export default function Home() {
  const lang = useLang();
  const h = ui.home;
  return (
    <>
      <section className="relative flex flex-col items-center overflow-hidden min-h-svh">
        <BoomerangVideoBg />

        <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-26 md:pt-32 px-4 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            <span>{h.eyebrowA[lang]}</span>
            <span className="hidden min-[390px]:inline"> · </span>
            <span className="block min-[390px]:inline">{h.eyebrowB[lang]}</span>
          </p>
          <h1 className="mt-4 sm:mt-5 font-serif text-[clamp(2.25rem,11vw,3rem)] sm:text-5xl md:text-7xl lg:text-8xl rtl:md:text-6xl rtl:lg:text-7xl leading-[1.1] tracking-tighter text-[#191919] font-normal">
            {h.titleA[lang]}
            <br />
            {h.titleB[lang]}
          </h1>
          <p className="max-w-sm sm:max-w-md mt-5 sm:mt-6 md:mt-8 text-sm md:text-base text-[#191919]/70 leading-relaxed">
            {h.lead[lang]}
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
            >
              {h.cta[lang]}
            </a>
            <Link
              to={localePath('/building-materials', lang)}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/80 backdrop-blur-sm border border-gray-300 text-[#191919] text-sm font-medium rounded-lg hover:bg-white transition-colors duration-200"
            >
              {h.materialsLink[lang]}
            </Link>
          </div>
        </div>
      </section>

      <Projects />
      <Location />
    </>
  );
}
