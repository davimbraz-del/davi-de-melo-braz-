"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/data/site";
import { ChatIcon } from "./ui";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? "border-line bg-bg/75 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#topo" className="leading-tight" aria-label={`${site.nome}, voltar ao topo`}>
          <span className="block text-[1.05rem] font-bold tracking-tight">{site.nomeCurto}</span>
          <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">{site.subtitulo}</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted">
            {links.map((l, i) => (
              <li key={l.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-faint" aria-hidden="true">·</span>}
                <a href={l.href} className="rounded-full px-3 py-2 transition-colors duration-300 hover:text-text">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden h-10 px-5 text-sm sm:inline-flex">
            <ChatIcon className="size-4" />
            Falar comigo
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="border-t border-line md:hidden">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                <ChatIcon className="size-4" /> Falar comigo
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
