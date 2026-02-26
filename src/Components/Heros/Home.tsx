export const HomePageHero = () => (
  <section className="w-full transition-all duration-300 min-h-screen flex items-center py-20 relative z-0 overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)]"></div>

    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Availability Status */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm mb-8 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        Available for new projects
      </div>

      <h1 className="text-white text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-600">
          SynchJS
        </span>
        <br />
        Full Stack Developer
      </h1>

      <p className="text-zinc-400 text-lg sm:text-xl mb-12 max-w-2xl leading-relaxed">
        I build accessible, high-performance web applications and design
        systems. Transforming complex problems into elegant digital experiences.
      </p>

      <div className="flex justify-center w-full mb-16">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="btn-primary-group inline-flex w-full sm:w-auto">
            <button className="px-8! py-4! text-lg w-full flex items-center justify-center gap-2">
              View Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <button className="bg-zinc-800/50 text-white border border-zinc-700 hover:bg-zinc-700/80 hover:border-zinc-500 px-8 py-4 rounded-br-2xl rounded-tl-xl font-bold text-lg shadow-sm transition-all active:scale-95 w-full sm:w-auto backdrop-blur-sm">
            Contact Me
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="pt-8 border-t border-zinc-800/80 w-full flex flex-col items-center">
        <p className="text-sm text-zinc-500 mb-6 font-medium uppercase tracking-widest">
          Technologies I work with
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
