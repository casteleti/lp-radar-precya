# Precya Landing Page

Landing page estática do SaaS **Precya**, voltada para conversão de clínicas de estética, biomédicas estetas, esteticistas e gestoras.

Repositório GitHub:

```text
https://github.com/casteleti/lp-radar-precya.git
```

## Objetivo Do Projeto

O projeto comunica a proposta de valor do Precya: ajudar clínicas e profissionais de estética a entenderem se cada procedimento está realmente dando lucro, antes de conceder descontos ou responder orçamentos.

Objetivos de conversão da LP:

- Teste grátis
- Captura de lead
- Clique para WhatsApp

O projeto foi criado para ser leve, mobile-first e fácil de hospedar. Não existe backend, painel administrativo, banco de dados ou dependência de Node em produção no fluxo estático.

## Stack

- **Vite**: bundler e dev server.
- **React**: interface por componentes.
- **TypeScript**: tipagem da aplicação.
- **Tailwind CSS v4**: design system, tokens e utilitários.
- **ESLint**: validação de qualidade.
- **Prettier**: padronização de formatação.
- **Nginx/Docker**: opção adicional para deploy containerizado.

## Requisitos

- Node.js 20 ou superior recomendado.
- npm.
- Git.

## Como Clonar

```bash
git clone https://github.com/casteleti/lp-radar-precya.git
cd lp-radar-precya
```

## Instalação

```bash
npm install
```

## Rodar Localmente

```bash
npm run dev
```

URL padrão do Vite:

```text
http://localhost:5173
```

## Build De Produção

```bash
npm run build
```

Os arquivos finais são gerados em:

```text
dist/
```

Para testar o build localmente:

```bash
npm run preview
```

URL padrão do preview:

```text
http://localhost:4173
```

## Scripts Disponíveis

```bash
npm run dev
```

Sobe o servidor local de desenvolvimento.

```bash
npm run build
```

Compila TypeScript e gera o build estático em `dist/`.

```bash
npm run preview
```

Serve localmente o conteúdo gerado no build.

```bash
npm run lint
```

Executa ESLint.

```bash
npm run lint:fix
```

Executa ESLint com correções automáticas quando possível.

```bash
npm run format
```

Formata o projeto com Prettier.

```bash
npm run format:check
```

Verifica formatação sem alterar arquivos.

## Arquitetura Geral

O projeto é uma SPA React estática. A página principal é montada em `src/App.tsx`, com seções carregadas de forma preguiçosa via `React.lazy` e `Suspense` para melhorar o carregamento inicial.

Ordem atual da landing page:

1. Header
2. Hero
3. Problema
4. Solução
5. Demonstração
6. Antes e Depois
7. Humanização/Fundador
8. Pricing
9. FAQ
10. CTA final
11. Footer
12. CTA sticky mobile
13. Botão flutuante de WhatsApp

## Estrutura De Pastas

```text
src/
  assets/
    icons/
    images/
    logos/
  components/
    layout/
      Footer.tsx
      Header.tsx
    sections/
      BeforeAfterSection.tsx
      DemoSection.tsx
      FAQSection.tsx
      FinalCTASection.tsx
      FounderSection.tsx
      HeroSection.tsx
      PricingSection.tsx
      ProblemSection.tsx
      SolutionSection.tsx
    tracking/
      TrackingScripts.tsx
    ui/
      Badge.tsx
      BenefitCard.tsx
      BrandLogo.tsx
      ButtonPrimary.tsx
      ButtonSecondary.tsx
      Card.tsx
      Container.tsx
      FAQItem.tsx
      FeatureCard.tsx
      IconWrapper.tsx
      MobileStickyCTA.tsx
      Mockup.tsx
      Motion.tsx
      OptimizedImage.tsx
      PricingCard.tsx
      SectionSubtitle.tsx
      SectionTitle.tsx
      TestimonialCard.tsx
      WhatsAppFloatingButton.tsx
  data/
    landing.ts
    tracking.ts
  hooks/
    useIsMobile.ts
    useRevealOnScroll.ts
  lib/
    cn.ts
    tracking.ts
  pages/
    StyleGuide.tsx
  styles/
    global.css
  App.tsx
  main.tsx
  vite-env.d.ts
```

