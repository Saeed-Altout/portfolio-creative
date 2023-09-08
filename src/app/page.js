"use client";
import { BlackLayer, Navbar, Settings } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import {
  Clients,
  Contact,
  Footer,
  Hero,
  Projects,
  ProofState,
  Services,
  Skills,
} from "@/layouts";

const Home = () => {
  const { currentMode, setActiveMenu } = useStateContext();

  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : "light"
      } overflow-x-hidden relative`}
    >
      <header>
        <Navbar />
      </header>
      <Settings />
      <BlackLayer />
      <main
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <ProofState />
        <Clients />
        <Contact />
      </main>
      <footer
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
