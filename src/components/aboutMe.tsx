import Image from 'next/image';
import iconHtml from '@/assets/html.png';
import iconCss from '@/assets/css.png';
import iconJs from '@/assets/javascript.png';
import iconTs from '@/assets/typescript.png';
import iconNode from '@/assets/node.png';

interface SkillGroup {
  category: string;
  badge: string;
  badgeColor: string;
  skills: {
    name: string;
    description: string;
    icon?: any;
    svgIcon?: string;
  }[];
}

export const About = () => {
  const SKILL_GROUPS: SkillGroup[] = [
    {
      category: 'Mobile & Multiplataforma',
      badge: 'PRODUÇÃO',
      badgeColor: 'border-[#BE123C]/30 text-[#BE123C] bg-[#BE123C]/5',
      skills: [
        {
          name: 'Flutter',
          description: 'Desenvolvimento cross-platform, arquitetura reativa, animações e integração com hardware nativo (Bluetooth térmico).',
          svgIcon: 'flutter',
        },
        {
          name: 'Dart',
          description: 'Lógica orientada a objetos, streams, isolamento de threads e persistência local com Isar.',
          svgIcon: 'dart',
        },
      ],
    },
    {
      category: 'Inteligência Artificial & Agentes',
      badge: 'FLUXOS MODERNOS',
      badgeColor: 'border-[#0284C7]/30 text-[#0284C7] dark:text-[#38BDF8] bg-[#0284C7]/5',
      skills: [
        {
          name: 'Agentes de IA',
          description: 'Orquestração multiagente, engenharia de contexto, automação de tarefas e interfaces guiadas por IA.',
          svgIcon: 'bot',
        },
        {
          name: 'Inteligência Artificial',
          description: 'Integração de LLMs (Claude, GPT, Gemini), structured outputs, processamento de linguagem e automações.',
          svgIcon: 'sparkles',
        },
      ],
    },
    {
      category: 'Frontend Web & Design Systems',
      badge: 'EXPERIÊNCIA UI',
      badgeColor: 'border-slate-400/30 text-slate-700 dark:text-slate-300 bg-slate-500/5',
      skills: [
        {
          name: 'TypeScript',
          description: 'Tipagem estrita, interfaces modulares e prevenção de regressões em larga escala.',
          icon: iconTs,
        },
        {
          name: 'React & Next.js',
          description: 'Aplicações web modernas com SSR, App Router, estados globais e otimização de bundle.',
          svgIcon: 'react',
        },
        {
          name: 'Tailwind CSS',
          description: 'Design systems, microinterações, tokens HSL/RGB, modo escuro e responsividade fluida.',
          icon: iconCss,
        },
        {
          name: 'JavaScript (ES6+)',
          description: 'Manipulação assíncrona, DOM, eventos e APIs web modernas.',
          icon: iconJs,
        },
        {
          name: 'HTML5 Semântico',
          description: 'Estruturação acessível (a11y), SEO técnico e hierarquia clara de documentos.',
          icon: iconHtml,
        },
      ],
    },
    {
      category: 'Backend & Cloud Services',
      badge: 'INFRAESTRUTURA',
      badgeColor: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5',
      skills: [
        {
          name: 'Firebase',
          description: 'Firestore, Cloud Storage, Authentication, Cloud Functions e regras de segurança granulares.',
          svgIcon: 'firebase',
        },
        {
          name: 'Node.js',
          description: 'Criação de scripts, microsserviços, automações de build e manipulação de arquivos.',
          icon: iconNode,
        },
      ],
    },
    {
      category: 'Sistemas Operacionais & Ambientes',
      badge: 'MULTIPLATAFORMA',
      badgeColor: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5',
      skills: [
        {
          name: 'Linux',
          description: 'Desenvolvimento em distribuições Linux, terminal bash/zsh, scripts e gerenciamento de processos.',
          svgIcon: 'terminal',
        },
        {
          name: 'macOS',
          description: 'Ambiente Unix de desenvolvimento, ferramentas Apple SDK, compilação de apps e CLI.',
          svgIcon: 'apple',
        },
        {
          name: 'Windows',
          description: 'Ambiente de desenvolvimento e testes de aplicações multiplataforma, PowerShell e subsistemas.',
          svgIcon: 'desktop',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-[#BE123C] dark:text-[#FB7185] uppercase mb-1">
              Capacidades Técnicas
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Competências & Tecnologias
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 max-w-md">
            Stack direcionada à criação de produtos completos — do aplicativo nativo à arquitetura web e integração de IA.
          </p>
        </div>

        {/* Grade de Grupos de Competências */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 rounded-2xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 shadow-25d-light dark:shadow-25d-dark card-25d flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Grupo */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${group.badgeColor}`}>
                    {group.badge}
                  </span>
                </div>

                {/* Lista de Tecnologias */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3.5 group/item">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#0A192F] border border-slate-200/80 dark:border-white/10 flex items-center justify-center shrink-0 p-2 shadow-inner group-hover/item:border-[#BE123C]/50 transition-colors">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-5 h-5 flex items-center justify-center text-[#BE123C] dark:text-[#38BDF8]">
                            {/* Renderização de ícones SVG vetorizados */}
                            {skill.svgIcon === 'flutter' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM6.01 15.706L2.3 19.417 6 23.12h7.377l-3.69-3.71 3.69-3.704H6.01z"/>
                              </svg>
                            )}
                            {skill.svgIcon === 'dart' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.1 12l5.2-9h9.4L4.1 12zm0 0l9.4 9h5.2l-5.2-9H4.1z" />
                              </svg>
                            )}
                            {skill.svgIcon === 'bot' && (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="10" rx="2" />
                                <circle cx="12" cy="5" r="2" />
                                <path d="M12 7v4M8 16h.01M16 16h.01" />
                              </svg>
                            )}
                            {skill.svgIcon === 'sparkles' && (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                            )}
                            {skill.svgIcon === 'react' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
                                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
                                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
                                <circle cx="12" cy="12" r="1.5" />
                              </svg>
                            )}
                            {skill.svgIcon === 'firebase' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.89 15.672L6.255.461a.542.542 0 0 1 1.02-.14l2.585 4.887zm16.486 2.052L18.42 5.48a.543.543 0 0 0-.964-.176l-8.8 16.467 9.878-5.568a1.64 1.64 0 0 0 .842-1.481zM11.666 8.356L9.04 3.398a.542.542 0 0 0-.962-.038L3.65 18.067z" />
                              </svg>
                            )}
                            {skill.svgIcon === 'terminal' && (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <polyline points="4 17 10 11 4 5" />
                                <line x1="12" y1="19" x2="20" y2="19" />
                              </svg>
                            )}
                            {skill.svgIcon === 'apple' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.97 1.73-.83 2.76 1.01.08 2.02-.51 2.54-1.26z"/>
                              </svg>
                            )}
                            {skill.svgIcon === 'desktop' && (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover/item:text-[#BE123C] dark:group-hover/item:text-[#38BDF8] transition-colors">
                          {skill.name}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
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