## Principais Arquivos

`src/App.tsx`

Define a composição da landing page e a ordem das seções.

`src/styles/global.css`

Concentra tokens visuais, paleta, tipografia, sombras, breakpoints, animações e estilos globais.

`src/data/landing.ts`

Centraliza dados reutilizados nas seções, como benefícios, dores, FAQ e itens de pricing.

`src/components/ui`

Contém componentes reutilizáveis do design system.

`src/components/sections`

Contém as seções de negócio da landing page.

`src/components/tracking/TrackingScripts.tsx`

Área preparada para scripts de tracking, sem ativação obrigatória.

`vite.config.ts`

Configuração do Vite. O projeto usa `base: './'` para compatibilidade com hospedagem estática em subpastas ou hospedagem compartilhada.

`Dockerfile` e `nginx.conf`

Configuração opcional para deploy containerizado, por exemplo em Coolify.

## Design System

A identidade visual busca transmitir:

- Clareza
- Segurança
- Inteligência
- Leveza
- Feminilidade sofisticada
- Tecnologia acessível
- Premium acessível

Base visual:

- Roxo como cor principal de ação.
- Fundo off-white/champagne.
- Textos em azul/roxo escuro.
- Verde sage/success para segurança e resultado positivo.
- Sombras leves.
- Bordas suaves.
- Animações discretas.

Tokens principais estão em `src/styles/global.css`.

Componentes base:

- `ButtonPrimary`
- `ButtonSecondary`
- `Badge`
- `Card`
- `Container`
- `SectionTitle`
- `SectionSubtitle`
- `FeatureCard`
- `BenefitCard`
- `FAQItem`
- `PricingCard`
- `IconWrapper`
- `Motion`

## Style Guide

Existe uma página/componente de style guide em:

```text
src/pages/StyleGuide.tsx
```

Ela serve como referência visual dos tokens, botões, cards, badges, tipografia, sombras e componentes. No estado atual da LP, a aplicação renderiza a landing page principal; a style guide permanece disponível no código como apoio para futuras evoluções.

## Responsividade

A página foi pensada com prioridade mobile-first.

Breakpoints considerados no projeto:

- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

O público esperado é majoritariamente mobile, então qualquer alteração deve ser validada principalmente em 390px e 430px.

## Performance

Decisões aplicadas:

- Build estático.
- Sem SSR.
- Sem backend.
- Lazy loading das seções abaixo do hero.
- CSS via Tailwind.
- Assets do build com hash.
- `sourcemap: false` no build.
- `OptimizedImage` preparado para imagens com `loading` e `decoding`.

Antes de finalizar alterações, sempre rodar:

```bash
npm run lint
npm run build
```

## Acessibilidade

Pontos já considerados:

- Estrutura semântica com `header`, `main`, `section` e `footer`.
- Skip link no header.
- Estados de foco visíveis.
- Contraste adequado nos CTAs principais.
- `aria-labelledby` nas seções principais.
- Botões e links com área de toque confortável no mobile.

Ao adicionar novos componentes, manter:

- Heading order coerente.
- Texto alternativo em imagens relevantes.
- Labels/aria labels em elementos interativos sem texto claro.
- Navegação por teclado funcional.

## Tracking

O projeto já possui estrutura preparada para tracking, mas nenhum pixel deve ser ativado sem validação.

Arquivos:

```text
src/components/tracking/TrackingScripts.tsx
src/data/tracking.ts
src/lib/tracking.ts
```

Variáveis opcionais:

```bash
VITE_TRACKING_ENABLED=true
VITE_META_PIXEL_ID=
VITE_GTM_ID=
VITE_GA4_ID=
```

O projeto roda normalmente sem essas variáveis.

## Variáveis De Ambiente

Existe um arquivo de exemplo:

```text
.env.example
```

Não commitar arquivos reais `.env`, `.env.local` ou qualquer segredo.

