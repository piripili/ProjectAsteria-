import { useEffect, useState } from "react";

import { useAudio } from "./context/AudioContext";

import Loader from "./components/Loader/Loader";
import AmbientAudio from "./components/AmbientAudio/AmbientAudio";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const { enterAsteria } = useAudio();

  const [showLoader, setShowLoader] = useState(true);
  const [isLeavingLoader, setIsLeavingLoader] =
    useState(false);

  const handleEnter = async () => {
    if (isLeavingLoader) return;

    await enterAsteria();
    setIsLeavingLoader(true);

    window.setTimeout(() => {
      setShowLoader(false);
    }, 900);
  };

  useEffect(() => {
    if (showLoader) return;

    const hash = window.location.hash;

    if (!hash) return;

    const timer = window.setTimeout(() => {
      const section = document.querySelector(hash);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [showLoader]);

  if (showLoader) {
    return (
      <Loader
        onEnter={handleEnter}
        isLeaving={isLeavingLoader}
      />
    );
  }

  return (
    <div className="app">
      <Navbar />
      <AmbientAudio />

      <main className="app__main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;