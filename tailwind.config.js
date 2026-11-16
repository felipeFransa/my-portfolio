/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          grenat: '#BE123C',      // Vermelho-grená / carmim oficial
          rose: '#E11D48',        // Rosa carmim vivo
          roseSoft: '#FB7185',
          navy: '#0A192F',        // Fundo escuro oficial
          navyCard: '#172A45',    // Card escuro oficial
          royal: '#1D4ED8',       // Azul royal escuro
          royalSoft: '#3B82F6',   // Azul royal vivo
          cyan: '#0284C7',        // Azul tech claro
          cyanSoft: '#59B2CD',
          lightBg: '#F8FAFC',     // Fundo claro oficial
          lightBorder: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '25d-light': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 25px -5px rgba(190, 18, 60, 0.06)',
        '25d-dark': '0 20px 45px -15px rgba(0, 0, 0, 0.6), 0 0 30px -5px rgba(59, 130, 246, 0.15)',
        'glow-grenat': '0 0 20px rgba(190, 18, 60, 0.35)',
        'glow-royal': '0 0 20px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