## Assets E Imagens

Pastas reservadas:

```text
src/assets/images
src/assets/icons
src/assets/logos
```

Boas práticas:

- Preferir WebP ou AVIF.
- Definir dimensões para evitar CLS.
- Usar `alt` em imagens informativas.
- Usar `OptimizedImage` quando fizer sentido.
- Colocar arquivos em `public/` apenas quando precisarem de URL pública fixa.

## Git Flow

Repositório:

```text
https://github.com/casteleti/lp-radar-precya.git
```

Branches usadas:

- `main`: branch principal do código-fonte.
- `develop`: branch de desenvolvimento e evolução contínua.
- `master`: branch usada anteriormente para publicação estática na KingHost, contendo o build final em vez do código-fonte.

Fluxo recomendado para desenvolvimento:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature
```

Depois das alterações:

```bash
npm run lint
npm run build
git status
git add .
git commit -m "tipo: descricao curta"
git push origin feature/nome-da-feature
```

Commits seguem o padrão Conventional Commits:

```text
feat: nova funcionalidade
fix: correção de bug
style: ajuste visual sem mudança de comportamento
copy: ajuste de texto/copy
chore: manutenção ou configuração
deploy: publicação de build
```

## Deploy Estático KingHost

O build final estático fica em `dist/`.

Para deploy manual:

```bash
npm run build
```

Enviar somente o conteúdo de `dist/` para a pasta pública do domínio na KingHost, normalmente:

```text
www/
public_html/
```

Não enviar:

- `node_modules`
- `src`
- arquivos `.ts` ou `.tsx`
- configs de desenvolvimento
- `.env`

Observação importante: em um momento do projeto, a KingHost foi configurada para puxar a branch `master` para `/www/`. Nesse fluxo, a branch `master` deve conter o conteúdo do build estático, não o código-fonte.

## Deploy Containerizado

O projeto também possui:

```text
Dockerfile
nginx.conf
```

Esse caminho gera o build com Node e serve os arquivos finais via Nginx.

Build local da imagem:

```bash
docker build -t precya-lp .
```

Execução local:

```bash
docker run --rm -p 8080:80 precya-lp
```

URL:

```text
http://localhost:8080
```

## Checklist Para Novo Desenvolvedor

1. Clonar o repositório.
2. Rodar `npm install`.
3. Criar branch a partir de `develop`.
4. Rodar `npm run dev`.
5. Validar visualmente em mobile.
6. Fazer alterações pequenas e focadas.
7. Rodar `npm run lint`.
8. Rodar `npm run build`.
9. Commitar com mensagem padronizada.
10. Abrir PR ou enviar a branch conforme combinado.

## Cuidados Importantes

- Não adicionar backend.
- Não adicionar banco de dados.
- Não transformar em WordPress.
- Não migrar para Next.js sem decisão explícita.
- Não instalar bibliotecas sem necessidade clara.
- Não ativar Pixel, GTM, GA4, Hotjar ou Clarity sem aprovação.
- Preservar foco mobile-first.
- Preservar estética premium, leve e sofisticada.
- Evitar visual de ERP, CRM, dashboard corporativo ou fintech agressiva.

## Troubleshooting

Se o servidor local não subir:

```bash
npm install
npm run dev
```

Se a porta `5173` estiver ocupada, o Vite informará outra porta no terminal.

Se o build falhar:

```bash
npm run lint
npm run build
```

Corrija os erros de TypeScript/ESLint antes de publicar.

Se o deploy estático carregar sem estilos ou assets:

- Confirmar que `vite.config.ts` mantém `base: './'`.
- Confirmar que todo o conteúdo de `dist/` foi enviado.
- Confirmar que `assets/` foi enviado junto com `index.html`.

## Status Atual

A landing page está funcional e já passou por refinamentos visuais, incluindo:

- Sistema visual premium.
- Hero refinado.
- Seções de problema e solução com narrativa visual.
- CTA sticky mobile.
- Botão flutuante de WhatsApp.
- Preparação para tracking.
- Build estático compatível com hospedagem compartilhada.
