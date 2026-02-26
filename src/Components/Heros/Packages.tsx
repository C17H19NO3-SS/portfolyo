export const PackagesPageHero = () => {
  const modules = [
    {
      name: "@synchjs/ewb",
      version: "v1.0.29",
      desc: "Express Web Server Base - Entegre Swagger, CORS, Rate Limit, JWT ve Dekoratörlere sahip güçlü, tip güvenli bir Express.js taşıyıcısı.",
    },
    {
      name: "q-manager",
      version: "v1.0.12",
      desc: "İsteğe bağlı sıralı işlemleri (serial processing) ve otomatik zaman aralığını (interval) destekleyen hafif, EventEmitter tabanlı iş kuyruğu (queue) yöneticisi.",
    },
    {
      name: "@synchjs/bun-express-react",
      version: "v1.0.1",
      desc: "React uygulamalarını TailwindCSS desteği ile birlikte bellekte (in-memory) derleyip sunmak için tasarlanmış Express tabanlı Bun eklentisi.",
    },
    {
      name: "@synchjs/express-ejs-render",
      version: "v1.0.1",
      desc: "TypeScript kullanan modern projelerde EJS şablonlarını güvenle derleyebilmeniz için tam tip kodlamasına sahip (type-safe) BunJS uyumlu görüntüleme motoru.",
    },
    {
      name: "@synchjs/jsondb",
      version: "v1.0.1",
      desc: "Dot notation (nokta sözdizimi) arama özelliklerini destekleyen ve Lodash'ten güç alan basit, lokal dosya tabanlı bir JSON veritabanı çözümü.",
    },
  ];

  return (
    <section className="w-full transition-all duration-300 py-12 lg:py-16 relative z-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            NPM <span className="text-indigo-400">Modüllerim</span>.
          </h2>
          <p className="text-zinc-400 text-lg lg:text-xl">
            Geliştirdiğim açık kaynaklı kütüphaneleri favori paket yöneticinizle
            doğrudan ve güvenli bir şekilde projelerinize dahil edin.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-2 sm:p-4 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="mx-auto font-mono text-xs text-zinc-500 opacity-80 absolute left-1/2 -translate-x-1/2">
              ~/dev/projects
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-12 sm:pt-14 font-mono">
            <div className="text-indigo-400 mb-6 text-sm">
              $ npm info @synchjs/ewb
              <br />
              <span className="text-zinc-500">
                Paket üstverileri alınıyor... [TAMAMLANDI]
              </span>
            </div>

            <div className="flex flex-col">
              {modules.map((mod, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row gap-4 py-4 ${
                    idx !== 0 ? "border-t border-zinc-800/80" : ""
                  }`}
                >
                  <div className="w-8 text-zinc-600 font-mono hidden sm:block">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-emerald-400 font-bold">
                        {mod.name}
                      </span>
                      <span className="text-zinc-500 font-mono text-sm">
                        {mod.version}
                      </span>
                    </div>
                    <div className="text-zinc-400 text-sm leading-relaxed">
                      {mod.desc}
                    </div>
                  </div>
                  <div className="shrink-0 font-mono text-sm text-yellow-200/80 mt-2 sm:mt-0">
                    {">"} npm i {mod.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-fuchsia-400 animate-pulse font-bold text-lg">
                _
              </span>
              <div className="h-px bg-zinc-800 flex-1"></div>
              <a
                href="https://www.npmjs.com/~c17h19no3-ss"
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500 px-6 py-2 rounded-lg font-bold text-sm hover:bg-zinc-700 transition-colors inline-block"
              >
                NPM Profilime Git &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
