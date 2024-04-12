import About from "./components/About";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import Video from "./video/Video";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
