import { projetos } from "@/data/site";
import { asset, hostOf } from "@/lib";
import { BrowserBar } from "./ui";

export default function Marquee() {
  // Repete a lista até ter itens suficientes para preencher a faixa, depois duplica para o loop.
  const base = Array.from({ length: Math.max(1, Math.ceil(6 / projetos.length)) }, () => projetos).flat();
  const loop = [...base, ...base];

  return (
    <section aria-label="Projetos em destaque" className="relative border-y border-line py-12">
      <div className="marquee-mask group overflow-hidden">
        <ul className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {loop.map((p, i) => {
            const clone = i >= base.length;
            return (
              <li key={i} aria-hidden={clone || undefined} className="w-[300px] shrink-0 sm:w-[360px]">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={clone ? -1 : undefined}
                  className="card card-hover block overflow-hidden"
                >
                  <BrowserBar url={hostOf(p.url)} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(p.imagem)} alt={clone ? "" : `Print do site ${p.nome}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                  <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                    <span className="truncate font-semibold">{p.nome}</span>
                    <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-blue-light">{p.categoria.split("·")[0].trim()}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
