'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * Validação segura de tema a partir do localStorage sem type cast cego.
 * Retorna null se não houver preferência válida ou se o storage estiver bloqueado.
 */
function getStoredTheme(): Theme | null {
  try {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (value === 'light' || value === 'dark') {
      return value;
    }
    return null;
  } catch {
    // Storage inacessível (ex: navegação privada ou bloqueio de cookies)
    return null;
  }
}

/**
 * Gravação protegida do tema no localStorage.
 */
function setStoredTheme(theme: Theme): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  } catch {
    // Falha silenciosa se storage estiver indisponível
  }
}

/**
 * Aplica a classe 'dark' no elemento raiz html.
 */
function applyThemeToDocument(theme: Theme): void {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();

    if (stored) {
      // Preferência explícita definida pelo usuário: não precisa de listener do SO
      setTheme(stored);
      applyThemeToDocument(stored);
      setMounted(true);
    } else {
      // Sem preferência salva: seguir preferência do sistema operacional
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const initialTheme: Theme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(initialTheme);
      applyThemeToDocument(initialTheme);
      setMounted(true);

      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        // Apenas atualiza se o usuário ainda não tiver definido uma escolha explícita
        if (!getStoredTheme()) {
          const newTheme: Theme = e.matches ? 'dark' : 'light';
          setTheme(newTheme);
          applyThemeToDocument(newTheme);
        }
      };

      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else {
        // Fallback para navegadores legados
        mediaQuery.addListener(handleSystemThemeChange);
      }

      return () => {
        if (typeof mediaQuery.removeEventListener === 'function') {
          mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
          mediaQuery.removeListener(handleSystemThemeChange);
        }
      };
    }
  }, []);

  // Sincronização entre abas abertas simultaneamente
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
        applyThemeToDocument(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    setStoredTheme(nextTheme);
    applyThemeToDocument(nextTheme);
  };

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 animate-pulse"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-[#172A45] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
    >
      {/* Icon Swap Recipe (transitions.dev) */}
      <div className="t-icon-swap w-5 h-5" data-state={theme}>
        {/* Ícone Sol */}
        <span className="t-icon" data-icon="sun" aria-hidden="true">
          <svg
            className="w-5 h-5 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>

        {/* Ícone Lua */}
        <span className="t-icon" data-icon="moon" aria-hidden="true">
          <svg
            className="w-5 h-5 text-[#0A192F] dark:text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      </div>
    </button>
  );
};
