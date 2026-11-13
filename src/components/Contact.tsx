import { igLink, site, waLink } from "@/data/site";
import { ArrowUpRight, GithubIcon, InstagramIcon, Item, SectionHead, Stagger, WhatsAppIcon } from "./ui";

export function Cta() {
  return (
    <section className="pt-24 md:pt-32" aria-labelledby="cta-titulo">
      <div className="container-x">
        <Stagger>
          <Item>
            <div className="relative overflow-hidden rounded-[28px] border border-blue/30 bg-[linear-gradient(140deg,#1E3A8A_0%,#13265c_40%,#0B1018_100%)] px-6 py-16 text-center md:px-16 md:py-24">
              <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" aria-hidden="true" />
              <div className="animate-float pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-blue/30 blur-[100px]" aria-hidden="true" />
              <div className="animate-float pointer-events-none absolute -bottom-32 -left-20 size-[360px] rounded-full bg-navy blur-[100px] [animation-delay:-6s]" aria-hidden="true" />
              <div className="relative">
                <p className="label text-ice">Vamos tirar do papel</p>
                <h2 id="cta-titulo" className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em]">
                  Seu negócio ainda não tem um site <span className="text-ice">à altura dele?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-[#c3d3ea]">
                  Me conta como funciona o seu negócio e eu te mostro como ele pode aparecer na internet.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn bg-white text-bg hover:bg-ice hover:shadow-[0_10px_40px_-8px_rgba(165,200,255,0.6)]">
                    <WhatsAppIcon className="size-4" /> Falar no WhatsApp
                  </a>
                  <a href={igLink} target="_blank" rel="noopener noreferrer" className="btn border-white/70 text-white hover:border-white hover:bg-white/10">
                    <InstagramIcon className="size-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}

export function Contact() {
  const cards = [
    { href: waLink(), label: "WhatsApp", valor: site.whatsappExibicao, Icon: WhatsAppIcon },
    { href: igLink, label: "Instagram", valor: `@${site.instagram}`, Icon: InstagramIcon },
  ];
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHead label="Contato" center lead="Respondo rápido. Me chama pelo canal que preferir.">
          Vamos conversar sobre o <span className="text-gradient">seu projeto</span>
        </SectionHead>
        <Stagger className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map(({ href, label, valor, Icon }) => (
            <Item key={label} className="min-w-0">
              <a href={href} target="_blank" rel="noopener noreferrer" className="card card-hover group flex items-center gap-5 p-6">
                <span className="grid size-12 place-items-center rounded-2xl border border-blue/30 bg-blue/10 text-blue-light">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{label}</span>
                  <span className="mt-1 block truncate text-lg font-bold">{valor}</span>
                </span>
                <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-light" />
              </a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.nome} · {site.cidade}
        </p>
        <div className="flex items-center gap-4">
          <a href={`https://github.com/${site.github}`} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors duration-300 hover:text-text" aria-label="GitHub">
            <GithubIcon className="size-5" />
          </a>
          <a href={igLink} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors duration-300 hover:text-text" aria-label="Instagram">
            <InstagramIcon className="size-5" />
          </a>
          <a href="#topo" className="font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-text">Topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
