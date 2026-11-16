export const Footer = () => {
  const SOCIALS = [
    {
      name: 'E-mail Profissional',
      handle: 'antoniofelipesilva@live.com',
      url: 'mailto:antoniofelipesilva@live.com',
      svg: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: '@felipeFransa',
      url: 'https://github.com/felipeFransa',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@felipefransa_',
      url: 'https://instagram.com/felipefransa_',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer id="contato" className="py-12 sm:py-16 border-t border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#0A192F]/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Coluna 1: Apresentação & Status */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BE123C]" />
                <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Disponibilidade
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Vamos construir algo juntos?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                Aberto a novos desafios em desenvolvimento de software, aplicações móveis com Flutter e soluções assistidas por IA.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Engenharia de Software — Formando em 2026
              </span>
            </div>
          </div>

          {/* Coluna 2: Redes Oficiais */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-3">
                Canais Oficiais
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIALS.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#172A45] border border-slate-200 dark:border-white/10 hover:border-[#BE123C] dark:hover:border-[#3B82F6] transition-all hover:scale-[1.02] group"
                  >
                    <div className="text-slate-600 dark:text-slate-300 group-hover:text-[#BE123C] dark:group-hover:text-[#38BDF8] transition-colors">
                      {s.svg}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {s.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {s.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Felipe França. Todos os direitos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
