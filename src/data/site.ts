/*
 * ============================================================
 *  SEUS DADOS — edite tudo por aqui.
 *  Para lançar um projeto novo, copie um bloco { ... } em
 *  `projetos`, cole no topo da lista e edite. Ele aparece no
 *  marquee e no grid automaticamente.
 * ============================================================
 */

export const site = {
  nome: "Davi de Melo Braz",
  nomeCurto: "Davi Braz",
  subtitulo: "Criador de sites e landing pages",
  cidade: "Recife, PE",
  url: "https://davimbraz-del.github.io/davi-de-melo-braz-",
  descricao:
    "Davi de Melo Braz, criador de sites e landing pages em Recife. Páginas sob medida, rápidas e com o WhatsApp a um toque para pequenos negócios.",
  foto: "/img/davi.jpg",
  whatsapp: "5581988130685",
  whatsappExibicao: "(81) 98813-0685",
  whatsappMensagem: "Olá, Davi! Vi seu portfólio e quero conversar sobre um site.",
  instagram: "davimbraz",
  github: "davimbraz-del",
};

export const waLink = (msg = site.whatsappMensagem) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const igLink = `https://instagram.com/${site.instagram}`;

export const beneficios = [
  "Pensado primeiro para o celular",
  "Visitante a um toque do seu WhatsApp",
  "Leve e rápido de carregar",
  "Ajustes depois que o site vai ao ar",
];

export type Projeto = {
  nome: string;
  url: string;
  categoria: string;
  descricao: string;
  bullets: [string, string, string];
  tags: string[];
  imagem: string;
  /** Se definido, o card mostra um slider ANTES/DEPOIS no lugar do print. */
  antesDepois?: { antes: string; depois: string };
};

export const projetos: Projeto[] = [
  {
    nome: "CT LS26 Futevôlei",
    url: "https://davimbraz-del.github.io/CTLS26-SABINO/",
    categoria: "Landing page · Esporte",
    descricao:
      "A página do CT de futevôlei do professor Sabino, no Janga. Reúne metodologia, professores e horários das turmas, e leva o visitante direto para marcar uma aula experimental.",
    bullets: [
      "Aula experimental agendada pelo WhatsApp",
      "Quadro de horários com filtro por nível",
      "Layout pensado primeiro para o celular",
    ],
    tags: ["Landing page", "HTML", "CSS", "JavaScript"],
    imagem: "/img/ct-desktop.jpg",
  },
  {
    nome: "Portfólio Davi Braz",
    url: "https://davimbraz-del.github.io/davi-de-melo-braz-/",
    categoria: "Portfólio · Redesign",
    descricao:
      "Este site. Saí de uma página em HTML puro para um one-page em Next.js com identidade escura em preto e azul, animações e exportação estática.",
    bullets: [
      "Migração de HTML puro para Next.js + TypeScript",
      "Animações com Framer Motion e contadores",
      "SEO, Open Graph e acessibilidade AA",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imagem: "/img/portfolio-depois.jpg",
    antesDepois: { antes: "/img/portfolio-antes.jpg", depois: "/img/portfolio-depois.jpg" },
  },
];

export const numeros = [
  { label: "Sites no ar", valor: projetos.length, sufixo: "" },
  { label: "Adaptado ao celular", valor: 100, sufixo: "%" },
  { label: "Toque até o WhatsApp", valor: 1, sufixo: "" },
  { label: "Tecnologias no stack", valor: 0, sufixo: "" }, // calculado abaixo
  { label: "Primeiro site no ar", valor: 2026, sufixo: "" },
];

export const trajetoria = [
  {
    periodo: "2026 · Atual",
    titulo: "Criador de sites e landing pages",
    instituicao: "Projetos próprios e para clientes",
    descricao:
      "Lancei meu primeiro site para um cliente real, o CT LS26 Futevôlei, do planejamento à publicação.",
    chips: ["HTML", "CSS", "JavaScript", "Next.js", "GitHub Pages"],
  },
  {
    periodo: "Em andamento",
    titulo: "Bacharelado em Ciência da Computação",
    instituicao: "Universidade Católica de Pernambuco (UNICAP)",
    descricao:
      "Base em lógica, algoritmos, estruturas de dados e sistemas digitais, que aplico direto na construção dos sites.",
    chips: ["Algoritmos", "Estruturas de dados", "Sistemas digitais"],
  },
];

export const competencias = [
  { grupo: "Linguagens", itens: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { grupo: "Web", itens: ["Next.js", "React", "Tailwind CSS", "Design responsivo", "SEO"] },
  { grupo: "Ferramentas", itens: ["Git", "GitHub", "VS Code", "GitHub Pages"] },
  {
    grupo: "Conhecimentos",
    itens: ["Lógica de programação", "Algoritmos", "Sistemas digitais", "UX para conversão"],
  },
];

// Conta as tecnologias de Linguagens + Web + Ferramentas.
numeros[3].valor = new Set(competencias.slice(0, 3).flatMap((g) => g.itens)).size;
