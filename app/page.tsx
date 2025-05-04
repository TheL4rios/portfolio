import { Cta } from "@/components/landing/Cta";
import { Experiences } from "@/components/landing/Experiences";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Projects } from "@/components/landing/Projects";
import { Skills } from "@/components/landing/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-15 pb-15 p-5">
        <Hero />
        <Experiences />
        <Projects />
        <Skills />
        <Cta />
      </main>
    </>
  );
}
