import { useState } from "react";

export const ProjectsPageHHero = () => {
  const [filter, setFilter] = useState("Tüm Projeler");

  const categories = [
    { name: "Tüm Projeler", value: "Tüm Projeler" },
    { name: "Yazılım Geliştirme", value: "Yazılım" },
    { name: "Tasarım & Yazılım", value: "Tasarım & Yazılım" },
    { name: "Açık Kaynak", value: "Açık Kaynak" },
  ];

  const projects = [
    {
      title: "Nakliyat",
      category: "Yazılım",
      desc: "Gelişmiş taşıma ve lojistik yönetim platformu. Müşteri, araç ve sipariş takibi imkanı sunan kapsamlı bir sistem.",
      tags: ["TypeScript", "Frontend", "Backend"],
      links: ["https://github.com/C17H19NO3-SS/nakliyat"],
    },
    {
      title: "Ajans",
      category: "Tasarım & Yazılım",
      desc: "Kapsamlı bir dijital ajans yönetim platformu çalışması. Modern arayüzlerle güçlendirilmiş entegre operasyon sistemi.",
      tags: ["TypeScript", "Fullstack", "UI/UX"],
      links: ["https://github.com/C17H19NO3-SS/ajans"],
    },
    {
      title: "Express Webserver Base",
      category: "Açık Kaynak",
      desc: "Modern Node.js ve TypeScript tabanlı projeler için hazırlanmış kullanıma hazır, ölçeklenebilir Express web sunucusu başlangıç şablonu.",
      tags: ["Node.js", "Express", "TypeScript"],
      links: ["https://github.com/C17H19NO3-SS/express-webserver-base"],
    },
    {
      title: "Cote Extended (cote-ext)",
      category: "Açık Kaynak",
      desc: "Nesne Yönelimli Programlama (OOP) tabanlı mikroservis projeleri için Cote.js kütüphanesi üzerine geliştirilmiş gelişmiş bir modül.",
      tags: ["Microservices", "OOP", "Node.js"],
      links: ["https://github.com/C17H19NO3-SS/cote-ext"],
    },
    {
      title: "JSON DB",
      category: "Açık Kaynak",
      desc: "Küçük ve orta ölçekli projeler için hızlı, hafif ve kullanışlı bir yerel JSON veritabanı yönetim paketi.",
      tags: ["Database", "JSON", "NPM"],
      links: ["https://github.com/C17H19NO3-SS/jsondb"],
    },
    {
      title: "Discord Bot Altyapısı",
      category: "Yazılım",
      desc: "Gelişmiş ve yüksek performanslı bir yapıya sahip, TypeScript tabanlı modüler Discord sunucu görevlisi bot temeli.",
      tags: ["Discord.js", "TypeScript", "Bot"],
      links: ["https://github.com/C17H19NO3-SS/discord-bot"],
    },
  ];

  const filteredProjects =
    filter === "Tüm Projeler"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="w-full transition-all duration-300 py-12 lg:py-16 relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Seçilmiş <span className="text-indigo-400">Çalışmalar</span>.
          </h2>
          <p className="text-zinc-400 text-lg lg:text-xl">
            Mimari yeteneklerimizi ve dijital ürün tasarımlarımızı
            sergilediğimiz özel projelerim.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm transition-all shadow-sm border ${
                filter === cat.value
                  ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  : "bg-zinc-800/50 text-zinc-300 border-zinc-700/50 hover:scale-105 hover:border-zinc-500"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 shadow-sm hover:shadow-md rounded-3xl overflow-hidden group flex flex-col transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="w-full aspect-video rounded-2xl bg-zinc-800/50 opacity-100 flex items-center justify-center overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-linear-to-tr from-zinc-800 via-transparent to-transparent opacity-20"></div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-30 text-zinc-500"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border ${
                    project.category === "Yazılım"
                      ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                      : "bg-zinc-800/80 text-zinc-300 border-zinc-700"
                  }`}
                >
                  {project.category}
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity mt-1 text-zinc-400">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link}
                        className="hover:text-indigo-400"
                      >
                        {lIdx === 0 ? (
                          <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mb-6 flex-1 text-sm sm:text-base leading-relaxed text-zinc-400">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto text-zinc-300">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium uppercase tracking-wider opacity-80 bg-zinc-800/50 px-2 py-1 rounded-md border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
