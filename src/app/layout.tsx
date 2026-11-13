import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/data/site";

const title = `${site.nome} · ${site.subtitulo}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url + "/"),
  title,
  description: site.descricao,
  authors: [{ name: site.nome }],
  keywords: ["criador de sites", "landing page", "Recife", "desenvolvedor", "Next.js", site.nome],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "./",
    siteName: site.nome,
    title,
    description: site.descricao,
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: `${site.nome}, ${site.subtitulo}` }],
  },
  twitter: { card: "summary_large_image", title, description: site.descricao, images: ["og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#07090D", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.nome,
    jobTitle: site.subtitulo,
    url: site.url,
    address: { "@type": "PostalAddress", addressLocality: "Recife", addressRegion: "PE", addressCountry: "BR" },
    alumniOf: "Universidade Católica de Pernambuco",
    sameAs: [`https://instagram.com/${site.instagram}`, `https://github.com/${site.github}`],
  };
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:text-white">
          Pular para o conteúdo
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
