"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { numeros } from "@/data/site";
import { Item, Stagger } from "./ui";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // Anos (ex.: 2026) contam a partir de perto do valor final, para não "rodar" 2 mil números.
  const from = to > 1000 ? to - 26 : 0;
  const [val, setVal] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(from, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, from, to]);

  useEffect(() => {
    if (!reduce) setVal(from);
  }, [reduce, from]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix && <span className="text-blue-light">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Números" className="bg-bg-alt py-16 md:py-20">
      <Stagger as="ul" className="container-x grid grid-cols-2 md:grid-cols-5">
        {numeros.map((n, i) => (
          <Item
            as="li"
            key={n.label}
            className={`flex flex-col gap-3 border-line px-2 py-6 md:px-6 md:py-2 ${i > 0 ? "md:border-l" : "md:pl-0"} ${i % 2 === 1 ? "border-l pl-6" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{n.label}</span>
            <span className="text-[clamp(2.25rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.04em] text-text">
              <Counter to={n.valor} suffix={n.sufixo} />
            </span>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
