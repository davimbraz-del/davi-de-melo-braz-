"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Container que revela os filhos (<Item>) em sequência ao entrar na tela. */
export function Stagger({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" }) {
  const reduce = useReducedMotion();
  const M = as === "ul" ? motion.ul : motion.div;
  return (
    <M
      className={className}
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </M>
  );
}

export function Item({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const M = as === "li" ? motion.li : motion.div;
  return (
    <M className={className} variants={item}>
      {children}
    </M>
  );
}

export function SectionHead({ label, children, lead, center }: { label: string; children: ReactNode; lead?: string; center?: boolean }) {
  return (
    <Stagger className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Item>
        <p className="label mb-4">{label}</p>
      </Item>
      <Item>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">{children}</h2>
      </Item>
      {lead && (
        <Item>
          <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>
        </Item>
      )}
    </Stagger>
  );
}

/* ---------------- Ícones (stroke, 24px) ---------------- */
type IconProps = { className?: string };
const base = "shrink-0";
const svg = (d: ReactNode) =>
  function Icon({ className = "size-5" }: IconProps) {
    return (
      <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {d}
      </svg>
    );
  };

export const ChatIcon = svg(<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z" />);
export const CheckIcon = svg(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const ArrowRight = svg(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUpRight = svg(<path d="M7 17 17 7M8 7h9v9" />);
export const InstagramIcon = svg(
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </>,
);
export const GithubIcon = svg(
  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
);
export function WhatsAppIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.44 9.44 0 1 1 8 4.42M20.1 3.9A11.3 11.3 0 0 0 12.05.6C5.78.6.68 5.7.68 11.97c0 2 .52 3.96 1.52 5.68L.58 23.6l6.08-1.6a11.36 11.36 0 0 0 5.43 1.38h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.04" />
    </svg>
  );
}

export function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-[#0c121a] px-4 py-3">
      <span className="size-2.5 rounded-full bg-[#2A3A52]" />
      <span className="size-2.5 rounded-full bg-[#2A3A52]" />
      <span className="size-2.5 rounded-full bg-[#2A3A52]" />
      <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-bg px-3 py-1 font-mono text-[0.7rem] text-muted">{url}</span>
    </div>
  );
}
