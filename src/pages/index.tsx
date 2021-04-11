import {CallToAction} from "@components/CallToAction";
import {Cards} from "@components/Cards";
import {Features} from "@components/Features";
import {Footer} from "@components/Footer";
import {Hero} from "@components/Hero";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Features />
      <h2 className="text-4xl font-bold text-center bg-white text-gray-800">
        Alguns dos meus projetos
      </h2>
      <Cards />
      <CallToAction />
      <Footer />
    </>
  )
}
