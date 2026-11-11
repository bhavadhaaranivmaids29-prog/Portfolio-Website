import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          entry.target.addEventListener("animationend", function onEnd(e) {
            if (e.target !== e.currentTarget) return;
            e.currentTarget.classList.remove("reveal", "in-view");
            e.currentTarget.removeEventListener("animationend", onEnd);
          });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => io.observe(el));

    const header = document.querySelector("header");
    const onScroll = () =>
      header.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    return () => {
      revealEls.forEach((el) => io.unobserve(el));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
