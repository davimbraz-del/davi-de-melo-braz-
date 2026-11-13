# Davi de Melo Braz · Portfólio

One-page em **Next.js + TypeScript + Tailwind CSS + Framer Motion**, com exportação estática.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/
```

## Editar conteúdo

Todos os textos e dados ficam em **`src/data/site.ts`**: nome, WhatsApp, Instagram, projetos,
números, trajetória e competências. Para um projeto novo, copie um bloco em `projetos`
e coloque o print em `public/img/`. Se o projeto tiver `antesDepois`, o card mostra o slider.

## Publicar

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages a cada push na branch principal (`main` ou `claude/wizardly-noether-zr9nx8`, a padrão atual).
Na primeira vez: **Settings → Pages → Source: GitHub Actions**.
