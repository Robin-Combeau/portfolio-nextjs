import About from "@/components/page/About";
import Contact from "@/components/page/Contact";
import Experience from "@/components/page/Experience";
import Footer from "@/components/page/Footer";
import Intro from "@/components/page/Intro";
import Projects from "@/components/page/Projects";
import Skills from "@/components/page/Skills";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
