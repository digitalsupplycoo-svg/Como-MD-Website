import { company, projects } from '../company';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">Projects</p>
            <h2
              id="projects-title"
              className="mt-3 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]"
            >
              Projects we supply
            </h2>
          </div>
          <p className="self-end text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
            {company.supplies}, delivered to construction projects across Abu Dhabi.
          </p>
        </div>

        <ol className="mt-10 md:mt-14 border-t border-gray-200">
          {projects.map((project, i) => (
            <li
              key={project.name}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 sm:gap-x-6 gap-y-1 border-b border-gray-200 py-6 md:py-8 sm:grid-cols-[3rem_1fr_auto]"
            >
              <span className="text-sm text-[#191919]/40 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#191919]">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-[#191919]/60">{project.location}</p>
              </div>
              <span className="col-start-2 sm:col-start-auto mt-3 sm:mt-0 justify-self-start sm:justify-self-end bg-[#F4F3F3] px-3 py-1.5 text-xs font-medium text-[#191919]/80">
                {project.scope}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
