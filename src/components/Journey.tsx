import { competencias, trajetoria, waLink } from "@/data/site";
import { ArrowUpRight, Item, SectionHead, Stagger } from "./ui";

export default function Journey() {
  return (
    <section id="experiencia" className="relative bg-bg-alt py-24 md:py-32">
      <div className="container-x">
        <SectionHead label="Trajetória" lead="Estudante de Ciência da Computação, criando sites para negócios reais e aberto a oportunidades de estágio.">
          Experiência e <span className="text-gradient">formação</span>
        </SectionHead>

        <Stagger as="ul" className="relative ml-1.5 max-w-3xl border-l border-line">
          {trajetoria.map((t) => (
            <Item as="li" key={t.titulo} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-bg-alt bg-blue-light shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_0_18px_rgba(96,165,250,0.8)]" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue-light">{t.periodo}</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">{t.titulo}</h3>
              <p className="mt-1 text-muted">{t.instituicao}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{t.descricao}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.chips.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </Item>
          ))}
        </Stagger>

        <div className="mt-24">
          <Stagger>
            <Item>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Competências</h3>
            </Item>
          </Stagger>
          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {competencias.map((g) => (
              <Item key={g.grupo} className="card card-hover p-6">
                <p className="label text-[0.68rem]">{g.grupo}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.itens.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </Item>
            ))}
          </Stagger>

          <p className="mt-12 text-center text-lg text-muted">
            Tem uma vaga de estágio?{" "}
            <a
              href={waLink("Olá, Davi! Vi seu portfólio e queria conversar sobre uma vaga de estágio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-blue-light underline decoration-blue/40 underline-offset-4 transition-colors duration-300 hover:text-ice"
            >
              Vamos conversar <ArrowUpRight className="size-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
