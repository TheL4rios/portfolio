import { Experiences } from '@/components/landing/Experiences';
import { Header } from '@/components/landing/Header';
import {Hero} from '@/components/landing/Hero';
import { Projects } from '@/components/landing/Projects';

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Experiences/>
        <Projects/>
      </main>
    </>
  );
}
