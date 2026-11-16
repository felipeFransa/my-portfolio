export const MyProjects = () => {
  const PROJECTS = [
    {
      title: 'Elo Recibos',
      badge: 'PRODUTO EM PRODUÇÃO',
      badgeColor: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
      description:
        'Aplicativo completo de gestão de cobranças comunitárias, controle financeiro de setores, emissão de recibos e integração nativa com mini impressoras térmicas via Bluetooth (ESC/POS).',
      tags: ['Flutter', 'Dart', 'Firebase', 'CoreBluetooth', 'ESC/POS', 'Multi-Flavor'],
      isFeatured: true,
      actions: [
        {
          label: 'Ver no Google Play',
          url: 'https://play.google.com/store/apps/details?id=br.com.elo.manager',
          isPrimary: true,
          icon: 'play',
        },
        {
          label: 'Ver na App Store',
          url: 'https://apps.apple.com/br/app/elo-recibos/id6761785683?l=en-GB',
          isPrimary: false,
          icon: 'apple',
        },
      ],
    },
    {
      title: 'DriverForza',
      badge: 'WEB APP INTERATIVO',
      badgeColor: 'border-[#0284C7]/30 text-[#0284C7] dark:text-[#38BDF8] bg-[#0284C7]/10',
      description:
        'Aplicação web com foco em simulação, catálogo e interatividade para entusiastas do universo automotivo e automobilismo esportivo.',
      tags: ['React', 'JavaScript', 'CSS Modules', 'Web'],
      isFeatured: false,
      actions: [
        {
          label: 'Acessar Aplicação',
          url: 'https://site-versao-um.vercel.app/',
          isPrimary: true,
          icon: 'external',
        },
      ],
    },
    {
      title: 'Calculadora de IMC',
      badge: 'UTILITÁRIO FRONTEND',
      badgeColor: 'border-slate-400/30 text-slate-600 dark:text-slate-300 bg-slate-500/10',
      description:
        'Calculadora de Índice de Massa Corporal focada em UX rápida, feedback visual dinâmico, classificação de saúde e design responsivo.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      isFeatured: false,
      actions: [
        {
          label: 'Acessar Calculadora',
          url: 'https://app-calc-imc.vercel.app/',
          isPrimary: false,
          icon: 'external',
        },
      ],
    },
  ];

  return (
    <section id="projetos" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-[#BE123C] dark:text-[#FB7185] uppercase mb-1">
              Casos Reais & Portfólio
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projetos Desenvolvidos
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 max-w-md">
            Aplicações em produção e projetos web interativos com destinos reais e verificáveis.
          </p>
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PROJECTS.map((project, idx) => {
            const isFeatured = project.isFeatured;
            return (
              <div
                key={idx}
                className={`${
                  isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
                } p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 shadow-25d-light dark:shadow-25d-dark card-25d flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Destaque lateral 2.5D */}
                <div
                  className={`absolute top-0 left-0 w-2 h-full ${
                    isFeatured
                      ? 'bg-gradient-to-b from-[#BE123C] via-[#E11D48] to-[#0284C7]'
                      : 'bg-[#BE123C]'
                  }`}
                />

                <div>
                  {/* Topo do Card */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pl-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    {isFeatured && (
                      <span className="text-xs font-mono font-semibold text-[#BE123C] dark:text-[#FB7185]">
                        ★ Destaque Mobile
                      </span>
                    )}
                  </div>

                  {/* Título & Descrição */}
                  <div className="pl-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pl-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-[#0A192F] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação com Destinos Reais */}
                <div className="flex flex-wrap items-center gap-3 pl-2 pt-4 border-t border-slate-100 dark:border-white/5">
                  {project.actions.map((act, aIdx) => (
                    <a
                      key={aIdx}
                      href={act.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        act.isPrimary
                          ? 'bg-[#BE123C] hover:bg-[#9F0E31] text-white shadow-md shadow-[#BE123C]/20 hover:shadow-lg'
                          : 'bg-slate-100 dark:bg-[#0A192F] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#0E223F] border border-slate-200 dark:border-white/10'
                      }`}
                    >
                      {act.icon === 'play' && (
                        <svg className="w-4 h-4 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.444 1.444 0 0 1-.365-.968V2.782c0-.376.134-.72.364-.968zm11.396 11.397l2.872 2.871-12.78 7.378 9.908-10.25zm0-2.422L5.097 0.54l12.78 7.38-2.872 2.87zM16.21 12l4.82-2.783a1.445 1.445 0 0 1 0 2.566L16.21 12z"/>
                        </svg>
                      )}
                      {act.icon === 'apple' && (
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.97 1.73-.83 2.76 1.01.08 2.02-.51 2.54-1.26z"/>
                        </svg>
                      )}
                      {act.icon === 'external' && (
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                      {act.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
