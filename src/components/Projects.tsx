import { projetos, waLink } from "@/data/site";
import { asset, hostOf } from "@/lib";
import BeforeAfter from "./BeforeAfter";
import { ArrowRight, BrowserBar, CheckIcon, Item, SectionHead, Stagger } from "./ui";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHead label="Projetos" lead="Cada projeto começa com uma conversa sobre o negócio e termina com uma página que trabalha por ele.">
          Sites que já <span className="text-gradient">entreguei</span>
        </SectionHead>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projetos.map((p) => (
            <Item key={p.nome} className="min-w-0">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <BrowserBar url={hostOf(p.url)} />
                {p.antesDepois ? (
                  <BeforeAfter antes={p.antesDepois.antes} depois={p.antesDepois.depois} nome={p.nome} />
                ) : (
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(p.imagem)}
                      alt={`Print da página inicial do site ${p.nome}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blue-light">{p.categoria}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em]">{p.nome}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.descricao}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[0.95rem]">
                        <CheckIcon className="mt-0.5 size-4 text-blue-light" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 self-start pt-7 font-semibold text-blue-light transition-colors duration-300 hover:text-ice"
                  >
                    Ver site ao vivo <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </div>
              </article>
            </Item>
          ))}

          <Item className="md:col-span-2">
            <div className="card flex flex-col items-start justify-between gap-6 border-dashed border-line-hover bg-transparent p-8 md:flex-row md:items-center">
              <div>
                <p className="label">Próximo projeto</p>
                <p className="mt-2 text-xl font-bold tracking-tight">O próximo site daqui pode ser o do seu negócio.</p>
              </div>
              <a href={waLink("Olá, Davi! Quero um site para o meu negócio.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline shrink-0">
                Quero o meu site <ArrowRight className="size-4" />
              </a>
            </div>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
