"use client";

import { useState } from "react";
import { asset } from "@/lib";

/** Slider ANTES/DEPOIS: arraste a alça ou use as setas do teclado. */
export default function BeforeAfter({ antes, depois, nome }: { antes: string; depois: string; nome: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] select-none overflow-hidden bg-bg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(depois)} alt={`${nome}, versão nova`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(antes)} alt={`${nome}, versão anterior`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-line bg-bg/80 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted backdrop-blur">Antes</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-blue/40 bg-bg/80 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ice backdrop-blur">Depois</span>

      {/* linha + alça */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-blue shadow-[0_0_16px_rgba(59,130,246,0.9)]" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/90 bg-blue text-white shadow-[0_0_24px_rgba(59,130,246,0.8)]">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparar antes e depois do ${nome}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div className="pointer-events-none absolute inset-0 rounded-none ring-2 ring-inset ring-blue-light opacity-0 peer-focus-visible:opacity-100" />
    </div>
  );
}
