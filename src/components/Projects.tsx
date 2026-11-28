import { projects } from '../company';
import { ui } from '../i18n';
import { useLang } from '../router';

export default function Projects() {
  const lang = useLang();
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 md:scroll-mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-14 sm:py-20 md:py-28">
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">{ui.projects.eyebrow[lang]}</p>
            <h2
              id="projects-title"
              className="mt-3 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]"
            >
              {ui.projects.title[lang]}
            </h2>
          </div>
          <p className="self-end text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">{ui.projects.lead[lang]}</p>
        </div>

        <ol className="mt-8 sm:mt-10 md:mt-14 border-t border-gray-200">
          {projects.map((project, i) => (
            <li
              key={project.name.en}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 sm:gap-x-6 gap-y-1 border-b border-gray-200 py-6 md:py-8 sm:grid-cols-[3rem_1fr_auto]"
            >
              <span className="text-sm text-[#191919]/40 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#191919]">
                  <bdi lang="en">{project.name[lang]}</bdi>
                </h3>
                <p className="mt-1 text-sm text-[#191919]/60">{project.location[lang]}</p>
              </div>
              <span className="col-start-2 sm:col-start-auto mt-3 sm:mt-0 justify-self-start sm:justify-self-end bg-[#F4F3F3] px-3 py-1.5 text-xs font-medium text-[#191919]/80">
                {project.scope[lang]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
