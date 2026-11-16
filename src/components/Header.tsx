'use client';

import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const NAV_LINKS = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Competências', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  // Fechar menu com a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Fechar ao clicar fora do menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#0A192F]/90 border-b border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo / Identidade */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#BE123C] rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#BE123C] to-[#E11D48] flex items-center justify-center text-white font-black text-sm shadow-md shadow-[#BE123C]/20 group-hover:scale-105 transition-transform">
            FF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white font-['Space_Grotesk'] leading-tight">
              Felipe França
            </span>
            <span className="text-[11px] font-mono font-medium text-[#BE123C] dark:text-[#FB7185]">
              @felipefransa_
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-[#172A45]/70 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações (Alternador de Tema, CTA Desktop & Botão Hambúrguer Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-[#BE123C] hover:bg-[#9F0E31] text-white shadow-md shadow-[#BE123C]/20 hover:shadow-lg hover:shadow-[#BE123C]/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
          >
            Vamos Conversar
          </a>

          {/* Botão de Menu Mobile */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-[#BE123C] transition-all"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Painel de Navegação Mobile */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          ref={menuRef}
          aria-label="Navegação móvel"
          className="md:hidden border-t border-slate-200/80 dark:border-white/10 bg-[#F8FAFC]/95 dark:bg-[#0A192F]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-bold rounded-xl bg-[#BE123C] hover:bg-[#9F0E31] text-white shadow-md shadow-[#BE123C]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
            >
              Vamos Conversar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
