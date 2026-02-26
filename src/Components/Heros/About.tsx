export const AboutPageHero = () => (
  <section className="w-full transition-all duration-300 py-12 lg:py-16 relative z-0">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 w-full">
          <div className="w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden relative shadow-2xl border border-zinc-800">
            <img
              src="https://avatars.githubusercontent.com/u/93030513?v=4"
              alt="C17H19NO3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-zinc-900/60 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-indigo-400"></span> HAKKIMDA
          </div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Geleceği inşa ediyoruz,{" "}
            <span className="text-indigo-400 italic">birlikte.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            Yazılım geliştirme serüvenim, karmaşık problemleri zarif çözümlerle
            buluşturma tutkusuyla başladı. Modern web teknolojileri, temiz
            mimari ve kullanıcı deneyimine odaklanan bir Fullstack
            Geliştiriciyim.
          </p>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed opacity-80">
            Tasarımın sadece sanat değil, mühendislikle iç içe olması
            gerektiğine inanıyorum. Estetik zarafeti sağlam ve sürdürülebilir
            bir mimari ile birleştirerek yalnızca çalışan değil, aynı zamanda
            ilham veren ürünler geliştiriyorum.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 hover:scale-105 transition-transform duration-300">
              <a
                href="https://github.com/c17h19no3-ss"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-indigo-500/30">
                  <img
                    src="https://avatars.githubusercontent.com/u/93030513?v=4"
                    alt="C17H19NO3 Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/c17h19no3-ss"
                target="_blank"
                rel="noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="font-bold text-2xl text-white">C17H19NO3</div>
              </a>
              <div className="text-sm font-semibold tracking-wide uppercase opacity-70 text-indigo-400/80">
                Fullstack JavaScript Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border border-zinc-800 text-center">
        <div>
          <div className="text-indigo-400 text-4xl sm:text-5xl font-black mb-2">
            3+
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70 text-zinc-400">
            Yıl Deneyim
          </div>
        </div>
        <div>
          <div className="text-indigo-400 text-4xl sm:text-5xl font-black mb-2">
            10
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70 text-zinc-400">
            Açık Kaynak Proje
          </div>
        </div>
        <div>
          <div className="text-indigo-400 text-4xl sm:text-5xl font-black mb-2">
            Modern
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70 text-zinc-400">
            Teknoloji Yığını
          </div>
        </div>
        <div>
          <div className="text-indigo-400 text-4xl sm:text-5xl font-black mb-2">
            %100
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider opacity-70 text-zinc-400">
            Motivasyon
          </div>
        </div>
      </div>
    </div>
  </section>
);
