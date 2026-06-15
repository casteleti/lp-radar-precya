# Precya Landing Page

Landing page estatica para o SaaS Precya, focada em conversao para teste gratis, lead e WhatsApp.

## Objetivo

Criar uma experiencia mobile-first, leve e de alta performance para comunicar a proposta da Precya para clinicas de estetica, biomédicas estetas, esteticistas e gestoras.

O projeto nao possui backend, painel administrativo, banco de dados ou dependencia de Node em producao. O build final gera arquivos estaticos prontos para upload em hospedagem compartilhada KingHost.

## Tecnologias

- Vite
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

O Vite exibira a URL local no terminal, normalmente `http://localhost:5173`.

## Qualidade

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Build

```bash
npm run build
```

Os arquivos finais serao gerados em `dist`.

Para conferir o build:

```bash
npm run preview
```

## Deploy KingHost

1. Rode `npm run build`.
2. Acesse o painel ou FTP da KingHost.
3. Envie somente o conteudo da pasta `dist` para a pasta publica do dominio, geralmente `www`, `public_html` ou a pasta configurada no painel.
4. Nao envie `node_modules`, `src`, arquivos TypeScript ou configs de desenvolvimento.
5. Como o projeto usa `base: './'`, os assets do build ficam com caminhos relativos e funcionam bem em hospedagem compartilhada.

## Estrutura de pastas

```text
src/
  assets/
    images/
    icons/
    logos/
  components/
    layout/
    sections/
    tracking/
    ui/
  data/
  hooks/
  lib/
  pages/
  styles/
  App.tsx
  main.tsx
  vite-env.d.ts
```

## Design system

A tela atual do app renderiza a style guide temporaria em `src/pages/StyleGuide.tsx`.

Base visual:

- Tokens globais em `src/styles/global.css`
- Componentes reutilizaveis em `src/components/ui`
- Motion com Intersection Observer em `src/hooks/useRevealOnScroll.ts` e `src/components/ui/Motion.tsx`
- Fonte: Plus Jakarta Sans via Google Fonts

Use essa tela para validar cores, tipografia, botoes, cards, badges, pricing, FAQ, sombras, radius, espacamento e animacoes antes de construir a landing page final.

## Tracking

Os pontos de tracking estao preparados em:

- `src/components/tracking/TrackingScripts.tsx`
- `src/data/tracking.ts`
- `src/lib/tracking.ts`

Variaveis opcionais:

```bash
VITE_TRACKING_ENABLED=true
VITE_META_PIXEL_ID=
VITE_GTM_ID=
VITE_GA4_ID=
```

O projeto roda sem essas variaveis. Adicione os IDs somente quando estiverem aprovados.

## Imagens

Use `src/assets/images`, `src/assets/icons` e `src/assets/logos` para assets importados pelo React.

Boas praticas:

- Preferir imagens em WebP ou AVIF.
- Definir `width`, `height` e `alt`.
- Usar `OptimizedImage` para manter `loading` e `decoding` consistentes.
- Colocar imagens publicas e estaticas em `public` somente quando precisarem de URL fixa.

## Git flow

- `main`: producao
- `develop`: desenvolvimento

Todo desenvolvimento futuro deve partir de `develop`.

```bash
git checkout develop
git pull origin develop
```
