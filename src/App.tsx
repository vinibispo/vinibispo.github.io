import {CallToAction} from "@components/CallToAction";
import { Cards } from "@components/Cards";
import { Features } from "@components/Features";
import {Footer} from "@components/Footer";
import { Hero } from "@components/Hero";

export function App() {
  return (
    <>
      <Hero />
      <Features />
      <h1 className="text-center bg-white font-bold text-lg">
        Alguns dos meus projetos
      </h1>
      <Cards />
      <CallToAction />
      <Footer />
    </>
  );
}
