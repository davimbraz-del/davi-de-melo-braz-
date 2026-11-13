import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import { Contact, Cta, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Stats />
        <Projects />
        <Journey />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
