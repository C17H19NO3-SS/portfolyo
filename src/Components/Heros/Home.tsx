export const HomePageHero = () => (
  <section className="w-full transition-all duration-300 min-h-screen flex items-center py-20 relative z-0 overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)]"></div>

    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Availability Status */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm mb-8 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        Projeler için müsait
      </div>

      <h1 className="text-white text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
        Merhaba, Ben{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-600">
          SynchJS
        </span>
        <br />
        Full Stack Geliştirici
      </h1>

      <p className="text-zinc-400 text-lg sm:text-xl mb-16 max-w-2xl leading-relaxed">
        Erişilebilir, yüksek performanslı web uygulamaları ve sistem mimarileri
        geliştiriyorum. Karmaşık problemleri zarif dijital deneyimlere
        dönüştürüyorum.
      </p>

      {/* Tech Stack */}
      <div className="pt-8 border-t border-zinc-800/80 w-full flex flex-col items-center">
        <p className="text-sm text-zinc-500 mb-6 font-medium uppercase tracking-widest">
          Kullandığım Teknolojiler
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 opacity-80">
          {["React", "TypeScript", "Tailwind", "Node.js", "Next.js"].map(
            (tech) => (
              <span
                key={tech}
                className="text-zinc-300 font-semibold px-4 py-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-700/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  </section>
);
