import Image from 'next/image';
import avatarImg from '@/assets/felipe-profile.jpg';
import { SplitText } from './SplitText';

export const Thumbnail = () => {
  return (
    <section id="sobre" className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 overflow-clip w-full max-w-full">
      {/* Orbs de profundidade 2.5D com limites rígidos */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full orb-light-1 dark:orb-dark-1 pointer-events-none blur-3xl opacity-70" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full orb-light-2 dark:orb-dark-2 pointer-events-none blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Texto / Apresentação */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Badge de Formação Oficial */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#172A45] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 w-fit mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#BE123C] animate-pulse" />
              <span>Engenharia de Software — conclusão prevista em 2026</span>
            </div>

            {/* Headline com SplitText do React Bits */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Construindo interfaces fluidas com{' '}
              <SplitText
                text="código de precisão"
                highlightWords={['código', 'de', 'precisão']}
                highlightClassName="bg-gradient-to-r from-[#BE123C] via-[#E11D48] to-[#0284C7] dark:to-[#3B82F6] bg-clip-text text-transparent font-black"
                delayMs={40}
              />{' '}
              e inteligência artificial.
            </h1>

            {/* Texto de Apoio / Fatos Reais */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Desenvolvedor focado em ecossistemas modernos — de aplicações móveis robustas com{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Flutter & Dart</strong> a interfaces web de alto desempenho em{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">React & Next.js</strong>, integrando fluxos autônomos com{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Agentes de IA</strong> e backend em{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Firebase</strong>.
            </p>

            {/* CTAs Principais com classes do Taste Skill */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projetos"
                className="taste-button inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#BE123C] hover:bg-[#9F0E31] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#BE123C]/25 hover:shadow-xl hover:shadow-[#BE123C]/35 focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
              >
                Explorar Projetos em Destaque
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="https://github.com/felipeFransa"
                target="_blank"
                rel="noopener noreferrer"
                className="taste-button inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub Oficial
              </a>
            </div>
          </div>

          {/* Coluna Avatar & Card 2.5D */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              <div className="relative p-3 rounded-3xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 shadow-25d-light dark:shadow-25d-dark taste-card">
                {/* Chanfro de cor característico da identidade */}
                <div className="absolute top-6 bottom-6 -left-1.5 w-1.5 rounded-r bg-gradient-to-b from-[#BE123C] to-[#0284C7] dark:to-[#3B82F6]" />
                
                {/* Imagem do Perfil Otimizada com enquadramento perfeito */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#0A192F]">
                  <Image
                    src={avatarImg}
                    alt="Foto de perfil profissional de Felipe França"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Bloco de Informação Rápida */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Felipe França</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineer In-the-making</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ativo
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
