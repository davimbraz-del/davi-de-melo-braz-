"use client";

import { motion, useReducedMotion } from "framer-motion";
import { beneficios, site, waLink } from "@/data/site";
import { asset } from "@/lib";
import { ArrowRight, CheckIcon, Item, Stagger, WhatsAppIcon } from "./ui";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* fundo: grid + blobs */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_85%)]" aria-hidden="true" />
      <div className="animate-float pointer-events-none absolute -top-40 right-[-10%] size-[560px] rounded-full bg-navy/50 blur-[120px]" aria-hidden="true" />
      <div className="animate-float pointer-events-none absolute bottom-[-20%] left-[-15%] size-[480px] rounded-full bg-navy/30 blur-[120px] [animation-delay:-7s]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        {/* Foto (vem primeiro no mobile) */}
        <motion.div
          className="relative mx-auto w-[min(78vw,340px)] md:order-2 md:w-full md:max-w-[420px]"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-[-14%] rounded-full bg-navy/70 blur-[70px]" aria-hidden="true" />
          <div className="absolute inset-[-4%] rounded-full bg-blue/20 blur-2xl" aria-hidden="true" />
          <div className="bg-signature relative aspect-square rounded-full p-[3px] shadow-[0_30px_80px_-20px_rgba(30,58,138,0.9)]">
            <div className="h-full w-full rounded-full bg-bg p-[6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(site.foto)}
                alt={`Foto de ${site.nome}, de camiseta preta e moletom azul nos ombros`}
                width={800}
                height={800}
                fetchPriority="high"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface/90 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted backdrop-blur md:left-auto md:right-0 md:translate-x-0">
            <span className="text-blue-light">●</span> {site.cidade}
          </div>
        </motion.div>

        {/* Texto */}
        <Stagger className="md:order-1">
          <Item>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-text">
              <span className="relative flex size-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              Disponível para projetos
            </span>
          </Item>
          <Item>
            <p className="label mt-8">Sites e landing pages sob medida</p>
          </Item>
          <Item>
            <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.25rem)] font-extrabold leading-[1.03] tracking-[-0.04em]">
              Presença digital que traz <span className="text-gradient">clientes de verdade</span> pro seu negócio
            </h1>
          </Item>
          <Item>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Eu sou o Davi, estudante de Ciência da Computação na UNICAP. Crio sites e landing pages para pequenos
              negócios de Recife e região: páginas bonitas, rápidas e com o seu WhatsApp a um toque do cliente.
            </p>
          </Item>
          <Item className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos <ArrowRight className="size-4" />
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <WhatsAppIcon className="size-4 text-blue-light" /> WhatsApp
            </a>
          </Item>
          <Item as="div" className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {beneficios.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[0.95rem] text-muted">
                  <span className="grid size-6 place-items-center rounded-full border border-blue/30 bg-blue/10 text-blue-light">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
