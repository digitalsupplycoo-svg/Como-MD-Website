import { ui } from '../copy';
import { Link } from '../router';

export default function NotFound() {
  const n = ui.notFound;
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center px-6 sm:px-10 md:px-14 pt-28 pb-16">
      <p className="text-sm text-[#191919]/65 tabular-nums">404</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#191919]">{n.title}</h1>
      <p className="mt-4 text-[#191919]/70">{n.text}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to={'/'} className="rounded-lg bg-[#191919] px-6 py-3 text-center text-sm font-medium text-white">
          {n.back}
        </Link>
        <Link
          to={'/building-materials'}
          className="rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-medium text-[#191919]"
        >
          {n.materials}
        </Link>
      </div>
    </section>
  );
}
