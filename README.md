
## Recursos da Página
- Hero com animações (Framer Motion) e imagem/banner.
- Vídeo YouTube incorporado (player responsivo `iframe` com `aspect-video`).
- Seções com grid responsivo, cartões de recursos e ilustrações.
- Ajustes de espaçamento mobile: `py`, `gap`, alturas responsivas e margens laterais mínimas.
- Seção “Rolagem Infinita” com ícones e imagem, gap responsivo.
- Página exclusiva, planos e benefícios, e voucher promocional “ACHEIMARINGA30”.
- CTAs que abrem `http://acheicasa.net` em nova aba.
- Favicon e ícones configurados via `metadata.icons`.

## Configurações Importantes
- `next.config.js`:
  - `output: 'export'`: build gera site estático em `out/`.
  - `images.unoptimized: true`: necessário para export estático (usa arquivos de `public` sem pipeline de otimização do Next).
  - `trailingSlash: true`: URLs terminam com `/`.
- `tailwind.config.ts`:
  - `fontFamily.sans`: `['Questrial', 'system-ui', 'sans-serif']`.
  - Animações customizadas (`fade-in`, `slide-up`, `slide-in-right`, `bounce-gentle`).
- `tsconfig.json`:
  - Alias `@/*` mapeado para `./src/*` (não use `@/public/...` — assets devem ser referenciados via `/...`).
- `eslint.config.mjs`:
  - Base `next/core-web-vitals` + TypeScript, com diversas regras relaxadas para o projeto.
- `layout.tsx`:
  - Fonte Questrial via `next/font/google`.
  - `metadata` com `openGraph`, `twitter`, `robots`, `verification` e `icons` no nível superior:
    ```ts
    export const metadata: Metadata = {
      // ...
      icons: { icon: '/logo.jpg', shortcut: '/logo.jpg', apple: '/logo.jpg' },
      // ...
    }
    ```

## Como Rodar
Pré-requisitos:
- Node.js `>= 18.17` (recomendado `>= 20`)
- `npm` ou `pnpm`/`yarn`

Instalação e desenvolvimento:
```bash
npm install
```

```bash
npm run dev
```
- Aplicação roda em `http://localhost:3000/`.

Lint:
```bash
npm run lint
```

## Build e Deploy (Export Estático)
Gerar o site estático:
```bash
npm run build
```
- Saída em `./out/`.

Servir localmente (opcional):
```bash
npx serve out
```

Deploy:
- Qualquer hospedagem estática (Netlify, Vercel com projeto estático, GitHub Pages, S3+CloudFront, Nginx).
- Apenas suba o conteúdo da pasta `out/`.

## Padrões de Código e Boas Práticas
- Imports com alias `@` apenas para arquivos dentro de `src/`:
  ```ts
  import Component from '@/components/Component'
  ```
- Assets em `public/` devem ser referenciados com caminho absoluto:
  - Ex.: `src="/img/banner.webp"` ou via `next/image`.
- Para `next/image` com `fill`, use contêiner `relative` e defina `sizes` apropriado.
- Em export estático, `next/image` usa arquivos como estão (sem otimização), ajuste dimensões e `sizes` para melhor LCP.
- Animações com `framer-motion` (`motion.*`) já aplicadas em diversas seções.

## Imagens, Vídeos e Ícones
- Coloque imagens em `public/img/` e referencie como `/img/...`.
- Vídeo YouTube incorporado com `iframe` usando:
  ```
  https://www.youtube.com/embed/kmDBmbc5-rE
  ```
- Favicon/ícones:
  - Mantidos via `metadata.icons` (`/logo.jpg`).
  - Remova `<link rel="icon" href="/favicon.ico" />` do `<head>` se o arquivo não existir.

## Fonte (Questrial) e Tipografia
- Fonte carregada em `layout.tsx`:
  ```ts
  import { Questrial } from 'next/font/google'
  const questrial = Questrial({ subsets: ['latin'], weight: '400', display: 'swap' })
  <body className={`${questrial.className} antialiased`}>
  ```
- Tailwind `font-sans` aponta para Questrial. Use `className="font-sans"` quando necessário.

## CTAs (Botões/Links) para `acheicasa.net`
- Os botões foram transformados em links externos abrindo em nova aba:
  ```tsx
  <a
    href="http://acheicasa.net"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
  >
    Acessar AcheiCasa.net
    <ArrowRight className="inline-block ml-2 w-5 h-5" />
  </a>
  ```
- Para versões animadas, use `motion.a` com `whileHover`/`whileTap`.

## Acessibilidade e SEO
- `alt` nas imagens e semântica de `section`/`h2` aplicadas.
- `metadata.openGraph`, `metadata.twitter` e `robots.txt`/`sitemap.xml` presentes em `public/`.
- `site.webmanifest` configurado para PWA básico.

## Troubleshooting
- “Module not found: `@/public/...`”:
  - Use `/img/...` (assets de `public/`), pois `@` mapeia para `src/*`.
- Imagens com espaço excessivo no mobile:
  - Use classes responsivas (`py-10 md:py-16 lg:py-20`, `gap-6 md:gap-12`) e ajuste contêineres com alturas responsivas (`h-64 sm:h-80 md:h-[500px]`).
- Export estático sem otimização de imagem:
  - Ajuste manualmente `width/height/sizes` e use formatos otimizados (`webp`).
- Ícones/Favicon:
  - Garanta que o arquivo usado em `metadata.icons` exista em `public/`.

## Comandos Disponíveis
```bash
npm run dev
```
```bash
npm run build
```
```bash
npm run start
```
```bash
npm run lint
```
- Observação: `npm run start` serve um servidor Node para projetos SSR. Como este projeto usa `output: 'export'`, prefira servir o conteúdo de `out/` com um servidor estático.

---
Feito com Next.js, Tailwind e Framer Motion para o AcheiCasa.net. Para dúvidas ou melhorias, abra uma issue ou entre em contato.