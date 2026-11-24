import Navbar from './components/Navbar';
import BoomerangVideoBg from './components/BoomerangVideoBg';
import Projects from './components/Projects';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative flex flex-col items-center overflow-hidden min-h-svh">
          <BoomerangVideoBg />

          <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-26 md:pt-32 px-4 sm:px-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
              <span>Building materials supplier</span>
              <span className="hidden min-[390px]:inline"> · </span>
              <span className="block min-[390px]:inline">Abu Dhabi</span>
            </p>
            <h1 className="mt-4 sm:mt-5 font-serif text-[clamp(2.25rem,11vw,3rem)] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-[#191919] font-normal">
              Quality materials,
              <br />
              delivered on time.
            </h1>
            <p className="max-w-sm sm:max-w-md mt-5 sm:mt-6 md:mt-8 text-sm md:text-base text-[#191919]/70 leading-relaxed">
              Building materials, consumables, hardware, hand tools and safety equipment —
              supplied from Musaffah to construction sites across Abu Dhabi.
            </p>
            <a
              href="#contact"
              className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
            >
              Request a Quotation
            </a>
          </div>
        </section>

        <Projects />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
