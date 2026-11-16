# Plano de Redesign Completo — Portfólio Felipe França

## 1. Identidade & Tokens Visuais
- **Referência:** Social Media English (@felipefransa_)
- **Tema Claro:**
  - Fundo base: `#F8FAFC`
  - Dot Grid: `#CBD5E1` (24px, 1.5px radius)
  - Cards 2.5D: `#FFFFFF`, bordas `#E2E8F0` com chanfro lateral `#BE123C`
  - Accent Primário (Grená/Carmim): `#BE123C` / `#E11D48`
  - Accent Secundário (Cyan/Tech Blue): `#0284C7` / `#59B2CD`
  - Tipografia: Títulos `#0F172A`, Texto `#475569`
- **Tema Escuro:**
  - Fundo base: `#0A192F` (Azul Marinho Profundo Tech)
  - Dot Grid: `#1E293B` (24px, 1.5px radius)
  - Cards 2.5D: `#172A45`, bordas `rgba(255, 255, 255, 0.1)` com chanfro lateral `#BE123C`
  - Accent Primário (Grená/Carmim): `#BE123C` / `#FB7185`
  - Accent Secundário (Azul Royal Tech): `#3B82F6` / `#1D4ED8`
  - Tipografia: Títulos `#FFFFFF`, Texto `#CBD5E1`
- **Tipografia:**
  - Display / Títulos: `Plus Jakarta Sans`
  - Monospace Técnico: `JetBrains Mono`
  - Branding / Handles: `Space Grotesk`

## 2. Conteúdo Factual & Real
- **Título Profissional:** Desenvolvedor de Software & Criador de Interfaces
- **Formação:** Engenharia de Software — conclusão prevista em 2026
- **Competências Oficiais:**
  - Mobile & Cross-platform: Flutter, Dart
  - Frontend & Web: TypeScript, JavaScript, React, Next.js, HTML5, CSS3, Tailwind CSS
  - Backend & Cloud: Node.js, Firebase
  - Inteligência Artificial: Inteligência Artificial, Agentes de IA
- **Projetos Reais:**
  1. **Elo Recibos (Destaque Principal):**
     - Descrição: Aplicativo de gestão de cobranças comunitárias, emissão de recibos e integração térmica Bluetooth.
     - CTAs Reais:
       - Google Play: `https://play.google.com/store/apps/details?id=br.com.elo.manager`
       - App Store: `https://apps.apple.com/br/app/elo-recibos/id6761785683?l=en-GB`
     - Stack: Flutter, Dart, Firebase, CoreBluetooth / ESC/POS
  2. **DriverForza:**
     - Descrição: Projeto web de simulação e experiência automotiva interativa.
     - CTA Real: `https://site-versao-um.vercel.app/`
     - Stack: JavaScript, React, CSS
  3. **Calculadora de IMC:**
     - Descrição: Ferramenta de cálculo de Índice de Massa Corporal com interface limpa e responsiva.
     - CTA Real: `https://app-calc-imc.vercel.app/`
     - Stack: TypeScript, React, Tailwind CSS

## 3. Motion & Microinterações
- Alternância instantânea de tema (claro/escuro) com persistência em `localStorage` e suporte nativo a `prefers-color-scheme`.
- Efeito de profundidade 2.5D suave com transições de hover (150–250ms), elevação sutil e brilho de borda.
- Respeito integral a `prefers-reduced-motion` no CSS.
- Zero layout shifts e zero overflow horizontal em 390px (mobile).
